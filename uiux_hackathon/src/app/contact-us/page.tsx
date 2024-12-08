import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Information About Us Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Information About us</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          auctor ultricies mauris placerat, dignissim dui eleifend. Sed ac
          malesuada magna. In nec magna eget dolor lobortis. Aenean non rhoncus
          lacus, blandit quis. Nullam et ipsum.
        </p>
        <div className="flex mt-4 space-x-2">
          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Contact Way Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Way</h2>
        <ul className="list-none space-y-2">
          <li>
            <strong>Tel:</strong> 877-67-88-99
          </li>
          <li>
            <strong>Email:</strong> info@example.com
          </li>
          <li>
            <strong>Address:</strong> 123 Main Street, Anytown, USA
          </li>
          <li>
            <strong>Support:</strong> Available 24/7
          </li>
          <li>
            <strong>Shipping:</strong> Free worldwide shipping
          </li>
        </ul>
      </div>

      {/* Get In Touch Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700"
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
