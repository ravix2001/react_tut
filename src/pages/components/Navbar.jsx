import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16 items-center">
            {/* <!-- Logo --> */}
            <div class="flex-shrink-0 text-white text-2xl font-bold">
              MyBrand
            </div>

            {/* <!-- Desktop Menu --> */}
            <div class="hidden md:flex space-x-6 text-white font-medium">
              <a href="#" class="hover:text-yellow-300 transition">
                Home
              </a>
              <a href="#" class="hover:text-yellow-300 transition">
                About
              </a>
              <a href="#" class="hover:text-yellow-300 transition">
                Services
              </a>
              <a href="#" class="hover:text-yellow-300 transition">
                Contact
              </a>
            </div>

            {/* <!-- Desktop Button --> */}
            <div class="add-button hidden md:block">
              <a
                href="/create"
                class="bg-white text-indigo-700 px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold"
              >
                Add
              </a>
            </div>

            {/* <!-- Mobile Menu Button --> */}
            <div class="md:hidden">
              <button
                id="menu-toggle"
                class="text-white focus:outline-none text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          class="md:hidden hidden px-4 pb-4 space-y-2 text-white font-medium"
        >
          <a href="#" class="block hover:text-yellow-300 transition">
            Home
          </a>
          <a href="#" class="block hover:text-yellow-300 transition">
            About
          </a>
          <a href="#" class="block hover:text-yellow-300 transition">
            Services
          </a>
          <a href="#" class="block hover:text-yellow-300 transition">
            Contact
          </a>
          <a
            href="#"
            class="block bg-white text-indigo-700 text-center px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold mt-2"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
