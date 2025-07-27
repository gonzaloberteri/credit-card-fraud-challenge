import { useState } from 'react';
import { useAuth, SignInButton, UserButton } from '@clerk/clerk-react';
import { useGetAuditorCreditCardsWithTransactionsQuery, GetAuditorCreditCardsWithTransactionsQuery } from '../generated/graphql';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type CreditCard = GetAuditorCreditCardsWithTransactionsQuery['credit_cards'][0];
type Transaction = CreditCard['transactions'][0];

export const RealAuditorDashboard = () => {
  const { isSignedIn, isLoaded } = useAuth();
  
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Calculate month range for GraphQL query
  const currentMonth = selectedDate ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1) : new Date();
  const nextMonth = selectedDate ? new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1) : new Date();

  // Always call the GraphQL hook, but skip if not signed in
  const { data, loading, error } = useGetAuditorCreditCardsWithTransactionsQuery({
    variables: {
      currentMonth: currentMonth.toISOString(),
      nextMonth: nextMonth.toISOString(),
    },
    skip: !isSignedIn, // Skip query if not authenticated
  });

  // Show sign-in if user is not authenticated
  if (!isSignedIn) {
    return (
      <div className="p-6 bg-slate-900 min-h-screen text-slate-100 font-sans">
        <div className="flex flex-col items-center justify-center h-96 text-center gap-6">
          <h1 className="text-slate-100 text-4xl font-semibold m-0">Financial Audit Dashboard</h1>
          <p className="text-slate-400 text-lg m-0">Please sign in to access the auditor dashboard</p>
          <SignInButton mode="modal">
            <button className="px-6 py-3 bg-blue-600 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-colors duration-200 hover:bg-blue-700">Sign In</button>
          </SignInButton>
        </div>
      </div>
    );
  }

  const creditCards = data?.credit_cards || [];

  // Filter cards that have transactions in the selected month
  const cardsWithTransactions = creditCards.filter(card => card.transactions.length > 0);

  // Set initial active tab when data loads
  if (activeTab === null && cardsWithTransactions.length > 0) {
    setActiveTab(cardsWithTransactions[0].id);
  }

  const formatCurrency = (amount: any, currency: string = 'USD') => {
    const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(Math.abs(numAmount));
  };

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
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

  const getCardIcon = (cardBrand: string) => {
    const brand = cardBrand.toLowerCase();
    switch (brand) {
      case 'american express':
      case 'amex':
        return '/amex-gold.avif';
      case 'capital one':
        return '/capital-one.avif';
      default:
        return '/mastercard.png';
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-slate-900 min-h-screen text-slate-100 font-sans">
        <div className="flex justify-center items-center h-96 text-slate-400 text-lg">Loading auditor dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-slate-900 min-h-screen text-slate-100 font-sans">
        <div className="flex justify-center items-center h-96 text-red-400 text-lg">Error loading data: {error.message}</div>
      </div>
    );
  }

  const activeCard = cardsWithTransactions.find(card => card.id === activeTab);

  return (
    <div className="p-4 md:p-6 bg-slate-900 min-h-screen text-slate-100 font-sans">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 p-4 md:p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700 gap-4 md:gap-0">
        <h1 className="m-0 text-slate-100 text-2xl md:text-3xl font-semibold">Auditor Dashboard</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <label className="text-slate-300 font-medium">Month:</label>
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
              className="px-3 py-2 border border-slate-600 rounded-md bg-slate-800 text-slate-100 text-sm"
            />
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {cardsWithTransactions.length === 0 ? (
        <div className="flex justify-center items-center h-96 text-slate-400 text-lg">
          <p>No credit cards with transactions found for {selectedDate?.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) || 'selected month'}</p>
        </div>
      ) : (
        <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-600">
          <div className="flex flex-wrap border-b border-slate-600 bg-slate-900">
            {cardsWithTransactions.map((card) => (
              <button
                key={card.id}
                className={`p-4 border-none bg-transparent text-slate-400 cursor-pointer transition-all duration-200 border-b-4 border-transparent min-w-0 md:min-w-52 flex-1 md:flex-none text-left hover:bg-slate-800 hover:text-slate-100 ${
                  activeTab === card.id ? 'bg-slate-800 text-slate-100 border-b-blue-500' : ''
                }`}
                onClick={() => setActiveTab(card.id)}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={getCardIcon(card.card_brand)} 
                    alt={`${card.card_brand} card`}
                    className="w-12 h-8 rounded-md object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="font-semibold text-sm">{card.card_name}</div>
                    <div className="text-xs text-slate-500 font-mono">
                      {card.card_brand.toUpperCase()} •••• {card.last_four_digits}
                    </div>
                    <div className="text-xs text-slate-300">{card.user.full_name || card.user.email}</div>
                    <div className="text-xs text-slate-500">
                      {card.transactions.length} transaction{card.transactions.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {activeCard && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="m-0 mb-4 text-slate-100 text-xl font-semibold">Transactions for {activeCard.card_name}</h2>
                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Total Transactions:</span>
                    <span className="text-lg font-semibold text-slate-100">{activeCard.transactions.length}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Total Amount:</span>
                    <span className="text-lg font-semibold text-slate-100">
                      {formatCurrency(
                        activeCard.transactions.reduce((sum, t) => sum + Math.abs(parseFloat(t.amount.toString())), 0),
                        activeCard.transactions[0]?.currency || 'USD'
                      )}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Flagged Transactions:</span>
                    <span className="text-lg font-semibold text-slate-100">
                      {activeCard.transactions.filter(t => t.audit_flags.length > 0).length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-lg border border-slate-600 text-xs md:text-sm">
                <table className="w-full border-collapse bg-slate-800">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-slate-300 text-xs uppercase tracking-wider border-b border-slate-600 bg-slate-900">Date</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-300 text-xs uppercase tracking-wider border-b border-slate-600 bg-slate-900">Description</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-300 text-xs uppercase tracking-wider border-b border-slate-600 bg-slate-900">Merchant</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-300 text-xs uppercase tracking-wider border-b border-slate-600 bg-slate-900">Amount</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-300 text-xs uppercase tracking-wider border-b border-slate-600 bg-slate-900">Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-300 text-xs uppercase tracking-wider border-b border-slate-600 bg-slate-900">Status</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-300 text-xs uppercase tracking-wider border-b border-slate-600 bg-slate-900">Flags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCard.transactions.map((transaction) => {
                      const amount = parseFloat(transaction.amount.toString());
                      return (
                        <tr key={transaction.id} className="hover:bg-slate-700">
                          <td className="px-4 py-3 border-b border-slate-600 align-top min-w-24 font-mono text-sm text-slate-300">
                            {formatDate(transaction.transaction_date)}
                          </td>
                          <td className="px-4 py-3 border-b border-slate-600 align-top min-w-48">
                            <div className="font-medium text-slate-100 mb-1">
                              {transaction.description}
                            </div>
                            {transaction.transaction_id && (
                              <div className="text-xs text-slate-500 font-mono">
                                ID: {transaction.transaction_id}
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-3 border-b border-slate-600 align-top min-w-36">
                            <div className="text-slate-100 mb-1">
                              {transaction.merchant_name || 'N/A'}
                            </div>
                            {transaction.merchant_category && (
                              <div className="text-xs text-slate-400">
                                {transaction.merchant_category}
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-3 border-b border-slate-600 align-top min-w-24 text-right">
                            <span 
                              className={`font-semibold font-mono text-sm ${amount < 0 ? 'text-red-400' : 'text-green-400'}`}
                            >
                              {amount < 0 ? '-' : '+'}
                              {formatCurrency(amount, transaction.currency)}
                            </span>
                          </td>
                          <td className="px-4 py-3 border-b border-slate-600 align-top min-w-20">
                            <span 
                              className="font-medium capitalize text-sm"
                              style={{ 
                                color: getTransactionTypeColor(transaction.transaction_type) 
                              }}
                            >
                              {transaction.transaction_type}
                            </span>
                          </td>
                          <td className="px-4 py-3 border-b border-slate-600 align-top min-w-20">
                            <span 
                              className={`px-2 py-1 rounded text-xs font-medium uppercase tracking-wider ${
                                transaction.status.toLowerCase() === 'posted' 
                                  ? 'bg-green-900/20 text-green-400'
                                  : transaction.status.toLowerCase() === 'pending'
                                  ? 'bg-yellow-900/20 text-yellow-400'
                                  : transaction.status.toLowerCase() === 'cancelled'
                                  ? 'bg-red-900/20 text-red-400'
                                  : 'bg-slate-700 text-slate-300'
                              }`}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 border-b border-slate-600 align-top min-w-48">
                            {transaction.audit_flags.length > 0 ? (
                              <div className="flex flex-col gap-2">
                                {transaction.audit_flags.map((flag) => (
                                  <div 
                                    key={flag.id} 
                                    className="px-3 py-2 bg-blue-900/10 rounded border-l-4 text-xs"
                                    style={{ 
                                      borderLeftColor: getSeverityColor(flag.severity) 
                                    }}
                                  >
                                    <div className="font-semibold text-slate-100 mb-0.5 capitalize">{flag.flag_type}</div>
                                    <div className="text-slate-400 mb-0.5 uppercase tracking-wider">{flag.severity}</div>
                                    <div className="text-slate-300 mb-1 capitalize">{flag.status}</div>
                                    {flag.notes && (
                                      <div className="text-slate-200 italic">{flag.notes}</div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-slate-500 text-xs">No flags</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};