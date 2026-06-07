import IntegrationCard from "@/components/IntegrationCard";

const integrations = [
  {
    name: "Odoo",
    description:
      "Connect NEXT to your Odoo ERP instance to sync tasks, projects, employees, and CRM data in real time.",
    logo: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="18" fill="#714B67" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">
          Oo
        </text>
      </svg>
    ),
    features: [
      "Sync projects and task boards",
      "Pull employee & CRM records",
      "Bi-directional status updates",
      "Automated invoice linking",
    ],
    accentColor: "#714B67",
  },
  {
    name: "SharePoint",
    description:
      "Link NEXT to Microsoft SharePoint to manage documents, collaborate on files, and keep your team in sync.",
    logo: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="8" fill="#0078D4" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">
          SP
        </text>
      </svg>
    ),
    features: [
      "Document library access",
      "File sharing & permissions",
      "Task attachments from OneDrive",
      "Teams channel notifications",
    ],
    accentColor: "#0078D4",
  },
  {
    name: "Slack",
    description:
      "Get task updates, alerts, and daily digests posted directly to your Slack channels.",
    logo: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="8" fill="#4A154B" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">
          Sl
        </text>
      </svg>
    ),
    features: [
      "Real-time task notifications",
      "Daily digest summaries",
      "Slash command task creation",
      "Channel-based project alerts",
    ],
    accentColor: "#4A154B",
  },
  {
    name: "Google Workspace",
    description:
      "Integrate with Google Calendar, Drive, and Gmail to streamline scheduling and document workflows.",
    logo: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="8" fill="#EA4335" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">
          G
        </text>
      </svg>
    ),
    features: [
      "Calendar event sync",
      "Drive document linking",
      "Gmail task creation",
      "Google Meet scheduling",
    ],
    accentColor: "#EA4335",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#0A1628" }}>Integrations</h1>
        <p className="mt-1 text-sm" style={{ color: "#64748B" }}>
          Connect NEXT with your favorite business tools to supercharge your workflow.
        </p>
      </div>

      {/* Status banner */}
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-xl mb-8 border"
        style={{ background: "#EFF6FF", borderColor: "#BFDBFE" }}
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#0066CC" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm" style={{ color: "#1D4ED8" }}>
          Integrations are in <strong>demo mode</strong>. Connecting or disconnecting simulates the action without real data exchange.
        </p>
      </div>

      {/* Integration cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <IntegrationCard key={integration.name} {...integration} />
        ))}
      </div>

      {/* Request integration */}
      <div
        className="mt-8 rounded-xl p-6 border-2 border-dashed text-center"
        style={{ borderColor: "#CBD5E1" }}
      >
        <p className="font-semibold mb-1" style={{ color: "#0A1628" }}>Need a different integration?</p>
        <p className="text-sm mb-4" style={{ color: "#64748B" }}>
          We&apos;re constantly expanding our integration library. Let us know what tools your team uses.
        </p>
        <button
          className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white"
          style={{ background: "#0066CC" }}
        >
          Request Integration
        </button>
      </div>
    </div>
  );
}
