import React from 'react';

const Header = () => {
  return (
    <div className="bg-cover bg-center h-[25rem] w-5/6 m-auto flex items-center justify-center text-white rounded-xl mt-4 shadow-lg overflow-hidden" style={{ backgroundImage: "url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)" }}>
      <div className="text-center max-w-xl bg-black bg-opacity-50 p-6 rounded-lg animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4">Order Your Favourite Food Here</h2>
        <p className="mb-6">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">View Here</button>
      </div>
    </div>
  );
};

export default Header;
