import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-[60%] justify-between mt-6 mb-6 h-10 m-auto">
      <div className="flex gap-10">
        <h1 className="font-bold text-3xl">Hekto</h1>
        <ul className="flex items-center gap-7">
          <li className="text-[#FB2E86] items-center">
            <Link href="#" className="flex items-center gap-1">
              Home
              <Image
                src="/arrow.png"
                className="text-[#FB2E86]"
                width={30}
                height={30}
                alt="img"
              />
            </Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Shop</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#FB2E86] flex items-center pr-1">
        <input type="text" className="py-2 border mr-2" />
        <Image
          src="/search.png"
          width={40}
          height={40}
          className=" w-6 bg-[#FB2E86] h-6 mr-2"
          alt="search"
        />
      </div>
    </div>
  );
};

export default Header;
