
import HeroSection from "@/components/HeroSection";
import FeaturedSuites from "@/components/FeaturedSuites";
import FeatureHighlights from "@/components/FeatureHighlights";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import { promptSuites } from "@/data/prompt-suites";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <HeroSection />
      <FeaturedSuites suites={promptSuites} />
      <FeatureHighlights />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
