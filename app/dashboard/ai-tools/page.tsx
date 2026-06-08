"use client";

import { useState } from "react";

const tools = [
  {
    label: "Dictation",
    description: "Voice to polished text",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    available: true,
  },
  {
    label: "Email Composer",
    description: "Draft and refine emails",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    available: true,
  },
  {
    label: "Survey",
    description: "Build, send, and analyse",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    available: true,
  },
  {
    label: "Document Hub",
    description: "Analyse and transform files",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    available: true,
  },
  {
    label: "AI Chat",
    description: "Multi-model workspace with skills and agents",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    available: true,
  },
];

export default function AIToolsPage() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter(
    (t) =>
      t.label.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-full" style={{ background: "#F0F2F8" }}>
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-6 h-6" style={{ color: "#3B4FD9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <h1 className="text-2xl font-extrabold" style={{ color: "#0A1628" }}>NEXT · AI</h1>
        </div>
        <p className="text-sm mb-4" style={{ color: "#64748B" }}>AI utilities designed for your team</p>
        <div className="flex items-center gap-3 mb-8">
          <span className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border font-medium" style={{ borderColor: "#BBF7D0", color: "#16A34A", background: "#F0FDF4" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            {tools.length} tools available
          </span>
          <span className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border font-medium" style={{ borderColor: "#BFDBFE", color: "#1D4ED8", background: "#EFF6FF" }}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure &amp; private
          </span>
        </div>

        {/* Search */}
        <div className="w-full max-w-xl mb-2 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#94A3B8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search tools or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm outline-none focus:ring-2"
            style={{ borderColor: "#E2E8F0", background: "#fff", color: "#1E293B" }}
          />
        </div>

        {/* Smart AI Search button */}
        <button
          className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white mb-8"
          style={{ background: "#0A1628" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Smart AI Search
          <span className="text-xs opacity-60 ml-1">Describe what you need and let AI pick the right tool</span>
        </button>

        {/* Tool cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((tool) => (
            <div
              key={tool.label}
              className="bg-white rounded-xl p-5 border flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer"
              style={{ borderColor: "#E2E8F0" }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{ background: "#0A1628" }}
                >
                  {tool.icon}
                </div>
                {tool.available && (
                  <span className="flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "#F0FDF4", color: "#16A34A" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    AVAILABLE
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#3B4FD9" }}>{tool.label}</p>
                <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>{tool.description}</p>
              </div>
              <button
                className="mt-auto text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                style={{ color: "#3B4FD9" }}
              >
                Open
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Usage footer */}
        <div
          className="w-full mt-8 flex items-center justify-between px-5 py-3 rounded-xl border text-sm"
          style={{ background: "#fff", borderColor: "#E2E8F0", color: "#64748B" }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: "#3B4FD9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>My usage this month: <strong style={{ color: "#1E293B" }}>2 calls · 1,472 tokens · ~$0.008</strong></span>
          </div>
          <button className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "#3B4FD9" }}>
            View details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
