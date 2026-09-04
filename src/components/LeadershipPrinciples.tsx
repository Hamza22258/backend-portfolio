"use client";

import React from "react";
import { ShieldCheck, GitBranch, Activity, Users, Layers, Award } from "lucide-react";

export default function LeadershipPrinciples() {
  const principles = [
    {
      title: "Resilience Over Optimism",
      subtitle: "Designing for Distributed Fault Tolerance",
      description:
        "Every network call can fail. Systems must be built with idempotency keys, Dead-Letter Queues (DLQs), exponential backoffs, and circuit breakers. Graceful degradation beats catastrophic cascade failure every time.",
      icon: ShieldCheck,
      badge: "Distributed Resiliency",
    },
    {
      title: "Monorepo Governance & Strict Typing",
      subtitle: "Unified Architectural Boundaries",
      description:
        "Using Nx monorepos and strict TypeScript configurations to maintain clear boundaries between domains. Shared contracts and private packages prevent duplicate implementations and ensure 100% type safety across squads.",
      icon: GitBranch,
      badge: "Nx & TypeScript",
    },
    {
      title: "Observability Over Guesswork",
      subtitle: "Continuous Telemetry & Metrics",
      description:
        "If it is not measured, it cannot be optimized. Every service outputs structured JSON logs with correlated trace IDs to AWS CloudWatch. Real-time alerting triggers on p99 latency degradation, cache miss spikes, and queue backpressure.",
      icon: Activity,
      badge: "Production Telemetry",
    },
    {
      title: "Empathetic Mentorship & High Velocity",
      subtitle: "Engineering Culture & Standards",
      description:
        "Code reviews should be collaborative design clinics, not gatekeeping hurdles. Guiding junior and mid-level developers through architectural RFCs, clean code design patterns, and blameless post-incident reviews.",
      icon: Users,
      badge: "People & Culture",
    },
  ];

  return (
    <section className="py-24 bg-[#05070a] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Technical Leadership Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Engineering Principles & Mindset
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Core philosophies honed across 5 years of architecting scalable systems and directing engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-white/[0.07] hover:border-cyan-500/40 hover:bg-[#0c121e] transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.03] text-cyan-300 border border-white/[0.06]">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-mono mb-1">{p.title}</h3>
                <h4 className="text-xs font-mono text-cyan-400 mb-3">{p.subtitle}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
