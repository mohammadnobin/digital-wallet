import Features from "./components/Home/Features";
import HeroSection from "./components/Home/Hero";
import TestimonialsSection from "./components/Home/Testimonials";
import AboutUs from "./components/Home/AboutUs";
import FaqSection from "./components/Home/FaqSection";
import WhyTrustUs from "./components/Home/WhyTrustUs";
import StatsSection from "./components/Home/State";
import authOptions from "@/lib/authOptions";
import { getServerSession } from 'next-auth/next';
import BlogSection from "./components/Home/Blogs";

export default async function  Home() {
    const session = await getServerSession(authOptions);
;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,{
  //   headers: {
  //       Authorization: `Bearer ${session.user.accessToken}`,
  //     },
  // })
  // const user = await res.json()
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Features/>
      <FaqSection></FaqSection>
      <WhyTrustUs />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
