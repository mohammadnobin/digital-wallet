import AppPreview from "./components/Home/AppPreview";
import Features from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import Navbar from "./components/Home/Navbar";
import TestimonialsSection from "./components/Home/Testimonials";
import FooterSection from "./components/shared/Footer";
import AboutUs from "./components/Home/AboutUs";
import FaqSection from "./components/Home/FaqSection";
import WhyTrustUs from "./components/Home/WhyTrustUs";
import StatsSection from "./components/Home/State";
import authOptions from "@/lib/authOptions";
import { getServerSession } from 'next-auth/next';
import AddUserForm from "./components/Home/AddUserForm";

export default async function  Home() {
    const session = await getServerSession(authOptions);
;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,{
  //   headers: {
  //       Authorization: `Bearer ${session.user.accessToken}`,
  //     },
  // })
  // const user = await res.json()
  // console.log(user);
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
      <AddUserForm />
    </>
  );
}
