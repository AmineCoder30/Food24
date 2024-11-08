import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import hero from "../assets/hero.svg";
import badge from "../assets/badge.svg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
function Hero() {
  return (
    <div
      id="Home"
      className="flex flex-wrap gap-10 md:gap-0  justify-between py-16 bg-white p-6 container "
    >
      <div className="w-full md:w-1/2">
        <div className="flex items-center w-fit playfair bg-gray-50 text-red-500 rounded-md justify-center mb-4">
          <span className="text-lg font-medium  p-2">Quality Food 🍔</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Quickest{" "}
          <span className="text-red-500">
            Food <br /> Delivery
          </span>{" "}
          in Town
        </h1>
        <p className="text-gray-600 my-6">
          We will deliver your food within 30 minutes in your town, if we would
          fail, we will give the food free.
        </p>
        <div className="flex flex-col gap-2 md:flex-row text-xs md:text-base mb-6 font-medium">
          <button className="bg-red-500 btn-shadow flex items-center justify-between text-white px-6 py-3 rounded-lg md:mr-4">
            Order your Food
            <IoSearchOutline size={20} />
          </button>
          <button className="bg-gray-50 underline  text-gray-800 px-6 py-3 rounded-lg">
            How to Order
          </button>
        </div>
        <div className="mt-10 bg-gray-50 p-4  rounded-2xl w-fit flex items-center">
          <img src={badge} alt="Award badge" className="w-16 h-16 mr-4" />
          <div>
            <h2 className="  md:text-xl font-bold text-gray-800">
              #1 National Food Service
            </h2>
            <p className="text-sm md:text-lg font-medium text-red-500">
              2021 Best Service Award
            </p>
            <div className="flex items-center text-yellow-500 mt-1">
              <img
                src={user1}
                className="h-3 w-3 md:h-5 md:w-5 rounded-full"
                alt=""
              />
              <img
                src={user2}
                className="-ml-[2] h-5 w-5 rounded-full"
                alt=""
              />
              <img
                src={user3}
                className="-ml-[2] h-5 w-5 rounded-full"
                alt=""
              />
              <span className="text-gray-500 ml-2">12.8k Voters</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2">
        <p className="absolute text-2xl top-0 left-2">🍕</p>
        <p className="absolute text-2xl bottom-16 left-14">🥞</p>
        <p className="absolute text-2xl top-10 right-20">🥙</p>
        <img
          src={hero}
          alt="Woman eating food from a bowl"
          className=" object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
