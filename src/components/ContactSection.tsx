"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  Send,
  Calendar,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Architectural Opportunity / Project Inquiry",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#060910] relative overflow-hidden scroll-mt-20">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Mail className="w-3.5 h-3.5" />
              Initiate Transmission
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Let&apos;s Build Resilient Systems Together
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Currently open to full-time Technical Lead roles, distributed systems consulting, and architectural advisories.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#0a0e18] border border-white/[0.08] flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href="mailto:hamzamalik22258@gmail.com"
                      className="text-sm font-mono font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      hamzamalik22258@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#0a0e18] border border-white/[0.08] flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Direct Line / WhatsApp
                    </div>
                    <a
                      href="tel:+923055018683"
                      className="text-sm font-mono font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                    >
                      +92 305 5018683
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#0a0e18] border border-white/[0.08] flex items-center gap-3.5 shadow-xl">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Location & Mobility
                  </div>
                  <div className="text-sm font-mono font-medium text-slate-200">
                    Islamabad, Pakistan • Available for Remote Worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Resume CTA */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Public Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com/in/iamhamzamalik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Hamza22258"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/10"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Interactive Direct Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0a0e18] border border-white/[0.08] shadow-2xl">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono mb-2">Message Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-md font-mono mb-6">
                  Thank you for reaching out. I will respond to your message promptly. You can also contact me directly at{" "}
                  <a href="mailto:hamzamalik22258@gmail.com" className="text-cyan-400 underline">
                    hamzamalik22258@gmail.com
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 mb-2 border-b border-white/[0.06]">
                  <h3 className="text-lg font-bold text-white font-mono">Send Direct Transmission</h3>
                  <p className="text-xs font-mono text-slate-500">
                    Direct message dispatch to Hamza Malik (Technical Lead)
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe (CTO / Recruiter)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Message Content</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your architectural challenge, role specifications, or project scope..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Transmission</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
