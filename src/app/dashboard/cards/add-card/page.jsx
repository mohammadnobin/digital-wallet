"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddCard() {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cardType: "Visa",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/cards/add`,
        formData,
        { withCredentials: true } // ✅ important for cookies
      );
      Swal.fire("Success", "Card added successfully", "success");
      router.push("/dashboard/my-cards");
    } catch (error) {
      Swal.fire("Error", "Failed to add card", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
       
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Card</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="cardName"
          placeholder="Card Name"
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <select
          name="cardType"
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option>Visa</option>
          <option>MasterCard</option>
          <option>Amex</option>
          <option>Other</option>
        </select>
        <button className="btn btn-primary w-full">Add Card</button>
      </form>
    </div>
  );
}
