import AppPreview from "./components/Home/AppPreview";
import BankHero from "./components/Home/BankHero";
import Features from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import Navbar from "./components/Home/Navbar";
import State from "./components/Home/State";

import TestimonialsSection from "./components/Home/Testimonials";
import WalletSlider from "./components/Home/AboutUs";

import FooterSection from "./components/shared/Footer";
import AboutUs from "./components/Home/AboutUs";

export default async function  Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`)
  const user = await res.json()
  return (
    <>
    <Navbar />
      <HeroSection />
      <AboutUs />
      {/* <BankHero /> */}
      {/* <State /> */}
      <AppPreview />
      <Features/>
      <TestimonialsSection />
      <FooterSection></FooterSection>
    </>
  );
}
