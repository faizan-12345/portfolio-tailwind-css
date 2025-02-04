import React from 'react';
import Image from 'next/image';
import myImg from '../Assests/myImg.png';

const AboutPage = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          About <span className="text-amber-400">Me</span>
        </h1>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16">
        <div className="relative group">
          <Image
            src={myImg}
            alt="Profile Image"
            className="w-52 h-52 md:w-64 md:h-80 rounded-xl shadow-lg transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-20 rounded-xl group-hover:opacity-40 transition-opacity" />
        </div>

        <div className="max-w-lg text-center lg:text-left">
          <h3 className="text-3xl font-bold">I am Faizan</h3>
          <p className="text-amber-500 text-lg mt-2">Frontend Developer</p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Passionate Frontend Developer based in Karachi, Pakistan. I create elegant and efficient web solutions with a keen eye for detail and user experience.
          </p>
          <div className="mt-6">
            <a href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-md transition-all">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;