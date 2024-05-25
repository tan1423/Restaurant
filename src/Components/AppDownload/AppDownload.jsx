import React from 'react';
import { assets } from '../../frontend_assets/assets';

const AppDownload = () => {
  return (
    <div className="bg-gray-100 text-center py-8">
      <p className="text-lg font-semibold mb-2">For Better Experience Download</p>
      <p className="text-2xl font-bold mb-4">RGS Food</p>
      <div className="flex justify-center space-x-4">
        <img src={assets.play_store} alt="Play Store" className="h-12 w-auto hover:opacity-75 transition-opacity duration-300" />
        <img src={assets.app_store} alt="App Store" className="h-12 w-auto hover:opacity-75 transition-opacity duration-300" />
      </div>
    </div>
  );
}

export default AppDownload;
