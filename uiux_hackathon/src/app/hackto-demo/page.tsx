import React from "react";
import Image from "next/image";

const Checkout = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Hekto Demo</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email or mobile phone number
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-gray-700">
              Keep me up to date on news and exclusive offers
            </label>
          </div>
          <p className="text-blue-500 hover:underline mb-4">
            Already have an account? Log in
          </p>

          <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="first-name" className="block text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apartment" className="block text-gray-700">
              Apartment, suite, etc. (optional)
            </label>
            <input
              type="text"
              id="apartment"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-gray-700">
                Country
              </label>
              <select
                id="country"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              >
                <option value="Bangladesh">Bangladesh</option>
              </select>
            </div>
            <div>
              <label htmlFor="postal-code" className="block text-gray-700">
                Postal code
              </label>
              <input
                type="text"
                id="postal-code"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              />
            </div>
          </div>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
            Continue Shopping
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <ul className="mb-4">
          <li className="flex justify-between mb-2">
            <Image
              src="/product1.png"
              alt="Product 1"
              className="w-16 h-16 object-cover"
              width={500}
              height={500}
            />
            <span className="text-gray-700">Comfort Handy Craft</span>
            <span className="text-gray-700">$120.00</span>
          </li>
        </ul>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Subtotal</span>
            <span className="text-gray-700">$219.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-700">Total</span>
            <span className="text-gray-700">$235.00</span>
          </div>
          <p className="text-gray-500 mb-4">
            Shipping and taxes calculated at checkout
          </p>
          <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Checkout;
