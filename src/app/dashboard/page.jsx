import React from 'react';
import DigitalWalletDashboard from './components/dashboardHome';

import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth/next';
import axios from 'axios';
export default async function page() {
    const session=await getServerSession(authOptions);
    console.log(session);
      if (!session) {
    return <div>Please login to access this page</div>;
  }
  const email = session.user.email;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`);
  const user = res.data;
    return (
        <div> 
            <DigitalWalletDashboard user={user} />
        </div>
    );
}

