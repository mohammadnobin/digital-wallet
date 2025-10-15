"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MyCardsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/cards/my-cards`,
          { withCredentials: true }
        );
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">My Cards</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card._id}
            className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow"
          >
            <h3 className="text-lg font-bold">{card.cardName}</h3>
            <p>Card No: **** **** **** {card.cardNumber.slice(-4)}</p>
            <p>Expiry: {card.expiryDate}</p>
            <p>Type: {card.cardType}</p>
            <p className="font-semibold text-blue-600">
              Balance: ${card.balance.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
