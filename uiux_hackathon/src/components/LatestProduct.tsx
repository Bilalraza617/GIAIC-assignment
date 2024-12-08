import Image from "next/image";
import React from "react";

const item = [
  { image: "L1" },
  { image: "L2" },
  { image: "L3" },
  { image: "L4" },
  { image: "L5" },
  { image: "L6" },
];

const LatestProducts = () => (
  <div>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Products</h1>
      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          New Arrival
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded">Best Seller</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Featured</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Special Offer</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </div>

    <div className="p-4 flex">
      {item.map((data: { image: string }, index) => (
        <div key={index}>
          <div className="relative">
            <span className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-xs">
              Sale
            </span>
            <Image
              src={`/${data.image}.png`}
              alt="img"
              className="w-full h-48 object-cover"
              width={400}
              height={400}
            />
          </div>
          <h3 className="mt-2 text-lg font-medium">{}</h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-red-500">$$42.00</span>
            <span className="line-through text-gray-500">$$65.00</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// const HomePage = () => (

export default LatestProducts;
