interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
  accent?: string;
}

export default function StatCard({ label, value, change, positive = true, icon, accent = "#0066CC" }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E2E8F0" }}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium" style={{ color: "#64748B" }}>{label}</p>
          <p className="text-3xl font-extrabold mt-1" style={{ color: "#0A1628" }}>{value}</p>
          {change && (
            <p className="text-xs mt-1 font-medium" style={{ color: positive ? "#16A34A" : "#DC2626" }}>
              {positive ? "▲" : "▼"} {change}
            </p>
          )}
        </div>
        {icon && (
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${accent}18` }}
          >
            <span style={{ color: accent }}>{icon}</span>
          </div>
        )}
      </div>
    </div>
  );
}
