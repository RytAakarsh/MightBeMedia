import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TargetedServicesSection from "@/components/TargetedServicesSection";
import MvpSection from "@/components/MvpSection";
import ProcessSection from "@/components/ProcessSection";
import WhyVsSolutionSection from "@/components/WhyVsSolutionSection";
import PortfolioSection from "@/components/PortfolioSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyBadge from "@/components/StickyBadge";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TargetedServicesSection />
        <ServicesSection />
        <MvpSection />
        <ProcessSection />
        <WhyVsSolutionSection />
        <PortfolioSection />
        <ResultsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyBadge />
    </div>
  );
}
