import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBanner from "@/components/MetricsBanner";
import ArchitectureSimulator from "@/components/ArchitectureSimulator";
import TelemetryConsole from "@/components/TelemetryConsole";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TechRadar from "@/components/TechRadar";
import LeadershipPrinciples from "@/components/LeadershipPrinciples";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <MetricsBanner />
      <ArchitectureSimulator />
      <TelemetryConsole />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <TechRadar />
      <LeadershipPrinciples />
      <ContactSection />
      <Footer />
    </main>
  );
}
