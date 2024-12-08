import LatestProduct from "@/components/LatestProduct";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#F2F0FF] flex">
        <div className="text-right">
          <Image src="/light.png" alt="img" width={300} height={300} />
        </div>
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-md">
            <p className="text-sm text-pink-600">
              Best Furniture For Your Castle...
            </p>
            <h1 className="text-4xl font-bold leading-tight my-4">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="px-6 py-3 bg-[#FB2E86] text-white rounded hover:bg-pink-700">
              Shop Now
            </button>
          </div>

          <div className="relative">
            <Image
              src="/sofa.png"
              width={500}
              height={500}
              alt="img"
              className=""
            />
          </div>
        </div>
        {/* <div className="relative">
        <span className="bg-pink-700 w-1 h-1 text-pink-500"></span>
        <span></span>
        <span></span>
      </div> */}
      </div>
      <ProductCard />
      <LatestProduct />
    </div>
  );
}
