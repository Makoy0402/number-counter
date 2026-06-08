"use client";

import { useState } from "react";

type SubNavItem = { label: string };
type SubNavGroup = { section: string; items: SubNavItem[] };

const subNavGroups: SubNavGroup[] = [
  {
    section: "OVERVIEW",
    items: [{ label: "Dashboard" }],
  },
  {
    section: "REVIEW",
    items: [
      { label: "Timesheet Approvals" },
      { label: "Leave Approvals" },
      { label: "Manual Edits" },
      { label: "Attendance" },
    ],
  },
  {
    section: "ROSTER",
    items: [{ label: "Scheduling" }],
  },
  {
    section: "PAY",
    items: [{ label: "Deductions" }, { label: "Payroll" }],
  },
  {
    section: "INSIGHT",
    items: [{ label: "Reports" }],
  },
  {
    section: "PEOPLE & SETUP",
    items: [{ label: "Staff" }, { label: "Holidays" }, { label: "Settings" }],
  },
];

const statRow1 = [
  { label: "Active Staff", value: "1", sub: "0 PHP · 1 INR" },
  { label: "Pending Approvals", value: "0", sub: "timesheets" },
  { label: "Leave Requests", value: "0", sub: "with supervisors" },
  { label: "Pay Run", value: "Per company", sub: "3 separate runs" },
];

const statRow2 = [
  { label: "Loans Outstanding", value: "₱0", sub: "→ balances" },
  { label: "Missing Rosters", value: "0", sub: "all set" },
  { label: "Health Insurance Due", value: "₱0", sub: "0 staff this run" },
  { label: "Hours This Period", value: "2.0", sub: "across staff" },
];

export default function TimeTrackingPage() {
  const [active, setActive] = useState("Dashboard");

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
                  className="w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium text-left mb-0.5"
                  style={{
                    background: isActive ? "#EEF2FF" : "transparent",
                    color: isActive ? "#3B4FD9" : "#475569",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        ))}
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0 overflow-x-hidden">
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-6 py-3 bg-white border-b"
          style={{ borderColor: "#E2E8F0" }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" style={{ color: "#3B4FD9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-bold text-sm" style={{ color: "#0A1628" }}>Time Tracking Overseas</span>
            <span className="text-xs" style={{ color: "#94A3B8" }}>·</span>
            <span className="text-xs" style={{ color: "#64748B" }}>HR Melanie · Admin console</span>
          </div>
          <button
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg border bg-white"
            style={{ borderColor: "#E2E8F0", color: "#475569" }}
          >
            All companies
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-extrabold" style={{ color: "#0A1628" }}>Dashboard</h1>
            <p className="text-sm mt-1" style={{ color: "#64748B" }}>All companies · Jun 1–15, 2026</p>
          </div>

          {/* Stat cards row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
            {statRow1.map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-xl border p-4"
                style={{ borderColor: "#E2E8F0" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#94A3B8" }}>
                  {card.label}
                </p>
                <p className="text-2xl font-extrabold" style={{ color: "#0A1628" }}>{card.value}</p>
                <p className="text-xs mt-1" style={{ color: "#64748B" }}>{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Stat cards row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {statRow2.map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-xl border p-4"
                style={{ borderColor: "#E2E8F0" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#94A3B8" }}>
                  {card.label}
                </p>
                <p className="text-2xl font-extrabold" style={{ color: "#0A1628" }}>{card.value}</p>
                <p className="text-xs mt-1" style={{ color: "#64748B" }}>{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Hours by staff section */}
          <div className="bg-white rounded-xl border p-5" style={{ borderColor: "#E2E8F0" }}>
            <div className="mb-1">
              <h2 className="text-sm font-bold" style={{ color: "#0A1628" }}>Hours by staff · this period</h2>
              <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>
                Worked hours captured by the shift clock this period.
              </p>
            </div>
            <div className="mt-4">
              {/* Staff row */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium w-36 flex-shrink-0" style={{ color: "#0A1628" }}>
                  Ismail Mansury
                </span>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: "#EEF2FF", color: "#3B4FD9" }}
                >
                  INR
                </span>
                <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ background: "#EEF2FF" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ background: "#3B4FD9", width: "100%" }}
                  />
                </div>
                <span className="text-sm font-semibold flex-shrink-0" style={{ color: "#0A1628" }}>2.0h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
