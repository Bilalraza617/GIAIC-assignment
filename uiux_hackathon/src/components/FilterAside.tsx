import React from 'react';

const FilterSidebar = () => {
    return (
        <aside className="w-full lg:w-60 p-4 shadow-sm">
            {/* Product Brand */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-navyBlue mb-3 underline underline-offset-4">Product Brand</h2>
                <ul className="space-y-2">
                    {['Coaster Furniture', 'Fusion Dot High Fashion', 'Unique Furniture Restor', 'Dream Furniture Flipping', 'Young Repurposed', 'Green DIY Furniture'].map((brand, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <input type="checkbox" id={`brand-${index}`} className="w-4 h-4 text-pink-500 focus:ring-pink-400" />
                            <label htmlFor={`brand-${index}`} className="text-gray-400">{brand}</label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Discount Offer */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-navyBlue mb-3 underline underline-offset-4">Discount Offer</h2>
                <ul className="space-y-2">
                    {['20% Cashback', '5% Cashback Offer', '25% Discount Offer'].map((offer, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <input type="checkbox" id={`offer-${index}`} className="w-4 h-4 text-pink-500 focus:ring-pink-400" />
                            <label htmlFor={`offer-${index}`} className="text-gray-400">{offer}</label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Rating Item */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-navyBlue mb-3 underline underline-offset-4">Rating Item</h2>
                <ul className="space-y-2 text-yellow-400">
                    {[
                        { stars: 5, count: 614 },
                        { stars: 4, count: 394 },
                        { stars: 3, count: 214 },
                        { stars: 2, count: 85 },
                    ].map((rating, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <input type="checkbox" id={`rating-${index}`} className="w-4 h-4 text-pink-500 focus:ring-pink-400" />
                            <label htmlFor={`rating-${index}`} className="flex items-center text-gray-400">
                                {'★'.repeat(rating.stars)}{'☆'.repeat(5 - rating.stars)} 
                                <span className="ml-2 text-gray-400">({rating.count})</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-navyBlue mb-3 underline underline-offset-4">Categories</h2>
                <ul className="space-y-2">
                    {['Prestashop', 'Magento', 'Bigcommerce', 'osCommerce', '3dcart', 'Bags', 'Accessories', 'Jewellery', 'Watches'].map((category, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <input type="checkbox" id={`category-${index}`} className="w-4 h-4 text-pink-500 focus:ring-pink-400" />
                            <label htmlFor={`category-${index}`} className="text-gray-400">{category}</label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-navyBlue mb-3 underline underline-offset-4">Price Filter</h2>
                <ul className="space-y-2">
                    {['$0.00 - $150.00', '$150.00 - $350.00', '$350.00 - $504.00', '$450.00 +'].map((range, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <input type="checkbox" id={`price-${index}`} className="w-4 h-4 text-pink-500 focus:ring-pink-400" />
                            <label htmlFor={`price-${index}`} className="text-gray-400">{range}</label>
                        </li>
                    ))}
                </ul>
                <div className="mt-2">
                    <input
                        type="text"
                        placeholder="Min - Max"
                        className="w-full border border-gray-300 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
                    />
                </div>
            </div>

            {/* Filter by Color */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-navyBlue mb-3 underline underline-offset-4">Filter By Color</h2>
                <ul className="flex space-x-3">
                    {['blue', 'orange', 'brown', 'green', 'purple', 'sky'].map((color, index) => (
                        <li
                            key={index}
                            className={`w-6 h-6 rounded-full cursor-pointer bg-${color}`}
                            title={color.charAt(0).toUpperCase() + color.slice(1)}
                        ></li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default FilterSidebar;
