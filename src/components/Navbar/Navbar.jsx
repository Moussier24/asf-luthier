import React from "react";
import Logo from "../../assets/Logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      {/* LOGO */}
      <Image className="mx-auto" src={Logo} />
      {/* MENU */}
      <nav className="  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container border-b-2 w-90 border-black flex flex-wrap items-center justify-between mx-auto">
          <div className="mx-auto  md:block md:w-auto" id="navbar-default">
            <ul className="flex mx-auto  p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="border-b-2 border-black p-2 navbar-bg-hover">
                <a
                  href="#"
                  className="block w-full py-2 pl-3 pr-4  text-black rounded md:bg-transparent  md:text-2xl md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="border-b-2 border-black p-2">
                <a
                  href="#"
                  className="block py-2 pl-3 md:text-2xl pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Instruments
                </a>
              </li>
              <li className="border-b-2 border-black p-2">
                <a
                  href="#"
                  className="block py-2 md:text-2xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li className="border-b-2 border-black p-2">
                <a
                  href="#"
                  className="block py-2 md:text-2xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
