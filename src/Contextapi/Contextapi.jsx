import { createContext, useEffect, useState } from "react";
import { food_list } from "../frontend_assets/assets";

export const StoreContext = createContext();

const StorecontextProvider = (props) => {
  const [carditem, setCarditem] = useState({});

  const addcarditem = (itemid) => {
    if (!carditem[itemid]) {
      setCarditem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCarditem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };
  const removecarditem = (itemid) => {
    setCarditem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const gettotalammount = () => {
    let totalamount = 0;
    for (const item in carditem) {
      if (carditem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        if (iteminfo) {
          totalamount += iteminfo.price * carditem[item];
        }
      }
    }
    return totalamount;
  };
  const contextValue = {
    food_list,
    carditem,
    setCarditem,
    addcarditem,
    removecarditem,
    gettotalammount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StorecontextProvider;
