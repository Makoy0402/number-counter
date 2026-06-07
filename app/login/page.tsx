"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Mock auth: store user in localStorage
    const user = { email, name: email.split("@")[0] };
    localStorage.setItem("next_user", JSON.stringify(user));
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)" }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-extrabold tracking-widest" style={{ color: "#F97316" }}>
            NEXT
          </Link>
          <h1 className="mt-3 text-2xl font-bold" style={{ color: "#0A1628" }}>Welcome back</h1>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>Sign in to your account</p>
        </div>
        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#1E293B" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 text-sm"
              style={{ borderColor: "#CBD5E1", color: "#1E293B" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#1E293B" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 text-sm"
              style={{ borderColor: "#CBD5E1", color: "#1E293B" }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: "#0066CC" }}
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm mt-6" style={{ color: "#64748B" }}>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold hover:underline" style={{ color: "#0066CC" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
