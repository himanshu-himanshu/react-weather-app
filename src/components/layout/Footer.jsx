import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-900 opacity-[95%] container max-w-4xl mx-auto text-white flex flex-col space-y-8 justify-between py-4 px-12 rounded-md items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="font-Arizonia text-5xl font-bold">Chillyfy</h1>
        <div className="flex flex-row space-x-4">
          <FaReact className="text-2xl" />
          <SiTailwindcss className="text-2xl" />
          <SiGithub className="text-2xl" />
        </div>
      </div>
      <div className="w-full border border-b-1 border-gray-100 opacity-10"></div>
      <div className="font-Raleway w-full flex flex-row justify-center items-center space-x-4">
        <h1 className="flex flex-row items-center text-gray-500">
          Made with{" "}
          <BsFillSuitHeartFill className="text-lg ml-2 text-pink-500" />
        </h1>
        <h1 className="text-gray-500">|</h1>
        <h1 className="text-gray-500">Using Accuweather</h1>
      </div>
    </div>
  );
};

export default Footer;
