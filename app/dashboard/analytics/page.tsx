import StatCard from "@/components/StatCard";

const stats = [
  { label: "Tasks Completed", value: 34, change: "12% vs last week", positive: true, accent: "#0066CC" },
  { label: "In Progress", value: 8, change: "2 more than avg", positive: true, accent: "#F97316" },
  { label: "Overdue", value: 3, change: "1 less than last week", positive: true, accent: "#DC2626" },
  { label: "Completion Rate", value: "78%", change: "5% improvement", positive: true, accent: "#7C3AED" },
];

const barData = [
  { label: "Mon", completed: 7, inProgress: 3 },
  { label: "Tue", completed: 10, inProgress: 5 },
  { label: "Wed", completed: 5, inProgress: 8 },
  { label: "Thu", completed: 12, inProgress: 4 },
  { label: "Fri", completed: 9, inProgress: 6 },
  { label: "Sat", completed: 4, inProgress: 2 },
  { label: "Sun", completed: 2, inProgress: 1 },
];

const maxVal = Math.max(...barData.map((d) => d.completed + d.inProgress));

const linePoints = [30, 45, 38, 60, 52, 70, 65, 80, 72, 88, 78, 92];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function buildLinePath(points: number[], width: number, height: number): string {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const padX = 30;
  const padY = 20;
  const innerW = width - padX * 2;
  const innerH = height - padY * 2;
  return points
    .map((v, i) => {
      const x = padX + (i / (points.length - 1)) * innerW;
      const y = padY + innerH - ((v - min) / range) * innerH;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export default function AnalyticsPage() {
  const linePath = buildLinePath(linePoints, 560, 200);

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#0A1628" }}>Analytics</h1>
        <p className="mt-1 text-sm" style={{ color: "#64748B" }}>
          Track your team&apos;s performance and progress over time.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Bar chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E2E8F0" }}>
          <h2 className="font-bold text-lg mb-1" style={{ color: "#0A1628" }}>Weekly Task Activity</h2>
          <p className="text-xs mb-6" style={{ color: "#64748B" }}>Tasks completed vs in-progress per day</p>

          <div className="flex items-end gap-3 h-48">
            {barData.map((d) => {
              const totalH = ((d.completed + d.inProgress) / maxVal) * 100;
              const completedH = (d.completed / (d.completed + d.inProgress)) * totalH;
              const inProgressH = totalH - completedH;
              return (
                <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col justify-end" style={{ height: "160px" }}>
                    <div
                      className="w-full rounded-t"
                      style={{ height: `${inProgressH}%`, background: "#FDBA74" }}
                    />
                    <div
                      className="w-full"
                      style={{ height: `${completedH}%`, background: "#0066CC" }}
                    />
                  </div>
                  <span className="text-xs font-medium" style={{ color: "#64748B" }}>{d.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 mt-4">
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "#64748B" }}>
              <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "#0066CC" }} /> Completed
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "#64748B" }}>
              <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "#FDBA74" }} /> In Progress
            </span>
          </div>
        </div>

        {/* Line chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E2E8F0" }}>
          <h2 className="font-bold text-lg mb-1" style={{ color: "#0A1628" }}>Completion Rate Trend</h2>
          <p className="text-xs mb-4" style={{ color: "#64748B" }}>Monthly completion rate (%)</p>

          <svg viewBox="0 0 560 200" className="w-full" style={{ height: "160px" }}>
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="30" y1={20 + (i * 160) / 4}
                x2="530" y2={20 + (i * 160) / 4}
                stroke="#F1F5F9" strokeWidth="1"
              />
            ))}
            {/* Line */}
            <path d={linePath} fill="none" stroke="#0066CC" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Area fill */}
            <path
              d={`${linePath} L530,180 L30,180 Z`}
              fill="#0066CC"
              fillOpacity="0.08"
            />
            {/* Dots */}
            {linePoints.map((v, i) => {
              const max = Math.max(...linePoints);
              const min = Math.min(...linePoints);
              const range = max - min || 1;
              const x = 30 + (i / (linePoints.length - 1)) * 500;
              const y = 20 + 160 - ((v - min) / range) * 160;
              return (
                <circle key={i} cx={x.toFixed(1)} cy={y.toFixed(1)} r="4" fill="#0066CC" />
              );
            })}
          </svg>

          <div className="flex justify-between mt-2">
            {months.map((m) => (
              <span key={m} className="text-xs" style={{ color: "#94A3B8" }}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Progress breakdown */}
      <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E2E8F0" }}>
        <h2 className="font-bold text-lg mb-5" style={{ color: "#0A1628" }}>Project Progress Breakdown</h2>
        <div className="space-y-5">
          {[
            { label: "NEXT Platform v2.0", progress: 78, color: "#0066CC" },
            { label: "API Integration Sprint", progress: 55, color: "#F97316" },
            { label: "Design System Refresh", progress: 92, color: "#7C3AED" },
            { label: "Q2 Reporting", progress: 30, color: "#DC2626" },
          ].map((p) => (
            <div key={p.label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium" style={{ color: "#1E293B" }}>{p.label}</span>
                <span className="text-sm font-bold" style={{ color: p.color }}>{p.progress}%</span>
              </div>
              <div className="h-2 rounded-full" style={{ background: "#F1F5F9" }}>
                <div
                  className="h-2 rounded-full transition-all"
                  style={{ width: `${p.progress}%`, background: p.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
