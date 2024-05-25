import React from 'react';
import { menu_list } from '../../frontend_assets/assets';

const Exploremenu = ({ category, setCategory }) => {
  const handleClick = (itemName) => {
    setCategory((prev) => (itemName === prev ? 'All' : itemName));
  };

  return (
    <div className="flex flex-col gap-5 w-11/12 md:w-5/6 m-auto mt-10 font-serif">
      <h2 className="text-2xl md:text-3xl font-bold text-start">Explore the menu</h2>
      <p className="text-start text-sm md:text-lg max-w-full md:max-w-[80%] text-zinc-700">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="flex gap-4 md:gap-7 overflow-x-auto hide-scrollbar">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
            onClick={() => handleClick(item.menu_name)}
          >
            <img
              className={`w-24 md:w-[10vw] max-w-[90%] object-cover transition duration-2000 ${
                category === item.menu_name ? 'border-4 rounded-full border-tomato p-0.5' : ''
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className="mt-2 text-sm md:text-lg text-zinc-700">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="m-2.5 h-[2px] border-none bg-gray-200" />
    </div>
  );
};

export default Exploremenu;
