"use client";

import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: "✓",
      title: "Task Management",
      desc: "Organize, prioritize, and track tasks with intuitive boards and status updates.",
    },
    {
      icon: "📊",
      title: "Analytics",
      desc: "Gain insights with real-time dashboards and progress reports.",
    },
    {
      icon: "🔗",
      title: "Integrations",
      desc: "Connect seamlessly with Odoo, SharePoint, and more business tools.",
    },
    {
      icon: "🛡",
      title: "Secure & Reliable",
      desc: "Enterprise-grade security to keep your data safe at all times.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#F8FAFC", color: "#1E293B" }}>
      {/* Sticky Header */}
      <header
        className="sticky top-0 z-50 shadow-md"
        style={{ background: "#0A1628" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-2xl font-extrabold tracking-widest" style={{ color: "#F97316" }}>
            NEXT
          </span>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <Link
              href="/login"
              className="text-sm font-medium px-4 py-2 rounded border border-gray-400 text-gray-200 hover:bg-white hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm font-bold px-5 py-2 rounded text-white transition-colors"
              style={{ background: "#F97316" }}
            >
              Get Started
            </Link>
          </nav>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ background: "#0A1628" }}>
            <a href="#features" className="text-gray-300 hover:text-white py-2 border-b border-gray-700">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white py-2 border-b border-gray-700">About</a>
            <Link href="/login" className="text-gray-300 hover:text-white py-2 border-b border-gray-700">Login</Link>
            <Link
              href="/register"
              className="text-center py-2 rounded font-bold text-white"
              style={{ background: "#F97316" }}
            >
              Get Started
            </Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-40 px-4"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-6"
            style={{ background: "#F97316", color: "#fff" }}
          >
            All-in-One Business Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Move{" "}
            <span style={{ color: "#F97316" }}>NEXT</span>
            <br />
            with Confidence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Manage tasks, track progress, and integrate your favorite tools — all from one powerful dashboard built for modern teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 rounded-lg font-bold text-lg text-white transition-transform hover:scale-105"
              style={{ background: "#F97316" }}
            >
              Start for Free
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-white text-white hover:bg-white transition-colors"
              style={{ color: "#fff" }}
            >
              Sign In
            </Link>
          </div>
          {/* Floating stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { label: "Tasks Done", value: "12K+" },
              { label: "Teams", value: "500+" },
              { label: "Integrations", value: "20+" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold" style={{ color: "#F97316" }}>{s.value}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-4" style={{ color: "#0A1628" }}>
              Everything you need to{" "}
              <span style={{ color: "#0066CC" }}>succeed</span>
            </h2>
            <p className="text-lg" style={{ color: "#64748B" }}>
              NEXT brings together the tools modern teams rely on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl p-6 shadow-sm border hover:shadow-lg transition-shadow bg-white"
                style={{ borderColor: "#E2E8F0" }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#0A1628" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / CTA */}
      <section
        id="about"
        className="py-20 px-4"
        style={{ background: "#0A1628" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Ready to take the <span style={{ color: "#F97316" }}>NEXT</span> step?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of teams already using NEXT to streamline operations, hit deadlines, and integrate smarter.
          </p>
          <Link
            href="/register"
            className="inline-block px-10 py-4 rounded-lg font-bold text-lg text-white"
            style={{ background: "#F97316" }}
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t" style={{ borderColor: "#E2E8F0" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-extrabold tracking-widest text-xl" style={{ color: "#0A1628" }}>NEXT</span>
          <p className="text-sm" style={{ color: "#64748B" }}>
            © {new Date().getFullYear()} NEXT Platform. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm" style={{ color: "#64748B" }}>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
