"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SIDEBAR_BG = "#3B4FD9";
const SIDEBAR_ACTIVE_BG = "#FFFFFF";
const SIDEBAR_ACTIVE_TEXT = "#3B4FD9";
const SIDEBAR_TEXT = "rgba(255,255,255,0.75)";
const SIDEBAR_SECTION = "rgba(255,255,255,0.45)";
const SIDEBAR_BORDER = "rgba(255,255,255,0.15)";

type NavItem = { href: string; label: string; icon: React.ReactNode; badge?: number };
type NavGroup = { section: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    section: "MAIN",
    items: [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
      },
      {
        href: "/dashboard/tasks",
        label: "Tasks",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
      },
    ],
  },
  {
    section: "ANALYTICS",
    items: [
      {
        href: "/dashboard/analytics",
        label: "Analytics",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
      },
    ],
  },
  {
    section: "AI",
    items: [
      {
        href: "/dashboard/ai-tools",
        label: "AI Tools",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
      {
        href: "/dashboard/ask-ai",
        label: "Ask AI",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        ),
      },
    ],
  },
  {
    section: "INTEGRATIONS",
    items: [
      {
        href: "/dashboard/integrations",
        label: "Integrations",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        ),
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  function handleLogout() {
    localStorage.removeItem("next_user");
    router.push("/login");
  }

  function isActive(href: string) {
    return href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);
  }

  const SidebarContent = ({ mini = false }: { mini?: boolean }) => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div
        className="flex items-center justify-between px-4 py-4"
        style={{ borderBottom: `1px solid ${SIDEBAR_BORDER}` }}
      >
        <div className={mini ? "hidden" : "flex flex-col"}>
          <span className="text-lg font-extrabold tracking-widest text-white">NEXT</span>
          <span className="text-xs" style={{ color: SIDEBAR_SECTION }}>Platform</span>
        </div>
        {mini && <span className="text-lg font-extrabold tracking-widest text-white mx-auto">N</span>}
        {!mini && (
          <button
            onClick={() => setCollapsed(true)}
            className="hidden md:flex items-center justify-center w-7 h-7 rounded-md hover:bg-white/10 transition-colors"
            style={{ color: SIDEBAR_SECTION }}
            title="Collapse sidebar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        )}
        {mini && (
          <button
            onClick={() => setCollapsed(false)}
            className="absolute top-4 -right-3 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-white shadow text-blue-700 hover:scale-110 transition-transform"
            title="Expand sidebar"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        {navGroups.map((group) => (
          <div key={group.section}>
            {!mini && (
              <p
                className="px-2 mb-1 text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: SIDEBAR_SECTION }}
              >
                {group.section}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    title={mini ? item.label : undefined}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${mini ? "justify-center" : ""}`}
                    style={{
                      background: active ? SIDEBAR_ACTIVE_BG : "transparent",
                      color: active ? SIDEBAR_ACTIVE_TEXT : SIDEBAR_TEXT,
                    }}
                  >
                    {item.icon}
                    {!mini && <span>{item.label}</span>}
                    {!mini && item.badge != null && (
                      <span
                        className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{ background: active ? "#3B4FD9" : "rgba(255,255,255,0.2)", color: active ? "#fff" : "#fff" }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User profile + logout */}
      <div
        className="px-2 py-3"
        style={{ borderTop: `1px solid ${SIDEBAR_BORDER}` }}
      >
        {!mini && (
          <div className="flex items-center gap-3 px-2 py-2 mb-1">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
              style={{ background: "#F97316" }}
            >
              J
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Jhon Mark Era</p>
              <p className="text-xs" style={{ color: SIDEBAR_SECTION }}>Admin</p>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${mini ? "justify-center" : ""}`}
          style={{ color: "#FCA5A5" }}
          title={mini ? "Logout" : undefined}
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {!mini && "Logout"}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="md:hidden flex items-center justify-between px-4 h-14 sticky top-0 z-40"
        style={{ background: SIDEBAR_BG, borderBottom: `1px solid ${SIDEBAR_BORDER}` }}
      >
        <span className="text-lg font-extrabold tracking-widest text-white">NEXT</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-white"
          aria-label="Toggle sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className="md:hidden fixed top-0 left-0 h-full w-60 z-40 transition-transform duration-300"
        style={{
          background: SIDEBAR_BG,
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex flex-col flex-shrink-0 h-screen sticky top-0 relative transition-all duration-300"
        style={{ background: SIDEBAR_BG, width: collapsed ? "64px" : "220px" }}
      >
        <SidebarContent mini={collapsed} />
      </aside>
    </>
  );
}
