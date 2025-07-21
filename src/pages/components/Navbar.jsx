import React from "react";

function Navbar({hideAddButton = false}) {
  return (
    <div>
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* <!-- Logo --> */}
            <div className="flex-shrink-0 text-white text-2xl font-bold">
              MyBrand
            </div>

            {/* <!-- Desktop Menu --> */}
            <div className="hidden md:flex space-x-6 text-white font-medium">
              <a href="/home" className="hover:text-yellow-300 transition">
                Home
              </a>
              <a href="/about" className="hover:text-yellow-300 transition">
                About
              </a>
              <a href="/" className="hover:text-yellow-300 transition">
                Services
              </a>
              <a href="/" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </div>

            {/* <!-- Desktop Button --> */}
            {!hideAddButton && (
              <div className="addButton hidden md:block">
                <a
                  href="/create"
                  className="bg-white text-indigo-700 px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold"
                >
                  Add Blog
                </a>
              </div>
            )}

            {/* <!-- Mobile Menu Button --> */}
            <div className="md:hidden">
              <button
                id="menu-toggle"
                className="text-white focus:outline-none text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          className="md:hidden hidden px-4 pb-4 space-y-2 text-white font-medium"
        >
          <a href="#" className="block hover:text-yellow-300 transition">
            Home
          </a>
          <a href="#" className="block hover:text-yellow-300 transition">
            About
          </a>
          <a href="#" className="block hover:text-yellow-300 transition">
            Services
          </a>
          <a href="#" className="block hover:text-yellow-300 transition">
            Contact
          </a>
          <a
            href="#"
            className="block bg-white text-indigo-700 text-center px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold mt-2"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
