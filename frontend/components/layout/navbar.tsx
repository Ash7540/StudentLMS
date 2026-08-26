import React from "react";
import { GraduationCap } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <GraduationCap className="w-6 h-6 text-sky-400" />
          <span>StudyLMS</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-slate-300 font-medium">
          <a href="#" className="hover:text-sky-400 transition">Dashboard</a>
          <a href="#" className="hover:text-sky-400 transition">AI Assistant</a>
          <a href="#" className="hover:text-sky-400 transition">Courses</a>
          <a href="#" className="hover:text-sky-400 transition">Pricing</a>
        </nav>
      </div>
    </header>
  );
};
