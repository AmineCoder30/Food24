import React, { useState, useRef } from "react";
import { iconsList } from "../constants/IconsList";

function MbileMenu() {
  const [LeftPosition, setLeftPosition] = useState(0);
  const [IsActive, setIsActive] = useState(0);
  const iconRefs = useRef([]);

  const getPosition = (index) => {
    const element = iconRefs.current[index];

    if (element) {
      const rect = element.offsetLeft;

      setLeftPosition(rect);
      setIsActive(index);
    }
  };

  return (
    <div className="fixed w-full z-50 block md:hidden bg-transparent px-3 left-0 bottom-4">
      <div className="relative flex w-72 mx-auto overflow-hidden justify-around  items-center bg-gray-900  shadow-sm rounded-[10px] ">
        {iconsList.map((item, index) => {
          return (
            <div
              key={item.id}
              ref={(el) => (iconRefs.current[index] = el)}
              onClick={() => getPosition(index)}
              className={`z-[2] w-1/4 py-2 text-center cursor-pointer`}
            >
              <a href={item.link}>
                <div
                  className={`flex justify-center text-lg ${
                    IsActive === index ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.icon}
                </div>
              </a>
            </div>
          );
        })}
        <div
          className="absolute duration-200 z-[1] w-1/4 top-0 h-full bg-[#ff0e0e2f] border-b-4 border-red-500"
          style={{ left: `${LeftPosition}px` }}
        ></div>
      </div>
    </div>
  );
}

export default MbileMenu;
