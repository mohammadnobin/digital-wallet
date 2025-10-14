"use client"
import React from 'react';


export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: "User Guides",
      date: "20",
      month: "Feb",
      title: "Cashback & Rewards: How to Maximize Your Spending",
      excerpt: "Cashback & Rewards: How to Maximize Your Spending February 20, 2025 User Guides Lorem Ipsum dolor sit...",
      image: "/blog-1.jpg"
    },
    {
      id: 2,
      category: "Security & Privacy",
      date: "20",
      month: "Feb",
      title: "Digital Transaction Security: Tips to Protect Your Wallet",
      excerpt: "Digital Transaction Security: Tips to Protect Your Wallet February 20, 2025 Security & Privacy Lorem Ipsum dolor...",
      image: "/blog-2.jpg"
    },
    {
      id: 3,
      category: "Innovation & Technology",
      date: "20",
      month: "Feb",
      title: "5 Ways to Use Payment Gateway for Online Business",
      excerpt: "5 Ways to Use Payment Gateway for Online Business February 20, 2025 Innovation & Technology Lorem Ipsum...",
      image: "/blog-3.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">OUR BLOG</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Stay Ahead in the Digital<br />Payment World
            </h2>
          </div>
          <button className="hidden md:block px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-opacity-90 transition-all">
            Learn More
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white  text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-center shadow-md">
                  <div className="text-2xl font-bold text-gray-900">{post.date}</div>
                  <div className="text-xs text-gray-600">{post.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Learn More Button */}
        <div className="md:hidden text-center mt-8">
          <button className="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-opacity-90 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}