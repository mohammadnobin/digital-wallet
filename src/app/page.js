import AppPreview from "./components/Home/AppPreview";
import BankHero from "./components/Home/BankHero";
import HeroSection from "./components/Home/Hero";
// import HowItWorksSection from "./components/Home/HowItWorks";
// import SecurityTrustSection from "./components/Home/SecurityTrustSection";
import State from "./components/Home/State";

import TestimonialsSection from "./components/Home/Testimonials";
import WalletSlider from "./components/Home/WalletSlider";

import FooterSection from "./components/shared/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WalletSlider />
      <BankHero />
      {/* <State /> */}
      <AppPreview />
      {/* <HowItWorksSection />
      <SecurityTrustSection /> */}
      <TestimonialsSection />
      <FooterSection></FooterSection>
    </>
  );
}
