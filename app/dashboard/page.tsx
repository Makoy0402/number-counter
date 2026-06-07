"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StatCard from "@/components/StatCard";

interface User {
  name: string;
  email: string;
}

const summaryCards = [
  {
    label: "Tasks Completed",
    value: 34,
    change: "12% this week",
    positive: true,
    accent: "#0066CC",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "In Progress",
    value: 8,
    change: "3 added today",
    positive: true,
    accent: "#F97316",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Overdue",
    value: 3,
    change: "needs attention",
    positive: false,
    accent: "#DC2626",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    label: "Team Members",
    value: 12,
    change: "2 active now",
    positive: true,
    accent: "#7C3AED",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const recentActivity = [
  { action: "Task completed", detail: "Design system update", time: "2 min ago", color: "#16A34A" },
  { action: "New task created", detail: "API integration review", time: "15 min ago", color: "#0066CC" },
  { action: "Task overdue", detail: "Q2 financial report", time: "1 hr ago", color: "#DC2626" },
  { action: "Comment added", detail: "Sprint planning notes", time: "3 hr ago", color: "#64748B" },
  { action: "Integration connected", detail: "SharePoint linked", time: "Yesterday", color: "#7C3AED" },
];

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("next_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#0A1628" }}>
          Welcome back, {user?.name ?? "there"} 👋
        </h1>
        <p className="mt-1 text-sm" style={{ color: "#64748B" }}>
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {summaryCards.map((c) => (
          <StatCard key={c.label} {...c} />
        ))}
      </div>

      {/* Quick actions + recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E2E8F0" }}>
          <h2 className="font-bold text-lg mb-5" style={{ color: "#0A1628" }}>Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "New Task", href: "/dashboard/tasks", color: "#0066CC" },
              { label: "View Analytics", href: "/dashboard/analytics", color: "#7C3AED" },
              { label: "Integrations", href: "/dashboard/integrations", color: "#F97316" },
              { label: "All Tasks", href: "/dashboard/tasks", color: "#0A1628" },
            ].map((a) => (
              <Link
                key={a.label}
                href={a.href}
                className="flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: a.color }}
              >
                {a.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E2E8F0" }}>
          <h2 className="font-bold text-lg mb-5" style={{ color: "#0A1628" }}>Recent Activity</h2>
          <ul className="space-y-4">
            {recentActivity.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: item.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium" style={{ color: "#1E293B" }}>{item.action}</p>
                  <p className="text-xs truncate" style={{ color: "#64748B" }}>{item.detail}</p>
                </div>
                <span className="text-xs flex-shrink-0" style={{ color: "#94A3B8" }}>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
