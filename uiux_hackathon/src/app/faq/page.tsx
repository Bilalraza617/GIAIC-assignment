import React from "react";

const Faq = () => (
  <div className="container mx-auto p-4 min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* General Information Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">General Information</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">
              Es dolorem eum ex sed enimend consectetur?
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              sed tristique nulla vitae, consequat gravida sagittis.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Magna tincidunt est fermentum eros.
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              sed tristique nulla vitae, consequat gravida sagittis.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Odio malesuada hac erat consequat sollicit?
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              sed tristique nulla vitae, consequat gravida sagittis.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Eti id blandit aenean hac id velit quis nunc?
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              sed tristique nulla vitae, consequat gravida sagittis.
            </p>
          </div>
        </div>
      </div>

      {/* Ask a Question Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Ask a Question</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700">
              Subject*
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Type Your Message*
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
  </div>
);

export default Faq;
