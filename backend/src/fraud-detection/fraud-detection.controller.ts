import { Controller, Post, Body, Logger, UseGuards } from '@nestjs/common';
import {
  FraudDetectionService,
  TransactionData,
  FraudDetectionResult,
} from './fraud-detection.service';
import { HasuraActionsGuard } from '../hasura-actions.guard';

export interface HasuraEventPayload {
  event: {
    session_variables: Record<string, string>;
    op: 'INSERT' | 'UPDATE' | 'DELETE';
    data: {
      old: any;
      new: any;
    };
  };
  created_at: string;
  id: string;
  delivery_info: {
    max_retries: number;
    current_retry: number;
  };
  trigger: {
    name: string;
  };
  table: {
    schema: string;
    name: string;
  };
}

@Controller('fraud-detection')
@UseGuards(HasuraActionsGuard)
export class FraudDetectionController {
  private readonly logger = new Logger(FraudDetectionController.name);

  constructor(private fraudDetectionService: FraudDetectionService) {}

  @Post('analyze-transaction')
  async analyzeTransaction(
    @Body() payload: HasuraEventPayload,
  ): Promise<{ success: boolean; result?: FraudDetectionResult }> {
    try {
      this.logger.log(`Received transaction event: ${payload.id}`);

      if (payload.event.op !== 'INSERT') {
        this.logger.log('Ignoring non-INSERT event');
        return { success: true };
      }

      const transactionData = payload.event.data.new as TransactionData;

      if (!transactionData) {
        this.logger.error('No transaction data in payload');
        return { success: false };
      }

      this.logger.log(`Analyzing transaction ${transactionData.id}`);

      const result =
        await this.fraudDetectionService.analyzeTransaction(transactionData);

      if (result.isSuspicious) {
        this.logger.warn(
          `Suspicious transaction detected: ${transactionData.id} - ${result.reason}`,
        );
        await this.fraudDetectionService.createAuditFlag(
          transactionData.id,
          result,
        );
      } else {
        this.logger.log(
          `Transaction ${transactionData.id} passed fraud checks`,
        );
      }

      return { success: true, result };
    } catch (error) {
      this.logger.error('Error analyzing transaction:', error);
      return { success: false };
    }
  }

  @Post('webhook-test')
  async testWebhook(
    @Body() payload: any,
  ): Promise<{ success: boolean; received: any }> {
    this.logger.log('Test webhook received:', JSON.stringify(payload, null, 2));
    return { success: true, received: payload };
  }
}
