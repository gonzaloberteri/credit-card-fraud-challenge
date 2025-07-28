import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HasuraService } from './hasura.service';
import { randomUUID } from 'node:crypto';

interface TransactionData {
  id: string;
  amount: number;
  description: string;
  merchant_name: string;
  merchant_category: string;
  transaction_type: string;
  transaction_date: string;
  credit_card_id: string;
  status: string;
  currency: string;
}

@Injectable()
export class TransactionGeneratorService
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(TransactionGeneratorService.name);
  private transactionCount = 0;
  private intervalId: NodeJS.Timeout | undefined;
  private isEnabled: boolean;

  private readonly CARD_ID = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';

  private readonly REGULAR_MERCHANTS = [
    { name: 'Starbucks Coffee', category: 'Food & Dining' },
    { name: 'Amazon', category: 'Shopping' },
    { name: 'Shell Gas Station', category: 'Gas & Automotive' },
    { name: 'Target', category: 'Shopping' },
    { name: 'McDonalds', category: 'Food & Dining' },
    { name: 'Walmart', category: 'Shopping' },
    { name: 'Netflix', category: 'Entertainment' },
    { name: 'Spotify', category: 'Entertainment' },
    { name: 'Uber', category: 'Transportation' },
    { name: 'CVS Pharmacy', category: 'Health & Medical' },
  ];

  private readonly FRAUDULENT_MERCHANTS = [
    { name: 'Suspicious Online Store', category: 'Shopping' },
    { name: 'Unknown Merchant XYZ', category: 'Other' },
    { name: 'High Risk Vendor', category: 'Shopping' },
    { name: 'Offshore Payment Proc', category: 'Other' },
    { name: 'Fake Electronics Co', category: 'Shopping' },
  ];

  constructor(
    private readonly hasuraService: HasuraService,
    private readonly configService: ConfigService,
  ) {
    const envValue = this.configService.get('ENABLE_TRANSACTION_GENERATOR');
    this.isEnabled = envValue === 'true' || envValue === true;
  }

  async onModuleInit() {
    const envValue = this.configService.get('ENABLE_TRANSACTION_GENERATOR');
    this.logger.log(
      `Transaction generator environment value: ${envValue} (type: ${typeof envValue})`,
    );
    this.logger.log(`Transaction generator isEnabled: ${this.isEnabled}`);

    if (this.isEnabled) {
      this.logger.log('Transaction generator is enabled, starting...');
      this.startGenerating();
    } else {
      this.logger.log(
        'Transaction generator is disabled (set ENABLE_TRANSACTION_GENERATOR=true to enable)',
      );
    }
  }

  onModuleDestroy() {
    if (this.intervalId) {
      this.logger.log('Stopping transaction generation...');
      clearInterval(this.intervalId);
    }
  }

  private generateRegularTransaction(): TransactionData {
    const merchant =
      this.REGULAR_MERCHANTS[
        Math.floor(Math.random() * this.REGULAR_MERCHANTS.length)
      ];
    const amount = -Math.round((Math.random() * 200 + 10) * 100) / 100; // $10-$210

    return {
      id: randomUUID(),
      amount,
      description: `Purchase at ${merchant.name}`,
      merchant_name: merchant.name,
      merchant_category: merchant.category,
      transaction_type: 'purchase',
      transaction_date: new Date().toISOString(),
      credit_card_id: this.CARD_ID,
      status: 'posted',
      currency: 'USD',
    };
  }

  private generateFraudulentTransaction(): TransactionData {
    const merchant =
      this.FRAUDULENT_MERCHANTS[
        Math.floor(Math.random() * this.FRAUDULENT_MERCHANTS.length)
      ];
    const amount = -Math.round((Math.random() * 2000 + 500) * 100) / 100; // $500-$2500 (suspicious amounts)

    return {
      id: randomUUID(),
      amount,
      description: `Suspicious transaction at ${merchant.name}`,
      merchant_name: merchant.name,
      merchant_category: merchant.category,
      transaction_type: 'purchase',
      transaction_date: new Date().toISOString(),
      credit_card_id: this.CARD_ID,
      status: 'posted',
      currency: 'USD',
    };
  }

  private async insertTransaction(transaction: TransactionData): Promise<void> {
    try {
      await this.hasuraService.createTransaction(transaction);
      this.logger.log(
        `Transaction created: ${transaction.merchant_name} - $${transaction.amount} (${this.isFraudulent(transaction) ? 'FRAUDULENT' : 'REGULAR'})`,
      );
    } catch (error) {
      this.logger.error('Error creating transaction:', error);
    }
  }

  private isFraudulent(transaction: TransactionData): boolean {
    return this.FRAUDULENT_MERCHANTS.some(
      (merchant) => merchant.name === transaction.merchant_name,
    );
  }

  private startGenerating(): void {
    this.logger.log(
      `Starting transaction generation for card ID: ${this.CARD_ID}`,
    );
    this.logger.log(
      'Pattern: 1 fraudulent transaction every 3 regular transactions',
    );
    this.logger.log('Interval: Every 10 seconds');

    this.intervalId = setInterval(async () => {
      this.transactionCount++;

      let transaction: TransactionData;

      // Every 4th transaction is fraudulent (1 fraudulent per 3 regular)
      if (this.transactionCount % 4 === 0) {
        transaction = this.generateFraudulentTransaction();
      } else {
        transaction = this.generateRegularTransaction();
      }

      await this.insertTransaction(transaction);
    }, 10000); // 10 seconds
  }

  public stop(): void {
    if (this.intervalId) {
      this.logger.log('Manually stopping transaction generation...');
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public start(): void {
    if (!this.intervalId && this.isEnabled) {
      this.logger.log('Manually starting transaction generation...');
      this.startGenerating();
    }
  }

  public getStatus(): {
    enabled: boolean;
    running: boolean;
    transactionCount: number;
  } {
    return {
      enabled: this.isEnabled,
      running: !!this.intervalId,
      transactionCount: this.transactionCount,
    };
  }
}
