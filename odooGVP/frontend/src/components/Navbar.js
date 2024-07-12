import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
        <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        <li><Link to="/dynamic-cards" className="hover:underline">Cards</Link></li>
        <li><Link to="/login" className="hover:underline">Login</Link></li>
        <li><Link to="/signup" className="hover:underline">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
