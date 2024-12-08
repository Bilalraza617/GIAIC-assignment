import Link from "next/link";
import React from "react";

const Login = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold mb-4 text-center">My Account</h1>
      <nav className="text-sm text-gray-600 mb-4">
        <Link href="#" className="hover:underline">
          Login
        </Link>
        &gt;
        <Link href="#" className="hover:underline">
          Pages
        </Link>
        &gt; My Account
      </nav>
      <h2 className="text-2xl font-semibold mb-2">Login</h2>
      <p className="mb-4 text-gray-700">
        Please login using account detail below.
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <Link href="#" className="text-blue-500 hover:underline">
            Forgot your password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center text-gray-700">
        Dont have an Account?
        <Link href="#" className="text-blue-500 hover:underline">
          Create account
        </Link>
      </p>
    </div>
  </div>
);

export default Login;
