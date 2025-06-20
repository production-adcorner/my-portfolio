import React from 'react';
import {  FiDribbble, FiTwitter } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-sm font-medium text-gray-400 mb-4">Available For Work</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Curious about what we can create together? Let's bring something extraordinary to life!
          </h2>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300">
            Book a Free Call
          </button>
        </div>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FiDribbble size={24} />
           
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FiDribbble size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FiTwitter size={24} />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <a href="mailto:hello@namebase.design" className="hover:text-white transition-colors duration-300 mb-4 md:mb-0">
            hello@namebase.design
          </a>
          <p className="mb-4 md:mb-0">Design in Framer</p>
          <p>&copy; {new Date().getFullYear()} All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;