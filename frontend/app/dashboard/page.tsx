import React from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { BookOpen, Clock, Bot, Award, PlayCircle, CheckCircle2, TrendingUp, Sparkles, ArrowRight, Flame } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex min-h-[calc(100vh-4rem)]">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8 space-y-8 bg-[#090d16] overflow-y-auto">
        {/* Welcome Header Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Semester 2 • Computer Science</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Welcome back, Jane! 👋
              </h1>
              <p className="text-slate-300 text-sm max-w-xl">
                You've completed <span className="text-sky-400 font-semibold">75%</span> of your weekly study goals. Keep up the great momentum!
              </p>
            </div>

            <Link
              href="/ai-assistant"
              className="px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <Bot className="w-5 h-5" />
              <span>Ask AI Tutor</span>
            </Link>
          </div>
        </div>

        {/* KPI Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enrolled Courses</span>
              <BookOpen className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">4</div>
            <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>2 active this week</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Study Hours</span>
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">18.5 hrs</div>
            <div className="mt-2 text-xs text-slate-400">Target: 25 hrs/week</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Queries Used</span>
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">42</div>
            <div className="mt-2 text-xs text-sky-400">Pro Plan Unlimited</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quiz Avg Score</span>
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">92%</div>
            <div className="mt-2 text-xs text-emerald-400">Top 5% of class</div>
          </div>
        </div>

        {/* Content Section: Active Courses & Recent AI History */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Courses List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-white">Continue Learning</h2>
              <Link href="/courses" className="text-xs font-bold text-sky-400 hover:underline">
                View All Courses
              </Link>
            </div>

            <div className="space-y-4">
              {/* Course Item 1 */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Data Structures & Algorithms</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Module 4: Binary Search Trees & Heap Sorting</p>
                    <div className="w-48 bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                      <div className="bg-sky-500 h-full w-[65%]" />
                    </div>
                  </div>
                </div>
                <Link
                  href="/courses"
                  className="px-4 py-2 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:text-white font-semibold text-xs transition flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Resume</span>
                </Link>
              </div>

              {/* Course Item 2 */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Database System Architecture</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Module 2: Indexing & MongoDB Schema Optimization</p>
                    <div className="w-48 bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                      <div className="bg-purple-500 h-full w-[80%]" />
                    </div>
                  </div>
                </div>
                <Link
                  href="/courses"
                  className="px-4 py-2 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold text-xs transition flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Resume</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick AI Suggestions Panel */}
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-white">Recommended AI Prompts</h2>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <Link
                href="/ai-assistant"
                className="block p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-xs text-slate-200 transition"
              >
                <span className="font-bold text-sky-400 block mb-1">💡 Concept Summary</span>
                "Explain MongoDB indexing mechanisms with real-world examples"
              </Link>
              <Link
                href="/ai-assistant"
                className="block p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-xs text-slate-200 transition"
              >
                <span className="font-bold text-purple-400 block mb-1">📝 Practice Quiz</span>
                "Generate 5 multiple-choice questions on Binary Trees"
              </Link>
              <Link
                href="/ai-assistant"
                className="block p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-xs text-slate-200 transition"
              >
                <span className="font-bold text-emerald-400 block mb-1">⚡ Code Review</span>
                "Debug my Python FastAPI async route handler"
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
