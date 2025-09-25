 
"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);

  const { email, password } = payload;
 
    //   validation
  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  // check if user already exists
  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return { success: false, message: "User already exists" };
  }

  // insert new user
  const result = await userCollection.insertOne(payload);

  if (result.insertedId) {
    return { success: true, message: "User registered successfully", userId: result.insertedId };
  }

  return { success: false, message: "Something went wrong while registering user" };
};
