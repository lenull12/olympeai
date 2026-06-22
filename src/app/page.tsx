import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import TechStack from "@/components/sections/TechStack";
import CeQuIlFait from "@/components/sections/CeQuIlFait";
import LaOuVousEtes from "@/components/sections/LaOuVousEtes";
import CeQuOnFaitPourVous from "@/components/sections/CeQuOnFaitPourVous";
import TimeCalculator from "@/components/sections/TimeCalculator";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CeQuIlFait />
        <LaOuVousEtes />
        <TechStack />
        <CeQuOnFaitPourVous />
        <TimeCalculator />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
