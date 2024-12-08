import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ShopHero from '@/components/ShopHero'
import Brands from '@/components/Brands'
import FilterSidebar from '@/components/FilterAside'

const ShopLeftSidebar = () => {
    const productList = [
        {
            link: "#",
            image: "/1.png",
            name: "Vel elit euismod",
            variant: ["#4e4e4e", "#fb2e86", "#f8fb2e"],
            price: 25.00,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
            cutPrice: 45.00,
        },
        {
            link: "#",
            image: "/1.png",
            name: "Consectetur adipiscing",
            variant: ["#fbb034", "#02b3e4", "#f8fb2e"],
            price: 30.00,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
            cutPrice: 50.00,
        },
        {
            link: "#",
            image: "/1.png",
            name: "Lorem ipsum dolor",
            variant: ["#ec407a", "#8e24aa", "#03a9f4"],
            price: 20.00,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
            cutPrice: 40.00,
        },
        {
            link: "#",
            image: "/1.png",
            name: "Sit amet consectetur",
            variant: ["#4caf50", "#ff9800", "#607d8b"],
            price: 35.00,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
            cutPrice: 55.00,
        },
        {
            link: "#",
            image: "/1.png",
            name: "Sed do eiusmod",
            variant: ["#ff5722", "#00bcd4", "#795548"],
            price: 40.00,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi fugit reprehenderit repellat ullam accusamus placeat, ipsa quam impedit commodi, eaque harum id.",
            cutPrice: 60.00,
        },
    ];
    return (
        <>
            <ShopHero title="Shop left Sidebar" />

            <div className='bg-white flex items-center justify-between w-[60%] m-auto mt-40'>
                <div>
                    <h2 className='text-xl text-navyBlue font-bold'>Ecommerce Acceories & Fashion Items</h2>
                    <p className='text-sm text-gray-400'>About 9,620 results (0.62 seconds)</p>
                </div>
                <div className='flex justify-between items-center gap-5'>
                    <div>
                        <span>Per Page:</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Sort By:</span>
                        <select name="sort" id="sort" className='text-gray-400'>
                            <option value="BestMatch">Best Match</option>
                        </select>
                    </div>
                    <div>
                        <span>View:</span>
                        <input type="text" />
                    </div>
                </div>
            </div>

            <div className='flex bg-white w-[60%] m-auto mt-40'>
                <FilterSidebar />
                <div>
                    {productList.map((item, index) => (
                        <Link href={item.link} passHref key={index} className='bg-gray-00 flex items-center gap-5 h-70 p-5 my-5 shadow-sm hover:shadow-md'>
                            <Image
                                src={item.image}
                                alt={'Product'}
                                width={500}
                                height={500}
                                className='h-60 object-cover bg-gray-100 p-8'
                            />
                            <div className='flex flex-col gap-2 pt-3'>
                                <div className="flex justify-between items-center max-w-xs">
                                    <h2 className=' text-xl text-navyBlue font-extrabold'>{item.name}</h2>
                                    <div className='flex gap-2'>
                                        {item.variant.map((color, colorIndex) => (
                                            <div
                                                key={colorIndex}
                                                style={{ backgroundColor: color }}
                                                className='h-3 w-3 rounded-full'
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <p className='text-navyBlue'>
                                    ${item.price.toFixed(2)}{' '}
                                    <span className='line-through text-[#FB2E86]'>${item.cutPrice.toFixed(2)}</span>
                                </p>
                                <p className='text-gray-400'>{item.description}</p>
                                <div className="flex gap-5">
                                    {/* <IconZoomCancel /> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Brands />
        </>
    )
}

export default ShopLeftSidebar