"use client";

import { useState } from "react";

type SubNavItem = { label: string; href?: string; badge?: number };
type SubNavGroup = { section: string; items: SubNavItem[] };

const subNavGroups: SubNavGroup[] = [
  {
    section: "DASHBOARDS",
    items: [{ label: "Human Dashboard" }, { label: "AI Agents" }],
  },
  {
    section: "PIPELINE",
    items: [
      { label: "Recruitment" },
      { label: "Candidates" },
      { label: "Interviews" },
      { label: "Offers" },
      { label: "Onboarding" },
    ],
  },
  {
    section: "OPERATIONS",
    items: [
      { label: "Approvals", badge: 5 },
      { label: "Activity" },
      { label: "Notifications" },
      { label: "Automation" },
    ],
  },
  {
    section: "PEOPLE",
    items: [
      { label: "Employee Directory" },
      { label: "Doc Expiry" },
      { label: "Performance Reviews" },
    ],
  },
  {
    section: "CONFIGURATION",
    items: [
      { label: "Customise" },
      { label: "Question Templates" },
      { label: "AI Features" },
    ],
  },
];

const statCards = [
  { label: "Active Candidates", value: "0", sub: "-0%", hasChange: true },
  { label: "Interviews Today", value: "0", sub: "" },
  { label: "Pending Approvals", value: "0", sub: "" },
  { label: "Offers Sent 7D", value: "0", sub: "-0%", hasChange: true },
];

const chartCards = [
  { title: "Headcount by department", sub: "0 depts", emptyLabel: "No department data" },
  { title: "Headcount by location", sub: "0 sites", emptyLabel: "No location data" },
  { title: "Employment mix", sub: "0 types", emptyLabel: "No employment type data" },
];

export default function RecruitmentPage() {
  const [active, setActive] = useState("Recruitment");

  return (
    <div className="flex min-h-screen" style={{ background: "#F0F2F8" }}>
      {/* Sub-nav */}
      <aside
        className="hidden md:flex flex-col flex-shrink-0 h-screen sticky top-0 overflow-y-auto py-4"
        style={{ width: "220px", background: "#fff", borderRight: "1px solid #E2E8F0" }}
      >
        {subNavGroups.map((group) => (
          <div key={group.section} className="mb-4 px-3">
            <p
              className="text-[10px] font-semibold tracking-widest uppercase mb-1 px-2"
              style={{ color: "#94A3B8" }}
            >
              {group.section}
            </p>
            {group.items.map((item) => {
              const isActive = active === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActive(item.label)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-left mb-0.5"
                  style={{
                    background: isActive ? "#EEF2FF" : "transparent",
                    color: isActive ? "#3B4FD9" : "#475569",
                  }}
                >
                  <span>{item.label}</span>
                  {item.badge != null && (
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{ background: "#FEE2E2", color: "#DC2626" }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0 p-6 md:p-8 overflow-x-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-extrabold" style={{ color: "#0A1628" }}>People Operations</h1>
            <p className="text-sm mt-1" style={{ color: "#64748B" }}>
              Live pipeline, team workload, and hiring activity across the organisation
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg border bg-white"
              style={{ borderColor: "#E2E8F0", color: "#475569" }}
            >
              Team dashboard
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              className="px-3 py-2 text-sm font-medium rounded-lg border bg-white"
              style={{ borderColor: "#E2E8F0", color: "#475569" }}
            >
              View AI Agents
            </button>
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg text-white"
              style={{ background: "#3B4FD9" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Hiring Plans
            </button>
          </div>
        </div>

        {/* People overview section */}
        <div
          className="bg-white rounded-xl border p-5 mb-6"
          style={{ borderColor: "#E2E8F0" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" style={{ color: "#3B4FD9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#94A3B8" }}>PEOPLE</span>
              <span className="text-sm font-semibold" style={{ color: "#0A1628" }}>People overview</span>
              <svg className="w-4 h-4" style={{ color: "#94A3B8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 text-xs font-medium rounded-lg border bg-white"
                style={{ borderColor: "#E2E8F0", color: "#475569" }}
              >
                Today&apos;s briefing
              </button>
              <button
                className="px-3 py-1.5 text-xs font-medium rounded-lg border bg-white"
                style={{ borderColor: "#E2E8F0", color: "#475569" }}
              >
                Download CSV
              </button>
              <span className="text-xs" style={{ color: "#94A3B8" }}>Last analysed just now</span>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {statCards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border p-4"
                style={{ borderColor: "#E2E8F0" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#94A3B8" }}>
                  {card.label}
                </p>
                <p className="text-3xl font-extrabold" style={{ color: "#0A1628" }}>{card.value}</p>
                {card.sub && (
                  <p className="text-xs mt-1" style={{ color: "#64748B" }}>{card.sub}</p>
                )}
              </div>
            ))}
          </div>

          {/* Chart placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {chartCards.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border p-4 flex flex-col items-center justify-center text-center min-h-[160px]"
                style={{ borderColor: "#E2E8F0" }}
              >
                <p className="text-xs font-semibold mb-0.5" style={{ color: "#0A1628" }}>{c.title}</p>
                <p className="text-xs mb-4" style={{ color: "#94A3B8" }}>{c.sub}</p>
                <svg className="w-8 h-8 mb-2" style={{ color: "#CBD5E1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xs font-medium" style={{ color: "#64748B" }}>{c.emptyLabel}</p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>Add employee records to populate this view.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline section */}
        <div
          className="bg-white rounded-xl border p-5"
          style={{ borderColor: "#E2E8F0" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" style={{ color: "#3B4FD9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#94A3B8" }}>PIPELINE</span>
              <span className="text-sm font-semibold" style={{ color: "#0A1628" }}>Recruitment by stage</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: "#64748B" }}>0 candidates · 0 bottlenecks</span>
              <span className="text-xs" style={{ color: "#94A3B8" }}>Last analysed just now</span>
            </div>
          </div>

          {/* Empty state */}
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <svg className="w-10 h-10 mb-3" style={{ color: "#CBD5E1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-sm font-semibold mb-1" style={{ color: "#0A1628" }}>No pipeline activity yet</p>
            <p className="text-xs max-w-xs" style={{ color: "#64748B" }}>
              Once candidates flow into the pipeline, stage breakdown and conversion will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
