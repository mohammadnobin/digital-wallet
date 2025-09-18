import FeaturesSection from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import SecurityTrustSection from "./components/Home/SecurityTrust";
import HowItWorksSection from "./components/Home/worksSection";

export default function Home() {
  return (
     <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecurityTrustSection />
     </>
  );
}
