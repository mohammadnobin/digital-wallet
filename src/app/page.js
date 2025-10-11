import AppPreview from "./components/Home/AppPreview";
import BankHero from "./components/Home/BankHero";
import Features from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import State from "./components/Home/State";

import TestimonialsSection from "./components/Home/Testimonials";
import WalletSlider from "./components/Home/WalletSlider";

import FooterSection from "./components/shared/Footer";

export default async function  Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`)
  const user = await res.json()
  return (
    <>
      <WalletSlider />
      <HeroSection />
      <BankHero />
      {/* <State /> */}
      <AppPreview />
      <Features/>
      <TestimonialsSection />
      <FooterSection></FooterSection>
    </>
  );
}
