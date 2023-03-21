import React from "react";
import { useRouter } from "next/router";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import pics from "../../json/images.json";

import Image from "next/image";

const id = () => {
  let router = useRouter();
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
    images,
  } = router.query;

  function findAlbum(array) {
    let album = {};
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        album = array[i];
      }
    }
    return album;
  }
  const pictures = findAlbum(pics);
  const onlyimage = pictures.images;
  console.log(onlyimage);

  return (
    <WebsiteLayout>
      <section className="gallery border-l-2 border-r-2 border-black">
        <br />
        <div className="gallery__item">
          <input
            type="radio"
            id={`img-0`}
            defaultChecked
            name="gallery"
            className="gallery__selector"
          />
          <Image
            src={cover}
            alt="guitare-picture"
            width={500}
            height={500}
            className="gallery__img rounded-t-lg mt-5"
          />
          <label htmlFor={`img-0`} className="gallery__thumb">
            <Image
              src={cover}
              alt="miniature-guitare"
              width={100}
              height={100}
            />
          </label>
        </div>

        {onlyimage?.map((data) => {
          return (
            <div key={data.id} className="gallery__item">
              <input
                type="radio"
                id={`img-${data.id}`}
                name="gallery"
                className="gallery__selector"
              />
              <Image
                className="gallery__img rounded-t-lg mt-5"
                src={data.src}
                alt="guitare-picture"
                width={500}
                height={500}
              />
              <label htmlFor={`img-${data.id}`} className="gallery__thumb">
                <Image
                  src={data.src}
                  alt="miniature-guitare"
                  width={100}
                  height={100}
                />
              </label>
            </div>
          );
        })}
        {/* <div className="gallery__item">
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
        </div>*/}
      </section>
      {/* DETAILs */}
      <h2 className="text-2xl text-black m-5 p-5 border-b-1 border-black font-bold">
        {name}
      </h2>
      <h3 className="text-xl font-bold text-black">Categorie</h3>
      <span className="text-black">{categorie}</span>
      <h3 className="text-xl font-bold text-black">Description</h3>
      <p className="m-2 text-center text-black">{description}</p>
      <h3 className="text-xl font-bold text-black">Details</h3>
      <div className="container-details text-center text-black">
        <span className="text-black"> Nut-width :{width}</span>
        <br />
        <span className="text-black"> Scale-length :{length}</span>
        <br />
        <span className="text-black"> Weight :{weight}</span>
        <br />
        <span className="text-black"> Top :{top}</span>
        <br />
        <br />
        <br />
        <span className="text-black">
          Pictures Courtesy of {picturesCourtesy}
        </span>
      </div>
    </WebsiteLayout>
  );
};

export default id;
