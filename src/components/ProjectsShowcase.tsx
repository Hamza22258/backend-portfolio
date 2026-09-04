"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Server,
  Shield,
  Terminal,
  Cpu,
  Radio,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectItem {
  id: string;
  title: string;
  category: "cloud" | "systems" | "ai" | "core";
  categoryLabel: string;
  badge: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  link?: string;
  icon: any;
}

export default function ProjectsShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const projects: ProjectItem[] = [
    {
      id: "aio-engine",
      title: "AIO Real-Time POS & KDS Engine",
      category: "cloud",
      categoryLabel: "Distributed & Cloud",
      badge: "Production Architecture",
      description:
        "High-scale event-driven backend operating system unifying restaurant hardware registers, kitchen display screens, and automated order routing.",
      highlights: [
        "Sub-15ms real-time event delivery via MQTT and Server-Sent Events (SSE)",
        "Resilient queue pipeline with AWS SQS FIFO and BullMQ on Redis",
        "Containerized on AWS ECS Fargate within an Nx monorepo",
      ],
      tech: ["NestJS", "TypeScript", "MQTT", "SSE", "AWS ECS", "AWS SQS", "BullMQ", "Redis"],
      link: "https://aioapp.com",
      icon: Server,
    },
    {
      id: "webalcazar",
      title: "WebAlcazar — ML Web App Firewall (WAF)",
      category: "systems",
      categoryLabel: "Systems & Security",
      badge: "Security & Capstone",
      description:
        "Machine learning-powered Web Application Firewall that inspects live network traffic to detect and block malicious payloads including SQLi, XSS, and automated bot probes.",
      highlights: [
        "Real-time packet inspection and payload anomaly detection",
        "Trained classification models for attack signature identification",
        "WebSocket notifications for security incident triage",
      ],
      tech: ["Python", "Machine Learning", "Scikit-Learn", "WebSockets", "FastAPI"],
      github: "https://github.com/Hamza22258",
      icon: Shield,
    },
    {
      id: "packet-sniffer",
      title: "Django Packet Sniffer",
      category: "systems",
      categoryLabel: "Systems & Security",
      badge: "Network Diagnostics",
      description:
        "Network packet analysis engine built with Scapy and Python sockets to capture, reconstruct, and visualize HTTP and TCP packet metadata on a real-time dashboard.",
      highlights: [
        "Low-level raw socket capturing with Python Scapy",
        "Protocol dissection and HTTP stream reassembly",
        "Real-time analytics dashboard with React.js & Django",
      ],
      tech: ["Python", "Scapy", "Django", "React.js", "Raw Sockets"],
      github: "https://github.com/Hamza22258/Django-Packet-Sniffer",
      icon: Radio,
    },
    {
      id: "c-shell",
      title: "Linux Custom C-Shell",
      category: "systems",
      categoryLabel: "Systems & Security",
      badge: "Systems Programming",
      description:
        "A Unix shell implementation written in C utilizing POSIX system calls to manage processes, handle piping, I/O redirection, and background jobs.",
      highlights: [
        "Process lifecycle management with fork(), execvp(), and waitpid()",
        "UNIX signal handling and interrupt trap management",
        "Multi-stage command chaining and file descriptor redirection",
      ],
      tech: ["C", "POSIX System Calls", "Process Management", "Signals", "Linux"],
      github: "https://github.com/Hamza22258/C-Shell",
      icon: Terminal,
    },
    {
      id: "aes-engine",
      title: "Cryptographic AES Cipher Engine",
      category: "systems",
      categoryLabel: "Systems & Security",
      badge: "Low-Level Cryptography",
      description:
        "High-performance C++ implementation of the 128-bit Advanced Encryption Standard (AES) with custom matrix transformations and key expansion schedules.",
      highlights: [
        "128-bit symmetric key expansion and round key generator",
        "Optimized SubBytes, ShiftRows, and MixColumns byte matrices",
        "Header-only modular integration for encryption and decryption",
      ],
      tech: ["C++", "AES-128", "Cryptography", "Bit Manipulation"],
      github: "https://github.com/Hamza22258/AES",
      icon: Shield,
    },
    {
      id: "lidar-pipeline",
      title: "3D LIDAR Spatial Pipeline & ML",
      category: "ai",
      categoryLabel: "Applied AI & 3D",
      badge: "Spatial Computing",
      description:
        "Point-cloud spatial ingestion and 3D surface mesh reconstruction using Open3D and Python ML models for real-time mobile and web utilities.",
      highlights: [
        "High-density LIDAR point-cloud voxel filtering and mesh generation",
        "On-device Python ML inference (Text-to-Speech & Vision OCR)",
        "High-performance C++ bindings for low-latency spatial math",
      ],
      tech: ["Open3D", "Python ML", "C++", "Android NDK", "Docker"],
      icon: Cpu,
    },
    {
      id: "devsinc-microservices",
      title: "AWS Cloud Modernization & LLM Assistant",
      category: "cloud",
      categoryLabel: "Distributed & Cloud",
      badge: "Enterprise Migration",
      description:
        "Monolithic to serverless microservices modernization on AWS Lambda & API Gateway, paired with an LLM virtual assistant for e-commerce customers.",
      highlights: [
        "Cut client cloud infrastructure bills by 30%",
        "Overhauled Django APIs yielding a 50% throughput gain",
        "Integrated OKTA SSO and WebSocket streaming endpoints",
      ],
      tech: ["AWS Lambda", "API Gateway", "Python ML", "Django", "WebSockets", "Docker"],
      icon: Server,
    },
    {
      id: "recipe-app-api",
      title: "Recipe App RESTful API",
      category: "core",
      categoryLabel: "Backend & Core",
      badge: "TDD & Docker",
      description:
        "Production-grade RESTful API built following strict Test-Driven Development (TDD), Docker containerization, PostgreSQL, and Swagger/OpenAPI specifications.",
      highlights: [
        "Test-Driven Development with 100% unit and integration test coverage",
        "Multi-stage Docker containerization and Docker Compose setup",
        "Swagger / OpenAPI schema generation and token authentication",
      ],
      tech: ["Python", "Django REST Framework", "PostgreSQL", "Docker", "Swagger"],
      github: "https://github.com/Hamza22258/recipe-app-api",
      icon: Layers,
    },
  ];

  const filterTabs = [
    { key: "all", label: "All Systems & Projects" },
    { key: "cloud", label: "Distributed & Cloud" },
    { key: "systems", label: "Systems & Security" },
    { key: "ai", label: "Applied AI & 3D" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-[#05070a] border-b border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Systems, Architectures & Open Source
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              From enterprise real-time pipelines and cloud modernizations to low-level Linux shells, cryptography, and network security.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedFilter === tab.key
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative p-6 rounded-2xl bg-[#090d16] border border-white/[0.07] hover:border-cyan-500/40 hover:bg-[#0c121e] transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/30"
              >
                <div>
                  {/* Top Bar: Icon, Badge & Links */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/[0.04] text-cyan-300 border border-white/[0.06]">
                        {project.badge}
                      </span>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-1"
                          title="View on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                          title="View Live Platform"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white font-mono group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5 text-[11px] sm:text-xs text-slate-300">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
