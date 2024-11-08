import React from "react";
import { FaTruck, FaCreditCard, FaTags, FaHeadSideVirus } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck />,
    title: "Free Shipping",
    description: "Orders over $140",
    bgColor: "bg-red-100",
  },
  {
    icon: <FaCreditCard />,
    title: "Quick Payment",
    description: "100% secure payment",
    bgColor: "bg-red-100",
  },
  {
    icon: <FaTags />,
    title: "Special Promo",
    description: "Get special promo",
    bgColor: "bg-red-100",
  },
  {
    icon: <FaHeadSideVirus />,
    title: "24/7 Support",
    description: "Ready support",
    bgColor: "bg-red-100",
  },
];
function TopBenifits() {
  return (
    <div className=" container mx-auto  border-y border-gray-200  py-8">
      <div className="flex w-full justify-between flex-wrap">
        {features.map((item, index) => {
          return (
            <div
              key={index}
              className="flex w-full sm:w-1/2 md:w-1/4 gap-3 mb-4 md:mb-0 items-center "
            >
              <div className="bg-red-100 text-lg p-4 rounded-lg text-red-500">
                {item.icon}
              </div>
              <div>
                <h3 className=" text-gray-800 font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopBenifits;
