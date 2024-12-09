import Image from "next/image";
import Link from "next/link";
import React from "react";

const productList = [
  {
    link: "#",
    image: "/g1.png", // Provide the actual image path
    name: "Vel elit euismod",
    variant: ["#4e4e4e", "#fb2e86", "#f8fb2e"],
    price: 25.0,
    cutPrice: 45.0,
  },
  // Add more products to test the wrapping
  {
    link: "#",
    image: "/g2.png",
    name: "Consectetur adipiscing",
    variant: ["#fbb034", "#02b3e4", "#f8fb2e"],
    price: 30.0,
    cutPrice: 50.0,
  },
  {
    link: "#",
    image: "/g3.png",
    name: "Lorem ipsum dolor",
    variant: ["#ec407a", "#8e24aa", "#03a9f4"],
    price: 20.0,
    cutPrice: 40.0,
  },
  {
    link: "#",
    image: "/g4.png",
    name: "Sit amet consectetur",
    variant: ["#4caf50", "#ff9800", "#607d8b"],
    price: 35.0,
    cutPrice: 55.0,
  },
  {
    link: "#",
    image: "/g5.png",
    name: "Sed do eiusmod",
    variant: ["#ff5722", "#00bcd4", "#795548"],
    price: 40.0,
    cutPrice: 60.0,
  },
  {
    link: "#",
    image: "/g6.png", // Provide the actual image path
    name: "Vel elit euismod",
    variant: ["#4e4e4e", "#fb2e86", "#f8fb2e"],
    price: 25.0,
    cutPrice: 45.0,
  },
  // Add more products to test the wrapping
  {
    link: "#",
    image: "/g7.png",
    name: "Consectetur adipiscing",
    variant: ["#fbb034", "#02b3e4", "#f8fb2e"],
    price: 30.0,
    cutPrice: 50.0,
  },
  {
    link: "#",
    image: "/g8.png",
    name: "Lorem ipsum dolor",
    variant: ["#ec407a", "#8e24aa", "#03a9f4"],
    price: 20.0,
    cutPrice: 40.0,
  },
  {
    link: "#",
    image: "/g9.png",
    name: "Sit amet consectetur",
    variant: ["#4caf50", "#ff9800", "#607d8b"],
    price: 35.0,
    cutPrice: 55.0,
  },
  {
    link: "#",
    image: "/g10.png",
    name: "Sed do eiusmod",
    variant: ["#ff5722", "#00bcd4", "#795548"],
    price: 40.0,
    cutPrice: 60.0,
  },
  {
    link: "#",
    image: "/g11.png",
    name: "Sed do eiusmod",
    variant: ["#ff5722", "#00bcd4", "#795548"],
    price: 40.0,
    cutPrice: 60.0,
  },
  {
    link: "#",
    image: "/g4.png",
    name: "Sed do eiusmod",
    variant: ["#ff5722", "#00bcd4", "#795548"],
    price: 40.0,
    cutPrice: 60.0,
  },
];

const ProductGrid = () => {
  return (
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
              ${item.price.toFixed(2)}
              <span className="line-through text-[#FB2E86]">
                ${item.cutPrice.toFixed(2)}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
