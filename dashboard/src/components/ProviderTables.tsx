import { useGetHintPatientsSubscription, useGetElationPatientsSubscription, useGetProfilesSubscription, Providers_Enum } from "../generated/graphql";
import { SyncLogHistory } from "./SyncLogHistory";
import { SyncFlowChart } from "./SyncFlowChart";

interface PatientProfile {
  id: string | number;
  first_name: string;
  last_name: string;
  dob?: unknown;
  email?: string;
  emails?: unknown[];
  phones?: unknown[];
  updated_at?: unknown;
  last_modified?: unknown;
  [key: string]: unknown;
}

export const ProviderTables = () => {
  const { data: hintData, loading: hintLoading, error: hintError } = useGetHintPatientsSubscription();
  const { data: elationData, loading: elationLoading, error: elationError } = useGetElationPatientsSubscription();
  const { data: profilesData, loading: profilesLoading, error: profilesError } = useGetProfilesSubscription();

  const hintProfiles = hintData?.hint_patients || [];
  const elationProfiles = elationData?.elation_patients || [];
  const centralProfiles = profilesData?.profiles || [];
  
  const loading = hintLoading || elationLoading || profilesLoading;
  const error = hintError || elationError || profilesError;

  const formatTimeAgo = (dateString?: string): string => {
    if (!dateString) return "-";

    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 1) return "just now";
    if (diffMinutes < 60) return `${diffMinutes} min ago`;
    if (diffHours < 24)
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

    return date.toLocaleDateString();
  };

  const getProviderLogo = (provider: Providers_Enum) => {
    switch (provider) {
      case Providers_Enum.Hint:
        return "https://www.hint.com/hubfs/Hint-symbol-rgb-g%20(1).png";
      case Providers_Enum.Elation:
        return "https://www.elationhealth.com/wp-content/uploads/2024/08/Copy-of-icon_logo_color_path-4-80x80.webp";
      default:
        return "";
    }
  };

  const PatientTable = ({
    title,
    profiles,
    provider,
  }: {
    title: string;
    profiles: PatientProfile[];
    provider: Providers_Enum;
  }) => {
    const displayedProfiles = profiles.slice(0, 20);
    const lastUpdateDate = profiles.length > 0 
      ? Math.max(...profiles.map((p) => {
          const dateField = provider === Providers_Enum.Hint ? p.updated_at : 
                           provider === Providers_Enum.Elation ? p.last_modified : null;
          return dateField ? new Date(dateField as string | number | Date).getTime() : 0;
        }))
      : null;
    const lastUpdateFormatted = lastUpdateDate 
      ? formatTimeAgo(new Date(lastUpdateDate).toISOString())
      : "Never";

    const getProviderColumns = () => {
      switch (provider) {
        case Providers_Enum.Hint:
          return [
            { key: "name", label: "Member Name" },
            { key: "memberInfo", label: "Member ID / DOB" },
            { key: "contactInfo", label: "Phone / Email" },
          ];
        case Providers_Enum.Elation:
          return [
            { key: "name", label: "Patient Name" },
            { key: "medicalInfo", label: "Medical Record / DOB" },
            { key: "contactInfo", label: "Phone / Email" },
          ];
        default:
          return [
            { key: "name", label: "Name" },
            { key: "info", label: "ID / DOB" },
            { key: "contactInfo", label: "Phone / Email" },
          ];
      }
    };

    return (
      <div className="provider-table">
        <div className="table-header">
          <div className="table-title">
            <img
              src={getProviderLogo(provider)}
              alt={`${title} logo`}
              className="provider-logo"
            />
            <div className="title-content">
              <h2>{title}</h2>
              <div className="last-sync-header">
                Last update: {lastUpdateFormatted}
              </div>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr className="header-row">
                {getProviderColumns().map((col) => (
                  <th key={col.key}>{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedProfiles.map((profile) => {
                const renderCellContent = (colKey: string) => {
                  switch (colKey) {
                    case "name":
                      return (
                        <div className="patient-name">
                          <div className="name-primary">
                            <strong>
                              {profile.first_name} {profile.last_name}
                            </strong>
                          </div>
                        </div>
                      );
                    case "memberInfo":
                    case "medicalInfo":
                    case "info": {
                      const getPatientUrl = () => {
                        const isProduction = import.meta.env.PROD;
                        
                        if (provider === Providers_Enum.Hint) {
                          const baseUrl = isProduction ? 'https://app.hint.com' : 'https://app.staging.hint.com';
                          return `${baseUrl}/patients/${profile.id}`;
                        } else if (provider === Providers_Enum.Elation) {
                          const baseUrl = isProduction ? 'https://elationemr.com' : 'https://sandbox.elationemr.com';
                          return `${baseUrl}/patient/${profile.id}/`;
                        }
                        return '#';
                      };

                      return (
                        <div className="info-cell">
                          <div className="primary-info">
                            ID: <a 
                              href={getPatientUrl()} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="patient-id-link"
                            >
                              {profile.id}
                            </a>
                          </div>
                          <div className="secondary-info">
                            DOB: {String(profile.dob) || "N/A"}
                          </div>
                        </div>
                      );
                    }
                    case "contactInfo": {
                      const getPhoneNumber = () => {
                        if (provider === Providers_Enum.Hint) {
                          if (!profile.phones || !Array.isArray(profile.phones) || profile.phones.length === 0) {
                            return "No phone";
                          }
                          // Extract phone numbers from Hint format: {type:mobile,number:null}
                          const phoneNumbers = (profile.phones as Record<string, unknown>[])
                            .filter((phone) => phone.number)
                            .map((phone) => `${phone.number} (${phone.type})`)
                            .join(', ');
                          return phoneNumbers || "No phone";
                        } else {
                          if (!profile.phones || !Array.isArray(profile.phones) || profile.phones.length === 0) {
                            return "No phone";
                          }
                          // For Elation, assume phones are already formatted or simple strings
                          return profile.phones.join(', ');
                        }
                      };
                      
                      const getEmail = () => {
                        if (provider === Providers_Enum.Hint) {
                          return profile.email || "No email";
                        } else {
                          if (!profile.emails || !Array.isArray(profile.emails) || profile.emails.length === 0) {
                            return "No email";
                          }
                          // Extract emails from Elation format: {email:example@gmail.com,created_date:...,deleted_date:null}
                          const emails = (profile.emails as Record<string, unknown>[])
                            .filter((emailObj) => emailObj.email && !emailObj.deleted_date)
                            .map((emailObj) => emailObj.email)
                            .join(', ');
                          return emails || "No email";
                        }
                      };
                      
                      return (
                        <div className="contact-info">
                          <div className="phone-formatted">
                            {getPhoneNumber()}
                          </div>
                          <div className="email">
                            {getEmail()}
                          </div>
                        </div>
                      );
                    }
                    default:
                      return null;
                  }
                };

                return (
                  <tr key={profile.id} className="patient-row">
                    {getProviderColumns().map((col) => (
                      <td key={col.key} className={`cell-${col.key}`}>
                        {renderCellContent(col.key)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="provider-tables-container">
        <div className="loading">Loading profiles...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="provider-tables-container">
        <div className="error">Error loading profiles: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="provider-tables-container">
      <div className="dashboard-header">
        <h3>Central Patient Profile</h3>
      </div>

      <div className="tables-grid">
        <PatientTable
          title="Hint Healthcare"
          profiles={hintProfiles as unknown as PatientProfile[]}
          provider={Providers_Enum.Hint}
        />
        <PatientTable
          title="Elation EMR"
          profiles={elationProfiles as unknown as PatientProfile[]}
          provider={Providers_Enum.Elation}
        />
      </div>

      <SyncLogHistory />
      <SyncFlowChart 
        totalRecords={hintProfiles.length + elationProfiles.length}
        syncedProfiles={centralProfiles.length}
        hintPatients={hintProfiles.length}
        elationPatients={elationProfiles.length}
      />

      <style>{`
        .provider-tables-container {
          padding: 24px;
          background: #0f172a;
          min-height: 100vh;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          margin-left: auto;
          margin-right: auto;
          max-width: calc(100vw - 48px);
          padding: 24px;
          background: #1e293b;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          border: 1px solid #334155;
        }

        .dashboard-header h3 {
          margin: 0;
          color: #f1f5f9;
          font-size: 28px;
          font-weight: 600;
        }

        .loading, .error {
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

        .tables-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-left: auto;
          margin-right: auto;
          max-width: calc(100vw - 48px);
        }

        .provider-table {
          background: #1e293b;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          border: 1px solid #334155;
        }

        .table-header {
          padding: 20px 24px;
          border-bottom: 1px solid #334155;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #0f172a;
        }

        .table-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .title-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .last-sync-header {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 400;
        }

        .provider-logo {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .table-header h2 {
          margin: 0;
          color: #f1f5f9;
          font-size: 18px;
          font-weight: 600;
        }

        .table-container {
          overflow-x: auto;
          overflow-y: auto;
          max-height: 400px;
          background: #1e293b;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: #1e293b;
        }

        .header-row {
          height: 68px;
        }

        th {
          padding: 16px;
          text-align: left;
          font-weight: 600;
          color: #cbd5e1;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #334155;
          background: #0f172a;
          vertical-align: middle;
          line-height: 1.3;
          height: 68px;
        }

        td {
          padding: 16px;
          border-bottom: 1px solid #334155;
          vertical-align: middle;
          background: #1e293b;
          height: 60px;
        }

        tr {
          height: 60px;
        }

        .patient-row:hover {
          background: #334155;
        }

        .patient-name {
          min-width: 160px;
          text-align: left;
        }

        .name-primary strong {
          color: #f1f5f9;
          font-weight: 600;
        }

        .contact-info {
          font-size: 14px;
          color: #e2e8f0;
        }

        .contact-info .email {
          color: #94a3b8;
          font-size: 12px;
          margin-top: 2px;
        }

        .phone-formatted {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          color: #e2e8f0;
        }

        .info-cell {
          font-size: 14px;
        }

        .primary-info {
          color: #f1f5f9;
          font-weight: 500;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 12px;
        }

        .secondary-info {
          color: #94a3b8;
          font-size: 11px;
          margin-top: 2px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        }

        .patient-id-link {
          color: #3b82f6;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .patient-id-link:hover {
          color: #60a5fa;
          text-decoration: underline;
        }

        /* Tablet: 2 columns */
        @media (min-width: 768px) {
          .tables-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Desktop: 2 columns in one row */
        @media (min-width: 1024px) {
          .tables-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Mobile header adjustments */
        @media (max-width: 767px) {
          .dashboard-header {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
            max-width: calc(100vw - 32px);
          }
          
          .tables-grid {
            max-width: calc(100vw - 32px);
          }

          .dashboard-header h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};