import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
