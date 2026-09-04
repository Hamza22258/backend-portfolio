"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hamzamalik22258@gmail.com");
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#10b981", "#818cf8"],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+923055018683");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#060910] relative overflow-hidden scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Let&apos;s Build Resilient Systems Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Currently open to full-time Technical Lead roles, distributed systems consulting, and architectural advisories.
            Reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        {/* Bento Grid Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#0a0e18] border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                Direct Email
              </div>
              <div className="text-base font-mono font-bold text-slate-100 mb-2 break-all">
                hamzamalik22258@gmail.com
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Fastest response for architectural discussions, interview requests, or consulting scopes.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
              <a
                href="mailto:hamzamalik22258@gmail.com"
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email (Mail App)</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hamzamalik22258@gmail.com&su=Architectural%20Inquiry%20/%20Opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Compose in Gmail Web</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-[#0a0e18] border border-white/[0.08] hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                Direct Line & WhatsApp
              </div>
              <div className="text-base font-mono font-bold text-slate-100 mb-2">
                +92 305 5018683
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Available for phone discussions, technical screening calls, or instant WhatsApp messages.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
              <a
                href="https://wa.me/923055018683?text=Hi%20Hamza%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="tel:+923055018683"
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Direct Voice Call</span>
              </a>
            </div>
          </div>

          {/* Location & Resume Card */}
          <div className="p-6 rounded-2xl bg-[#0a0e18] border border-white/[0.08] hover:border-indigo-500/40 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Worldwide Remote
                </span>
              </div>

              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                Location & Relocation
              </div>
              <div className="text-base font-mono font-bold text-slate-100 mb-2">
                Islamabad, Pakistan
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Available for full-time Global Remote engagements (US, EMEA, APAC) or hybrid setups.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/10"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="https://linkedin.com/in/iamhamzamalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Hamza22258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
