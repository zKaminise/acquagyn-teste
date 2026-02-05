import HeroSection from "@/components/methodology/HeroSection";
import PillarsSection from "@/components/methodology/PillarsSection";
import LevelsSection from "@/components/methodology/LevelsSection";
import MascotsSection from "@/components/methodology/MascotsSection";
import DifferentialsSection from "@/components/methodology/DifferentialsSection";
import CalendarSection from "@/components/methodology/CalendarSection";
import ReportCardSection from "@/components/methodology/ReportCardSection";
import CTASection from "@/components/methodology/CTASection";

const Methodology = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PillarsSection />
      <LevelsSection />
      <MascotsSection />
      <DifferentialsSection />
      <CalendarSection />
      <ReportCardSection />
      <CTASection />
    </div>
  );
};

export default Methodology;
