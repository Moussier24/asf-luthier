import React from "react";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { Icon } from "@iconify/react";

const contact = () => {
  return (
    <WebsiteLayout>
      <div className="container-texte text-center mx-auto ">
        <div className="only-text border-b-2 border-black py-5">
          {" "}
          <p className="text-xl font-bold text-center text-color-secondary">
            If you have any questions, or if you want to know more about my
            instruments, you are more than welcome to contact me (I speak both
            French and English) :
          </p>
          <br />
          <span className="text-2xl mx-auto font-bold text-center text-color-secondary">
            Adrien Savary Freestone
          </span>
        </div>

        <br />
        <a
          className="mt-4 text-2xl mx-auto font-bold text-center text-color-secondary"
          href="mailto:savary.adrien@gmail.com"
        >
          savary.adrien@gmail.com
        </a>

        <div className="container-socialmedia flex justify-center">
          <a
            className="border-2 border-black p-2 m-4"
            href="https://www.instagram.com/asf_luthier/"
          >
            <Icon
              className=" h-7 w-auto block mx-auto"
              icon="line-md:instagram"
              color="#000000"
              width="100"
              height="100"
            />
          </a>
          <br />
          <a
            className="border-2 border-black p-2 m-4"
            href="https://www.facebook.com/asf.luthier/?_rdc=2&_rdr"
          >
            <Icon
              className="h-7 w-auto block mx-auto"
              icon="line-md:facebook"
              color="#000000"
              width="100"
              height="100"
            />
          </a>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default contact;
