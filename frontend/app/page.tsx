import React from "react";
import Link from "next/link";
import { Sparkles, BookOpen, Bot, Zap, ShieldCheck, ArrowRight, CheckCircle2, Star, Users, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 bg-gradient-to-b from-[#0c1222] via-[#090d16] to-[#090d16]">
        {/* Glow backdrop blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md animate-fade-in">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Next-Generation Student LMS Powered by AI</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
            Accelerate Your Learning with{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Intelligent Assistance
            </span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            StudyLMS brings together personalized AI tutors, real-time study analytics, automated quiz generation, and course management into one seamless environment.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/25 transition-all hover:scale-[1.03] flex items-center justify-center gap-3"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/ai-assistant"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 backdrop-blur transition-all flex items-center justify-center gap-3"
            >
              <Bot className="w-5 h-5 text-sky-400" />
              <span>Try AI Assistant Demo</span>
            </Link>
          </div>

          {/* Feature Badges Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div className="flex items-center justify-center gap-2 text-slate-300 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>24/7 AI Tutor Access</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>Automated Summaries</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>FastAPI & Mongo Backend</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>Progress Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20 bg-[#090d16] border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Built for Modern Student Workflows
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              Everything you need to master complex subjects, stay organized, and track your academic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur hover:border-sky-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Study Assistant</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instant explanations for complex topics, custom practice quizzes, code debugging, and step-by-step problem breakdown.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur hover:border-sky-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Structured Courses</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Organized learning modules, chapter progress tracking, downloadable notes, and interactive knowledge checks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur hover:border-sky-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Metrics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Monitor total study hours, session streaks, topic mastery levels, and AI query usage in real-time dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 bg-gradient-to-r from-sky-900/40 via-blue-900/30 to-slate-900 border-t border-b border-sky-500/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Upgrade Your Study Routine?
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-base">
            Join thousands of students learning faster and smarter with StudyLMS today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3.5 rounded-xl font-bold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/30 transition-all"
            >
              Create Free Account
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-xl font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
            >
              View Pricing Tiers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
