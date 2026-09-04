"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  GraduationCap,
  Terminal,
  Cpu,
  Layers,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export default function Hero() {
  const [copiedCli, setCopiedCli] = useState(false);

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npx iamhamzamalik");
    setCopiedCli(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#10b981", "#a78bfa"],
    });
    setTimeout(() => setCopiedCli(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 mb-6 shadow-sm shadow-cyan-500/10">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono tracking-wider font-semibold uppercase">
              Technical Lead & Backend Systems Architect
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Engineering Resilient,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
              Event-Driven Backends
            </span>{" "}
            & Cloud Infrastructure.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8 font-normal">
            Around 5 years architecting enterprise distributed backends, real-time device pipelines (
            <span className="text-cyan-300 font-mono text-sm">MQTT</span> &{" "}
            <span className="text-cyan-300 font-mono text-sm">SSE</span>), and scalable cloud topologies on{" "}
            <span className="text-cyan-300 font-mono text-sm">AWS ECS Fargate</span>. Led teams to slash infrastructure costs by{" "}
            <strong className="text-emerald-400 font-semibold">30%</strong> and cut database overhead by{" "}
            <strong className="text-emerald-400 font-semibold">65%</strong> with NestJS, TypeScript, and Redis.
          </p>

          {/* Verified Credentials Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 transition-colors">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>AWS Solutions Architect – Associate</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 transition-colors">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>AWS Certified Cloud Practitioner</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 transition-colors">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>BS Computer Science (FAST-NUCES)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-mono font-medium bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-semibold hover:from-cyan-400 hover:to-sky-400 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Architecture Canvas</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-mono font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/80 transition-all"
            >
              <span>Career Journey</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Hamza22258"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-800 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/iamhamzamalik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-800 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Interactive Terminal Quick-Run Chip */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#090d16] border border-white/[0.08] shadow-inner text-xs font-mono text-slate-400">
            <span className="text-cyan-400">$</span>
            <span className="text-slate-200">curl -s https://iamhamzamalik.com/whoami</span>
            <button
              onClick={handleCopyCli}
              className="ml-2 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy Command"
            >
              {copiedCli ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCli ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
