"use server";
import bcrypt from "bcrypt";

export const loginUSer = async (payload) => {
  const { email, password } = payload;
  console.log(email, password);
  const user = await fetch(`http://localhost:5000/api/users/email/${email}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error fetching user by email:", err);
      return null;

    });
    console.log(user);
  if (!user) return null;
  const isPasswordOK = await bcrypt.compare(password, user.password);

  if (!isPasswordOK) return null;
  return user;
};
