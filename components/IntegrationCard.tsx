"use client";

import { useState } from "react";

interface IntegrationCardProps {
  name: string;
  description: string;
  logo: React.ReactNode;
  features: string[];
  accentColor: string;
}

export default function IntegrationCard({ name, description, logo, features, accentColor }: IntegrationCardProps) {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleConnect() {
    setLoading(true);
    setTimeout(() => {
      setConnected(!connected);
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow" style={{ borderColor: "#E2E8F0" }}>
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${accentColor}15` }}
        >
          {logo}
        </div>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: connected ? "#F0FDF4" : "#F1F5F9",
            color: connected ? "#15803D" : "#64748B",
          }}
        >
          {connected ? "● Connected" : "○ Disconnected"}
        </span>
      </div>

      <h3 className="font-bold text-lg mb-1" style={{ color: "#0A1628" }}>{name}</h3>
      <p className="text-sm mb-4 leading-relaxed" style={{ color: "#64748B" }}>{description}</p>

      <ul className="space-y-1 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#475569" }}>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={accentColor} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleConnect}
        disabled={loading}
        className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all"
        style={{
          background: connected ? "#FEF2F2" : accentColor,
          color: connected ? "#B91C1C" : "#FFFFFF",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Connecting..." : connected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}
