import React from "react";
import { BookOpen, Sparkles, Shield, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center px-4 py-16 text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>Next-Generation AI Student LMS Platform</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Master Your Studies with <br />
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            AI-Powered Intelligence
          </span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
          StudyLMS combines personalized AI study assistants, interactive dashboard metrics, course tracking, and seamless payment integration.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="px-6 py-3 rounded-lg font-semibold bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 transition">
            Get Started Free
          </button>
          <button className="px-6 py-3 rounded-lg font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition">
            View Documentation
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur">
            <BookOpen className="w-8 h-8 text-sky-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Smart Dashboard</h3>
            <p className="text-slate-400 text-sm">Track your learning progress, completed modules, and study hours effortlessly.</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur">
            <Sparkles className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">AI Assistant</h3>
            <p className="text-slate-400 text-sm">Interactive language models tailored for custom tutoring and instantaneous Q&A.</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur">
            <Shield className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Secure & Scalable</h3>
            <p className="text-slate-400 text-sm">FastAPI + MongoDB foundation with JWT security and subscription management.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
