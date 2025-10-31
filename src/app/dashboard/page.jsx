import React from 'react';
import DigitalWalletDashboard from './components/dashboardHome/dashboardHome';

import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth/next';
import axios from 'axios';
import AdminDashboard from './components/adminDashboard/page';
export default async function page() {
    const session=await getServerSession(authOptions);
      if (!session) {
    return <div>Please login to access this page</div>;
  }
  const email = session.user.email;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`);
  const user = res.data;
  const role=res?.data?.role;


  if (!role) {
    return <div>Loading...</div>;
  }

  if (role === 'user') {
    return <DigitalWalletDashboard user={user} />;
  } else if (role === 'admin') {
    return <AdminDashboard user={user} />;
  }
}

