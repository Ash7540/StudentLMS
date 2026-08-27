"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Bot, Send, User, Sparkles, MessageSquare, Plus, Trash2, HelpCircle, Code, BookOpen } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "assistant",
      text: "Hello Jane! I am your StudyLMS AI Tutor. Ask me anything about your computer science modules, algorithm explanations, or test prep!",
      timestamp: "10:30 AM",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setLoading(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: `Here is a detailed study explanation for your query on "${query}":\n\n1. **Core Concept**: Binary Search Trees (BST) allow logarithmic time $O(\\log n)$ search, insertion, and deletion operations when balanced.\n2. **Key Property**: For any node $N$, left child keys are smaller than $N$, and right child keys are greater.\n3. **Practical Tip**: Always verify tree height balance to avoid degeneration into $O(n)$ linear complexity.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex-1 flex min-h-[calc(100vh-4rem)]">
      <Sidebar />

      <main className="flex-1 flex flex-col bg-[#090d16] h-[calc(100vh-4rem)] overflow-hidden">
        {/* Top Header */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-extrabold text-white text-base">StudyLMS AI Tutor</h1>
              <span className="text-xs text-slate-400">Powered by FastAPI & Language Model Backend</span>
            </div>
          </div>

          <button
            onClick={() => setMessages([messages[0]])}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <Plus className="w-4 h-4" />
            <span>New Chat</span>
          </button>
        </div>

        {/* Chat Messages Window */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-3xl ${
                msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  msg.sender === "user"
                    ? "bg-sky-500 text-white"
                    : "bg-gradient-to-tr from-purple-500 to-indigo-600 text-white"
                }`}
              >
                {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-sky-500 text-white rounded-tr-none shadow-md shadow-sky-500/20"
                    : "bg-slate-900/90 border border-slate-800/90 text-slate-200 rounded-tl-none whitespace-pre-wrap"
                }`}
              >
                {msg.text}
                <div
                  className={`text-[10px] mt-2 font-medium ${
                    msg.sender === "user" ? "text-sky-100 text-right" : "text-slate-400"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 max-w-3xl mr-auto">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-400 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                <span>AI Tutor is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input & Prompt Suggestion Chips Bar */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/80 space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => handleSend("Explain Binary Search Trees in simple terms")}
              className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition whitespace-nowrap flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explain BST Trees</span>
            </button>
            <button
              onClick={() => handleSend("Generate a 3-question quiz on MongoDB indexing")}
              className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-purple-500/50 hover:text-purple-400 transition whitespace-nowrap flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>MongoDB Quiz</span>
            </button>
            <button
              onClick={() => handleSend("Debug Python FastAPI async route handler")}
              className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition whitespace-nowrap flex items-center gap-1.5"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Debug FastAPI</span>
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your AI Study Assistant any question..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-sky-500 focus:outline-none transition"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white shadow-lg shadow-sky-500/25 transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
