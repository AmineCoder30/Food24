import React from "react";
import TopBenifits from "./TopBenifits";
import benifit from "../assets/benifits.png";
import { FaCheck } from "react-icons/fa";
function Benifits() {
  return (
    <div className="">
      <TopBenifits />
      <div className=" container py-16 ">
        <div className=" w-full flex flex-col-reverse md:flex-row gap-10 md:gap-0 flex-wrap justify-center items-center">
          <div className="md:w-1/3 w-full">
            <img
              src={benifit}
              alt="A variety of healthy veggie dishes beautifully arranged on a wooden table"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-20  pl-0">
            <h2 className="text-red-500 text-xl font-bold">Our Benefit</h2>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mt-2">
              The More Healthy <br /> Food The Better
            </h1>
            <ul className="mt-16 space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheck color="red" size={20} /> Be Alive With Veggie Food.
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheck color="red" size={20} />
                It's The Place To Be.
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheck color="red" size={20} />
                Nonstop Veggie Food.
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheck color="red" size={20} />
                The Best Six Dish In Town.
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheck color="red" size={20} />
                Truffles, Egg & Pumpkin Spice.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
