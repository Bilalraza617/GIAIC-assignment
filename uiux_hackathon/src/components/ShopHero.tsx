import React from 'react'
import Breadcrumbs from './BreadCrumb'

interface Shop {
    title: String,

}
const ShopHero = ({title}: Shop) => {
    return (
        <div className='bg-gray-100 h-80 flex flex-col items-center justify-center'>
            <div className='w-[60%]'>
                <h1 className='text-4xl font-extrabold text-[#101750]'>{title}</h1>
                <Breadcrumbs />
            </div>
        </div>
    )
}

export default ShopHero