"use client";

import { useState } from "react";
import TaskCard, { Task, TaskStatus, TaskPriority } from "@/components/TaskCard";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Design system update",
    description: "Refresh component library with new brand guidelines and accessibility improvements.",
    status: "Done",
    priority: "High",
    dueDate: "Jun 5, 2026",
  },
  {
    id: "2",
    title: "API integration review",
    description: "Audit all third-party API connections and document rate limits and error handling.",
    status: "In Progress",
    priority: "High",
    dueDate: "Jun 10, 2026",
  },
  {
    id: "3",
    title: "Q2 financial report",
    description: "Compile and review Q2 financials for the stakeholder meeting.",
    status: "To Do",
    priority: "Medium",
    dueDate: "Jun 3, 2026",
  },
  {
    id: "4",
    title: "Sprint planning notes",
    description: "Document sprint goals and distribute action items to team members.",
    status: "In Progress",
    priority: "Low",
    dueDate: "Jun 8, 2026",
  },
  {
    id: "5",
    title: "User onboarding flow",
    description: "Design and implement improved onboarding steps to reduce drop-off.",
    status: "To Do",
    priority: "High",
    dueDate: "Jun 15, 2026",
  },
  {
    id: "6",
    title: "Performance audit",
    description: "Run Lighthouse audits and fix Core Web Vitals regressions in dashboard.",
    status: "To Do",
    priority: "Medium",
    dueDate: "Jun 20, 2026",
  },
];

const STATUSES: TaskStatus[] = ["To Do", "In Progress", "Done"];
const PRIORITIES: TaskPriority[] = ["Low", "Medium", "High"];

interface FormData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

const emptyForm: FormData = {
  title: "",
  description: "",
  status: "To Do",
  priority: "Medium",
  dueDate: "",
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<TaskStatus | "All">("All");
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);

  const filtered = filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  function openCreate() {
    setEditingTask(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEdit(task: Task) {
    setEditingTask(task);
    setForm({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate,
    });
    setShowModal(true);
  }

  function handleDelete(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function handleStatusChange(id: string, status: TaskStatus) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  }

  function handleSave() {
    if (!form.title.trim()) return;
    if (editingTask) {
      setTasks((prev) => prev.map((t) => (t.id === editingTask.id ? { ...t, ...form } : t)));
    } else {
      const newTask: Task = {
        id: Date.now().toString(),
        ...form,
      };
      setTasks((prev) => [newTask, ...prev]);
    }
    setShowModal(false);
  }

  const counts = {
    All: tasks.length,
    "To Do": tasks.filter((t) => t.status === "To Do").length,
    "In Progress": tasks.filter((t) => t.status === "In Progress").length,
    Done: tasks.filter((t) => t.status === "Done").length,
  };

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#0A1628" }}>Tasks</h1>
          <p className="mt-1 text-sm" style={{ color: "#64748B" }}>Manage and track all your team tasks.</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
          style={{ background: "#0066CC" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Task
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(["All", ...STATUSES] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{
              background: filter === s ? "#0066CC" : "#F1F5F9",
              color: filter === s ? "#fff" : "#64748B",
            }}
          >
            {s}{" "}
            <span
              className="ml-1 text-xs font-bold px-1.5 py-0.5 rounded-full"
              style={{
                background: filter === s ? "rgba(255,255,255,0.25)" : "#E2E8F0",
                color: filter === s ? "#fff" : "#475569",
              }}
            >
              {counts[s]}
            </span>
          </button>
        ))}
      </div>

      {/* Task grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20" style={{ color: "#94A3B8" }}>
          <p className="text-lg font-medium">No tasks found</p>
          <p className="text-sm mt-1">Create a new task to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={openEdit}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: "#0A1628" }}>
                {editingTask ? "Edit Task" : "New Task"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-1 rounded hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="#64748B" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#1E293B" }}>Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Task title"
                  className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none focus:ring-2"
                  style={{ borderColor: "#CBD5E1", color: "#1E293B" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#1E293B" }}>Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Task description"
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 resize-none"
                  style={{ borderColor: "#CBD5E1", color: "#1E293B" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#1E293B" }}>Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value as TaskStatus })}
                    className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none"
                    style={{ borderColor: "#CBD5E1", color: "#1E293B" }}
                  >
                    {STATUSES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#1E293B" }}>Priority</label>
                  <select
                    value={form.priority}
                    onChange={(e) => setForm({ ...form, priority: e.target.value as TaskPriority })}
                    className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none"
                    style={{ borderColor: "#CBD5E1", color: "#1E293B" }}
                  >
                    {PRIORITIES.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#1E293B" }}>Due Date</label>
                <input
                  type="text"
                  value={form.dueDate}
                  onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                  placeholder="e.g. Jun 15, 2026"
                  className="w-full px-3 py-2.5 rounded-lg border text-sm outline-none focus:ring-2"
                  style={{ borderColor: "#CBD5E1", color: "#1E293B" }}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-lg border text-sm font-medium"
                style={{ borderColor: "#CBD5E1", color: "#64748B" }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-2.5 rounded-lg text-sm font-bold text-white"
                style={{ background: "#0066CC" }}
              >
                {editingTask ? "Save Changes" : "Create Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
