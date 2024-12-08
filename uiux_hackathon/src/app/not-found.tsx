import Link from "next/link";
import Image from "next/image";
import Banner3 from "@/components/Banner3";

const Custom404 = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <Banner3 name="404 Not Found" />
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex flex-col items-center mb-4">
        <Image
          src="/404.png"
          alt="404 Illustration"
          className="w-48 h-48 object-cover"
          width={400}
          height={400}
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">
        Oops! The page you requested was not found!
      </h1>
      <p className="text-gray-700 mb-4">
        It looks like nothing was found at this location. Try using the
        navigation or button below to get back on track.
      </p>
      <Link
        href="/ "
        className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700"
      >
        Back To Home
      </Link>
    </div>
  </div>
);

export default Custom404;
