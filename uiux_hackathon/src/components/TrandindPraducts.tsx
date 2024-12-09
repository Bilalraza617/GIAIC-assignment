import Image from "next/image";
import React from "react";

const trendingProducts = [
  { image: "T1" },
  { image: "T2" },
  { image: "T3" },
  { image: "T4" },
];

const executiveSeats = [
  {
    image: "TPB1",
  },
  {
    image: "TPB2",
  },
  {
    image: "L6",
  },
];

const Trandingproducts = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Trending Products</h1>
    <div className="flex items-center justify-between gap-3 w-[90%] m-auto">
      {trendingProducts.map((product, index) => (
        <div
          key={index}
          className="px-6 bg-white w-[400px] h-[300px] rounded flex flex-col items-center shadow-lg"
        >
          <Image
            src={`/${product.image}.png`}
            alt="img"
            className="w-[200px] h-[200px]  mb-4"
            width={300}
            height={300}
          />
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-lg font-medium">Cantilever chair</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-red-500">$$26.00 </span>
              <span className="line-through text-gray-500">$$42.00</span>
            </div>
          </div>
          {/* <div className="mt-2 text-gray-500">
            Discount: {product.discount}%
          </div> */}
        </div>
      ))}
    </div>
    <div className="mt-8 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex-1 p-4 bg-blue-100 rounded">
        <h2 className="text-2xl font-bold text-blue-600">
          23% off in all products
        </h2>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          Shop Now
        </button>
      </div>
      <div className="flex-1 p-4 bg-blue-100 rounded">
        <h2 className="text-2xl font-bold text-blue-600">
          23% off in all products
        </h2>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          View Collection
        </button>
      </div>
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Executive Seat Chairs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {executiveSeats.map((seat, index) => (
          <div key={index} className="p-4 bg-white rounded shadow-lg">
            <Image
              src={`/${seat.image}.png`}
              alt="img"
              className="w-full h-48 object-cover mb-4"
              width={300}
              height={300}
            />
            <h3 className="text-lg font-medium">Executive Seat chair</h3>
            <div className="mt-2 text-red-500">$$32.00</div>
          </div>
        ))}
      </div>
    </div>
    <footer className="mt-8 p-4 bg-gray-800 text-white text-center">
      &copy; {new Date().getFullYear()} Webecy - All Rights Reserved.
    </footer>
  </div>
);

export default Trandingproducts;
