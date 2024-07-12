import React from 'react';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gradientStart to-gradientEnd p-4 text-white text-center flex items-center justify-center">
      <img src={logo} alt="Website Logo" className="w-12 h-12 mr-4 animate-bounce-slow" />
      <h1 className="text-2xl font-bold">Website Title</h1>
    </header>
  );
};

export default Header;
