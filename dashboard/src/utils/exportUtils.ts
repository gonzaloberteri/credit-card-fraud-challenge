export interface ExportTransaction {
  id: string;
  transaction_date: string | Date;
  transaction_id?: string | null;
  description: string;
  merchant_name?: string | null;
  merchant_category?: string | null;
  amount: number | string;
  currency: string;
  transaction_type: string;
  status: string;
  audit_flags: Array<{
    flag_type: string;
    severity: string;
    notes?: string | null;
  }>;
  card_name: string;
  card_brand: string;
  last_four_digits: string;
  card_holder_name: string;
  user_name: string;
}

export interface ExportFilters {
  fromDate?: Date | null;
  toDate?: Date | null;
  searchTerm?: string;
  showFlaggedOnly?: boolean;
}

const formatDate = (date: Date | string) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const generateCSVReport = (transactions: ExportTransaction[], filters: ExportFilters) => {
  if (transactions.length === 0) return;

  // CSV headers
  const headers = [
    'Transaction Date',
    'Transaction ID',
    'Description',
    'Merchant Name',
    'Merchant Category',
    'Amount',
    'Currency',
    'Transaction Type',
    'Status',
    'Card Name',
    'Card Brand',
    'Last Four Digits',
    'Card Holder',
    'User',
    'Audit Flags Count',
    'Flag Types',
    'Flag Severities',
    'Flag Notes'
  ];

  // Convert transactions to CSV rows
  const csvRows = transactions.map(transaction => {
    const flagTypes = transaction.audit_flags.map(flag => flag.flag_type).join('; ');
    const flagSeverities = transaction.audit_flags.map(flag => flag.severity).join('; ');
    const flagNotes = transaction.audit_flags.map(flag => flag.notes || '').join('; ');

    return [
      formatDate(transaction.transaction_date),
      transaction.transaction_id || '',
      `"${transaction.description.replace(/"/g, '""')}"`,
      `"${(transaction.merchant_name || '').replace(/"/g, '""')}"`,
      transaction.merchant_category || '',
      transaction.amount,
      transaction.currency,
      transaction.transaction_type,
      transaction.status,
      `"${transaction.card_name.replace(/"/g, '""')}"`,
      transaction.card_brand,
      transaction.last_four_digits,
      `"${transaction.card_holder_name.replace(/"/g, '""')}"`,
      `"${transaction.user_name.replace(/"/g, '""')}"`,
      transaction.audit_flags.length,
      `"${flagTypes.replace(/"/g, '""')}"`,
      `"${flagSeverities.replace(/"/g, '""')}"`,
      `"${flagNotes.replace(/"/g, '""')}"`
    ];
  });

  // Create CSV content
  const csvContent = [headers, ...csvRows]
    .map(row => row.join(','))
    .join('\n');

  // Generate filename with current filters
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
  
  let filename = `financial-audit-report-${dateStr}-${timeStr}`;
  if (filters.fromDate || filters.toDate) {
    const fromStr = filters.fromDate ? filters.fromDate.toISOString().split('T')[0] : 'start';
    const toStr = filters.toDate ? filters.toDate.toISOString().split('T')[0] : 'end';
    filename += `-${fromStr}-to-${toStr}`;
  }
  if (filters.searchTerm) {
    filename += `-search-${filters.searchTerm.replace(/[^a-zA-Z0-9]/g, '-')}`;
  }
  if (filters.showFlaggedOnly) {
    filename += '-flagged-only';
  }
  filename += '.csv';

  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};