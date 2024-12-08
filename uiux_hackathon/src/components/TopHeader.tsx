import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <div className="flex justify-center gap-32 items-center h-11  bg-[#7E33E0] text-white">
      <div className="flex items-center  w-[60%]">
        <div className="flex items-center  w-[60%]">
          <div className="flex items-center gap-3 mr-7">
            <Image src="/lifafa.png" width={20} height={20} alt="logo" />
            <span>mhh.jawaid.ali@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/phone.png" width={20} height={20} alt="logo" />
            <span>(12345) 67890</span>
          </div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#" className="flex items-center gap-1">
              English
              <Image src="/arrow.png" width={40} height={40} alt="img" />
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-1">
              USD
              <Image src="/arrow.png" width={40} height={40} alt="img" />
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-1">
              Login
              <Image src="/arrow.png" width={40} height={40} alt="img" />
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-1">
              Wishlist
              <Image src="/heart.png" width={40} height={40} alt="img" />
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3">
              <Image src="/card.png" width={34} height={34} alt="img" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
