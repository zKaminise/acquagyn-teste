import HeroSection from "@/components/home/HeroSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUsSection />
      <FacilitiesSection />
      <CTASection />
    </div>
  );
};

export default Home;
