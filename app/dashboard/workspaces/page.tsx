const departments = [
  {
    name: "Admin",
    description: "Auto-generated workspace for the Admin department.",
    members: 4,
    docs: 12,
    links: 3,
  },
  {
    name: "Aged Care",
    description: "Auto-generated workspace for the Aged Care department.",
    members: 9,
    docs: 7,
    links: 2,
  },
  {
    name: "Allied Health",
    description: "Auto-generated workspace for the Allied Health department.",
    members: 11,
    docs: 14,
    links: 5,
  },
  {
    name: "Business Development",
    description: "Auto-generated workspace for the Business Development department.",
    members: 5,
    docs: 9,
    links: 4,
  },
  {
    name: "Executives",
    description: "Director, COO, Head of Quality & Service, Head of Workforce and Admin",
    members: 4,
    docs: 6,
    links: 2,
  },
  {
    name: "Finance and Accounts",
    description: "Auto-generated workspace for the Finance and Accounts department.",
    members: 6,
    docs: 18,
    links: 3,
  },
  {
    name: "IT",
    description: "Auto-generated workspace for the IT department.",
    members: 3,
    docs: 21,
    links: 8,
  },
  {
    name: "Marketing",
    description: "Auto-generated workspace for the Marketing department.",
    members: 5,
    docs: 11,
    links: 6,
  },
  {
    name: "NDIS",
    description: "Auto-generated workspace for the NDIS department.",
    members: 8,
    docs: 15,
    links: 4,
  },
  {
    name: "People & Culture",
    description: "Auto-generated workspace for the People & Culture department.",
    members: 4,
    docs: 9,
    links: 3,
  },
  {
    name: "Quality",
    description: "Auto-generated workspace for the Quality department.",
    members: 3,
    docs: 13,
    links: 2,
  },
  {
    name: "Rosters",
    description: "Auto-generated workspace for the Rosters department.",
    members: 2,
    docs: 5,
    links: 1,
  },
  {
    name: "Sublime Health Pro",
    description: "Auto-generated workspace for the Sublime Health Pro department.",
    members: 7,
    docs: 10,
    links: 5,
  },
];

export default function WorkspacesPage() {
  return (
    <div className="min-h-screen p-6 md:p-8" style={{ background: "#F0F2F8" }}>
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold" style={{ color: "#0A1628" }}>Workspaces</h1>
          <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>Teams · reports · members · resources</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "#94A3B8" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search workspaces..."
              className="pl-9 pr-4 py-2 text-sm rounded-lg border bg-white outline-none focus:ring-2 focus:ring-blue-200"
              style={{ borderColor: "#E2E8F0", color: "#1E293B", width: "220px" }}
            />
          </div>
          <button
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg text-white"
            style={{ background: "#3B4FD9" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Manage
          </button>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="bg-white rounded-xl border p-5 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer group"
            style={{ borderColor: "#E2E8F0" }}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-sm" style={{ color: "#0A1628" }}>{dept.name}</span>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "#EEF2FF", color: "#3B4FD9" }}
                >
                  DEPT
                </span>
              </div>
              <svg
                className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                style={{ color: "#94A3B8" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed flex-1" style={{ color: "#64748B" }}>
              {dept.description}
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-4 text-xs" style={{ color: "#64748B" }}>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {dept.members}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {dept.docs}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {dept.links}
              </span>
              <span className="ml-auto font-semibold text-xs" style={{ color: "#3B4FD9" }}>
                OPEN →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
