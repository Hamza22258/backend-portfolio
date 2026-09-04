"use client";

import React, { useState, useEffect } from "react";
import { Terminal, FileDown, Mail, Check, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("hamzamalik22258@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "Architecture", href: "#architecture" },
    { name: "Impact", href: "#impact" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Radar", href: "#radar" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05070a]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-semibold tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
                  HM<span className="text-cyan-500">_</span>ARCH
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-status-pulse" />
                  ONLINE
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 tracking-tight hidden sm:block">
                Distributed Systems & Tech Lead
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 text-xs font-mono text-slate-400 hover:text-cyan-300 hover:bg-white/[0.04] rounded-md transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              title="Copy hamzamalik22258@gmail.com"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Email</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Email</span>
                </>
              )}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-sm shadow-cyan-500/20"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono flex items-center gap-1"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-slate-950/95 border border-white/[0.08] backdrop-blur-xl shadow-2xl flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400">Available for Lead Roles</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Islamabad (GMT+5)</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04] rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 mt-1 border-t border-white/[0.05] flex gap-2">
              <button
                onClick={() => {
                  copyEmail();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Copy Email</span>
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-lg text-xs font-mono bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
