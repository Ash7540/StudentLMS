"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Bot, BookOpen, User, Flame, Award, Settings, LogOut } from "lucide-react";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/ai-assistant", label: "AI Study Tutor", icon: Bot, badge: "AI" },
    { href: "/courses", label: "My Courses", icon: BookOpen },
    { href: "/profile", label: "Profile & Settings", icon: User },
  ];

  return (
    <aside className="w-64 bg-slate-900/60 border-r border-slate-800/80 p-4 flex flex-col justify-between hidden md:flex min-h-[calc(100vh-4rem)]">
      <div className="space-y-6">
        {/* User Card Header */}
        <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
            JS
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-white truncate">Jane Student</span>
            <span className="text-xs text-sky-400 font-medium">Pro Scholar</span>
          </div>
        </div>

        {/* Study Streak Badge */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span>5 Day Streak!</span>
          </div>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">
            +50 XP
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-2">
            Menu
          </span>
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-sky-500/15 border border-sky-500/30 text-sky-400 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${active ? "text-sky-400" : "text-slate-400"}`} />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500 text-white font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer Actions */}
      <div className="pt-4 border-t border-slate-800/80 space-y-1">
        <Link
          href="/pricing"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-800/40 transition"
        >
          <Award className="w-4 h-4 text-purple-400" />
          <span>Upgrade to Pro Plan</span>
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
};
