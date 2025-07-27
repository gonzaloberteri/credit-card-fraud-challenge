import { useState } from 'react';
import { useGetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQuery } from '../generated/graphql';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type CreditCard = GetAuditorCreditCardsWithTransactionsQuery['credit_cards'][0];
type Transaction = CreditCard['transactions'][0];

export const AuditorDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Calculate month range for GraphQL query
  const currentMonth = selectedDate ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1) : new Date();
  const nextMonth = selectedDate ? new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1) : new Date();

  const { data, loading, error } = useGetAuditorCreditCardsWithTransactionsQuery({
    variables: {
      currentMonth: currentMonth.toISOString(),
      nextMonth: nextMonth.toISOString(),
    },
  });

  const creditCards = data?.credit_cards || [];

  // Filter cards that have transactions in the selected month
  const cardsWithTransactions = creditCards.filter(card => card.transactions.length > 0);

  // Set initial active tab when data loads
  if (activeTab === null && cardsWithTransactions.length > 0) {
    setActiveTab(cardsWithTransactions[0].id);
  }

  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getTransactionTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'purchase': return '#ef4444';
      case 'payment': return '#22c55e';
      case 'refund': return '#3b82f6';
      case 'fee': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return '#dc2626';
      case 'high': return '#ea580c';
      case 'medium': return '#d97706';
      case 'low': return '#65a30d';
      default: return '#6b7280';
    }
  };

  if (loading) {
    return (
      <div className="auditor-dashboard">
        <div className="loading">Loading auditor dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="auditor-dashboard">
        <div className="error">Error loading data: {error.message}</div>
      </div>
    );
  }

  const activeCard = cardsWithTransactions.find(card => card.id === activeTab);

  return (
    <div className="auditor-dashboard">
      <div className="dashboard-header">
        <h1>Auditor Dashboard</h1>
        <div className="month-selector">
          <label>Month:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
              if (date) {
                setSelectedDate(date);
                setActiveTab(null); // Reset active tab when month changes
              }
            }}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="month-picker"
          />
        </div>
      </div>

      {cardsWithTransactions.length === 0 ? (
        <div className="no-data">
          <p>No credit cards with transactions found for {selectedDate?.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) || 'selected month'}</p>
        </div>
      ) : (
        <div className="cards-container">
          <div className="tabs-header">
            {cardsWithTransactions.map((card) => (
              <button
                key={card.id}
                className={`tab-button ${activeTab === card.id ? 'active' : ''}`}
                onClick={() => setActiveTab(card.id)}
              >
                <div className="card-info">
                  <div className="card-name">{card.card_name}</div>
                  <div className="card-details">
                    {card.card_brand.toUpperCase()} •••• {card.last_four_digits}
                  </div>
                  <div className="cardholder-name">{card.user.full_name || card.user.email}</div>
                  <div className="transaction-count">
                    {card.transactions.length} transaction{card.transactions.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {activeCard && (
            <div className="transactions-content">
              <div className="card-summary">
                <h2>Transactions for {activeCard.card_name}</h2>
                <div className="summary-stats">
                  <div className="stat">
                    <span className="stat-label">Total Transactions:</span>
                    <span className="stat-value">{activeCard.transactions.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Total Amount:</span>
                    <span className="stat-value">
                      {formatCurrency(
                        activeCard.transactions.reduce((sum, t) => sum + t.amount, 0),
                        activeCard.transactions[0]?.currency || 'USD'
                      )}
                    </span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Flagged Transactions:</span>
                    <span className="stat-value">
                      {activeCard.transactions.filter(t => t.audit_flags.length > 0).length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="transactions-table">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Merchant</th>
                      <th>Amount</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Flags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCard.transactions.map((transaction) => (
                      <tr key={transaction.id} className="transaction-row">
                        <td className="date-cell">
                          {formatDate(transaction.transaction_date)}
                        </td>
                        <td className="description-cell">
                          <div className="transaction-description">
                            {transaction.description}
                          </div>
                          {transaction.transaction_id && (
                            <div className="transaction-id">
                              ID: {transaction.transaction_id}
                            </div>
                          )}
                        </td>
                        <td className="merchant-cell">
                          <div className="merchant-name">
                            {transaction.merchant_name || 'N/A'}
                          </div>
                          {transaction.merchant_category && (
                            <div className="merchant-category">
                              {transaction.merchant_category}
                            </div>
                          )}
                        </td>
                        <td className="amount-cell">
                          <span 
                            className="amount"
                            style={{ 
                              color: transaction.amount < 0 ? '#22c55e' : '#ef4444' 
                            }}
                          >
                            {formatCurrency(transaction.amount, transaction.currency)}
                          </span>
                        </td>
                        <td className="type-cell">
                          <span 
                            className="transaction-type"
                            style={{ 
                              color: getTransactionTypeColor(transaction.transaction_type) 
                            }}
                          >
                            {transaction.transaction_type}
                          </span>
                        </td>
                        <td className="status-cell">
                          <span className={`status-badge status-${transaction.status.toLowerCase()}`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="flags-cell">
                          {transaction.audit_flags.length > 0 ? (
                            <div className="flags-list">
                              {transaction.audit_flags.map((flag) => (
                                <div 
                                  key={flag.id} 
                                  className="flag-item"
                                  style={{ 
                                    borderLeftColor: getSeverityColor(flag.severity) 
                                  }}
                                >
                                  <div className="flag-type">{flag.flag_type}</div>
                                  <div className="flag-severity">{flag.severity}</div>
                                  <div className="flag-status">{flag.status}</div>
                                  {flag.notes && (
                                    <div className="flag-notes">{flag.notes}</div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="no-flags">No flags</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        .auditor-dashboard {
          padding: 24px;
          background: #0f172a;
          min-height: 100vh;
          color: #f1f5f9;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding: 24px;
          background: #1e293b;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          border: 1px solid #334155;
        }

        .dashboard-header h1 {
          margin: 0;
          color: #f1f5f9;
          font-size: 28px;
          font-weight: 600;
        }

        .month-selector {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .month-selector label {
          color: #cbd5e1;
          font-weight: 500;
        }

        .month-selector input {
          padding: 8px 12px;
          border: 1px solid #334155;
          border-radius: 6px;
          background: #1e293b;
          color: #f1f5f9;
          font-size: 14px;
        }

        .loading, .error, .no-data {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
          color: #94a3b8;
          font-size: 18px;
        }

        .error {
          color: #ef4444;
        }

        .cards-container {
          background: #1e293b;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #334155;
        }

        .tabs-header {
          display: flex;
          flex-wrap: wrap;
          border-bottom: 1px solid #334155;
          background: #0f172a;
        }

        .tab-button {
          padding: 16px 20px;
          border: none;
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 3px solid transparent;
          min-width: 200px;
          text-align: left;
        }

        .tab-button:hover {
          background: #1e293b;
          color: #f1f5f9;
        }

        .tab-button.active {
          background: #1e293b;
          color: #f1f5f9;
          border-bottom-color: #3b82f6;
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-name {
          font-weight: 600;
          font-size: 14px;
        }

        .card-details {
          font-size: 12px;
          color: #64748b;
          font-family: monospace;
        }

        .cardholder-name {
          font-size: 12px;
          color: #cbd5e1;
        }

        .transaction-count {
          font-size: 11px;
          color: #64748b;
        }

        .transactions-content {
          padding: 24px;
        }

        .card-summary {
          margin-bottom: 24px;
        }

        .card-summary h2 {
          margin: 0 0 16px 0;
          color: #f1f5f9;
          font-size: 20px;
          font-weight: 600;
        }

        .summary-stats {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 600;
          color: #f1f5f9;
        }

        .transactions-table {
          overflow-x: auto;
          border-radius: 8px;
          border: 1px solid #334155;
        }

        .transactions-table table {
          width: 100%;
          border-collapse: collapse;
          background: #1e293b;
        }

        .transactions-table th {
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          color: #cbd5e1;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #334155;
          background: #0f172a;
        }

        .transactions-table td {
          padding: 12px 16px;
          border-bottom: 1px solid #334155;
          vertical-align: top;
        }

        .transaction-row:hover {
          background: #334155;
        }

        .date-cell {
          min-width: 100px;
          font-family: monospace;
          font-size: 13px;
          color: #cbd5e1;
        }

        .description-cell {
          min-width: 200px;
        }

        .transaction-description {
          font-weight: 500;
          color: #f1f5f9;
          margin-bottom: 4px;
        }

        .transaction-id {
          font-size: 11px;
          color: #64748b;
          font-family: monospace;
        }

        .merchant-cell {
          min-width: 150px;
        }

        .merchant-name {
          color: #f1f5f9;
          margin-bottom: 4px;
        }

        .merchant-category {
          font-size: 11px;
          color: #94a3b8;
        }

        .amount-cell {
          min-width: 100px;
          text-align: right;
        }

        .amount {
          font-weight: 600;
          font-family: monospace;
          font-size: 14px;
        }

        .type-cell {
          min-width: 80px;
        }

        .transaction-type {
          font-weight: 500;
          text-transform: capitalize;
          font-size: 13px;
        }

        .status-cell {
          min-width: 80px;
        }

        .status-badge {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status-posted {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .status-pending {
          background: rgba(251, 191, 36, 0.1);
          color: #fbbf24;
        }

        .status-cancelled {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .flags-cell {
          min-width: 200px;
        }

        .flags-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .flag-item {
          padding: 8px 12px;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 4px;
          border-left: 3px solid;
          font-size: 11px;
        }

        .flag-type {
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 2px;
          text-transform: capitalize;
        }

        .flag-severity {
          color: #94a3b8;
          margin-bottom: 2px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .flag-status {
          color: #cbd5e1;
          margin-bottom: 4px;
          text-transform: capitalize;
        }

        .flag-notes {
          color: #e2e8f0;
          font-style: italic;
        }

        .no-flags {
          color: #64748b;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .auditor-dashboard {
            padding: 16px;
          }

          .dashboard-header {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }

          .summary-stats {
            flex-direction: column;
            gap: 12px;
          }

          .transactions-table {
            font-size: 12px;
          }

          .tab-button {
            min-width: auto;
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
};