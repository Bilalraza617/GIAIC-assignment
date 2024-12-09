import Image from "next/image";
import React from "react";

const categories = [
  { image: "T1" },
  { image: "T2" },
  { image: "T3" },
  { image: "T4" },
];

const TopCategories = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4 text-center">Top Categories</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <div key={index} className="p-4 bg-white rounded shadow-lg text-center">
          <Image
            src={`/${category.image}.png`}
            alt="img"
            className="w-full h-48 object-cover mb-4"
            width={300}
            height={300}
          />
          <h3 className="text-lg font-medium">Mini LCW Chair</h3>
          <div className="mt-2 text-gray-500">$$56.00</div>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
            View Shop
          </button>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>
);

export default TopCategories;
