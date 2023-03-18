import React from "react";
import { Icon } from "@iconify/react";

import Image from "next/image";

const CardInstrument = ({ name, cover }) => {
  return (
    <div>
      <div className="w-40 m-1 bg-white border border-gray-200 rounded-lg shadow  ">
        <a href="#">
          <Image
            className="rounded-t-lg w-100% mt-5"
            src={cover}
            // src={`../${cover}`}
            // src="/torres.jpg"
            alt="Guitar Modele"
            width={100}
            height={100}
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-color-secondary dark:text-white">
              {name}
            </h5>
          </a>

          <a
            href="#"
            className="inline-flex  items-center px-3 py-2 transition-all hover:border-color-secondary text-sm hover:bg-color-secondary hover:text-white font-medium text-center text-color-secondary bg-transparent  border-1 border-black focus:ring-4 focus:outline-none"
          >
            View
            <Icon
              className="ml-1"
              icon="line-md:arrow-small-right"
              width="20"
              height="20"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardInstrument;
