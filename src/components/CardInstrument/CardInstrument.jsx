import React from "react";
import CoverGuitar from "../../assets/Arias/Adrien-Savary-Freestone-2019-Arias-Classical-Guitar-2.jpg";
import CoverGuitar2 from "../../assets/Arias/Adrien-Savary-Freestone-2019-Arias-Classical-Guitar-2-removebg-preview.png";

import Image from "next/image";

const CardInstrument = () => {
  return (
    <div>
      <div className="w-40 m-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-t-lg w-100% mt-5"
            src={CoverGuitar}
            alt=""
            // width={500}
            // height={500}
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Arias
            </h5>
          </a>

          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="w-40 m-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-t-lg w-100% mt-5"
            src={CoverGuitar2}
            alt=""
            // width={500}
            // height={500}
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Arias
            </h5>
          </a>

          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="w-40 m-1 bg-transparent border border-gray-200 rounded-lg shadow  dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-t-lg w-100% mt-5"
            src={CoverGuitar2}
            alt=""
            // width={500}
            // height={500}
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Arias
            </h5>
          </a>

          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardInstrument;
