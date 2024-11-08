import React from "react";
import pana from "../assets/pana.svg";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex items-center justify-center w-full py-16 bg-red-500 "
    >
      <div className="flex flex-col md:flex-row items-center container  text-white ">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={pana} // Replace with the actual image path
            alt="Delivery illustration"
            className="w-full max-w-xs"
          />
        </div>

        {/* Right side - Text Content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Get more discount if you order from us
          </h2>

          {/* Subheading */}
          <p className="text-gray-200 mb-6">
            Join with us then you must have get a discount and get promo from us
            to you, enjoy and happy to order.
          </p>

          {/* Email Input and Button */}
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 rounded-l-lg w-64 text-gray-800 focus:outline-none"
            />
            <button className="bg-black text-white p-3 rounded-r-lg font-semibold">
              Get
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
