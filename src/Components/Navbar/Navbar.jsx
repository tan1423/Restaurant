import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Contextapi/Contextapi";

const Navbar = ({ setShowlogin }) => {
  const [menu, setMenu] = useState("Home");

  const { gettotalammount } = useContext(StoreContext);

  const handleMenuClick = (item) => {
    setMenu(item);
  };

  return (
    <div className="flex items-center justify-between p-4 px-9 font-serif">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="https://reeplayerindia.com/images/logo.png"
            alt="RGS"
            className="h-10"
          />
        </Link>
      </div>
      <ul className="flex space-x-4 max-sm:hidden">
        {["Home", "Menu", "Mobile App", "Contact Us"].map((item) => (
          <li key={item} className="cursor-pointer">
            <Link
              to={item === "Home" ? "/" : `/${item.replace(/\s+/g, '').toLowerCase()}`}
              onClick={() => handleMenuClick(item)}
              className={`hover:text-gray-400 ${
                menu === item ? "pb-0.5 border-b-2 border-red-400" : ""
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:text-gray-400 cursor-pointer"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Link to="/card">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-gray-400 cursor-pointer"
          >
            <path
              d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <div className="relative">
          <div
            className={
              gettotalammount() === 0
                ? ""
                : "absolute bottom-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full"
            }
          ></div>
        </div>
        <button
          onClick={() => setShowlogin(true)}
          className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded-md"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
