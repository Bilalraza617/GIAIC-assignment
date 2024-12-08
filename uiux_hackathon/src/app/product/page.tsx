import ShopHero from '@/components/ShopHero'
import Image from 'next/image'
import React from 'react'
import product from '../../../public/3.png'
import ProductGrid from '@/components/ProductGrid'
import Brands from '@/components/Brands'
import Link from 'next/link'

const ProductDetail = () => {
    return (
        <div>
            <ShopHero title="Product Details" />

            <div className='bg-white flex items-center justify-start w-[60%] m-auto mt-40'>
                <div className='flex'>
                    <div>
                        <Image
                            src={product}
                            alt={'Product'}
                            width={500}
                            height={500}
                            className='w-40 h-40 my-3 object-cover bg-gray-100 p-8'
                        />
                        <Image
                            src={product}
                            alt={'Product'}
                            width={500}
                            height={500}
                            className='w-40 h-40 my-3 object-cover bg-gray-100 p-8'
                        />
                        <Image
                            src={product}
                            alt={'Product'}
                            width={500}
                            height={500}
                            className='w-40 h-40 my-3 object-cover bg-gray-100 p-8'
                        />
                    </div>
                    <Image
                        src={product}
                        alt={'Product'}
                        width={500}
                        height={500}
                        className='w-96 my-3 mx-5 object-cover bg-gray-100 p-8'
                    />
                </div>
                <div className='max-w-[50%] flex flex-col gap-5'>
                    <div className="flex flex-c ol gap-2">
                        <h1 className='text-4xl text-navyBlue font-bold'>Playwoord arm chair</h1>
                        {[
                            { stars: 5, count: 614 },
                        ].map((rating) => (
                            <label className="flex items-center text-yellow-400">
                                {'★'.repeat(rating.stars)}{'☆'.repeat(5 - rating.stars)}
                                <span className="ml-2 text-navyBlue">({rating.count})</span>
                            </label>
                        ))}
                        <p className='text-navyBlue'>$33
                            <span className='line-through text-[#FB2E86] pl-5'>$22</span>
                        </p>
                        <div className="flex items-center gap-5">
                            <h2 className='text-navyBlue font-semibold'>Color:</h2>
                            <div className='flex gap-2'>
                                {/* {item.variant.map((color, colorIndex) => ( */}
                                <div
                                    // key={colorIndex}
                                    // style={{ backgroundColor: color }}
                                    className='h-3 w-3 rounded-full bg-yellow-400'
                                ></div>
                                {/* ))} */}
                            </div>
                        </div>
                    </div>
                    <p className='text-wrap text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae minus ipsum maiores consequuntur veniam, omnis dicta id officiis, assumenda dolorem illo est ullam aut quam fugit! Ipsa quo vel voluptatum?
                    </p>
                    <button className='text-navyBlue w-52'>
                        Add to Cart <span className='ml-5'>♥</span>
                    </button>
                    <h2 className='text-navyBlue font-semibold'>Categories:</h2>
                    <h2 className='text-navyBlue font-semibold'>Tags:</h2>
                    <h2 className='text-navyBlue font-semibold'>Share:</h2>
                </div>
            </div>
            <div className='bg-gray-100 flex flex-col items-center justify-center'>
                <div className='flex items-start justify-start w-[60%] m-auto mt-40'>
                    <div className='w-[60%] flex gap-20'>
                        <h2 className='text-navyBlue text-2xl font-bold underline'>Description</h2>
                        <h2 className='text-navyBlue text-2xl font-bold'>Additional Info</h2>
                        <h2 className='text-navyBlue text-2xl font-bold'>Reviews</h2>
                        <h2 className='text-navyBlue text-2xl font-bold'>Video</h2>
                    </div>
                </div>
                <div className='w-[60%] mt-20'>
                    <h2 className='text-navyBlue text-2xl font-semibold'>Additional Info</h2>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae optio doloremque, laudantium omnis sapiente laboriosam deserunt odit quisquam, rem molestiae quo ipsam, qui eos id ratione porro quia accusantium.
                        Beatae cumque maiores blanditiis, sed perferendis amet error vero expedita ad culpa accusantium itaque ipsam possimus totam consequuntur quos mollitia dolores facere ut nulla iusto explicabo? Nam nulla voluptates tenetur!
                        Alias, modi, minus laborum, inventore aut quae aperiam consequatur possimus ipsa animi obcaecati ratione. Dolorem enim sint unde aliquam eius officiis animi consectetur, distinctio deserunt pariatur omnis dolore ea perferendis?

                    </p>
                    <h2 className='text-navyBlue text-2xl font-semibold mt-10'>More details</h2>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae optio doloremque, laudantium omnis sapiente laboriosam deserunt odit quisquam, rem molestiae quo ipsam, qui eos id ratione porro quia accusantium.
                        Beatae cumque maiores blanditiis, sed perferendis amet error vero expedita ad culpa accusantium itaque ipsam possimus totam consequuntur quos mollitia dolores facere ut nulla iusto explicabo? Nam nulla voluptates tenetur!
                        Alias, modi, minus laborum, inventore aut quae aperiam consequatur possimus ipsa animi obcaecati ratione. Dolorem enim sint unde aliquam eius officiis animi consectetur, distinctio deserunt pariatur omnis dolore ea perferendis?
                    </p>
                </div>
            </div>
            <div className='bg-white flex flex-col items-center justify-center my-40'>
                <div className='w-[60%] my-40'>
                    <h2 className='text-4xl text-navyBlue font-bold mb-20'>
                        Related Products</h2>
                    <Link href="" passHref className='bg-gray-00 flex flex-col items-center w-60 h-70 '>
                        <Image
                            src={product}
                            alt={'Product'}
                            width={500}
                            height={500}
                            className='w-30 h-30 object-cover bg-gray-100 p-8'
                        />
                        <div className='text-center flex flex-col gap-2 pt-3'>
                            <h2 className=' text-xl text-navyBlue font-extrabold'>Name</h2>
                            <div className='flex gap-2'>
                                {/* {variant.map((color, colorIndex) => ( */}
                                <div
                                    // key={colorIndex}
                                    // style={{ backgroundColor: color }}
                                    className='h-3 w-3 rounded-full bg-yellow-400'
                                ></div>
                                {/* ))} */}
                            </div>
                            <p className='text-navyBlue'>
                                $0
                                <span className='line-through text-[#FB2E86]'>$</span>
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <Brands />
        </div>
    )
}

export default ProductDetail