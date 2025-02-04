import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col items-center py-12 px-4">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Contact <span className="text-yellow-400">Me</span>
        </h2>
        <div className="w-36 h-1 bg-yellow-400 mx-auto mt-2 rounded-md"></div>
      </div>

      {/* Form Section */}
      <div className="mt-8 w-full max-w-md bg-slate-700 p-6 rounded-lg shadow-lg">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-2 text-lg bg-white border-2 border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 text-lg bg-white border-2 border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400"
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            className="w-full px-4 py-2 text-lg bg-white border-2 border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400"
          />
          <textarea
            placeholder="Message"
            required
            className="w-full px-4 py-2 text-lg bg-white border-2 border-gray-700 rounded-lg h-32 resize-none focus:outline-none focus:border-yellow-400"
          ></textarea>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-2 text-lg font-bold rounded-lg hover:bg-blue-700 transition-all">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;

