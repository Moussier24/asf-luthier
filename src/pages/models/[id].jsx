import React from "react";
import { useRouter } from "next/router";
import WebsiteLayout from "@/layouts/WebsiteLayout";
// import cover from "../../assets/Adrien_Garcia_montage.jpg";
import Image from "next/image";

const id = () => {
  let router = useRouter();
  // let id = router.query.id;
  // console.log(router.query.name);
  const {
    id,
    name,
    cover,
    categorie,
    length,
    top,
    weight,
    width,
    description,
    picturesCourtesy,
    imageList,
  } = router.query;
  // console.log("name " + name);
  // console.log(router.query);

  return (
    <WebsiteLayout>
      <section className="gallery border-2 border-black">
        <br />
        <div className="gallery__item text-center">
          <input
            type="radio"
            id="img-1"
            defaultChecked
            name="gallery"
            className="gallery__selector"
          />
          <Image
            src={cover}
            alt=""
            width={400}
            height={400}
            className="gallery__img"
          />
          <label htmlFor="img-1" className="gallery__thumb">
            <Image src={cover} alt="" width={100} height={100} />
          </label>
        </div>
        <div className="gallery__item">
          <input
            type="radio"
            id="img-2"
            name="gallery"
            className="gallery__selector"
          />
          <Image
            className="gallery__img "
            src={cover}
            alt=""
            width={400}
            height={400}
          />
          <label htmlFor="img-2" className="gallery__thumb">
            <Image src={cover} alt="" width={100} height={100} />
          </label>
        </div>
        <div className="gallery__item">
          <input
            type="radio"
            id="img-3"
            name="gallery"
            className="gallery__selector"
          />
          <Image
            className="gallery__img"
            src={cover}
            alt=""
            width={400}
            height={400}
          />
          <label htmlFor="img-3" className="gallery__thumb">
            <Image src={cover} alt="" width={100} height={100} />
          </label>
        </div>
        <div className="gallery__item">
          <input
            type="radio"
            id="img-4"
            name="gallery"
            className="gallery__selector"
          />
          <Image
            className="gallery__img"
            src={cover}
            alt=""
            width={400}
            height={400}
          />
          <label htmlFor="img-4" className="gallery__thumb">
            <Image src={cover} alt="" width={100} height={100} />
          </label>
        </div>
        <div className="gallery__item">
          <input
            type="radio"
            id="img-5"
            name="gallery"
            className="gallery__selector"
          />
          <Image
            className="gallery__img"
            src={cover}
            alt=""
            width={400}
            height={400}
          />
          <label htmlFor="img-5" className="gallery__thumb">
            <Image src={cover} alt="" width={100} height={100} />
          </label>
        </div>
        <div className="gallery__item">
          <input
            type="radio"
            id="img-6"
            name="gallery"
            className="gallery__selector"
          />
          <Image
            className="gallery__img"
            src={cover}
            alt=""
            width={400}
            height={400}
          />
          <label htmlFor="img-6" className="gallery__thumb">
            <Image src={cover} alt="" width={100} height={100} />
          </label>
        </div>
      </section>
      {/* DETAILs */}
      <h2 className="text-2xl m-5 p-5 border-b-1 border-black font-bold">
        {name}
      </h2>
      <h3 className="text-xl font-bold">Description</h3>
      <span>{categorie}</span>
    </WebsiteLayout>
  );
};

export default id;
