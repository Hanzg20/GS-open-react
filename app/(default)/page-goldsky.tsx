import HeaderGoldSky from "@/components/ui/header-goldsky";
import FooterGoldSky from "@/components/ui/footer-goldsky";
import HeroSection from "@/components/goldsky/hero-section";
import PlatformOverview from "@/components/goldsky/platform-overview";
import CapabilityBlocks from "@/components/goldsky/capability-blocks";
import SolutionCards from "@/components/goldsky/solution-cards";
import CTASection from "@/components/goldsky/cta-section";

export const metadata = {
  title: "GoldSky Technologies - Unified Technology Platform for Smart Industries",
  description: "Building the unified technology platform for Smart Factory, Smart Retail, and Community Services. Engineering-driven solutions for the future of industry.",
};

export default function HomePage() {
  return (
    <>
      <HeaderGoldSky />
      <main className="pt-16">
        <HeroSection />
        <PlatformOverview />
        <CapabilityBlocks />
        <SolutionCards />
        <CTASection />
      </main>
      <FooterGoldSky />
    </>
  );
}