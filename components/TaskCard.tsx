export type TaskStatus = "To Do" | "In Progress" | "Done";
export type TaskPriority = "Low" | "Medium" | "High";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

const statusColors: Record<TaskStatus, { bg: string; text: string }> = {
  "To Do": { bg: "#EFF6FF", text: "#1D4ED8" },
  "In Progress": { bg: "#FFF7ED", text: "#C2410C" },
  Done: { bg: "#F0FDF4", text: "#15803D" },
};

const priorityColors: Record<TaskPriority, { bg: string; text: string }> = {
  Low: { bg: "#F1F5F9", text: "#475569" },
  Medium: { bg: "#FEFCE8", text: "#A16207" },
  High: { bg: "#FEF2F2", text: "#B91C1C" },
};

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
}

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) {
  const sc = statusColors[task.status];
  const pc = priorityColors[task.priority];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition-shadow" style={{ borderColor: "#E2E8F0" }}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-base leading-tight" style={{ color: "#0A1628" }}>{task.title}</h3>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => onEdit(task)}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
            title="Edit task"
          >
            <svg className="w-4 h-4" fill="none" stroke="#64748B" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
            title="Delete task"
          >
            <svg className="w-4 h-4" fill="none" stroke="#EF4444" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-sm mb-4 leading-relaxed" style={{ color: "#64748B" }}>{task.description}</p>

      <div className="flex items-center flex-wrap gap-2 mb-4">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: sc.bg, color: sc.text }}>
          {task.status}
        </span>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: pc.bg, color: pc.text }}>
          {task.priority}
        </span>
        <span className="text-xs ml-auto" style={{ color: "#94A3B8" }}>
          Due: {task.dueDate}
        </span>
      </div>

      <div className="flex gap-1">
        {(["To Do", "In Progress", "Done"] as TaskStatus[]).map((s) => (
          <button
            key={s}
            onClick={() => onStatusChange(task.id, s)}
            className="flex-1 text-xs py-1 rounded font-medium transition-colors"
            style={{
              background: task.status === s ? "#0066CC" : "#F1F5F9",
              color: task.status === s ? "#fff" : "#64748B",
            }}
          >
            {s === "In Progress" ? "Progress" : s}
          </button>
        ))}
      </div>
    </div>
  );
}
