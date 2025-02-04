import React from "react";
import Image from "next/image";
import lin from "../Assests/lin.png";
import fac from "../Assests/fac.jpg";
import insta from "../Assests/insta.jpg";
import github1 from "../Assests/github1.jpg";
import myImg from "../Assests/myImg.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 gap-12 text-center bg-indigo-100 md:flex-row md:gap-24">
      {/* Left Section (Text) */}
      <div className="max-w-xl bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800">Hello World!</h2>
        <h2 className="text-5xl font-extrabold text-indigo-700 mt-4">Im Muhammad Faizan</h2>
        <p className="text-lg text-gray-600 mt-6">
          Passionate about <span className="text-indigo-700 font-semibold">Frontend Development</span>
        </p>

        {/* About Me Button */}
        <div className="mt-8">
          <button className="bg-indigo-700 text-white w-40 h-12 rounded-full text-lg font-bold hover:bg-indigo-900 transition-all">
            Discover More
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-10">
          <ul className="flex gap-6 justify-center">
            <li>
              <a href="#" aria-label="LinkedIn">
                <Image className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform" src={lin} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <Image className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform" src={fac} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <Image className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform" src={insta} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="GitHub">
                <Image className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform" src={github1} alt="GitHub" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="flex justify-center items-center">
        <Image
          className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white shadow-xl hover:scale-105 transition-all"
          src={myImg}
          alt="Muhammad Faizan"
        />
      </div>
    </div>
  );
};

export default HomePage;