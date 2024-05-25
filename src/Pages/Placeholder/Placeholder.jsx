import React, { useContext } from "react";
import { StoreContext } from "../../Contextapi/Contextapi";
import { useNavigate } from "react-router-dom";

const Placeholder = () => {
  const { gettotalammount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <form className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10 flex justify-between gap-8">
      <div className="w-full lg:w-1/2 mb-6">
        <p className="text-xl font-bold mb-4">Delivery Information</p>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-500"
        />
        <input
          type="text"
          placeholder="Street"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-500"
        />
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="City"
            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="State"
            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Zip code"
            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-red-500"
        />
      </div>
      <div className="w-full lg:w-1/3">
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
        <button
          type="button"
          onClick={() => navigate("/order")}
          className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Proceed To Payment
        </button>
      </div>
    </form>
  );
};

export default Placeholder;
