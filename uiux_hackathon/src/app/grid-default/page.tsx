import Banner2 from "@/components/Banner2";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopGrid = () => {
  const productList = [
    {
      link: "#",
      image: "/1.png", // Provide the actual image path
      name: "Vel elit euismod",
      variant: ["#4e4e4e", "#fb2e86", "#f8fb2e"],
      price: 25.0,
      cutPrice: 45.0,
    },
    // Add more products to test the wrapping
    {
      link: "#",
      image: "/1.png",
      name: "Consectetur adipiscing",
      variant: ["#fbb034", "#02b3e4", "#f8fb2e"],
      price: 30.0,
      cutPrice: 50.0,
    },
    {
      link: "#",
      image: "/1.png",
      name: "Lorem ipsum dolor",
      variant: ["#ec407a", "#8e24aa", "#03a9f4"],
      price: 20.0,
      cutPrice: 40.0,
    },
    {
      link: "#",
      image: "/1.png",
      name: "Sit amet consectetur",
      variant: ["#4caf50", "#ff9800", "#607d8b"],
      price: 35.0,
      cutPrice: 55.0,
    },
    {
      link: "#",
      image: "/1.png",
      name: "Sed do eiusmod",
      variant: ["#ff5722", "#00bcd4", "#795548"],
      price: 40.0,
      cutPrice: 60.0,
    },
  ];
  return (
    <>
      <div className="bg-gray-100 h-80 flex flex-col items-center justify-center">
        <div className="w-[60%]">
          <h1
            className="text-4xl font-extrabold text-[#101750]"
            style={{ fontWeight: "800" }}
          >
            Sop Grid Default
          </h1>
          <p className="text-black">
            Home . Pages{" "}
            <span className="text-[#FB2E86]">. Shop Grid Default</span>
          </p>
        </div>
      </div>

      <div className="bg-white flex items-center justify-between w-[60%] m-auto mt-40">
        <div>
          <h2 className="text-xl text-navyBlue font-bold">
            Ecommerce Acceories & Fashion Items
          </h2>
          <p className="text-sm text-gray-400">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div>
            <span>Per Page:</span>
            <input type="text" />
          </div>
          <div>
            <span>Sort By:</span>
            <select name="sort" id="sort" className="text-gray-400">
              <option value="BestMatch">Best Match</option>
            </select>
          </div>
          <div>
            <span>View:</span>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-wrap items-center justify-between gap-10 w-[60%] m-auto mt-40">
        {productList.map((item, index) => (
          <Link
            href={item.link}
            passHref
            key={index}
            className="bg-gray-00 flex flex-col items-center w-60 h-70 "
          >
            <Image
              src={item.image}
              alt={"Product"}
              width={500}
              height={500}
              className="w-30 h-30 object-cover bg-gray-100 p-8"
            />
            <div className="text-center flex flex-col gap-2 pt-3">
              <h2 className=" text-xl text-navyBlue font-extrabold">
                {item.name}
              </h2>
              <div className="flex justify-center gap-2">
                {item.variant.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    style={{ backgroundColor: color }}
                    className="h-3 w-3 rounded-full"
                  ></div>
                ))}
              </div>
              <p className="text-navyBlue">
                ${item.price.toFixed(2)}{" "}
                <span className="line-through text-[#FB2E86]">
                  ${item.cutPrice.toFixed(2)}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-white flex items-center justify-center w-[60%] m-auto py-10">
        {/* <Image
          src="/H1.png"
          alt="brands"
          width={500}
          height={500}
          className="w-[80%] object-cover"
        /> */}
        <Banner2 />
      </div>
    </>
  );
};

export default ShopGrid;
