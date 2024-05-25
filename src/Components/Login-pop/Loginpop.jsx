import React, { useState, useEffect } from 'react';
import { assets } from '../../frontend_assets/assets';

const Loginpop = ({ setShowlogin }) => {
  const [currstate, setCurrstate] = useState('Login');

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
      <form className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{currstate}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="cursor-pointer w-6 h-6"
          />
        </div>
        <div className="mb-4">
          {currstate === 'Sign up' && (
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 mb-2 border border-gray-300 rounded-md"
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Your password"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          {currstate === 'Sign up' ? 'Create account' : 'Login'}
        </button>
        <div className="mt-4 text-gray-600 text-sm">
          <input type="checkbox" className="mr-2" required />
          <p className="inline">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        <div className="mt-4 text-center">
          {currstate === 'Login' ? (
            <p>
              Create a new account?{' '}
              <span
                onClick={() => setCurrstate('Sign up')}
                className="text-red-500 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span
                onClick={() => setCurrstate('Login')}
                className="text-red-500 cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Loginpop;
