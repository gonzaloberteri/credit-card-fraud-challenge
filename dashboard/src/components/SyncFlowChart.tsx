import { Chart } from "react-google-charts";
import { useMemo } from "react";

interface SyncFlowChartProps {
  totalRecords: number;
  syncedProfiles: number;
  hintPatients: number;
  elationPatients: number;
}

export const SyncFlowChart = ({ totalRecords, syncedProfiles, hintPatients, elationPatients }: SyncFlowChartProps) => {
  const flowData = useMemo(() => {
    return {
      hintPatients,
      elationPatients,
      totalPatients: totalRecords,
      syncedPatients: syncedProfiles,
    };
  }, [totalRecords, syncedProfiles, hintPatients, elationPatients]);

  const sankeyData = [
    ["From", "To", "Weight"],
    ["Hint Healthcare", "Central Profile", Math.max(flowData.hintPatients, 0)],
    ["Elation EMR", "Central Profile", Math.max(flowData.elationPatients, 0)],
  ].filter(
    (row) => row[0] === "From" || (typeof row[2] === "number" && row[2] > 0)
  );

  const options = {
    backgroundColor: "transparent",
    sankey: {
      node: {
        colors: [
          "#3b82f6",
          "#8b5cf6",
          "#f59e0b",
          "#1e293b",
          "#22c55e",
          "#ef4444",
          "#10b981",
        ],
        label: {
          fontName: "Inter, system-ui, sans-serif",
          fontSize: 12,
          color: "#f1f5f9",
          bold: true,
        },
        nodePadding: 20,
        width: 8,
      },
      link: {
        colorMode: "gradient",
        color: {
          fillOpacity: 0.5,
        },
        colors: [
          "#3b82f6",
          "#8b5cf6",
          "#f59e0b",
          "#22c55e",
          "#ef4444",
          "#10b981",
        ],
      },
    },
    tooltip: {
      textStyle: {
        color: "#f1f5f9",
        fontSize: 12,
      },
      backgroundColor: "#1e293b",
      borderColor: "#334155",
      borderWidth: 1,
    },
  };

  const syncRate = 100;

  return (
    <div className="sync-flow-container">
      <div className="sync-flow-header">
        <div className="header-left">
          <h2>Data Synchronization Flow</h2>
        </div>
        <div className="sync-metrics">
          <div className="metric">
            <span className="metric-value">{flowData.totalPatients}</span>
            <span className="metric-label">Total Records</span>
          </div>
          <div className="metric">
            <span className="metric-value">{flowData.syncedPatients}</span>
            <span className="metric-label">Unique profiles</span>
          </div>
          <div className="metric">
            <span className="metric-value">{syncRate}%</span>
            <span className="metric-label">Success Rate</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        {flowData.syncedPatients > 0 && sankeyData.length > 1 ? (
          <Chart
            chartType="Sankey"
            width="100%"
            height="400px"
            data={sankeyData}
            options={options}
            loader={<div>Loading Chart...</div>}
          />
        ) : (
          <div className="no-data-message">
            <p>No patient data available for visualization</p>
          </div>
        )}
      </div>

      <div className="flow-legend">
        <div className="legend-item">
          <div className="legend-color hint"></div>
          <span>Hint Healthcare</span>
        </div>
        <div className="legend-item">
          <div className="legend-color elation"></div>
          <span>Elation EMR</span>
        </div>
        <div className="legend-item">
          <div className="legend-color central"></div>
          <span>Central Profile</span>
        </div>
      </div>

      <style>{`
        .sync-flow-container {
          background: #1e293b;
          border-radius: 12px;
          padding: 24px;
          margin: 40px auto;
          max-width: calc(100vw - 48px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          border: 1px solid #334155;
        }

        .sync-flow-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #334155;
        }

        .header-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sync-flow-header h2 {
          margin: 0;
          color: #f1f5f9;
          font-size: 20px;
          font-weight: 600;
        }

        .sync-metrics {
          display: flex;
          gap: 24px;
        }

        .metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .metric-value {
          font-size: 24px;
          font-weight: 700;
          color: #3b82f6;
        }

        .metric-label {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .chart-container {
          background: #0f172a;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 24px;
          border: 1px solid #1e293b;
        }

        .no-data-message {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
          color: #94a3b8;
          font-size: 16px;
        }

        .flow-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #cbd5e1;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .legend-color.hint {
          background: #3b82f6;
        }

        .legend-color.elation {
          background: #8b5cf6;
        }

        .legend-color.central {
          background: #22c55e;
        }

        @media (max-width: 1024px) {
          .sync-flow-container {
            max-width: calc(100vw - 48px);
          }
        }

        @media (max-width: 768px) {
          .sync-flow-container {
            margin: 24px auto;
            max-width: calc(100vw - 32px);
            padding: 16px;
          }

          .sync-flow-header {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }

          .header-left {
            align-items: center;
          }

          .sync-metrics {
            justify-content: space-around;
            gap: 16px;
          }

          .metric-value {
            font-size: 20px;
          }

          .flow-legend {
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
};