import AppPreview from "./components/Home/AppPreview";
import BankHero from "./components/Home/BankHero";
import Features from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import Navbar from "./components/Home/Navbar";

import TestimonialsSection from "./components/Home/Testimonials";
import WalletSlider from "./components/Home/AboutUs";

import FooterSection from "./components/shared/Footer";
import AboutUs from "./components/Home/AboutUs";
<<<<<<< HEAD
import FaqSection from "./components/Home/FaqSection";
=======
import WhyTrustUs from "./components/Home/WhyTrustUs";
import StatsSection from "./components/Home/State";
>>>>>>> 7faa9328af3f092f1f3cb0b618b519b14e87aafb

export default async function  Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`)
  const user = await res.json()
  return (
    <>
    <Navbar />
      <HeroSection />
      <AboutUs />
<<<<<<< HEAD
      {/* <BankHero /> */}
      {/* <State /> */}
      <AppPreview />
      <Features/>
      {/* <TestimonialsSection /> */}
      <FaqSection></FaqSection>
=======
      <BankHero />
      <AppPreview />
      <Features/>
      <WhyTrustUs />
      <StatsSection />
      <TestimonialsSection />
>>>>>>> 7faa9328af3f092f1f3cb0b618b519b14e87aafb
      <FooterSection></FooterSection>
    </>
  );
}
