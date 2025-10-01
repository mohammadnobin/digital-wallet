import AppPreview from "./components/Home/AppPreview";
import HeroSection from "./components/Home/Hero";
import SecurityTrustSection from "./components/Home/SecurityTrustSection";
import State from "./components/Home/State";

import TestimonialsSection from "./components/Home/Testimonials";

import FooterSection from "./components/shared/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <State />
      <AppPreview />
      <SecurityTrustSection />
      <TestimonialsSection />
      <FooterSection></FooterSection>
    </>
  );
}
