// import React from "react";
// import CashoutPage from "../components/Cashout";

// function page() {
//   return (
//     <div>
//       <CashoutPage />
//     </div>
//   );
// }

// export default page;

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions'; // তোমার next-auth config
import CashoutPage from '../components/Cashout';

export default async function Page() {
  // ✅ Server-side session
  const session = await getServerSession(authOptions);



  const email = session.user.email;

  // Server-side fetch user data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`
  );
  const user = await res.json();


  return (
    <div>
      <CashoutPage user={user} />
    </div>
  );
}
