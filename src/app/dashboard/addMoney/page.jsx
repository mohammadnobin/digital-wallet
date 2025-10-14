// import React from 'react';
// import AddMoneyPage from '../components/AddMony';
// import { useSession } from 'next-auth/react';

// export default async function page() {
//   const { data: session } = useSession();
//   const user = session?.user;
//       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`)
//   const users = await res.json()
//     return (
//         <div>
//             <AddMoneyPage />
//         </div>
//     );
// }



// app/dashboard/addMoney/page.jsx
import AddMoneyPage from '../components/AddMony';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions'; 

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Please login to access this page</div>;
  }

  const email = session.user.email;

  // Server-side fetch user data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`
  );
  const user = await res.json();


  return (
    <div>
      <AddMoneyPage user={user} />
    </div>
  );
}
