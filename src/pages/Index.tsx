import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import VideoDemo from "@/components/landing/VideoDemo";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Pricing from "@/components/landing/Pricing";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoDemo />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <FinalCTA />
    </main>
  );
};

export default Index;
