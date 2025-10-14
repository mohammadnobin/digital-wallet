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

 
import ContactPage from "../components/Home/ContactPage";
 
 export default function page(props) {
     return (
         <div>
           <ContactPage />
         </div>
     );
 }
 
 