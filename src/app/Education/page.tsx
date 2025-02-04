import React from "react";
import Image from "next/image";
import smiu from "../Assests/smiu.jpg";
import formen from "../Assests/formen.jpg";
import uni from "../Assests/uni.jpg";
import gover from "../Assests/gover.jpg";

const educationData = [
  {
    id: 1,
    image: smiu,
    degree: "Bachelor of Science in Computer Science",
    institute: "Sindh Madressatul Islam University",
    duration: "2023-2027 | Pursuing",
  },
  {
    id: 2,
    image: gover,
    degree: "Artificial Intelligence & Web 3.0",
    institute: "Sindh Governor House",
    duration: "2023- | Pursuing",
  },
  {
    id: 3,
    image: formen,
    degree: "HSC Science | Pre-Engineering",
    institute: "Government College Formen",
    duration: "2021-2023 | Completed",
  },
  {
    id: 4,
    image: uni,
    degree: "SSC Science",
    institute: "Universal Grammar Secondary School",
    duration: "2019-2021 | Completed",
  },
];

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-slate-800 flex flex-col items-center py-10">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          My <span className="text-cyan-300">Education</span>
        </h2>
        <div className="w-36 h-1 bg-yellow-400 mx-auto mt-2 rounded-md"></div>
      </div>

      {/* Education Cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="flex items-center w-[90%] sm:w-96 md:w-[500px] bg-slate-600 text-white rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all"
          >
            <Image
              src={edu.image}
              alt={edu.institute}
              width={140}
              height={150}
              className="rounded-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <p className="text-sm mt-1">{edu.institute}</p>
              <p className="text-xs text-gray-300 mt-1">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
