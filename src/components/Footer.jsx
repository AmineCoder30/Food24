import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-6 md:space-y-0">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                24
              </div>
              <span className="text-white text-xl font-semibold">Food</span>
            </div>
            <div className="flex space-x-4">
              <FaFacebookF className="text-xl cursor-pointer hover:text-white" />
              <FaInstagram className="text-xl cursor-pointer hover:text-white" />
              <FaEnvelope className="text-xl cursor-pointer hover:text-white" />
              <FaTwitter className="text-xl cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto space-x-8">
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">Our Product</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">
                Terms & Policies
              </h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p>(+62) 83931232190</p>
            <p>agencycr@gmail.com</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p>© 24Food 2022 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
