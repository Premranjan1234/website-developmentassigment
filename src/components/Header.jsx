import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="h-1 w-full bg-gradient-to-r" />

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">ACGIL</h1>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <Link className="hover:text-blue-600 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-blue-600 transition" to="/about">
            About Us
          </Link>
          <Link className="hover:text-blue-600 transition" to="/services">
            Services
          </Link>
          <Link className="hover:text-blue-600 transition" to="/products">
            Products
          </Link>
          <Link className="hover:text-blue-600 transition" to="/contact">
            Contact
          </Link>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded shadow hover:shadow-lg hover:scale-105 transform transition"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow px-4 pb-4 pt-2 space-y-2 text-gray-700 font-medium transition-all">
          <Link
            className="block hover:text-blue-600"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block hover:text-blue-600"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            className="block hover:text-blue-600"
            to="/services"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            className="block hover:text-blue-600"
            to="/products"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            className="block hover:text-blue-600"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded shadow hover:shadow-lg transition"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
