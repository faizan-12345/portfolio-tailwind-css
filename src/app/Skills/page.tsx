import React from "react";
import Image from "next/image";
import html from "../Assests/html.jpg";
import css from "../Assests/css.jpg";
import javascript from "../Assests/javascript.jpg";
import node from "../Assests/node.jpg";
import c from "../Assests/c.jpg";
import java from "../Assests/java.jpg";
import git1 from "../Assests/git1.jpg";
import github1 from "../Assests/github1.jpg";
import react from "../Assests/react.jpg";
import next from "../Assests/next.jpg";
import tailwind from "../Assests/tailwind.jpg";
import ts from "../Assests/ts.jpg";

const skills = [
  { name: "HTML5", image: html },
  { name: "CSS3", image: css },
  { name: "JavaScript", image: javascript },
  { name: "Node.js", image: node },
  { name: "Tailwind CSS", image: tailwind },
  { name: "TypeScript", image: ts },
  { name: "React.js", image: react },
  { name: "Next.js", image: next },
  { name: "Git", image: git1 },
  { name: "GitHub", image: github1 },
  { name: "C", image: c },
  { name: "Java", image: java },
];

const Page = () => {
  return (
    <div className="bg-gray-800 text-center py-12 px-6">
      {/* Title */}
      <div className="mb-8">
        <p className="text-3xl md:text-4xl font-bold text-white">Skills</p>
        <div className="w-32 h-1 bg-yellow-400 mx-auto mt-2 rounded-lg"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 w-32 sm:w-36 md:w-40 p-4 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              className="w-20 h-16 sm:w-24 sm:h-20 object-contain mx-auto"
              src={skill.image}
              alt={skill.name}
            />
            <p className="text-white font-semibold text-lg mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
