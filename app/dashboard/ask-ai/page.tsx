"use client";

import { useState } from "react";

const examplePrompts = [
  "Summarise our key HR policies in one paragraph",
  "What's in the latest changelog?",
  "Find any document mentioning leave balances",
];

type Message = { role: "user" | "ai"; text: string };

export default function AskAIPage() {
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function handleStart() {
    setStarted(true);
  }

  function handleSend(text?: string) {
    const msg = text ?? input.trim();
    if (!msg) return;
    setStarted(true);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: msg },
      {
        role: "ai",
        text: "This is a UI demo — connect your knowledge base to get real answers grounded in your organisation's documents.",
      },
    ]);
    setInput("");
  }

  return (
    <div className="min-h-full flex flex-col" style={{ background: "#F0F2F8" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b" style={{ borderColor: "#E2E8F0" }}>
        <div className="flex items-center gap-2 text-sm" style={{ color: "#64748B" }}>
          <button className="hover:underline" onClick={() => setStarted(false)}>← Back to Knowledge Base</button>
        </div>
        <button
          onClick={() => { setMessages([]); setStarted(false); }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white"
          style={{ background: "#3B4FD9" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          New Conversation
        </button>
      </div>

      <div className="flex flex-1">
        {/* Left panel — conversation list */}
        <div className="w-64 flex-shrink-0 bg-white border-r flex flex-col" style={{ borderColor: "#E2E8F0" }}>
          <div className="px-4 py-3 border-b" style={{ borderColor: "#E2E8F0" }}>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#94A3B8" }}>
              Filter by department
            </p>
            <select
              className="w-full text-sm border rounded-lg px-3 py-2 outline-none"
              style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
            >
              <option>All conversations</option>
              <option>HR</option>
              <option>Finance</option>
              <option>IT</option>
            </select>
          </div>
          <div className="flex-1 flex items-center justify-center px-4 text-center">
            {messages.length === 0 ? (
              <p className="text-xs" style={{ color: "#94A3B8" }}>
                No conversations yet. Click <strong>New Conversation</strong> to start asking questions.
              </p>
            ) : (
              <div className="w-full pt-3">
                <div
                  className="px-3 py-2 rounded-lg text-xs font-medium cursor-pointer"
                  style={{ background: "#EEF2FF", color: "#3B4FD9" }}
                >
                  Current session
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          {!started && messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "#EEF2FF" }}
              >
                <svg className="w-8 h-8" style={{ color: "#3B4FD9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold mb-2" style={{ color: "#0A1628" }}>Ask your Knowledge Base</h2>
              <p className="text-sm text-center max-w-md mb-8" style={{ color: "#64748B" }}>
                Get instant answers from your organisation's documents. Every answer is grounded in real sources and cites where it found the information.
              </p>

              {/* Stats */}
              <div className="flex gap-4 mb-8 w-full max-w-md">
                <div className="flex-1 border rounded-xl px-4 py-3" style={{ borderColor: "#E2E8F0", background: "#fff" }}>
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-1 flex items-center gap-1" style={{ color: "#94A3B8" }}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                    </svg>
                    Collections available
                  </p>
                  <p className="text-xl font-bold" style={{ color: "#0A1628" }}>1</p>
                </div>
                <div className="flex-1 border rounded-xl px-4 py-3" style={{ borderColor: "#E2E8F0", background: "#fff" }}>
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-1 flex items-center gap-1" style={{ color: "#94A3B8" }}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Your department
                  </p>
                  <p className="text-xl font-bold" style={{ color: "#0A1628" }}>Org-wide</p>
                </div>
              </div>

              <button
                onClick={handleStart}
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white mb-8"
                style={{ background: "#3B4FD9" }}
              >
                + Start New Conversation →
              </button>

              {/* Try asking */}
              <div className="w-full max-w-md rounded-xl p-4" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#94A3B8" }}>Try asking</p>
                <div className="space-y-2">
                  {examplePrompts.map((p) => (
                    <button
                      key={p}
                      onClick={() => handleSend(p)}
                      className="block w-full text-left text-sm px-3 py-2 rounded-lg hover:bg-white transition-colors"
                      style={{ color: "#1E293B" }}
                    >
                      "{p}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-lg px-4 py-3 rounded-xl text-sm"
                      style={
                        m.role === "user"
                          ? { background: "#3B4FD9", color: "#fff" }
                          : { background: "#fff", color: "#1E293B", border: "1px solid #E2E8F0" }
                      }
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              {/* Input */}
              <div className="px-6 py-4 bg-white border-t" style={{ borderColor: "#E2E8F0" }}>
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="flex-1 border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2"
                    style={{ borderColor: "#E2E8F0", color: "#1E293B" }}
                    placeholder="Ask a question about your knowledge base..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  />
                  <button
                    onClick={() => handleSend()}
                    className="px-4 py-2.5 rounded-lg text-white text-sm font-semibold"
                    style={{ background: "#3B4FD9" }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
