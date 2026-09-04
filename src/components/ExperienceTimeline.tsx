"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Shield, Users, Layers } from "lucide-react";

interface RoleExperience {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  leadershipTags: string[];
  techStack: string[];
}

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const experiences: RoleExperience[] = [
    {
      company: "AIO",
      url: "https://www.linkedin.com/company/aioappofficial/",
      role: "Technical Lead",
      period: "06/2025 – Present",
      location: "Islamabad, Pakistan",
      description:
        "Leading the backend architecture for an AI-native restaurant platform unifying POS registers, kitchen display units, kiosks, and back-office pipelines.",
      achievements: [
        "Engineered scalable, event-driven backend microservices using NestJS within a strict TypeScript monorepo (Nx).",
        "Designed and optimized dual real-time protocols: MQTT for offline-tolerant POS hardware registers and Server-Sent Events (SSE) for Kitchen Display Systems (KDS).",
        "Orchestrated resilient background job pipelines with AWS SQS FIFO queues and BullMQ (Redis) for ticket routing and audit trails.",
        "Containerized core services on AWS ECS Fargate, building automated CI/CD deployment pipelines with GitHub Actions.",
        "Secured multi-tenant authorization workflows using AWS Cognito and implemented monitoring with AWS CloudWatch & CloudTrail.",
      ],
      leadershipTags: [
        "Architectural RFCs & Monorepo Governance (Nx)",
        "Hardware-to-Cloud Protocol Alignment",
        "Engineering Mentorship & Code Reviews",
      ],
      techStack: [
        "NestJS",
        "TypeScript",
        "MQTT",
        "Server-Sent Events",
        "AWS ECS Fargate",
        "AWS SQS",
        "BullMQ",
        "Redis",
        "AWS Cognito",
        "GitHub Actions",
      ],
    },
    {
      company: "Galixo",
      url: "https://galixo.com",
      role: "Senior Software Engineer",
      period: "09/2024 – 05/2025",
      location: "Rawalpindi / Islamabad",
      description:
        "Delivered full-stack microservices, 3D point-cloud spatial data ingestion, and on-device ML integrations for web & mobile applications.",
      achievements: [
        "Architected and implemented a 3D LIDAR scanning mechanism using Open3D (Python/C++ bindings) for point cloud spatial reconstruction.",
        "Integrated Python ML pipelines into Web & Android platforms for real-time Text-to-Speech (TTS) and Image-to-Text (OCR/Vision) inference.",
        "Built modular, secure RESTful and GraphQL APIs using NestJS, Node.js, and Laravel, coupled with Next.js for server-side rendering.",
        "Automated CI/CD deployments using Docker, Jenkins, and GitHub Actions, establishing production release standards.",
        "Mentored junior engineers and directed cross-functional squads to meet aggressive client delivery milestones.",
      ],
      leadershipTags: ["Spatial Computing Integration", "Cross-Functional Squad Leadership", "Security Auditing (OAuth 2.0 & JWT)"],
      techStack: [
        "Open3D",
        "Python ML",
        "NestJS",
        "Next.js",
        "Docker",
        "GraphQL",
        "OAuth 2.0",
        "Jenkins",
        "Laravel",
      ],
    },
    {
      company: "Devsinc",
      url: "https://devsinc.com",
      role: "Software Engineer",
      period: "02/2022 – 09/2024",
      location: "Islamabad, Pakistan",
      description:
        "Led cloud modernization initiatives, monolithic-to-microservices migrations, and conversational AI features for global enterprise clients.",
      achievements: [
        "Guided a team in re-architecting monolithic services into an event-driven microservices topology using AWS Lambda and API Gateway, slashing infrastructure costs by 30%.",
        "Engineered an LLM-driven Conversational Virtual Assistant for e-commerce platforms using Python Machine Learning.",
        "Re-engineered core Django backend services and database indices, yielding a 50% increase in API throughput.",
        "Leveraged WebSockets and Node.js Streams to deliver real-time file serving and duplex communications to enterprise clients.",
        "Integrated enterprise identity federations with OKTA and custom Passport.js authentication strategies.",
      ],
      leadershipTags: ["30% Cloud Bill Reduction", "LLM Virtual Assistant Delivery", "Microservices Migration Leadership"],
      techStack: [
        "AWS Lambda",
        "API Gateway",
        "Node.js",
        "Django",
        "Python ML",
        "WebSockets",
        "OKTA",
        "Docker",
        "React.js",
      ],
    },
    {
      company: "CatalyzeX",
      url: "https://analyzex.com",
      role: "Full Stack Engineer",
      period: "09/2021 – 04/2023",
      location: "Islamabad, Pakistan",
      description:
        "Built high-concurrency e-commerce architectures, distributed caching layers, and shared internal tooling.",
      achievements: [
        "Engineered a two-tier caching topology utilizing Redis and Memcached, resulting in a 65% reduction in database load and a 45% latency improvement.",
        "Architected and published an internal private TypeScript NPM package, increasing code reuse across projects by 70%.",
        "Developed and maintained large-scale e-commerce features with ReactJS, Node.js, and PostgreSQL, driving a 20% sales increase and 35% bounce rate reduction.",
      ],
      leadershipTags: ["Internal Shared NPM Tooling", "Distributed Caching Topology", "eCommerce Conversion Optimization"],
      techStack: ["Node.js", "TypeScript", "Redis", "Memcached", "PostgreSQL", "React.js", "Docker"],
    },
  ];

  const current = experiences[activeTab];

  return (
    <section id="experience" className="py-24 bg-[#060910] border-b border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Engineering & Leadership Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Career Progression & Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A progression from high-concurrency full-stack development to microservices architecture, cloud-native
            infrastructure, and Technical Leadership.
          </p>
        </div>

        {/* Desktop & Mobile Tabbed Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Selector Column */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {experiences.map((exp, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer shrink-0 lg:shrink flex flex-col justify-between ${
                    isActive
                      ? "bg-slate-900 border-cyan-400/80 shadow-lg shadow-cyan-500/10"
                      : "bg-[#090d16] border-white/[0.05] hover:bg-slate-900/60 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-base font-bold text-white">
                      {exp.company}
                    </span>
                    {isActive && (
                      <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-cyan-400" />
                    )}
                  </div>
                  <div className="text-xs text-cyan-400 font-mono font-medium mb-1 truncate">
                    {exp.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono flex items-center gap-2">
                    <span>{exp.period}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0a0e18] border border-white/[0.08] shadow-2xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-2">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                    {current.role}
                  </h3>
                  <span className="text-cyan-400 font-mono text-lg font-bold">@ {current.company}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {current.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {current.location}
                  </span>
                </div>
              </div>

              {current.url && (
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors w-fit"
                >
                  <span>Company Profile</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Role Context */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              {current.description}
            </p>

            {/* Leadership Tags */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                Technical Leadership & Architectural Scope
              </h4>
              <div className="flex flex-wrap gap-2">
                {current.leadershipTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Accomplishments */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Key Production Engineering Accomplishments
              </h4>
              <ul className="space-y-2.5">
                {current.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Tags */}
            <div className="pt-6 border-t border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Core Stack Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {current.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
