import AppPreview from "./components/Home/AppPreview";
import BankHero from "./components/Home/BankHero";
import Features from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import Navbar from "./components/Home/Navbar";

import TestimonialsSection from "./components/Home/Testimonials";
import WalletSlider from "./components/Home/AboutUs";

import FooterSection from "./components/shared/Footer";
import AboutUs from "./components/Home/AboutUs";
import FaqSection from "./components/Home/FaqSection";
import WhyTrustUs from "./components/Home/WhyTrustUs";
import StatsSection from "./components/Home/State";

export default async function  Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`)
  const user = await res.json()
  return (
    <>
    <Navbar />
      <HeroSection />
      <AboutUs />
      <Features/>
      <FaqSection></FaqSection>
      <WhyTrustUs />
      <StatsSection />
      <TestimonialsSection />
      <FooterSection></FooterSection>
    </>
  );
}
