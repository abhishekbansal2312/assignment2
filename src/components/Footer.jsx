import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-full bg-orange-500 text-white py-4 mt-20">
      <div className=" mx-auto flex justify-between max-w-5xl items-center px-2">
        <div className="text-sm font-thin">
          @ 2024 Explorin. All rights Reserved
        </div>

        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white hover:text-blue-500" size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-white hover:text-blue-700" size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white hover:text-pink-500" size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white hover:text-blue-400" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
