import React from 'react';
import Navbar from '../components/Home/Navbar';
import WhyTrustUs from '../components/Home/WhyTrustUs';
import Footer from '../components/shared/Footer';

export default function page(props) {
    return (
        <div>
          <Navbar />
          <WhyTrustUs /> 
          <Footer /> 
        </div>
    );
}

