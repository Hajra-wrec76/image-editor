import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
  <nav className="flex justify-center space-x-6">
    <Link to="/" className="text-white hover:text-gray-400">
      <li className="list-none">Home</li>
    </Link>
    <Link to="/BackgroundRemove" className="text-white hover:text-gray-400">
      <li className="list-none">BackgroundRemove</li>
    </Link>
    <Link to="/BuyCredits" className="text-white hover:text-gray-400">
      <li className="list-none">BuyCredits</li>
    </Link>
    <Link to="/GenerativeFill" className="text-white hover:text-gray-400">
      <li className="list-none">GenerativeFill</li>
    </Link>
    <Link to="/ImageRestore" className="text-white hover:text-gray-400">
      <li className="list-none">ImageRestore</li>
    </Link>
    <Link to="/ObjectRecolor" className="text-white hover:text-gray-400">
      <li className="list-none">ObjectRecolor</li>
    </Link>
    <Link to="/ObjectRemove" className="text-white hover:text-gray-400">
      <li className="list-none">ObjectRemove</li>
    </Link>
    <Link to="/Profile" className="text-white hover:text-gray-400">
      <li className="list-none">Profile</li>
    </Link>
  </nav>
</div>

  );
};

export default Navbar;
