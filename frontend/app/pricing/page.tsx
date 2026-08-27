"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Zap, Shield, HelpCircle } from "lucide-react";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free Student",
      price: annual ? "$0" : "$0",
      period: "forever free",
      description: "Essential AI study assistance and access to introductory courses.",
      features: [
        "10 AI tutor queries per day",
        "Access to public course catalog",
        "Basic study progress metrics",
        "Community Q&A forum access",
      ],
      cta: "Get Started Free",
      popular: false,
      href: "/register",
    },
    {
      name: "Pro Scholar",
      price: annual ? "$12" : "$15",
      period: "per month billed annually",
      description: "Unlimited AI tutor power, advanced analytics, and custom course creation.",
      features: [
        "Unlimited AI tutor queries & code debugging",
        "Automated practice quiz generation",
        "Full course catalog + video tutorials",
        "Exportable PDF study notes & flashcards",
        "Priority 24/7 AI model response speeds",
      ],
      cta: "Start 14-Day Free Trial",
      popular: true,
      href: "/register",
    },
    {
      name: "Institution / Team",
      price: annual ? "$29" : "$35",
      period: "per seat / month",
      description: "For universities, coding bootcamps, and academic departments.",
      features: [
        "Everything in Pro Scholar",
        "Dedicated MongoDB database instance",
        "Educator analytics dashboard & grading",
        "Custom course upload & AI indexing",
        "SAML / Single Sign-On (SSO)",
      ],
      cta: "Contact Enterprise Sales",
      popular: false,
      href: "mailto:sales@studylms.edu",
    },
  ];

  return (
    <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0c1222] via-[#090d16] to-[#090d16]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flexible Academic Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Invest in Your <span className="text-sky-400">Academic Success</span>
          </h1>
          <p className="text-slate-400 text-base">
            Choose a plan that scales with your study needs. Upgrade or cancel anytime.
          </p>

          {/* Billing Switch */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-900 border border-slate-800 pt-2">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                !annual ? "bg-sky-500 text-white shadow-md" : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition ${
                annual ? "bg-sky-500 text-white shadow-md" : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl flex flex-col justify-between relative transition-all ${
                plan.popular
                  ? "bg-slate-900/90 border-2 border-sky-500 shadow-2xl shadow-sky-500/20 scale-[1.03]"
                  : "bg-slate-900/60 border border-slate-800/80 backdrop-blur"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  Most Popular for Students
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-xs text-slate-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 border-t border-slate-800/80 pt-6 text-xs text-slate-300">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href={plan.href}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
