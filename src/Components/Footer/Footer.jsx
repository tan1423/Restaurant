import React from 'react';
import { assets } from '../../frontend_assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img src="https://reeplayerindia.com/images/logo.png" alt="logo" className="mb-4" />
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus cumque exercitationem hic, error delectus earum odio?
          </p>
          <div className="flex space-x-4">
            <img src={assets.facebook_icon} alt="Facebook" className="h-6 w-6 hover:opacity-75 transition-opacity duration-300" />
            <img src={assets.twitter_icon} alt="Twitter" className="h-6 w-6 hover:opacity-75 transition-opacity duration-300" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="h-6 w-6 hover:opacity-75 transition-opacity duration-300" />
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">COMPANY</h2>
          <ul className="space-y-2">
            <Link to={'/'}><li className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Home</li></Link>
            <li className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li className="transition-colors duration-300 cursor-pointer">+91-898-786-4232</li>
            <li className="transition-colors duration-300 cursor-pointer">contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <p className="text-center text-gray-500">Copyright 2024 &copy; All rights reserved</p>
    </div>
  );
}

export default Footer;
