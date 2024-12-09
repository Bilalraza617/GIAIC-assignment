import Baner from "@/components/Baner";
import Banner2 from "@/components/Banner2";
import DiscountItem from "@/components/DiscountItem";
import LatestBlog from "@/components/LatestBlog";
import LatestProduct from "@/components/LatestProduct";
import ProductCard from "@/components/ProductCard";
import Shopex from "@/components/Shopex";
import TopCategories from "@/components/TopCatefories";
import Trandingproducts from "@/components/TrandindPraducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#F2F0FF] relative h-[700px] overflow-hidden">
        <div className="text-right absolute left-16">
          <Image src="/light.png" alt="img" width={400} height={400} />
        </div>
        {/* Content Container */}
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between relative">
          {/* Text Content */}
          <div className="max-w-[50%]">
            <p className="text-md text-pink-600 font-bold">
              Best Furniture For Your Castle...
            </p>
            <h1 className="text-5xl font-extrabold leading-tight">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-gray-600 mb-6 w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
              adipiscing in phasellus non in justo.
            </p>
            <button className="px-6 py-3 bg-[#FB2E86] text-white rounded hover:bg-pink-700">
              Shop Now
            </button>
          </div>

          {/* Chair Image */}
          <div className="">
            <Image
              src="/sofa.png"
              alt="Chair"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>
        </div>

        {/* Decorative Discount Badge */}
        {/* <div className="absolute right-20 top-1/4 transform translate-y-[-50%] bg-blue-300 text-white px-6 py-3 rounded-full text-center">
          <p className="text-lg font-bold">50% off</p>
        </div> */}
      </div>

      <ProductCard />
      <LatestProduct />
      <Shopex />
      <Baner />
      <Trandingproducts />
      <DiscountItem />
      <TopCategories />
      <Banner2 />

      <LatestBlog />
    </div>
  );
}
