"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Clock,
  Layers,
  Server,
  Radio,
  Cpu,
  Tv,
  Database,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  role: string;
  protocol: string;
  icon: any;
  tech: string[];
  latency: string;
  rationale: string;
  resilience: string;
  payload: Record<string, any>;
}

export default function ArchitectureSimulator() {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);
  const [simulating, setSimulating] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [scenario, setScenario] = useState<"dine-in" | "offline-sync" | "peak-rush">("dine-in");
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);

  const nodes: NodeData[] = [
    {
      id: "pos",
      name: "POS Hardware Terminal",
      role: "Edge Order Ingestion",
      protocol: "MQTT v5.0 (QoS 1)",
      icon: Radio,
      tech: ["IoT Edge Client", "Offline SQLite Cache", "TLS 1.3", "EMQX SDK"],
      latency: "3.2ms",
      rationale:
        "Point-of-Sale hardware units in bustling restaurants frequently face transient WiFi drops. MQTT provides guaranteed QoS 1 delivery with local disk buffer fallback, ensuring zero lost tickets.",
      resilience: "Local SQLite buffering with automatic replay & deduplication tokens on reconnection.",
      payload: {
        event: "ORDER_CREATED",
        orderId: "ord_98a72b",
        tableNumber: 14,
        server: "Sarah K.",
        items: [
          { sku: "TRUFFLE_BURGER", qty: 2, price: 34.0 },
          { sku: "CRAFT_IPA", qty: 2, price: 16.0 },
        ],
        total: 50.0,
        timestamp: "2026-09-04T12:15:30.120Z",
        offlineFlag: false,
      },
    },
    {
      id: "broker",
      name: "MQTT Event Broker",
      role: "Low-Latency Ingestion Bus",
      protocol: "MQTT over TCP / TLS",
      icon: Radio,
      tech: ["AWS IoT Core / EMQX", "Keep-Alive Heartbeats", "Topic Wildcards"],
      latency: "1.8ms",
      rationale:
        "Maintains persistent, lightweight TCP connections with 2-byte packet headers. Eliminates the overhead of continuous HTTP handshakes across hundreds of simultaneous restaurant terminals.",
      resilience: "Clustered broker nodes behind AWS Network Load Balancer with seamless node failover.",
      payload: {
        topic: "aio/tenants/tenant_01/stores/store_04/pos/ord_98a72b",
        qos: 1,
        retained: false,
        packetSize: "284 bytes",
        brokerNode: "us-east-1a-broker-02",
      },
    },
    {
      id: "nestjs",
      name: "NestJS Core Microservice",
      role: "Domain Logic & Auth",
      protocol: "TypeScript / REST / MQTT",
      icon: Cpu,
      tech: ["NestJS 10", "TypeScript (Strict)", "AWS Cognito Auth", "Nx Monorepo"],
      latency: "7.5ms",
      rationale:
        "Centralized microservice configured in an Nx monorepo. Validates Cognito JWT sessions, verifies menu item inventory, applies business rules, and routes messages down the event pipeline.",
      resilience: "Stateless container auto-scaling on AWS ECS Fargate with zero-downtime rolling deploys.",
      payload: {
        action: "VALIDATE_AND_ROUTE",
        tenantId: "tenant_01",
        authStatus: "TOKEN_VERIFIED",
        userRoles: ["CASHIER", "MANAGER"],
        validatedItemsCount: 4,
        executionTimeMs: 7.42,
      },
    },
    {
      id: "queue",
      name: "Resilient Queue Bus",
      role: "Async Background Pipeline",
      protocol: "AWS SQS FIFO & BullMQ",
      icon: Database,
      tech: ["AWS SQS FIFO", "BullMQ", "Redis Cluster", "Dead-Letter Queue (DLQ)"],
      latency: "2.4ms",
      rationale:
        "Decouples fast order processing from slower downstream side-effects (kitchen ticket routing, thermal print spooling, SMS notifications, and third-party accounting ledger synchronization).",
      resilience: "Dead-Letter Queue (DLQ) with 5x exponential backoff retries and alert triggers on CloudWatch.",
      payload: {
        queue: "aio-kitchen-orders.fifo",
        messageGroupId: "table-14",
        jobId: "bullmq_job_54219",
        attemptsMade: 1,
        maxAttempts: 5,
        redisClusterStatus: "HEALTHY",
      },
    },
    {
      id: "kds",
      name: "Kitchen Display (KDS)",
      role: "Live Order Dispatch",
      protocol: "Server-Sent Events (SSE)",
      icon: Tv,
      tech: ["SSE Stream (HTTP/2)", "React KDS UI", "Audio Beep Triggers", "Auto-Reconnect"],
      latency: "1.9ms",
      rationale:
        "Kitchen screens only need unidirectional push updates. SSE operates natively over standard HTTP/2, uses automatic browser reconnects, and circumvents the stateful connection complexity of WebSockets.",
      resilience: "Last-Event-ID header synchronization ensures kitchen lines never miss a ticket during screen refreshes.",
      payload: {
        kdsStation: "GRILL_AND_HOT_LINE",
        renderPriority: "URGENT",
        prepTimeTargetMinutes: 12,
        clientConnectedClients: 4,
        streamStatus: "LIVE_PUSHING",
      },
    },
  ];

  const runSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveStep(0);
    setSimulatedLogs([`[0.0ms] Initiating simulation: "${scenario.toUpperCase()}"...`]);

    const steps = [
      { step: 0, delay: 600, log: "[+4ms] POS terminal generated ORDER_CREATED packet with idempotency key." },
      { step: 1, delay: 1200, log: "[+7ms] MQTT Broker acknowledged packet via QoS 1 PUBACK." },
      { step: 2, delay: 1900, log: "[+15ms] NestJS service validated Cognito JWT & checked inventory in Redis." },
      { step: 3, delay: 2600, log: "[+18ms] Job queued in BullMQ (Redis) & SQS FIFO bus with DLQ protection." },
      { step: 4, delay: 3300, log: "[+21ms] KDS line received order via SSE push stream. Kitchen bell sounded! 🛎️" },
    ];

    steps.forEach(({ step, delay, log }) => {
      setTimeout(() => {
        setActiveStep(step);
        setSelectedNodeIndex(step);
        setSimulatedLogs((prev) => [...prev, log]);
        if (step === 4) {
          setTimeout(() => {
            setSimulating(false);
          }, 800);
        }
      }, delay);
    });
  };

  const selectedNode = nodes[selectedNodeIndex];

  return (
    <section id="architecture" className="relative py-24 bg-[#05070a] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Featured System Design Case Study
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Event-Driven POS & KDS Real-Time Engine
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Architected at <strong className="text-slate-200">AIO</strong> for enterprise restaurant chains.
              Combines offline-tolerant edge MQTT with unidirectional Server-Sent Events (SSE) and resilient SQS/BullMQ queuing.
            </p>
          </div>

          {/* Scenario Selector & Simulation Trigger */}
          <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-3">
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 focus:outline-none focus:border-cyan-500"
            >
              <option value="dine-in">Scenario: Standard Dine-In Order</option>
              <option value="offline-sync">Scenario: Offline POS Reconnect Sync</option>
              <option value="peak-rush">Scenario: Peak Rush Hour (High Concurrency)</option>
            </select>

            <button
              onClick={runSimulation}
              disabled={simulating}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                simulating
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse"
                  : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
              }`}
            >
              {simulating ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  <span>Simulating Packet...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Simulate Order Event</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Interactive Architecture Flow Pipeline */}
        <div className="mb-8 p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] shadow-2xl">
          <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Interactive Pipeline Topology (Click any node to inspect internals)
            </span>
            <span className="hidden sm:inline text-slate-500">
              Total End-to-End Latency: <strong className="text-emerald-400">&lt; 16.8ms</strong>
            </span>
          </div>

          {/* Node Progression Bar */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isSelected = selectedNodeIndex === index;
              const isActive = activeStep === index;
              const isPast = activeStep > index;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeIndex(index)}
                  className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? "bg-slate-800/90 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                      : isActive
                      ? "bg-cyan-950/40 border-cyan-300 ring-2 ring-cyan-400/40 scale-[1.03]"
                      : isPast
                      ? "bg-slate-900/60 border-emerald-500/30 text-slate-300"
                      : "bg-slate-900/40 border-white/[0.06] hover:border-slate-700 hover:bg-slate-900/80"
                  }`}
                >
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-cyan-500 text-slate-950 font-bold"
                          : isPast
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      Node 0{index + 1}
                    </span>

                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {node.latency}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected || isActive
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-semibold text-slate-100 truncate font-mono">
                        {node.name}
                      </h4>
                      <p className="text-[10px] text-cyan-400 font-mono truncate">{node.protocol}</p>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {node.tech.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.04]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Live Packet Indicator */}
                  {isActive && (
                    <div className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Inspection Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Node Architecture Spec & Design Decisions */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#0a0e18] border border-white/[0.08] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                    {React.createElement(selectedNode.icon, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">{selectedNode.name}</h3>
                    <p className="text-xs font-mono text-cyan-400">
                      Protocol: {selectedNode.protocol} • Latency Target: {selectedNode.latency}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Node
                </span>
              </div>

              {/* Architectural Rationale */}
              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  Why This Technology Choice? (Trade-offs & Rationale)
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-white/[0.04]">
                  {selectedNode.rationale}
                </p>
              </div>

              {/* Fault Tolerance & Failure Recovery */}
              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Fault Tolerance & Failure Resilience
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-white/[0.04]">
                  {selectedNode.resilience}
                </p>
              </div>

              {/* Full Tech Components */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Building Blocks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Next/Prev Navigation */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.06] text-xs font-mono text-slate-400">
              <button
                disabled={selectedNodeIndex === 0}
                onClick={() => setSelectedNodeIndex((prev) => Math.max(0, prev - 1))}
                className="hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous Node
              </button>
              <span>
                Node {selectedNodeIndex + 1} of {nodes.length}
              </span>
              <button
                disabled={selectedNodeIndex === nodes.length - 1}
                onClick={() => setSelectedNodeIndex((prev) => Math.min(nodes.length - 1, prev + 1))}
                className="hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next Node →
              </button>
            </div>
          </div>

          {/* Live Packet Payload & Log Stream */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* JSON Payload Inspector */}
            <div className="p-5 rounded-2xl bg-[#070b13] border border-white/[0.08] shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono font-semibold text-slate-200">
                    Live Packet Schema (JSON)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">payload.json</span>
              </div>
              <pre className="text-[11px] font-mono text-cyan-300 bg-slate-950 p-3.5 rounded-xl overflow-x-auto border border-white/[0.04] leading-relaxed max-h-[220px]">
                {JSON.stringify(selectedNode.payload, null, 2)}
              </pre>
            </div>

            {/* Live Simulation Event Stream */}
            <div className="p-5 rounded-2xl bg-[#070b13] border border-white/[0.08] shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-slate-200">
                      Simulation Event Telemetry
                    </span>
                  </div>
                  <button
                    onClick={() => setSimulatedLogs([])}
                    className="text-[10px] font-mono text-slate-500 hover:text-slate-300"
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-1.5 max-h-[140px] overflow-y-auto font-mono text-[11px] pr-1">
                  {simulatedLogs.length === 0 ? (
                    <p className="text-slate-500 italic">
                      Click &apos;Simulate Order Event&apos; above to trace live packet delivery through the topology...
                    </p>
                  ) : (
                    simulatedLogs.map((log, idx) => (
                      <div key={idx} className="text-slate-300 flex items-start gap-1.5">
                        <ChevronRight className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{log}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Observability: AWS CloudWatch</span>
                <span className="text-emerald-400">Status: 200 OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
