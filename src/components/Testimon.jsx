import React from "react";
import soup from "../assets/soup.png";
function Testimon() {
  return (
    <div className="flex items-center justify-center container bg-white py-16">
      <div className="flex flex-col md:flex-row items-center w-full   ">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-red-500 text-xl font-medium mb-2">Our Stars</h2>
          <h1 className="text-4xl lg:text-6xl mt-6 leading-tight font-bold text-gray-900 mb-8">
            Veggie Food Goes On And Always On
          </h1>
          <div className="flex space-x-8 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500">1,500</p>
              <p className="text-gray-500">Sold Product</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500">500</p>
              <p className="text-gray-500">Positive Feedback</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500">400</p>
              <p className="text-gray-500">Official Store</p>
            </div>
          </div>
          <button className="bg-red-500 text-white px-6 py-3 rounded-xl btn-shadow  hover:bg-red-600 transition duration-300">
            Get Special Promo
          </button>
        </div>
        <div className=" w-full md:w-1/2">
          <img src={soup} alt="A variety of veggie dishes on a table" />
        </div>
      </div>
    </div>
  );
}

export default Testimon;
