// DashboardLayout.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import authOptions from "@/lib/authOptions";
import axios from "axios";
import { getServerSession } from 'next-auth/next';

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <div>Please login to access this page</div>;
  }
  const email = session.user.email;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`);
  const user = res.data;
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="fixed left-0 z-50 top-0 h-full">
      <Sidebar user={user} />
      </div>
      <div className="flex flex-col md:mt-0 mt-12 flex-1 md:ml-64 lg:ml-72 min-h-screen">
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
