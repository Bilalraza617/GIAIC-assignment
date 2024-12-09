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
  <div className="w-[60%] m-auto">
    <div className="container mx-auto p-4">
      <h1 className="text-5xl text-navyBlue text-center font-extrabold">Latest Products</h1>
      <div className="flex justify-center space-x-4 mb-4">
        <button className="px-4 py-2 underline text-red-500 rounded">
          New Arrival
        </button>
        <button className="px-4 py-2 text-navyBlue">Best Seller</button>
        <button className="px-4 py-2 text-navyBlue">Featured</button>
        <button className="px-4 py-2 text-navyBlue">Special Offer</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </div>

    <div className="p-4 flex flex-wrap gap-5 justify-between">
      {item.map((data: { image: string }, index) => (
        <div key={index}>
          <div className="w-[300px] h-60 my-5">
            <div className="relative w-30 h-30 max-h-30 bg-gray-100">
              <span className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-xs">
                Sale
              </span>
              <Image
                src={`/${data.image}.png`}
                alt="img"
                className="object-cover p-10"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <h3 className="mt-2 text-lg font-medium">Sofa</h3>
            <div className="flex items-center gap-2">
              <span className="text-red-500">$$42.00</span>
              <span className="line-through text-gray-500">$$65.00</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// const HomePage = () => (

export default LatestProducts;
