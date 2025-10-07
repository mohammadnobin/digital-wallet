"use server";
import bcrypt from "bcrypt";

export const loginUSer = async (payload) => {
  const { email, password } = payload;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`);
    const result = await res.json();
    const user = result.data || result;

    if (!user) return null;

    const isPasswordOK = await bcrypt.compare(password, user.password);
    if (!isPasswordOK) return null;

    return user;
  } catch (err) {
    console.log("Error fetching user by email:", err);
    return null;
  }
};
