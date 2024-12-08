import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const productList = [
    {
        link: "#",
        image: "/1.png", // Provide the actual image path
        name: "Vel elit euismod",
        variant: ["#4e4e4e", "#fb2e86", "#f8fb2e"],
        price: 25.00,
        cutPrice: 45.00,
    },
    // Add more products to test the wrapping
    {
        link: "#",
        image: "/1.png",
        name: "Consectetur adipiscing",
        variant: ["#fbb034", "#02b3e4", "#f8fb2e"],
        price: 30.00,
        cutPrice: 50.00,
    },
    {
        link: "#",
        image: "/1.png",
        name: "Lorem ipsum dolor",
        variant: ["#ec407a", "#8e24aa", "#03a9f4"],
        price: 20.00,
        cutPrice: 40.00,
    },
    {
        link: "#",
        image: "/1.png",
        name: "Sit amet consectetur",
        variant: ["#4caf50", "#ff9800", "#607d8b"],
        price: 35.00,
        cutPrice: 55.00,
    },
    {
        link: "#",
        image: "/1.png",
        name: "Sed do eiusmod",
        variant: ["#ff5722", "#00bcd4", "#795548"],
        price: 40.00,
        cutPrice: 60.00,
    },
];

const ProductGrid = () => {
    return (
        <div className='bg-white flex flex-wrap items-center justify-between gap-10 w-[60%] m-auto mt-40'>
            {productList.map((item, index) => (
                <Link href={item.link} passHref key={index} className='bg-gray-00 flex flex-col items-center w-60 h-70 '>
                    <Image
                        src={item.image}
                        alt={'Product'}
                        width={500}
                        height={500}
                        className='w-30 h-30 object-cover bg-gray-100 p-8'
                    />
                    <div className='text-center flex flex-col gap-2 pt-3'>
                        <h2 className=' text-xl text-navyBlue font-extrabold'>{item.name}</h2>
                        <div className='flex justify-center gap-2'>
                            {item.variant.map((color, colorIndex) => (
                                <div
                                    key={colorIndex}
                                    style={{ backgroundColor: color }}
                                    className='h-3 w-3 rounded-full'
                                ></div>
                            ))}
                        </div>
                        <p className='text-navyBlue'>
                            ${item.price.toFixed(2)}{' '}
                            <span className='line-through text-[#FB2E86]'>${item.cutPrice.toFixed(2)}</span>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductGrid;