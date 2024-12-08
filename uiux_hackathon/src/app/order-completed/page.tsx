import React from "react";
import Link from "next/link";

const OrderConfirmation = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
      <div className="flex justify-center mb-4">
        <span className="text-4xl">🕒</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">Your Order Is Completed!</h1>
      <p className="text-gray-700 mb-4">
        Thank you for your order! Your order is being processed and will be
        completed within 3-6 hours. You will receive an email confirmation when
        your order is completed.
      </p>
      <div className="flex justify-center mb-4">
        <span className="text-4xl">📋</span>
      </div>
      <Link
        href="/"
        className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700"
      >
        Continue Shopping
      </Link>
    </div>
  </div>
);

export default OrderConfirmation;
