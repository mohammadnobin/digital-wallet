import FeaturesSection from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import HowItWorksSection from "./components/Home/worksSection";

export default function Home() {
  return (
     <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
     </div>
  );
}
