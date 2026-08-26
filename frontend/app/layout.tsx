import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyLMS — AI-Powered Learning Management System",
  description: "Empower your study journey with intelligent AI assistance, customized study plans, and course management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-900 text-slate-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
