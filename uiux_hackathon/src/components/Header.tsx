import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex w-[60%] justify-between mt-6 mb-6 h-10 m-auto">
      <div className="flex gap-10">
        <h1 className="font-extrabold text-3xl">Hekto</h1>
        <ul className="flex items-center gap-7"
          <li className="text-pinkDefault items-center">
              Home
                      <Link href="/" className="flex items-center gap-1">
              <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            {/* <Link href="/shop-grid">Products</Link> */}
            <Link href="/shop-grid">Products</Link>
          </li>
          <li>
            {/* <Link href="/shop-left-sidebar">Blog</Link> */}
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/shop-list">Shop</Link>
          </li>
          <li>
            <Link href="contact-us">Contact</Link>
          </li>
        </ul>
      </div>
        <div>
      <div className="bg-[#FB2E86] flex items-center pr-1">
        <input type="text" className="py-2 border mr-2" width={11} />
        <Image
          src="/search.png"
          width={40}
          height={40}
          className=" w-6 bg-[#FB2E86] h-6 mr-2"
          alt="search"
   
      <div className="bg-[#FB2E86] text-white flex items-center pr-1">
        <input type="text" className="py-2 border mr-2" />
        <CiSearch />
      </div>
          </div>
    </div>
  );
};

export default Header;
