import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#EEEFFB]">
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Hekto</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#FB2E86] text-white py-1 px-2 rounded-r "
                >
                  Sign Up
                </button>
              </form>
              <p>Conatact INfo</p>
              <p className="mt-2 text-gray-500">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
            <div className="flex space-x-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Categories</h3>
                <ul>
                  <li>Laptops & Computers</li>
                  <li>Cameras & Photography</li>
                  <li>Smart Phones & Tablets</li>
                  <li>Video Games & Consoles</li>
                  <li>Waterproof Headphones</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
                <ul>
                  <li>My Account</li>
                  <li>Discount</li>
                  <li>Returns</li>
                  <li>Orders History</li>
                  <li>Order Tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pages</h3>
                <ul>
                  <li>Blog</li>
                  <li>Browse the Shop</li>
                  <li>Category</li>
                  <li>Pre-Built Pages</li>
                  <li>Visual Elements</li>
                  <li>WooCommerce Pages</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-gray-500">&copy;Webecy - All Rights Reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="">
                <Image src="/F1.png" height={20} width={20} alt="img" />
              </Link>
              <Link href="#" className="">
                <Image src="/F2.png" height={20} width={20} alt="img" />
              </Link>
              <Link href="#" className="">
                <Image src="/F3.png" height={20} width={20} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
