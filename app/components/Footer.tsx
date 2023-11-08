import { Home, Outdent, ShoppingBag, Snowflake, Waypoints } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-yellow-300">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              WHAT'S NEW FOR SKI AND SNOWBOARD WEAR 2023 - 2024
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-teal-700 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-yellow-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Skiwear
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
Main Center                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-teal-600 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-yellow-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline "
                  >
                    Other Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Instrgam
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-teal-500 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-yellow-300 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <Snowflake size={40} /> © 2023. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Snowflake />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-rose-500 hover:text-gray-900 dark:hover:text-white"
            >
            <ShoppingBag size={20}/>
              <span className="sr-only">Shop</span>
            </a>
            <a
              href="#"
              className="text-rose-500 hover:text-gray-900 dark:hover:text-white"
            >
           <Home size={20}/>
              <span className="sr-only">Comfortble</span>
            </a>
            <a
              href="#"
              className="text-rose-500 hover:text-gray-900 dark:hover:text-white"
            >
           <Waypoints size={20}/>
              <span className="sr-only">Way</span>
            </a>
            <a
              href="#"
              className="text-rose-500 hover:text-gray-900 dark:hover:text-white"
            >
         <Outdent size={20}/>
              <span className="sr-only">outside</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
