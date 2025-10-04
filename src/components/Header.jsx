import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-red-600">Netflix </h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/about" className="hover:text-red-500">About</Link>
      </nav>
    </header>
  );
}

export default Header;
