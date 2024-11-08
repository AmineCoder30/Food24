import React from "react";
import { FaStar } from "react-icons/fa";
import hero from "../assets/about.png";
import user from "../assets/user1.jpeg";
const About = () => {
  return (
    <div id="About" className="w-full">
      <div className="flex flex-col-reverse md:flex-row md:flex gap-10 md:gap-0 bg-white p-8 py-16 container">
        {/* Left side - Image */}
        <div className=" w-full md:w-1/2  ">
          <img
            src={hero}
            alt="Reviewer"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side - Text Content */}
        <div className="ml-8 flex flex-col  w-full md:w-1/2  justify-center">
          {/* Title Section */}
          <span className="text-red-500 text-sm font-semibold mb-2">
            What they are say -
          </span>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 my-6">
            What they are says about us
          </h2>

          {/* Reviewer Details */}
          <div className="flex items-center mb-2">
            <img
              src={user}
              alt="Erick Smith"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Erick Smith</h3>
              <p className="text-gray-500 text-sm">Food Vlogger</p>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-600 italic mb-4">
            "All service provided is so perfect and fast, and I'm so happy to
            order from this company"
          </p>

          {/* Rating */}
          <div className="flex items-center text-yellow-500 text-lg">
            <span>5.0</span>
            <span className="ml-2 flex">
              <FaStar className="w-5 h-5" />
              <FaStar className="w-5 h-5" />
              <FaStar className="w-5 h-5" />
              <FaStar className="w-5 h-5" />
              <FaStar className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
