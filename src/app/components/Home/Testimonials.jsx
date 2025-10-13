// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function TestimonialsSection() {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Small Business Owner",
//       avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
//       rating: 5,
//       text: "DigitalWallet has transformed how I handle my business payments. No more waiting for bank transfers!",
//       highlight: "Instant payments changed everything"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Freelancer",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
//       rating: 5,
//       text: "As a freelancer working globally, this app saves me hundreds in fees every month. Simply amazing!",
//       highlight: "Saves hundreds monthly"
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "College Student",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
//       rating: 5,
//       text: "Perfect for splitting bills with friends. Super easy to use and completely free transfers!",
//       highlight: "Perfect for students"
//     },
//     {
//       id: 4,
//       name: "David Kim",
//       role: "Tech Professional",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
//       rating: 5,
//       text: "The security features give me peace of mind. Bank-level protection with modern convenience.",
//       highlight: "Top-notch security"
//     }
//   ];

//   // Auto slide effect
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [testimonials.length]);

//   const nextTestimonial = () => {
//     setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const StarRating = ({ rating }) => (
//     <div className="flex justify-center mb-4">
//       {[...Array(5)].map((_, index) => (
//         <Star
//           key={index}
//           className={`w-5 h-5 ${
//             index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
//           }`}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
//             What Our Users Say
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Join thousands of satisfied customers who've made the switch to PurpleWallet
//           </p>
//         </div>

//         {/* Testimonial */}
//         <div className="max-w-4xl mx-auto relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={testimonials[activeTestimonial].id}
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -40 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-2xl p-8 shadow-lg"
//             >
//               <div className="flex justify-center mb-2">
//                 <Quote className="w-10 h-10 text-white" />
//               </div>

//               <StarRating rating={testimonials[activeTestimonial].rating} />

//               <blockquote className="text-lg sm:text-xl text-gray-700 text-center mb-6 leading-relaxed">
//                 "{testimonials[activeTestimonial].text}"
//               </blockquote>

//               <div className="text-center mb-6">
//                 <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                   {testimonials[activeTestimonial].highlight}
//                 </span>
//               </div>

//               <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
//                 <img
//                   src={testimonials[activeTestimonial].avatar}
//                   alt={testimonials[activeTestimonial].name}
//                   className="w-14 h-14 rounded-full object-cover mr-0 sm:mr-4 mb-3 sm:mb-0"
//                 />
//                 <div>
//                   <div className="font-semibold text-gray-900">
//                     {testimonials[activeTestimonial].name}
//                   </div>
//                   <div className="text-gray-500 text-sm">
//                     {testimonials[activeTestimonial].role}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation */}
//           <button
//             aria-label="Previous testimonial"
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
//           >
//             <ChevronLeft className="w-5 h-5 text-gray-600" />
//           </button>
//           <button
//             aria-label="Next testimonial"
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
//           >
//             <ChevronRight className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         {/* Thumbnails */}
//         <div className="flex justify-center flex-wrap gap-4 mt-10">
//           {testimonials.map((t, index) => (
//             <button
//               key={t.id}
//               onClick={() => setActiveTestimonial(index)}
//               className={`relative transition-all duration-200 ${
//                 index === activeTestimonial
//                   ? 'scale-110 ring-4 ring-blue-400 ring-opacity-50 rounded-full'
//                   : 'opacity-60 hover:opacity-90'
//               }`}
//             >
//               <img
//                 src={t.avatar}
//                 alt={t.name}
//                 className="w-14 h-14 rounded-full object-cover"
//               />
//             </button>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
//             <div className="text-gray-600">Average Rating</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
//             <div className="text-gray-600">Happy Reviews</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
//             <div className="text-gray-600">Would Recommend</div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-12">
//           <p className="text-gray-600 mb-4">
//             Ready to join thousands of satisfied users?
//           </p>
//           <Link href="/login">
//             <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//               Start Free Today
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function TestimonialsSection() {
  const testimonials = [
    {
      title: "Payments made easy",
      text: "This app has simplified every part of my financial routine. Sending and receiving money is effortless, and everything happens in seconds.",
      name: "Sarah Vadelah",
      location: "New York",
      img: "/ginger-lady.jpg",
    },
    {
      title: "Super secure and reliable",
      text: "I love how safe my transactions feel. The security and encryption features give me total confidence every time I use it.",
      name: "John Doe",
      location: "London",
      img: "/cheerful-handsome-man.jpg",
    },
    {
      title: "Fast and hassle-free",
      text: "As a freelancer working with clients abroad, this app saves me time and huge transfer fees. Payments arrive instantly and without stress.",
      name: "Emma Jueis",
      location: "Sydney",
      img: "/business-male.jpg",
    },
    {
      title: "Love the analytics feature",
      text: "DigitalWallet helps me track every transaction easily. The spending insights are super useful for managing my business finances.",
      name: "Michael Luixz",
      location: "Toronto",
      img: "/optimistic-young-woman.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              What Our Users Say
            </h2>
          </div>
          <p className="text-primary max-w-xl text-3xl mt-4 md:mt-0">
            Join thousands of satisfied customers who trust DigitalWallet for secure, seamless payments every day.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.title}
              </h3>
              <p className="italic text-gray-500 mb-6">“{t.text}”</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-primary text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
