"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Play, Pause, RotateCcw, Activity, Check, Copy } from "lucide-react";

interface LogEntry {
  id: string;
  time: string;
  level: "INFO" | "METRIC" | "WARN" | "SUCCESS";
  tag: string;
  message: string;
}

export default function TelemetryConsole() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [inputCommand, setInputCommand] = useState<string>("");

  const initialLogs: LogEntry[] = [
    {
      id: "1",
      time: "12:20:01.104",
      level: "INFO",
      tag: "sys.init",
      message: "NestJS microservice initialized in Nx monorepo (v26.8.1 runtime)",
    },
    {
      id: "2",
      time: "12:20:02.340",
      level: "INFO",
      tag: "aws.cognito",
      message: "Session token verified for cashier terminal [tenant: aio_store_04]",
    },
    {
      id: "3",
      time: "12:20:03.512",
      level: "INFO",
      tag: "mqtt.broker",
      message: "Packet received on 'aio/orders/create' (QoS 1, latency 3.4ms)",
    },
    {
      id: "4",
      time: "12:20:04.118",
      level: "METRIC",
      tag: "redis.cache",
      message: "Multi-tier cache hit rate: 98.4% | DB queries prevented: 1,420/min",
    },
    {
      id: "5",
      time: "12:20:05.904",
      level: "SUCCESS",
      tag: "sqs.dispatch",
      message: "Dispatched job #9042 to SQS FIFO queue [group: table_14]",
    },
    {
      id: "6",
      time: "12:20:06.882",
      level: "INFO",
      tag: "kds.sse",
      message: "Pushed ORDER_READY stream payload to 3 active kitchen display screens",
    },
  ];

  useEffect(() => {
    setLogs(initialLogs);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const periodicLogs = [
      { level: "METRIC", tag: "redis.cache", message: "Cache hit: 98.7% | p99 response time: 14.1ms" },
      { level: "INFO", tag: "mqtt.health", message: "Keep-alive heartbeat ACK received from 12 POS devices" },
      { level: "INFO", tag: "aws.ecs", message: "Fargate container cluster CPU utilization: 22% (Healthy)" },
      { level: "SUCCESS", tag: "bullmq.worker", message: "Background ticket reconciliation job completed in 18ms" },
      { level: "INFO", tag: "kds.sse", message: "SSE client stream alive [channel: kitchen_station_grill]" },
      { level: "METRIC", tag: "sqs.queue", message: "Queue lag: 0.00s | Dead-Letter Queue (DLQ) messages: 0" },
    ];

    const interval = setInterval(() => {
      const randomEntry = periodicLogs[Math.floor(Math.random() * periodicLogs.length)];
      const now = new Date();
      const timeString = `${now.toTimeString().split(" ")[0]}.${String(now.getMilliseconds()).padStart(3, "0")}`;

      setLogs((prev) => [
        ...prev.slice(-40),
        {
          id: Math.random().toString(),
          time: timeString,
          level: randomEntry.level as any,
          tag: randomEntry.tag,
          message: randomEntry.message,
        },
      ]);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputCommand.trim().toLowerCase();
    if (!cmd) return;

    const now = new Date();
    const timeString = `${now.toTimeString().split(" ")[0]}.${String(now.getMilliseconds()).padStart(3, "0")}`;

    let reply = "";
    if (cmd === "help") {
      reply = "Available commands: 'skills', 'arch', 'metrics', 'contact', 'clear', 'resume'";
    } else if (cmd === "skills") {
      reply = "Stack: NestJS, TypeScript, AWS (ECS, Lambda, SQS, Cognito), MQTT, SSE, Redis, Python/Django, Docker";
    } else if (cmd === "arch") {
      reply = "Architecture: Event-Driven Microservices with MQTT edge ingestion, BullMQ queues, and SSE push.";
    } else if (cmd === "metrics") {
      reply = "Impact: -30% AWS Cost, -65% DB Queries, <15ms Real-time Latency, 70% Code Reuse.";
    } else if (cmd === "contact") {
      reply = "Email: hamzamalik22258@gmail.com | Phone: +92 305 5018683 | LinkedIn: /in/iamhamzamalik";
    } else if (cmd === "resume") {
      reply = "Resume PDF available at /resume.pdf";
      window.open("/resume.pdf", "_blank");
    } else if (cmd === "clear") {
      setLogs([]);
      setInputCommand("");
      return;
    } else {
      reply = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setLogs((prev) => [
      ...prev,
      { id: Math.random().toString(), time: timeString, level: "INFO", tag: "cli.user", message: `$ ${inputCommand}` },
      { id: Math.random().toString(), time: timeString, level: "SUCCESS", tag: "cli.output", message: reply },
    ]);
    setInputCommand("");
  };

  return (
    <section className="py-16 bg-[#040609] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#080c14] border border-white/[0.08] shadow-2xl overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0c101a] border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>telemetry@sys-arch: ~/live-cluster-monitor</span>
              </div>
            </div>

            {/* Live Metrics Pills */}
            <div className="hidden lg:flex items-center gap-4 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-emerald-400" />
                Hit Rate: <strong className="text-emerald-400 font-semibold">98.6%</strong>
              </span>
              <span>
                p99 Latency: <strong className="text-cyan-400 font-semibold">14.2ms</strong>
              </span>
              <span>
                Queue Lag: <strong className="text-slate-200">0.00s</strong>
              </span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                HEALTHY
              </span>
            </div>

            {/* Pause / Resume & Clear */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 flex items-center gap-1 cursor-pointer transition-colors"
              >
                {isPaused ? <Play className="w-3 h-3 text-emerald-400" /> : <Pause className="w-3 h-3 text-amber-400" />}
                <span>{isPaused ? "Resume Stream" : "Pause"}</span>
              </button>
              <button
                onClick={() => setLogs([])}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                title="Clear Logs"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Terminal Screen / Log Body */}
          <div
            ref={terminalContainerRef}
            className="p-4 md:p-6 font-mono text-xs h-[260px] overflow-y-auto bg-[#060910] space-y-1.5 leading-relaxed selection:bg-cyan-500/30"
          >
            {logs.map((log) => {
              const levelColor =
                log.level === "METRIC"
                  ? "text-cyan-400"
                  : log.level === "SUCCESS"
                  ? "text-emerald-400"
                  : log.level === "WARN"
                  ? "text-amber-400"
                  : "text-slate-400";

              return (
                <div key={log.id} className="flex items-start gap-2.5 hover:bg-white/[0.02] py-0.5 px-1 rounded">
                  <span className="text-slate-600 text-[10px] shrink-0 select-none">{log.time}</span>
                  <span className={`text-[10px] font-bold px-1 rounded bg-white/[0.03] ${levelColor} shrink-0`}>
                    {log.level}
                  </span>
                  <span className="text-cyan-300/80 shrink-0">[{log.tag}]</span>
                  <span className="text-slate-300 break-all">{log.message}</span>
                </div>
              );
            })}
          </div>

          {/* Interactive Command Input Form */}
          <form
            onSubmit={handleCommandSubmit}
            className="flex items-center px-4 py-2.5 bg-[#090d16] border-t border-white/[0.06] text-xs font-mono"
          >
            <span className="text-cyan-400 mr-2">$</span>
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="Type 'help', 'skills', 'arch', 'metrics', or 'contact'..."
              className="flex-1 bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none"
            />
            <span className="hidden sm:inline text-[10px] text-slate-600">Press Enter ↵</span>
          </form>
        </div>
      </div>
    </section>
  );
}
