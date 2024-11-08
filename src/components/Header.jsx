import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { CiShoppingCart } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
export default function Header() {
  const [IsActive, setIsActive] = useState("Home");
  const listLinks = [
    {
      id: 1,
      name: "Home",
      link: "#Home",
    },
    {
      id: 2,
      name: "About Us",
      link: "#About",
    },
    {
      id: 3,
      name: "Services",
      link: "#Services",
    },
    {
      id: 4,
      name: "Contact Us",
      link: "#Contact",
    },
  ];
  return (
    <div className="bg-white static md:fixed z-50 top-0 left-0 w-full ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="food logo" />
        </div>
        <div className="hidden md:flex items-center space-x-10 font-semibold ">
          {listLinks.map((link) => {
            return (
              <a
                key={link.id}
                onClick={() => setIsActive(link.name)}
                href={link.link}
                className={`${
                  IsActive === link.name ? "text-red-500" : "text-gray-900"
                } hover:text-red-500 `}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-md hover:text-red-500 cursor-pointer">
            {" "}
            <CiShoppingCart size={24} />{" "}
          </div>
          <button className="bg-red-500 btn-shadow text-white px-4 py-2 gap-2 rounded-lg font-semibold flex items-center">
            <span>Sign Up</span>
            <GoArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
