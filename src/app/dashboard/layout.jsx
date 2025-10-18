import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import authOptions from "@/lib/authOptions";
import axios from "axios";
import { getServerSession } from 'next-auth/next';


export default async function DashboardLayout({ children }) {
    const session=await getServerSession(authOptions);
          if (!session) {
        return <div>Please login to access this page</div>;
      }
      const email = session.user.email;
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`);
      const user = res.data;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header user={user}/>

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

