import React from "react";
import ImageForDescription1 from "../assets/Adrien Savary 1.jpg";
import ImageForDescription2 from "../assets/Adrien Savary 2.jpg";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import Image from "next/image";

const about = () => {
  return (
    <WebsiteLayout>
      <div className=" container-image-home 2xl:w-40vw xl:w-70vw sm:w-70vw ">
        <div className="container-image ">
          <Image
            className="border-1 border-black shadow w-100%"
            src={ImageForDescription1}
            alt="Guitar Image Home"
            width={1000}
            height={1000}
          />
        </div>
        <div className=" lg:p-8 md:p-4 sm:p-4 p-4">
          <p className="text-xl text-justify text-color-secondary lg:text-20px md:text-20px sm:text-14px text-16px ">
            Adrien Savary-Freestone was born in Paris in 1992. His father was a
            music teacher, so Adrien had a close connection with music from
            birth. He started studying archeology at the Sorbonne in Paris, but
            soon realised he wanted to become an instrument maker. He visited
            Parisian luthiers, and following their advice, trained as a
            cabinetmaker at "La Bonne Graine", a school in Paris. His teachers
            were very enthousiastic about his workand encouraged him to
            continue. In 2014, Adrien graduated with a degree in Cabinet Making,
            then moved to Newark, U.K. to study guitar making. Under the
            guidance of his teachers James Lister and Adrien Lucas, he built his
            first instrument, a Spanish-style classical guitar. Although he
            learned how to make several types of instruments (classical guitars,
            acoustic guitars, violins, etc.),it was soon obvious that Spanish
            classical guitars were his favourite instruments. Newark College was
            then part of the "Leonardo Project", a European program that aimed
            to use environmentally friendly local and renewable materials in
            guitar making rather than using exotic woods, such as rosewood and
            ebony. It was thanks to that project that Adrien met the Flemish
            master Walter Verreydt, one of the teachers at the "Centrum
            voormuziekinstrumentenbouw" (CMB) in Puurs, Belgium. After
            graduating from Newark, Adrien went to the CMB in Puurs and began
            working with Walter Verreydt and Dirk de Hertogh, specialising in
            both classical and historical instruments (lutes, theorbos, etc.).
            Back in France, he worked for the Parisian luthier Wolfgang Früh for
            one year, repairing and restoring lutes, baroque guitars and ouds.
            He has had his own workshop in Vincennes, France, since 2021, where
            he mainly makes classical guitars based on famous models by renowned
            artisans such as Torres, García, Hauser and Bouchet. In August 2022,
            he entered the international guitar making competition "Antonio
            Marin Montero" in Granada, Spain, and was awarded Third Prize for
            his Enrique García model.
          </p>
        </div>
        <div className="container-image ">
          <Image
            className="border-1 border-black shadow w-100% mt-5"
            src={ImageForDescription2}
            alt="Guitar Image Home"
            width={1000}
            height={1000}
          />
        </div>
        <div className=" lg:p-8 md:p-4 sm:p-4 p-4 ">
          <p className="text-xl text-justify text-color-secondary lg:text-20px md:text-20px sm:text-14px text-16px ">
            "I think that a good way of considering guitar making and
            continually refining my skills is to try and understand the way the
            great masters worked and made their instruments. Most of my guitars
            so far have been greatly inspired by them. However, my instruments
            are not meant to be exact copies, or fac similes. Although each of
            them references a specific model, I always keep in mind that my
            guitars are meant to be played by twenty-first century guitarists,
            so I give them a little touch of modernity, meeting the very high
            standards of today's luthiers. In fact, I consider my instruments
            more as "homages" to those great masters, and my wish is to enable
            musicians to choose a guitar in the Torres, or Lacote "style" for
            instance, but at a more affordable price than an original model."
          </p>
        </div>
        <span className="border-1 border-black mx-auto  w-75% block mt-5"></span>
      </div>
    </WebsiteLayout>
  );
};

export default about;
