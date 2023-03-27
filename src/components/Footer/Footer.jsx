import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t-2 border-color-secondary  ml-5 mr-5">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://asf-luthier.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Icon
              className="block h-10 w-auto "
              icon="la:guitar"
              color="4D4D4D"
              width="100"
              height="100"
            />
            <span className="self-center text-color-secondary text-2xl font-semibold whitespace-nowrap">
              Asf-luthier
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                href="/"
                className="text-color-secondary mr-4 hover:underline md:mr-6  text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/instruments"
                className="text-color-secondary mr-4 hover:underline md:mr-6 text-xl"
              >
                Instruments
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-color-secondary mr-4 hover:underline md:mr-6 text-xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-color-secondary mr-4 hover:underline md:mr-6 text-xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto lg:my-8" />
        <span className="block text-xl text-color-secondary sm:text-center">
          © 2023&nbsp;
          <a
            href="https://asf-luthier.com/"
            className="hover:underline text-color-secondary"
          >
            <span className="font-bold text-color-secondary">asf-luthier.</span>
          </a>
          &nbsp; All rights reserved. Website developed by
          <a
            className="text-color-secondary border-b-2 hover:text-white border-color-secondary color-bg-secondary-hover px-0.5 "
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
