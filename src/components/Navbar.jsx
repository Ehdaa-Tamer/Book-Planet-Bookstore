import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  // Function to check if a link is active
  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <nav className=" ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main nav items */}
          <div className="flex items-center">
            
            <div className="flex-shrink-0 flex items-center">
              <img 
                className="h-12 w-auto" 
                src="/images/logo.png" 
                alt="Logo"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a 
                href="/" 
                className={`${isActive('/') ? 'border-[#b0acaa] text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </a>
              <a 
                href="/Books" 
                className={`${isActive('/Books') ? 'border-[#b0acaa] text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Books
              </a>
              <a 
                href="/accessories" 
                className={`${isActive('/accessories') ? 'border-[#b0acaa] text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Accessories
              </a>
              <a 
                href="/quotes" 
                className={`${isActive('/quotes') ? 'border-[#b0acaa] text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Quotes
              </a>
            </div>
          </div>

          {/* Search bar and icons */}
          <div className="flex items-center">
            {/* Search bar - hidden on mobile */}
            <div className="hidden md:block mr-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="px-3 py-1 border text-gray-800 bg-transparent border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-[#b0acaa]"
              />
            </div>

            
            <div className="hidden md:flex md:items-center md:space-x-4">
              {/* Favorites icon */}
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <img 
                  className="h-6 w-6" 
                  src="/images/fav.png" 
                  alt="Favorites"
                />
              </a>
              
              {/* Cart icon */}
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <img 
                  className="h-6 w-6" 
                  src="/images/cart.png" 
                  alt="Cart"
                />
              </a>
              
              {/* Account icon */}
              <a href="/Form" className={`${isActive('/Form') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
                <img 
                  className="h-6 w-6" 
                  src="/images/account.png" 
                  alt="Account"
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="/"
            className={`${isActive('/') ? 'bg-gray-50 border-[#b0acaa] text-gray-900' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Home
          </a>
          <a
            href="/Books"
            className={`${isActive('/Books') ? 'bg-gray-50 border-[#b0acaa] text-gray-900' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Books
          </a>
          <a
            href="/accessories"
            className={`${isActive('/accessories') ? 'bg-gray-50 border-[#b0acaa] text-gray-900' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Accessories
          </a>
          <a
            href="/quotes"
            className={`${isActive('/quotes') ? 'bg-gray-50 border-[#b0acaa] text-gray-900' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Quotes
          </a>
          
          {/* Mobile search bar */}
          <div className="px-4 py-2">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-3 py-2 border text-gray-800 bg-transparent border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-[#b0acaa]"
            />
          </div>
          
          {/* Mobile icons */}
          <div className="flex justify-around px-4 py-2 border-t border-gray-200">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <img 
                className="h-6 w-6" 
                src="/images/fav.png" 
                alt="Favorites"
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <img 
                className="h-6 w-6" 
                src="/images/cart.png" 
                alt="Cart"
              />
            </a>
            <a href="/Form" className={`${isActive('/Form') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
              <img 
                className="h-6 w-6" 
                src="/images/account.png" 
                alt="Account"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}