import React from "react";
import Components from "./components";

const Banner2 = () => (
  <div className=" min-h-screen ">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl text-center bg-[url('/bg.png')]">
      <h1 className="text-3xl font-bold mb-4">
        Get Latest Update By Subscribe Our Newsletter
      </h1>
      <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 mb-4">
        Shop Now
      </button>
    </div>
    <Components />
  </div>
);

export default Banner2;
