import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-500">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} StudyLMS. All rights reserved.</p>
      </div>
    </footer>
  );
};
