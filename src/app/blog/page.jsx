import React from 'react';
import Navbar from '../components/Home/Navbar';
import BlogSection from '../components/Home/Blogs';
import Footer from '../components/shared/Footer';

export default function page(props) {
    return (
        <div>
           <Navbar /> 
           <BlogSection />
           <Footer />
        </div>
    );
}

