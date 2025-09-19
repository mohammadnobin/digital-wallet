'use client';
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "PurpleWallet has transformed how I handle my business payments. No more waiting for bank transfers!",
      highlight: "Instant payments changed everything"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Freelancer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "As a freelancer working globally, this app saves me hundreds in fees every month. Simply amazing!",
      highlight: "Saves hundreds monthly"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "College Student",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Perfect for splitting bills with friends. Super easy to use and completely free transfers!",
      highlight: "Perfect for students"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Tech Professional",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "The security features give me peace of mind. Bank-level protection with modern convenience.",
      highlight: "Top-notch security"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made the switch to PurpleWallet
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-purple-200" />
            </div>

            <div className="pt-4">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl text-gray-700 text-center mb-6 leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              {/* Highlight */}
              <div className="text-center mb-6">
                <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[activeTestimonial].highlight}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`relative transition-all duration-200 ${
                index === activeTestimonial
                  ? 'transform scale-110'
                  : 'opacity-60 hover:opacity-80'
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              {index === activeTestimonial && (
                <div className="absolute inset-0 ring-4 ring-purple-400 ring-opacity-50 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join thousands of satisfied users?
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
            Start Free Today
          </button>
        </div>
      </div>
    </section>
  );
}