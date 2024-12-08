import React from 'react'
import Image from 'next/image'
import BrandImage from '../../public/brands.jpg'

const Brands = () => {
    return (
        <div className='bg-white flex items-center justify-center w-[60%] m-auto my-40'>
            <Image src={BrandImage} alt='brands' width={500} height={500} className='w-[80%] object-cover' />
        </div>
    )
}

export default Brands