import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPosts = [
  { image: "LB1", author: "SaberAli" },
  { image: "LB2", author: "Surfauxion" },
  { image: "LB3", author: "SaberAli" },
];

const LatestBlog = () => (
  <div>
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-extrabold text-center text-gray-900">
        Leatest Blog
      </h2>
    </div>

    <div className="flex items-center">
      {blogPosts.map((data: { image: string; author: string }, index) => (
        <div key={index} className="flex">
          <div>
            <Image
              src={`/${data.image}.png`}
              alt="img"
              width={500}
              height={500}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <Image src="/pen.png" alt="img" width={10} height={10} />
              <p className="text-sm text-gray-500">{data.author}</p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex items-center">
              <Image src="/calender.png" alt="img" width={10} height={10} />
              <span>21 August,2020</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold">
              Top esssential Trends in 2021
            </h3>
            <p className="mt-2 text-gray-600">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <Link href="#" className="mt-2 inline-block text-blue-500">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LatestBlog;
