import React from "react";
import Image from "next/image";
import Link from "next/link";

// const categories = [
//   { name: "Hobbies", count: 14 },
//   { name: "Women", count: 21 },
// ];
// const recentPosts = [
//   {
//     title: "It is a long established fact",
//     date: "Aug 09 2020",
//     image: "/images/post1.jpg",
//   },
//   {
//     title: "It is a long established fact",
//     date: "Aug 09 2020",
//     image: "/images/post2.jpg",
//   },
//   {
//     title: "It is a long established fact",
//     date: "Aug 09 2020",
//     image: "/images/post3.jpg",
//   },
//   {
//     title: "It is a long established fact",
//     date: "Aug 09 2020",
//     image: "/images/post4.jpg",
//   },
// ];

const Blog = () => {
  return (
    <div>
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
            <div>
              {/* <Image/> */}
              <h4>Surf Auxion</h4>
              {/* <Image/> */}
              <h4>Aug 09 2020</h4>
            </div>
            <div className="post-info p-4 bg-white shadow rounded">
              <h2 className="text-2xl font-bold mb-2">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-gray-600 mb-4">Aug 09 2020</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
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
              src="/b2.png"
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
              src="/b3.png"
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
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>{" "}
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>{" "}
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>{" "}
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Blog;
