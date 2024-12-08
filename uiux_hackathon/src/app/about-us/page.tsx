import Banner3 from "@/components/Banner3";

const page = () => {
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <Banner3 name="About Us" />
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl">
      <div className="md:w-1/2">
        {/* <Image
          src="/images/business-meeting.jpg"
          alt="Business Meeting"
          className="w-full h-full object-cover rounded-md"
        /> */}
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
        <h1 className="text-3xl font-bold mb-4">
          Know About Our Ecommerce Business, History
        </h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
        <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
          Contact Us
        </button>
      </div>
    </div>
  </div>;
};

export default page;
