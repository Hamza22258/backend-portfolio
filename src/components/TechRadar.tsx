"use client";

import React, { useState } from "react";
import {
  Radio,
  Cloud,
  Server,
  Database,
  Terminal,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: any;
  description: string;
  items: { name: string; level: string; note: string }[];
}

export default function TechRadar() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      name: "Event-Driven & Real-Time",
      icon: Radio,
      description: "Low-latency streaming, IoT edge delivery, and reliable asynchronous task pipelines.",
      items: [
        { name: "MQTT v5.0", level: "Production Expert", note: "Offline-tolerant POS hardware register delivery" },
        { name: "Server-Sent Events (SSE)", level: "Production Expert", note: "Kitchen Display (KDS) live push streams" },
        { name: "WebSockets & Streams", level: "Advanced", note: "Duplex real-time file serving & streaming updates" },
        { name: "AWS SQS & FIFO", level: "Production Expert", note: "Decoupled message ingestion with Dead-Letter Queues" },
        { name: "BullMQ & Redis", level: "Production Expert", note: "Distributed job scheduling & background worker pools" },
        { name: "Redis Pub/Sub", level: "Advanced", note: "Inter-node broadcast messaging & cache invalidation" },
      ],
    },
    {
      name: "Cloud & DevOps (AWS Certified)",
      icon: Cloud,
      description: "Certified cloud architecture, serverless workflows, container orchestration, and CI/CD.",
      items: [
        { name: "AWS ECS with Fargate", level: "Certified (SA)", note: "Serverless containerized microservice deployments" },
        { name: "AWS Lambda & API Gateway", level: "Certified (SA)", note: "Event triggers, file processors, 30% cost savings" },
        { name: "AWS Cognito", level: "Production Expert", note: "Multi-tenant JWT authorization & session lifecycles" },
        { name: "AWS S3 & CloudFront", level: "Production Expert", note: "Pre-signed uploads & lifecycle storage tiers" },
        { name: "CloudWatch & CloudTrail", level: "Advanced", note: "Centralized logging, alerts & audit observability" },
        { name: "Docker & Kubernetes", level: "Advanced", note: "Multi-stage container builds & cluster scaling" },
        { name: "GitHub Actions & Jenkins", level: "Production Expert", note: "Automated linting, test suites, and deploy pipelines" },
      ],
    },
    {
      name: "Backend & Microservices",
      icon: Server,
      description: "Clean architecture, typed domain models, and high-concurrency API gateways.",
      items: [
        { name: "NestJS (TypeScript)", level: "Lead Level", note: "Strict modular architectures, dependency injection" },
        { name: "Node.js & Express", level: "Lead Level", note: "High-throughput asynchronous event loops" },
        { name: "Python (Django / FastAPI)", level: "Advanced", note: "Re-engineered APIs for +50% throughput gain" },
        { name: "GraphQL & RESTful APIs", level: "Production Expert", note: "Typed schema design, federated endpoints" },
        { name: "Nx Monorepo Workspaces", level: "Lead Level", note: "Standardized cross-package builds & shared libraries" },
        { name: "Laravel / PHP", level: "Proficient", note: "Enterprise portals & legacy service migrations" },
      ],
    },
    {
      name: "Databases & Multi-Tier Caching",
      icon: Database,
      description: "ACID consistency, distributed cache hierarchies, and indexing optimizations.",
      items: [
        { name: "Redis Cluster", level: "Production Expert", note: "Distributed caching cutting DB queries by 65%" },
        { name: "PostgreSQL & TypeORM", level: "Production Expert", note: "Relational modeling, migrations, connection pools" },
        { name: "MongoDB / NoSQL", level: "Advanced", note: "Flexible document schemas, aggregation pipelines" },
        { name: "Memcached", level: "Advanced", note: "Volatile high-speed key-value cache layer" },
        { name: "MySQL & SQL Server", level: "Advanced", note: "Enterprise database administration & queries" },
      ],
    },
    {
      name: "Systems, AI & Spatial",
      icon: Cpu,
      description: "Low-level systems programming, 3D point cloud processing, and applied ML.",
      items: [
        { name: "Open3D & 3D LIDAR", level: "Specialized", note: "Point-cloud voxelization & surface mesh generation" },
        { name: "C & C++ Systems", level: "Core Foundation", note: "POSIX process management, signals, custom AES cipher" },
        { name: "LLM Conversational AI", level: "Applied ML", note: "Virtual assistants for e-commerce query triage" },
        { name: "On-Device ML (TTS/OCR)", level: "Applied ML", note: "Python pipelines integrated into Web & Android" },
      ],
    },
  ];

  const currentCategory = categories[activeCategory];

  return (
    <section id="radar" className="py-24 bg-[#060910] border-b border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Technical Domain Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Architecture & Technology Radar
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Categorized by system domain, production application depth, and real-world scale.
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Detail Grid */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0e18] border border-white/[0.08] shadow-2xl">
          <div className="pb-4 mb-6 border-b border-white/[0.06]">
            <h3 className="text-xl font-bold text-white font-mono mb-1">
              {currentCategory.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              {currentCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.05] hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-sm font-bold text-slate-100">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
