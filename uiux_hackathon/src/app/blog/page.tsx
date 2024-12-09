import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShopHero from "@/components/ShopHero";
import { FaPenNib } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Brands from "@/components/Brands";

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
const blog = [
  {
    image: "b1",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
  },
  {
    image: "b2",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
  },
  {
    image: "b3",
    title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
  },
];
const catego = [
  { text: "Hobbies (14)" },
  { text: "Women (21)" },
  { text: "Women (21)" },
  { text: "Women (21)" },
  { text: "Women (21)" },
  { text: "Women (21)" },
];

const recent = [
  {
    image: "BR1",
  },
  {
    image: "BR2",
  },
  {
    image: "BR3",
  },
  {
    image: "BR4",
  },
];
const sale = [
  {
    image: "BS1",
    title: "Elit ornare in enim mauris.",
  },
  {
    image: "BS2",
    title: "Viverra pulvinar et enim.",
  },
  {
    image: "BS3",
    title: "Mattis varius donec fdsfd",
  },
];
const offer = [
  {
    image: "BO1",
    title: "Duis lectus est.",
  },
  {
    image: "BO2",
    title: "Sed placerat.",
  },
  {
    image: "BO3",
    title: "Netus proin.",
  },
  {
    image: "BO4",
    title: "Platea in.",
  },
];

const tags = [
  { text: "General" },
  { text: "Atsanil" },
  { text: "Insas." },
  { text: "Bibsaas" },
  { text: "Nulla." },
];

const Blog = () => {
  return (
    <div className="text-[#151875] p-4">
      <ShopHero title="Blog Page" />

      <div className="container mx-auto px-4 py-6 flex justify-between">
        <div className="w-3/4">
          {blog.map((item: { image: string; title: string }, index) => (
            <div key={index} className="post mb-8">
              <Image
                src={`/${item.image}.png`}
                alt={item.image}
                className="w-full h-auto mb-4"
                width={870}
                height={453}
              />
              <div className="flex gap-3">
                <div className=" flex items-center gap-2 ">
                  <FaPenNib className="text-pink-500" />
                  <h4 className="text-black bg-[#FFE7F9]">Surf Auxion</h4>
                </div>
                <div className=" flex items-center gap-2">
                  <MdOutlineCalendarMonth className="text-[#FFA454]" />
                  <h4 className="bg-[#FFECE2]">Aug 09 2020</h4>
                </div>
              </div>
              <div className="post-info  bg-white shadow rounded">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
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
          ))}
        </div>

        <div className="w-1/4 ml-4">
          <h1>Search</h1>
          <div className="mb-8">
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <CiSearch className="" />
            </div>
          </div>
          <div className="mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className=" flex list-none flex-wrap gap-3 pl-5">
                {catego.map((item: { text: string }, index) => (
                  <li key={index} className="">
                    <Link href="#" className={index === 0 ? "bg-pink-600" : ""}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Recent Post</h3>
            <ul className="list-none pl-5">
              {recent.map((image: { image: string }, index) => (
                <li key={index}>
                  <Link href="#" className="text-blue-500">
                    <div className="flex">
                      <Image
                        src={`/${image.image}.png`}
                        alt="img"
                        width={100}
                        height={100}
                        className="object-cover w-[30%] rounded-md"
                      />
                      <div>
                        <h2>It is a long established fact</h2>
                        <h4>Aug 09 2020</h4>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Sale Product</h3>
            <ul className="list-disc pl-5">
              {sale.map((item: { image: string; title: string }, index) => (
                <li key={index} className="flex">
                  <Link href="#" className="text-blue-500 flex hover:underline">
                    <Image
                      src={`/${item.image}.png`}
                      alt="img"
                      width={100}
                      height={100}
                    />
                    <div>
                      <h2>{item.title}</h2>
                      <h4>Aug 09 2020</h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Offer product</h3>
            <ul className="list-disc flex pl-5">
              {offer.map((item: { image: string; title: string }, index) => (
                <li key={index}>
                  <Link href="#" className="text-blue-500 flex hover:underline">
                    <Image
                      src={`/${item.image}.png`}
                      alt="img"
                      width={100}
                      height={100}
                    />
                    <div>
                      <h2>{item.title}</h2>
                      <h4>$12.00 - $15.00</h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>Follow</h1>
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
          <div>
            <h3 className="text-xl font-bold mb-4">Tags</h3>
            <ul className="list-disc pl-5">
              {tags.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-blue-500 hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
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
      <Brands />
    </div>
  );
};

export default Blog;
