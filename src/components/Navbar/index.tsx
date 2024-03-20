import React, { useState } from "react";

// Define types
type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand: NavItem;
  navItems: NavItem[];
  onLoginClick: () => void;
  onSignUpClick: () => void;
};

// Navbar component
const Navbar: React.FC<NavbarProps> = ({ brand, navItems, onLoginClick, onSignUpClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-6 bg-white  fixed top-0 inset-x-0 z-50">
        <a href={brand.href} className="text-xl font-semibold hover:text-violet-600 transition duration-300">
          {brand.label}
        </a>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="hover:text-violet-600 transition duration-300">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex space-x-2">
          <button
            onClick={onLoginClick}
            className="border border-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Log In
          </button>
          <button
            onClick={onSignUpClick}
            className="bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-600 transition duration-300"
          >
            Sign Up
          </button>
        </div>
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="h-6 w-6 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </div>
      </nav>
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"} md:hidden`} onClick={() => setIsMenuOpen(false)}>
        <div className={`fixed bottom-0 left-0 right-0 bg-white p-5 transform transition-transform duration-300 ease-out ${isMenuOpen ? "translate-y-0" : "translate-y-full"}`}>
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="text-center text-lg hover:text-violet-600 transition duration-300">
                {item.label}
              </a>
            ))}
            <button
              onClick={onLoginClick}
              className="w-full py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition duration-300"
            >
              Log In
            </button>
            <button
              onClick={onSignUpClick}
              className="w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Render example


// Render example
const ExampleNavbar = () => {
  const brand: NavItem = { label: "Brand", href: "#" };
  const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  const handleLoginClick = () => {
    console.log("Log In clicked");
  };

  const handleSignUpClick = () => {
    console.log("Sign Up clicked");
  };

  return (
    <Navbar
      brand={brand}
      navItems={navItems}
      onLoginClick={handleLoginClick}
      onSignUpClick={handleSignUpClick}
    />
  );
};

export default ExampleNavbar;
