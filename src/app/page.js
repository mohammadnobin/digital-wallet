import AppPreview from "./components/Home/AppPreview";
<<<<<<< HEAD
import BankHero from "./components/Home/BankHero";
=======
>>>>>>> 7187d9470b64bb1372ef41ecc480b0c34db515da
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
      <HeroSection />
      <WalletSlider />
      <BankHero />
      {/* <State /> */}
      <AppPreview />
      <Features/>
      <TestimonialsSection />
      <FooterSection></FooterSection>
    </>
  );
}
