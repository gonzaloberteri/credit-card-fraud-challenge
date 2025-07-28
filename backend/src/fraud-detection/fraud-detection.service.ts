import { Injectable, Logger } from '@nestjs/common';
import { HasuraService } from '../services/hasura.service';

export interface TransactionData {
  id: string;
  amount: number;
  currency: string;
  description: string;
  merchant_name?: string;
  merchant_category?: string;
  transaction_date: string;
  transaction_type: string;
  credit_card_id: string;
}

export interface FraudDetectionResult {
  isSuspicious: boolean;
  flagType: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  reason: string;
  confidence: number;
}

@Injectable()
export class FraudDetectionService {
  private readonly logger = new Logger(FraudDetectionService.name);

  constructor(private hasuraService: HasuraService) {}

  async analyzeTransaction(
    transaction: TransactionData,
  ): Promise<FraudDetectionResult> {
    this.logger.log(`Analyzing transaction ${transaction.id} for fraud`);

    const checks = [
      this.checkHighAmount(transaction),
      this.checkUnusualMerchant(transaction),
      this.checkSuspiciousDescription(transaction),
      this.checkWeekendHighAmount(transaction),
      this.checkMultipleTransactions(transaction),
    ];

    const suspiciousChecks = checks.filter((check) => check.isSuspicious);

    if (suspiciousChecks.length === 0) {
      return {
        isSuspicious: false,
        flagType: 'approved',
        severity: 'low',
        reason: 'Transaction passed all fraud checks',
        confidence: 0.95,
      };
    }

    const highestSeverityCheck = suspiciousChecks.reduce((highest, current) =>
      this.getSeverityScore(current.severity) >
      this.getSeverityScore(highest.severity)
        ? current
        : highest,
    );

    return highestSeverityCheck;
  }

  private checkHighAmount(transaction: TransactionData): FraudDetectionResult {
    const amount = Math.abs(transaction.amount);

    if (amount > 10000) {
      return {
        isSuspicious: true,
        flagType: 'high_amount',
        severity: 'critical',
        reason: `Extremely high transaction amount: $${amount}`,
        confidence: 0.9,
      };
    }

    if (amount > 5000) {
      return {
        isSuspicious: true,
        flagType: 'high_amount',
        severity: 'high',
        reason: `High transaction amount: $${amount}`,
        confidence: 0.8,
      };
    }

    return {
      isSuspicious: false,
      flagType: 'approved',
      severity: 'low',
      reason: 'Amount within normal range',
      confidence: 0.95,
    };
  }

  private checkUnusualMerchant(
    transaction: TransactionData,
  ): FraudDetectionResult {
    if (!transaction.merchant_name) {
      return {
        isSuspicious: false,
        flagType: 'approved',
        severity: 'low',
        reason: 'No merchant name to analyze',
        confidence: 0.5,
      };
    }

    const suspiciousMerchants = [
      'unknown merchant',
      'temp auth',
      'pending',
      'cash advance',
      'atm withdrawal',
    ];

    const merchantLower = transaction.merchant_name.toLowerCase();
    const isSuspicious = suspiciousMerchants.some((merchant) =>
      merchantLower.includes(merchant),
    );

    if (isSuspicious) {
      return {
        isSuspicious: true,
        flagType: 'unusual_merchant',
        severity: 'medium',
        reason: `Potentially suspicious merchant: ${transaction.merchant_name}`,
        confidence: 0.7,
      };
    }

    return {
      isSuspicious: false,
      flagType: 'approved',
      severity: 'low',
      reason: 'Merchant appears legitimate',
      confidence: 0.8,
    };
  }

  private checkSuspiciousDescription(
    transaction: TransactionData,
  ): FraudDetectionResult {
    const suspiciousKeywords = [
      'test',
      'temp',
      'unknown',
      'suspicious',
      'pending authorization',
      'refund pending',
      'chargeback',
    ];

    const descriptionLower = transaction.description.toLowerCase();
    const hasSuspiciousKeyword = suspiciousKeywords.some((keyword) =>
      descriptionLower.includes(keyword),
    );

    if (hasSuspiciousKeyword) {
      return {
        isSuspicious: true,
        flagType: 'suspicious',
        severity: 'medium',
        reason: `Suspicious transaction description: ${transaction.description}`,
        confidence: 0.7,
      };
    }

    return {
      isSuspicious: false,
      flagType: 'approved',
      severity: 'low',
      reason: 'Description appears normal',
      confidence: 0.8,
    };
  }

  private checkWeekendHighAmount(
    transaction: TransactionData,
  ): FraudDetectionResult {
    const transactionDate = new Date(transaction.transaction_date);
    const dayOfWeek = transactionDate.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const amount = Math.abs(transaction.amount);

    if (isWeekend && amount > 2000) {
      return {
        isSuspicious: true,
        flagType: 'suspicious',
        severity: 'medium',
        reason: `High amount transaction on weekend: $${amount}`,
        confidence: 0.6,
      };
    }

    return {
      isSuspicious: false,
      flagType: 'approved',
      severity: 'low',
      reason: 'Weekend transaction pattern normal',
      confidence: 0.8,
    };
  }

  private checkMultipleTransactions(
    transaction: TransactionData,
  ): FraudDetectionResult {
    // This would require checking against recent transactions from the same card
    // For now, we'll implement a basic check
    const transactionHour = new Date(transaction.transaction_date).getHours();
    const amount = Math.abs(transaction.amount);

    // Suspicious if high amount during late night hours
    if ((transactionHour < 6 || transactionHour > 23) && amount > 1000) {
      return {
        isSuspicious: true,
        flagType: 'suspicious',
        severity: 'medium',
        reason: `High amount transaction during unusual hours: ${transactionHour}:00`,
        confidence: 0.65,
      };
    }

    return {
      isSuspicious: false,
      flagType: 'approved',
      severity: 'low',
      reason: 'Transaction timing appears normal',
      confidence: 0.8,
    };
  }

  private getSeverityScore(severity: string): number {
    const scores = {
      low: 1,
      medium: 2,
      high: 3,
      critical: 4,
    };
    return scores[severity] || 0;
  }

  async createAuditFlag(
    transactionId: string,
    result: FraudDetectionResult,
  ): Promise<void> {
    if (!result.isSuspicious) {
      return;
    }

    try {
      this.logger.log(
        `Creating audit flag for transaction ${transactionId}: ${result.flagType}`,
      );

      await this.hasuraService.createAuditFlag({
        transaction_id: transactionId,
        flag_type: result.flagType,
        severity: result.severity,
        notes: `Automated fraud detection: ${result.reason} (Confidence: ${result.confidence})`,
      });
    } catch (error) {
      this.logger.error(
        `Failed to create audit flag for transaction ${transactionId}:`,
        error,
      );
      throw error;
    }
  }
}
