"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, Sparkles, User, LayoutDashboard, BookOpen, Bot, CreditCard } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/ai-assistant", label: "AI Assistant", icon: Bot, badge: "AI" },
    { href: "/courses", label: "Courses", icon: BookOpen },
    { href: "/pricing", label: "Pricing", icon: CreditCard },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="border-b border-slate-800/80 bg-[#090d16]/80 backdrop-blur-xl sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-sky-400 transition-colors">
              Study<span className="text-sky-400">LMS</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
              AI Scholar
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
                    active ? "bg-white/20 text-white" : "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                  }`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Auth & Profile Quick Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/profile"
            className={`p-2 rounded-xl border transition-all ${
              isActive("/profile")
                ? "border-sky-500 text-sky-400 bg-sky-500/10"
                : "border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 bg-slate-900/50"
            }`}
            title="Profile & Settings"
          >
            <User className="w-5 h-5" />
          </Link>

          <Link
            href="/login"
            className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-xl hover:bg-slate-800/60 transition"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090d16] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  active
                    ? "bg-sky-500 text-white font-semibold"
                    : "text-slate-300 hover:bg-slate-800/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-sky-500/20 text-sky-400">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800/60"
            >
              <User className="w-5 h-5" />
              <span>Profile Settings</span>
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-sky-500 text-white font-semibold shadow-lg shadow-sky-500/20"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
