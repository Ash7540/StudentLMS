"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { User, Mail, GraduationCap, BookOpen, Shield, Bell, Save, Check } from "lucide-react";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("Jane Student");
  const [email, setEmail] = useState("jane.student@university.edu");
  const [major, setMajor] = useState("Computer Science");
  const [gradeLevel, setGradeLevel] = useState("Undergraduate");
  const [learningStyle, setLearningStyle] = useState("Visual & Hands-on Code");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex-1 flex min-h-[calc(100vh-4rem)]">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8 space-y-8 bg-[#090d16] overflow-y-auto max-w-4xl">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Student Profile</h1>
          <p className="text-slate-400 text-sm mt-1">Manage your academic preferences and personal account settings</p>
        </div>

        {/* Profile Card Header */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-xl shadow-sky-500/20">
            JS
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-white">{fullName}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                Pro Scholar
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">{email}</p>
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSave} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur space-y-6">
          <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">Academic Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white text-sm focus:border-sky-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white text-sm focus:border-sky-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Academic Major / Field
              </label>
              <input
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white text-sm focus:border-sky-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Grade / Academic Level
              </label>
              <select
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white text-sm focus:border-sky-500 focus:outline-none transition"
              >
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate / Master's">Graduate / Master's</option>
                <option value="Postdoctoral">Postdoctoral</option>
              </select>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 pt-4">AI Preference Settings</h3>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Preferred Learning & AI Explanation Style
            </label>
            <select
              value={learningStyle}
              onChange={(e) => setLearningStyle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white text-sm focus:border-sky-500 focus:outline-none transition"
            >
              <option value="Visual & Hands-on Code">Visual & Hands-on Code Snippets</option>
              <option value="Theoretical Proofs & Mathematics">Theoretical Proofs & Mathematics</option>
              <option value="Simplified Layman Explanations">Simplified Layman Analogy</option>
              <option value="Socratic Q&A Method">Socratic Q&A Method</option>
            </select>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-bold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Saved Successfully!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
