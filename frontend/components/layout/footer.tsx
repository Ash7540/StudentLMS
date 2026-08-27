import React from "react";
import Link from "next/link";
import { GraduationCap, Github, Twitter, Linkedin, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060911] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white">
                Study<span className="text-sky-400">LMS</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students and educators with AI-driven learning tools, automated study plans, and interactive course management.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/Ash7540/StudentLMS" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link href="/dashboard" className="hover:text-sky-400 transition">Student Dashboard</Link></li>
              <li><Link href="/ai-assistant" className="hover:text-sky-400 transition">AI Study Tutor</Link></li>
              <li><Link href="/courses" className="hover:text-sky-400 transition">Course Catalog</Link></li>
              <li><Link href="/pricing" className="hover:text-sky-400 transition">Subscription Plans</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base">Architecture</h4>
            <ul className="space-y-2.5">
              <li><a href="https://github.com/Ash7540/StudentLMS" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">GitHub Repository</a></li>
              <li><span className="text-slate-500">Next.js 14 App Router</span></li>
              <li><span className="text-slate-500">FastAPI Python Backend</span></li>
              <li><span className="text-slate-500">MongoDB Database</span></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base">Account & Access</h4>
            <ul className="space-y-2.5">
              <li><Link href="/login" className="hover:text-sky-400 transition">Sign In</Link></li>
              <li><Link href="/register" className="hover:text-sky-400 transition">Register Student</Link></li>
              <li><Link href="/profile" className="hover:text-sky-400 transition">Student Profile</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} StudyLMS Platform. Open Source Project.</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>using Next.js & FastAPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
