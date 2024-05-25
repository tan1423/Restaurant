import React, { useContext } from "react";
import { StoreContext } from "../../Contextapi/Contextapi";
import { assets } from "../../frontend_assets/assets";
import { Foodlist } from "../Foodlist/Foodlist";

const Showfood = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="p-14">
      <h2 className="text-2xl font-bold mb-6">Top dishes near you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {food_list.map((item, index) => {
          if (category === "ALL" || category === item.category) {
            return (
              <Foodlist
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Showfood;
