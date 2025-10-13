import React from 'react';
import Navbar from '../components/Home/Navbar';
import FeaturesSection from '../components/Home/Features';
import Footer from '../components/shared/Footer';

export default function page(props) {
    return (
        <div>
           <Navbar /> 
           <FeaturesSection />
           <Footer />
        </div>
    );
}

