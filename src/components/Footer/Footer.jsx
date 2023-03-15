import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t-2 border-color-secondary  ml-5 mr-5">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Icon
              className="block h-10 w-auto lg:hidden"
              icon="la:guitar"
              color="#4d4d4d"
              width="100"
              height="100"
            />
            <span className="self-center text-black text-2xl font-semibold whitespace-nowrap dark:text-white">
              Asf-luthier
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Instruments
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline ">
            <span className="font-bold">asf-luthier.</span>
          </a>
          &nbsp; All rights reserved. Website developed by{" "}
          <a
            className="border-b-2 hover:text-white border-color-secondary color-bg-secondary-hover px-0.5 "
            href="https://www.instagram.com/kevinarmache/"
          >
            Kevin Armache
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
