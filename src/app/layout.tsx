import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Malik | Technical Lead & Distributed Systems Architect",
  description:
    "Portfolio of Hamza Malik — Technical Lead, AWS Certified Solutions Architect, specializing in real-time event-driven backends, NestJS, MQTT, SSE, AWS ECS Fargate, SQS, BullMQ, and distributed cloud infrastructure.",
  keywords: [
    "Hamza Malik",
    "Technical Lead",
    "Backend Architect",
    "Distributed Systems",
    "NestJS",
    "AWS Solutions Architect",
    "TypeScript",
    "MQTT",
    "Server-Sent Events",
    "BullMQ",
    "AWS ECS",
    "Microservices",
  ],
  authors: [{ name: "Hamza Malik", url: "https://linkedin.com/in/iamhamzamalik" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Hamza Malik | Technical Lead & Distributed Systems Architect",
    description:
      "Engineering resilient, event-driven backends, real-time protocols, and scalable cloud infrastructure.",
    url: "https://iamhamzamalik.com",
    siteName: "Hamza Malik Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="flex flex-col bg-[#05070a] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
