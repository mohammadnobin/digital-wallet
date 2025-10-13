import React from 'react';
import AboutUs from '../components/Home/AboutUs';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/shared/Footer';

export default function page(props) {
    return (
        <div>
            <Navbar />
           <AboutUs /> 
           <Footer />
        </div>
    );
}

