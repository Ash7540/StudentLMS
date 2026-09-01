"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight, Github } from "lucide-react";
import { authService } from "@/services/auth.service";
import { Alert } from "@/components/ui/alert";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Validation & API status state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setApiError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email address is required.");
      isValid = false;
    } else if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError("");

    const res = await authService.login({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (res.success) {
      router.push("/dashboard");
    } else {
      setApiError(res.error || "Incorrect email address or password.");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#0c1222] via-[#090d16] to-[#090d16]">
      {/* Glow effect */}
      <div className="absolute w-[400px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Brand header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-3 group mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
          </Link>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Welcome Back to <span className="text-sky-400">StudyLMS</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to access your dashboard, courses, and AI tutor
          </p>
        </div>

        {/* Banner Alert for API Errors */}
        {apiError && (
          <Alert
            variant="error"
            title="Authentication Failed"
            message={apiError}
            onClose={() => setApiError("")}
          />
        )}

        {/* Card Form */}
        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Email Field */}
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  placeholder="student@university.edu"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/60 border text-white placeholder-slate-500 text-sm focus:outline-none transition ${
                    emailError
                      ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                      : "border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  }`}
                />
              </div>
              {emailError && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">{emailError}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <a href="#" className="text-xs text-sky-400 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError("");
                  }}
                  placeholder="••••••••••••"
                  className={`w-full pl-11 pr-11 py-3 rounded-xl bg-slate-950/60 border text-white placeholder-slate-500 text-sm focus:outline-none transition ${
                    passwordError
                      ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                      : "border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordError && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">{passwordError}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 disabled:opacity-50 shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-3 text-slate-500 font-semibold">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-200 text-sm font-semibold hover:bg-slate-700/80 transition flex items-center justify-center gap-3"
          >
            <Github className="w-5 h-5" />
            <span>GitHub Account</span>
          </button>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-400">
          Don't have an account?{" "}
          <Link href="/register" className="text-sky-400 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
