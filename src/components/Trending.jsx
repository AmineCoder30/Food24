import React from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../assets/food1.jpeg";
import slide_image_2 from "../assets/food2.jpeg";
import slide_image_3 from "../assets/food3.jpeg";
import slide_image_4 from "../assets/food4.jpeg";
import slide_image_5 from "../assets/food5.jpeg";
import slide_image_6 from "../assets/food6.jpeg";
import slide_image_7 from "../assets/food7.jpeg";
const items = [
  {
    name: "Straw Cake",
    price: "₹80",
    rating: 4.5,
    image: slide_image_1,
  },
  {
    name: "Pancake",
    price: "₹115",
    rating: 4.5,
    image: slide_image_2,
  },
  {
    name: "Special Pizza",
    price: "₹200",
    rating: 4.5,
    image: slide_image_3,
  },
  {
    name: "Meatball",
    price: "₹115",
    rating: 4.5,
    image: slide_image_4,
  },
  {
    name: "Burger",
    price: "₹80",
    rating: 4.5,
    image: slide_image_5,
  },
  {
    name: "Special Pizza",
    price: "₹200",
    rating: 4.5,
    image: slide_image_6,
  },
  {
    name: "Meatball",
    price: "₹115",
    rating: 4.5,
    image: slide_image_7,
  },
];

function Trending() {
  return (
    <div id="Services" className="container">
      <h2 className="text-red-500 text-sm mb-2 w-full text-center">
        - Popular Delivery -
      </h2>
      <h1 className="text-3xl font-bold mb-6 w-full text-center">
        Trending food
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.image} alt="slide_image" />
              <div className="absolute flex flex-col  p-4 justify-between inset-0 bg-[#00000073] rounded-[2rem]">
                <div className="w-full flex justify-end">
                  <p className="border w-fit px-2 py-1 rounded-md border-gray-50 text-white font-medium">
                    {item.price}
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium">{item.name}</p>
                  <div className="flex items-center text-yellow-500 text-lg">
                    <span>{item.rating}</span>
                    <span className="ml-2 flex">
                      <FaStar className="w-4 h-4" />
                      <FaStar className="w-4 h-4" />
                      <FaStar className="w-4 h-4" />
                      <FaStar className="w-4 h-4" />
                      <FaStar className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaLongArrowAltLeft size={16} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaLongArrowAltRight size={16} />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Trending;
