import Image from "next/image";
import React from "react";

const DiscountItem = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Discount Item</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            20% Discount Of All Products
          </h2>
          <h3 className="text-lg font-medium mb-2">Eams Sofa Compact</h3>
          <p className="text-gray-700 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>Material expose like metals</li>
            <li>Simple neutral colours</li>
            <li>Clear lines and geometric figures</li>
            <li>Material expose like metals</li>
          </ul>
          <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
            Shop Now
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/chair1.png"
            alt="Eams Sofa Compact"
            className="w-full h-full object-cover rounded-md"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  </div>
);

export default DiscountItem;
