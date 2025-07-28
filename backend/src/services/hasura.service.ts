import { Injectable, Logger } from '@nestjs/common';
import {
  InjectProfileGraphQLClient,
  ProfileGqlSdk,
} from '../graphql/graphql-client.module';

export interface CreateAuditFlagInput {
  transaction_id: string;
  flag_type: string;
  notes?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  auditor_id?: string;
}

@Injectable()
export class HasuraService {
  private readonly logger = new Logger(HasuraService.name);

  constructor(
    @InjectProfileGraphQLClient() private profileSdk: ProfileGqlSdk,
  ) {}

  async createAuditFlag(input: CreateAuditFlagInput) {
    try {
      this.logger.log(
        `Creating audit flag for transaction: ${input.transaction_id}`,
      );

      // Use existing auditor for automated fraud detection
      const systemAuditorId = '22222222-2222-2222-2222-222222222222'; // jane.auditor@example.com

      const result = await this.profileSdk.InsertAuditFlag({
        input: {
          transaction_id: input.transaction_id,
          auditor_id: input.auditor_id || systemAuditorId,
          flag_type: input.flag_type,
          notes: input.notes,
          severity: input.severity,
          status: 'open',
        },
      });

      this.logger.log(
        `Audit flag created with ID: ${result.insert_audit_flags_one?.id}`,
      );
      return result.insert_audit_flags_one;
    } catch (error) {
      this.logger.error(`Failed to create audit flag:`, error);
      throw error;
    }
  }

  async createTransaction(transaction: any) {
    try {
      this.logger.log(`Creating transaction: ${transaction.description}`);

      const result = await this.profileSdk.InsertTransaction({
        input: transaction,
      });

      this.logger.log(
        `Transaction created with ID: ${result.insert_transactions_one?.id}`,
      );
      return result.insert_transactions_one;
    } catch (error) {
      this.logger.error(`Failed to create transaction:`, error);
      throw error;
    }
  }
}
