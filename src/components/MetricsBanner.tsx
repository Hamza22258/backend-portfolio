"use client";

import React from "react";
import { TrendingDown, Zap, Server, Repeat, Rocket, Shield } from "lucide-react";

export default function MetricsBanner() {
  const metrics = [
    {
      value: "-30%",
      label: "Cloud Infrastructure Cost",
      detail: "Re-architected monolithic services into microservices on AWS Lambda & ECS Fargate.",
      icon: TrendingDown,
      color: "text-emerald-400",
      borderGlow: "group-hover:border-emerald-500/40",
      bgGlow: "group-hover:bg-emerald-500/[0.03]",
    },
    {
      value: "-65%",
      label: "Database Query Overhead",
      detail: "Engineered multi-tier Redis & Memcached caching topologies, slashing p99 latency by 45%.",
      icon: Zap,
      color: "text-cyan-400",
      borderGlow: "group-hover:border-cyan-500/40",
      bgGlow: "group-hover:bg-cyan-500/[0.03]",
    },
    {
      value: "<15ms",
      label: "Hardware Event Latency",
      detail: "Dual-protocol architecture: MQTT for offline-tolerant POS registers & SSE for Kitchen Displays.",
      icon: Server,
      color: "text-sky-400",
      borderGlow: "group-hover:border-sky-500/40",
      bgGlow: "group-hover:bg-sky-500/[0.03]",
    },
    {
      value: "70%",
      label: "Code Reusability",
      detail: "Designed private TypeScript shared packages & Nx monorepos, standardizing CI/CD across squads.",
      icon: Repeat,
      color: "text-indigo-400",
      borderGlow: "group-hover:border-indigo-500/40",
      bgGlow: "group-hover:bg-indigo-500/[0.03]",
    },
    {
      value: "5+ Yrs",
      label: "Distributed Systems & Lead",
      detail: "Track record as Technical Lead & Senior Engineer with enterprises, consultancies, and AI startups.",
      icon: Rocket,
      color: "text-amber-400",
      borderGlow: "group-hover:border-amber-500/40",
      bgGlow: "group-hover:bg-amber-500/[0.03]",
    },
    {
      value: "99.99%",
      label: "Production Reliability",
      detail: "AWS Certified Solutions Architect designing resilient queues (SQS, BullMQ), DLQs, and auto-scaling.",
      icon: Shield,
      color: "text-violet-400",
      borderGlow: "group-hover:border-violet-500/40",
      bgGlow: "group-hover:bg-violet-500/[0.03]",
    },
  ];

  return (
    <section id="impact" className="relative py-16 bg-[#070a10]/60 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Quantified Engineering Impact
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Proven Architecture & Cost Metrics
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 mt-2 md:mt-0 max-w-md">
            Measurable engineering ROI delivered across high-concurrency production deployments.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`group relative p-6 rounded-2xl bg-[#0b0f19] border border-white/[0.07] ${m.borderGlow} ${m.bgGlow} transition-all duration-300 shadow-lg shadow-black/20`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-3xl sm:text-4xl font-extrabold ${m.color}`}>
                    {m.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-slate-200 mb-2 font-mono">
                  {m.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {m.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
