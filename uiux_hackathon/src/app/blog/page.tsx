import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="container mx-auto px-4 py-6 flex justify-between">
        {/* Main Content */}
        <div className="w-3/4">
          <div className="post mb-8">
            <Image
              src="/p1.png"
              alt="Post 1"
              className="w-full h-auto mb-4"
              width={300}
              height={300}
            />
            <div className="post-info p-4 bg-white shadow rounded">
              <h2 className="text-2xl font-bold mb-2">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-gray-600 mb-4">Aug 09 2020</p>
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
          <div className="post mb-8">
            <Image
              src="/p1.png"
              alt="Post 2"
              className="w-full h-auto mb-4"
              width={300}
              height={300}
            />
            <div className="post-info p-4 bg-white shadow rounded">
              <h2 className="text-2xl font-bold mb-2">
                Aenean vitae in aliquam ultrices lectus. Etiam.
              </h2>
              <p className="text-gray-600 mb-4">Aug 09 2020</p>
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
          <div className="post mb-8">
            <Image
              src="/p1.png"
              alt="Post 3"
              className="w-full h-auto mb-4"
              width={300}
              height={300}
            />
            <div className="post-info p-4 bg-white shadow rounded">
              <h2 className="text-2xl font-bold mb-2">
                Sit nam congue feugiat nisl, mauris amet nisi.
              </h2>
              <p className="text-gray-600 mb-4">Aug 09 2020</p>
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
                <Link href="#" className="text-blue-500 hover:underline">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Women
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Winter
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Recent Post</h3>
            <ul className="list-disc pl-5">
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Post 1
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Post 2
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Post 3
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Sale Product</h3>
            <ul className="list-disc pl-5">
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Product 1
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Product 2
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Offer product</h3>
            <ul className="list-disc pl-5">
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Product 1
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Product 2
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Tags</h3>
            <ul className="list-disc pl-5">
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  General
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Atsenal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-500 hover:underline">
                  Nobis
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
