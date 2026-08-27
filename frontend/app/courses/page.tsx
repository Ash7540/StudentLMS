"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Search, BookOpen, Clock, Users, PlayCircle, Star, Filter, CheckCircle } from "lucide-react";

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Computer Science", "Mathematics", "Database Systems", "AI & Data Science"];

  const courses = [
    {
      id: "cs101",
      title: "Data Structures & Algorithms",
      category: "Computer Science",
      level: "Intermediate",
      duration: "12 Modules • 24 hrs",
      rating: 4.9,
      students: 1240,
      progress: 65,
      description: "Master arrays, linked lists, binary search trees, heap sorting, and dynamic programming.",
    },
    {
      id: "db201",
      title: "Database Architecture & MongoDB",
      category: "Database Systems",
      level: "Beginner to Advanced",
      duration: "8 Modules • 16 hrs",
      rating: 4.8,
      students: 980,
      progress: 80,
      description: "Learn relational vs document databases, indexing strategies, aggregate pipelines, and scaling.",
    },
    {
      id: "math301",
      title: "Discrete Mathematics for CS",
      category: "Mathematics",
      level: "Intermediate",
      duration: "10 Modules • 20 hrs",
      rating: 4.7,
      students: 750,
      progress: 30,
      description: "Logic proofs, set theory, combinatorics, graph theory algorithms, and Boolean algebra.",
    },
    {
      id: "ai401",
      title: "Applied AI & Large Language Models",
      category: "AI & Data Science",
      level: "Advanced",
      duration: "14 Modules • 30 hrs",
      rating: 4.95,
      students: 2100,
      progress: 15,
      description: "FastAPI REST microservices integration, prompt engineering, RAG pipelines, and vector embeddings.",
    },
  ];

  const filteredCourses = courses.filter((c) => {
    const matchesCat = activeCategory === "All" || c.category === activeCategory;
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex-1 flex min-h-[calc(100vh-4rem)]">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8 space-y-8 bg-[#090d16] overflow-y-auto">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Course Catalog</h1>
            <p className="text-slate-400 text-sm mt-1">Explore structured learning paths and track your progress</p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-sky-500 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                activeCategory === cat
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur flex flex-col justify-between hover:border-slate-700 transition space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">{course.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{course.description}</p>

                <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    {course.students} enrolled
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Learning Progress</span>
                    <span className="text-sky-400">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-blue-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-sky-500/15 hover:bg-sky-500 border border-sky-500/30 text-sky-400 hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2">
                <PlayCircle className="w-4 h-4" />
                <span>Continue Learning</span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
