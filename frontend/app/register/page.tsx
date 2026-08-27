"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Mail, Lock, User, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#0c1222] via-[#090d16] to-[#090d16]">
      <div className="absolute w-[450px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-3 group mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
          </Link>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Create Your <span className="text-sky-400">StudyLMS</span> Account
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Start your AI-powered learning journey today
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6">
          {/* Role selector tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-950/80 border border-slate-800">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`py-2 rounded-lg text-xs font-bold transition ${
                role === "student"
                  ? "bg-sky-500 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Student Account
            </button>
            <button
              type="button"
              onClick={() => setRole("educator")}
              className={`py-2 rounded-lg text-xs font-bold transition ${
                role === "educator"
                  ? "bg-sky-500 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Educator Account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Student"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@university.edu"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition"
                />
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                required
                id="terms"
                className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-sky-500 focus:ring-sky-500"
              />
              <label htmlFor="terms" className="text-xs text-slate-400">
                I agree to the <a href="#" className="text-sky-400 hover:underline">Terms of Service</a> & <a href="#" className="text-sky-400 hover:underline">Privacy Policy</a>
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 mt-4"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Create Free Account</span>
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="text-sky-400 font-semibold hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
