import { getServerSession } from 'next-auth/next';
import authOptions from "@/lib/authOptions";

// server-side async function
export async function getServerUser() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return session?.user || null; // যদি session না থাকে তাহলে null রিটার্ন করবে
}