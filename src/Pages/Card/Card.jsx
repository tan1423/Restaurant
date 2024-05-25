import React, { useContext } from "react";
import { StoreContext } from "../../Contextapi/Contextapi";
import { Link, useNavigate } from "react-router-dom";
import { assets } from '../../frontend_assets/assets';

const Card = () => {
  const { carditem, food_list, removecarditem, addcarditem, gettotalammount } = useContext(StoreContext);

  const navigate = useNavigate()
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-10 mb-28">
      {gettotalammount() === 0 ? (
        <div className="text-center">
          <img
            src="https://reeplayerindia.com/images/logo.png"
            alt="Logo"
            className="mx-auto mb-4 w-32"
          />
          <p className="text-xl font-semibold">Your cart is empty</p>
          <p className="text-gray-600">Please add some items from the menu</p>
          <Link to="/" className="inline-block mt-4">
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Go to Menu
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-6 font-bold border-b-2 border-gray-300 pb-2 mb-4">
            <p className="col-span-1">Item</p>
            <p className="col-span-1">Title</p>
            <p className="col-span-1">Price</p>
            <p className="col-span-2">Quantity</p>
            <p className="col-span-1">Total</p>
          </div>
          {food_list.map((item) => {
            if (carditem[item._id] > 0) {
              return (
                <div
                  key={item._id}
                  className="grid grid-cols-6 items-center border-b border-gray-300 py-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded col-span-1"
                  />
                  <p className="col-span-1">{item.name}</p>
                  <p className="col-span-1">${item.price.toFixed(2)}</p>
                  <div className="flex items-center col-span-2 space-x-2 p-2">
                    <img
                      onClick={() => removecarditem(item._id)}
                      src={assets.remove_icon_red}
                      alt="Remove"
                      className="cursor-pointer w-5 h-5"
                    />
                    <p className="text-black">{carditem[item._id]}</p>
                    <img
                      onClick={() => addcarditem(item._id)}
                      src={assets.add_icon_green}
                      alt="Add"
                      className="cursor-pointer w-5 h-5"
                    />
                  </div>
                  <p className="col-span-1">
                    ${(item.price * carditem[item._id]).toFixed(2)}
                  </p>
                </div>
              );
            }
            return null;
          })}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Totals</h2>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0">
                <div className="flex justify-between mb-4">
                  <p className="font-semibold text-gray-600">Subtotal</p>
                  <p className="text-gray-800">${gettotalammount()}</p>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between mb-4">
                  <p className="font-semibold text-gray-600">Delivery charge</p>
                  <p className="text-gray-800">$2.00</p>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-bold text-lg text-gray-800">
                  <p>Total</p>
                  <p>${(gettotalammount() + 2).toFixed(2)}</p>
                </div>
                <button onClick={() => navigate("/order")} className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                  Proceed To Checkout
                </button>
              </div>
              <div className="mt-6 w-full max-w-md mx-auto md:mx-0 md:ml-6">
                <p className="mb-2 text-gray-800">
                  If you have a promo code, enter it here
                </p>
                <div className="flex flex-col md:flex-row">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-grow p-3 border border-gray-300 rounded-t md:rounded-t-none md:rounded-l focus:outline-none focus:border-red-500"
                  />
                  <button className="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-3 px-6 rounded-b md:rounded-b-none md:rounded-r transition-colors">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
