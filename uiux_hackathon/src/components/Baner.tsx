import Image from "next/image";
import React from "react";

const Baner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        <div className="mr-6">
          <Image
            src="/sofa2.png"
            alt="Sofa"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </ul>
          <button className="mt-6 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
            Add To Cart
          </button>
          <p className="mt-4 text-lg font-semibold">
            <strong>6668 Italian Sofa</strong>
            <br />
            $220.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Baner;
