import FeaturesSection from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import SecurityTrustSection from "./components/Home/SecurityTrust";
import TestimonialsSection from "./components/Home/Testimonials";
import UserBenefitsSection from "./components/Home/UserBenefits";
import HowItWorksSection from "./components/Home/worksSection";
import FooterSection from "./components/shared/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <FeaturesSection /> */}
      {/* <HowItWorksSection />
      <SecurityTrustSection />
      <UserBenefitsSection /> */}
      <TestimonialsSection />
      <FooterSection></FooterSection>
    </>
  );
}
