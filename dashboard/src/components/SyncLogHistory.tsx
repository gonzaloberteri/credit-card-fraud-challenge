import { useGetActionLogsSubscription } from "../generated/graphql";

interface ActionLog {
  id: string;
  type: string;
  date: Date;
  provider: string;
  extra_data?: unknown;
}

export const SyncLogHistory = () => {
  const { data, loading, error } = useGetActionLogsSubscription();

  const logs: ActionLog[] = data?.action_logs || [];

  const formatDateTime = (dateString: Date): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) {
      return "just now";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const getProviderInfo = (provider: string) => {
    const sourceName = provider.toLowerCase();

    let displayName = sourceName.charAt(0).toUpperCase() + sourceName.slice(1);
    let logoUrl = "";

    switch (sourceName.toLowerCase()) {
      case "hint":
        displayName = "Hint";
        logoUrl = "https://www.hint.com/hubfs/Hint-symbol-rgb-g%20(1).png";
        break;
      case "elation":
        displayName = "Elation";
        logoUrl =
          "https://www.elationhealth.com/wp-content/uploads/2024/08/Copy-of-icon_logo_color_path-4-80x80.webp";
        break;
      case "dialpad":
        displayName = "Dialpad";
        logoUrl = "https://www.dialpad.com/favicon.ico";
        break;
      default:
        displayName = "Unknown";
        logoUrl = "";
    }

    return { displayName, logoUrl };
  };

  const getSemanticActionMessage = (action: string, providerName: string) => {
    const provider = providerName.toLowerCase();
    const boldProvider = <strong>{providerName}</strong>;

    switch (action.toLowerCase().replace("user_", "").replace("_from_webhook", "").replace("_from_api", "")) {
      case "updated":
        switch (provider) {
          case "hint":
            return <>Patient profile updated from {boldProvider}</>;
          case "elation":
            return <>Patient profile updated from {boldProvider} EHR</>;
          case "dialpad":
            return <>Patient profile updated from {boldProvider}</>;
          default:
            return "Patient profile updated";
        }
      case "created":
      case "fetched":
        switch (provider) {
          case "hint":
            return <>Patient profile synchronized from {boldProvider}</>;
          case "elation":
            return <>Patient profile synchronized from {boldProvider} EHR</>;
          case "dialpad":
            return <>Patient profile synchronized from {boldProvider}</>;
          default:
            return "Patient synchronized";
        }
      case "deleted":
        switch (provider) {
          case "hint":
            return <>Patient removed from {boldProvider}</>;
          case "elation":
            return <>Patient removed from {boldProvider} EHR</>;
          case "dialpad":
            return <>Patient removed from {boldProvider}</>;
          default:
            return "Patient removed";
        }
      default:
        return `${
          action.charAt(0).toUpperCase() + action.slice(1)
        } action performed`;
    }
  };

  if (loading) {
    return (
      <div className="sync-log-history">
        <div className="loading">
          <div className="loading-spinner"></div>
          <span>Loading sync history...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sync-log-history">
        <div className="error-message">
          <span>Error loading sync history: {error.message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="sync-log-history">
      <div className="log-header">
        <h3>Sync History</h3>
      </div>

      <div className="log-table-container">
        {logs.length > 0 ? (
          <table className="log-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Action</th>
                <th>Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => {
                const providerInfo = getProviderInfo(log.provider);
                return (
                  <tr key={log.id} className="log-row">
                    <td className="provider-cell">
                      <div className="provider-info">
                        {providerInfo.logoUrl && (
                          <img
                            src={providerInfo.logoUrl}
                            alt={`${providerInfo.displayName} logo`}
                            className="provider-logo-small"
                          />
                        )}
                        <span style={{ fontWeight: "bold" }}>
                          {providerInfo.displayName}
                        </span>
                      </div>
                    </td>
                    <td className="action-cell">
                      {getSemanticActionMessage(
                        log.type,
                        providerInfo.displayName
                      )}
                    </td>
                    <td className="datetime-cell">
                      {formatDateTime(log.date)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="no-logs">
            <div className="no-logs-icon">📋</div>
            <div className="no-logs-text">No sync history available</div>
          </div>
        )}
      </div>

      <style>{`
        .sync-log-history {
          margin-top: 32px;
          margin-left: auto;
          margin-right: auto;
          max-width: calc(100vw - 48px);
          background: #1e293b;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          border: 1px solid #334155;
        }

        .log-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #334155;
          background: #0f172a;
        }

        .log-header h3 {
          margin: 0;
          color: #f1f5f9;
          font-size: 18px;
          font-weight: 600;
        }

        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px;
          color: #94a3b8;
          background: #1e293b;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #475569;
          border-top: 2px solid #60a5fa;
          border-radius: 50%;
          animation: spin 1s linear infinite, pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-message {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #7f1d1d;
          color: #fca5a5;
          border-bottom: 1px solid #991b1b;
        }

        .log-table-container {
          overflow-x: auto;
          overflow-y: auto;
          max-height: 400px;
          background: #1e293b;
        }

        .log-table {
          width: 100%;
          border-collapse: collapse;
          background: #1e293b;
        }

        .log-table th {
          padding: 16px;
          height: 52px;
          text-align: left;
          font-weight: 600;
          color: #cbd5e1;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #334155;
          background: #0f172a;
          vertical-align: middle;
          box-sizing: border-box;
        }

        .log-table td {
          padding: 16px;
          border-bottom: 1px solid #334155;
          vertical-align: middle;
          background: #1e293b;
          height: 52px;
          box-sizing: border-box;
          text-align: left;
        }

        .log-table tr {
          height: 52px;
        }

        .log-row:hover {
          background: #334155;
        }


        .provider-cell {
          color: #f1f5f9;
          font-weight: 500;
        }

        .provider-info span {
          color: #f1f5f9;
          font-weight: 500;
        }

        .provider-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .provider-logo-small {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .action-cell {
          color: #e2e8f0;
          font-size: 13px;
          font-weight: 500;
          min-width: 200px;
        }

        .log-table .datetime-cell {
          color: #94a3b8;
          font-size: 13px;
          white-space: nowrap;
          text-align: right !important;
        }

        .log-table th:last-child {
          text-align: right;
        }

        .no-logs {
          text-align: center;
          padding: 60px 20px;
          color: #94a3b8;
          background: #1e293b;
        }

        .no-logs-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .no-logs-text {
          font-size: 16px;
        }

        @media (max-width: 1024px) {
          .sync-log-history {
            max-width: calc(100vw - 48px);
          }
        }

        @media (max-width: 768px) {
          .sync-log-history {
            max-width: calc(100vw - 32px);
          }

          .log-header {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }

          .log-table th,
          .log-table td {
            padding: 12px;
            height: 48px;
          }

          .log-table {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};