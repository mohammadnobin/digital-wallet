import React from 'react';
import Navbar from '../components/Home/Navbar';
import TestimonialsSection from '../components/Home/Testimonials';
import Footer from '../components/shared/Footer';

export default function page(props) {
    return (
        <div>
          <Navbar />
          <TestimonialsSection />
          <Footer />  
        </div>
    );
}

