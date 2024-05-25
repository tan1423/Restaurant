import React, { useContext } from 'react';
import { assets } from '../../frontend_assets/assets';
import { StoreContext } from '../../Contextapi/Contextapi';

export const Foodlist = ({ id, name, description, price, image }) => {

  const { carditem, addcarditem, removecarditem } = useContext(StoreContext);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute bottom-2 right-2 flex items-center space-x-2 bg-white rounded-full">
          {!carditem[id] ? (
            <img
              onClick={() => addcarditem(id)}
              src={assets.add_icon_white}
              alt="Add"
              className="cursor-pointer"
            />
          ) : (
            <div className="flex items-center space-x-2 p-2">
              <img
                onClick={() => removecarditem(id)}
                src={assets.remove_icon_red}
                alt="Remove"
                className="cursor-pointer"
              />
              <p className="text-black">{carditem[id]}</p>
              <img
                onClick={() => addcarditem(id)}
                src={assets.add_icon_green}
                alt="Add"
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="Rating" className="h-5" />
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-xl font-bold">${price}</p>
      </div>
    </div>
  );
};
