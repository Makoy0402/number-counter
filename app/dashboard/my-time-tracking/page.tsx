"use client";

import { useState } from "react";

type SubNavItem = { label: string };
type SubNavGroup = { section: string; items: SubNavItem[] };

const subNavGroups: SubNavGroup[] = [
  {
    section: "ME",
    items: [{ label: "My Dashboard" }, { label: "Time Tracking" }],
  },
  {
    section: "RECORDS",
    items: [{ label: "My Timesheet" }, { label: "My Schedule" }],
  },
  {
    section: "REQUESTS",
    items: [{ label: "Leave" }],
  },
];

export default function MyTimeTrackingPage() {
  const [active, setActive] = useState("My Dashboard");

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
          className="flex items-center gap-2 px-6 py-3 bg-white border-b"
          style={{ borderColor: "#E2E8F0" }}
        >
          <svg className="w-5 h-5" style={{ color: "#3B4FD9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold text-sm" style={{ color: "#0A1628" }}>My Time Tracking</span>
        </div>

        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-extrabold mb-8" style={{ color: "#0A1628" }}>My Dashboard</h1>

          {/* Empty state */}
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg
              className="w-14 h-14 mb-4"
              style={{ color: "#CBD5E1" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p className="text-base font-bold mb-2" style={{ color: "#0A1628" }}>
              Your contractor profile is not linked yet
            </p>
            <p className="text-sm max-w-xs" style={{ color: "#64748B" }}>
              Complete your onboarding before time tracking is available. Please contact HR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
