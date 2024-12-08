import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Blog Page</title>
      </Head>
      <div className="flex justify-between">
        {/* Main Content */}
        <div className="w-3/4">
          <div className="post mb-8">
            <Image
              src="/p1.png"
              alt="Post 1"
              className="w-full h-auto mb-4"
              width={500}
              height={500}
            />
            <div className="post-info p-4 bg-white shadow rounded">
              <h2 className="text-2xl font-bold mb-2">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-gray-600 mb-4">By Self Admin | Aug 30 2020</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <Link
                href="#"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/4 ml-4">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="list-disc pl-5">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Lifestyle (10)
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Nature (10)
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Science (10)
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Music (10)
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Travel (10)
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="list-disc pl-5">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  A big umbrella had
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  A big umbrella had
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  A big umbrella had
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Sale Product</h3>
            <ul className="list-disc pl-5">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Product 1
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Product 2
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Offer Product</h3>
            <ul className="list-disc pl-5">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Product 1
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Product 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
