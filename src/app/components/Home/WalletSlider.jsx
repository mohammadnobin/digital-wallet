"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/4.jpg",
    title: "Welcome to PayLink Bank",
    subtitle: "Your trusted digital partner for safe and fast money transfers.",
  },
  {
    image: "/2.jpg",
    title: "Instant Global Transfers",
    subtitle: "Send money anywhere in the world — secure, simple, and seamless.",
  },
  {
    image: "/3.jpg",
    title: "Smart Banking at Your Fingertips",
    subtitle: "Manage your balance, track expenses, and stay in control 24/7.",
  },
  {
    image: "/5.jpg",
    title: "Built for Security & Trust",
    subtitle: "Your data and transactions are protected with advanced encryption.",
  },
  {
    image: "/6.jpg",
    title: "Experience the Future of Digital Banking",
    subtitle: "Fast transfers, cashback rewards, and smart savings — all in one place.",
  },
];

const Banner = () => {
  return (
    <div className="relative w-10/12 mx-auto mb-10 h-[70vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-3 text-lg md:text-xl max-w-xl drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
