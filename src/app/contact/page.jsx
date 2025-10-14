// import React from 'react';
// import { authOptions } from '@/lib/authOptions';
// import { getServerSession } from 'next-auth/next';
// const page = async ()  => {
//         const session=await getServerSession(authOptions);
//         console.log(session?.user?.accessToken);
//     console.log('ok');
//     return (
//         <div>
//             thsi is concut page
//         </div>
//     );
// };

// export default page;

"use client";
 
import ContactPage from "../components/Home/ContactPage";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/shared/Footer";

 
 export default function page(props) {
     return (
         <div>
             <Navbar />
           <ContactPage />
            <Footer />
         </div>
     );
 }
 
 