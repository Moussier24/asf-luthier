import React from "react";
import { useRouter } from "next/router";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import pics from "../../json/images.json";
import Image from "next/image";
import modelsList from "../../json/data.json";

const id = ({ data }) => {
  console.log(data);
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  // const {
  //   id,
  //   name,
  //   cover,
  //   categorie,
  //   length,
  //   top,
  //   weight,
  //   width,
  //   description,
  //   picturesCourtesy,
  //   images,
  // } = router.query;

  // function findAlbum(array) {
  //   let album = {};
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].name === name) {
  //       album = array[i];
  //     }
  //   }

  //   return album;
  // }
  // const pictures = findAlbum(pics);
  // const onlyimage = pictures.images;

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
            src={data.cover}
            alt="guitare-picture"
            width={500}
            height={500}
            className="gallery__img rounded-t-lg mt-5"
          />
          <label htmlFor={`img-0`} className="gallery__thumb">
            <Image
              src={data.cover}
              alt="miniature-guitare"
              width={100}
              height={100}
            />
          </label>
        </div>

        {data.images?.map((data) => {
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
      <h2 className="text-2xl text-color-secondary m-5 p-5 border-b-1 border-black font-bold">
        {data.name}
      </h2>
      <h3 className="text-xl font-bold text-color-secondary">Categorie</h3>
      <span className="text-color-secondary text-lg">{data.categorie}</span>
      <h3 className="text-xl font-bold text-color-secondary ">Description</h3>
      <p className="m-2 md:w-40vw sm:w-70vw text-lg text-center text-color-secondary ">
        {data.description}
      </p>
      <h3 className="text-xl font-bold text-color-secondary">Details</h3>
      <div className="container-details text-center text-color-secondary">
        <span className="text-color-secondary text-lg">
          {" "}
          Nut width: {data.width}
        </span>
        <br />
        <span className="text-color-secondary text-lg">
          {" "}
          Scale length: {data.length}
        </span>
        <br />
        <span className="text-color-secondary text-lg">
          {" "}
          Weight: {data.weight}
        </span>
        <br />
        <span className="text-color-secondary text-lg"> Top: {data.top}</span>
        <br />
        <br />
        <br />
        <span className="text-color-secondary text-lg">
          Pictures Courtesy of {data.picturesCourtesy}
        </span>
      </div>
    </WebsiteLayout>
  );
};

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const slug = context.params.id;

  // if (!slug) {
  //   return {
  //     notFound: true,
  //   };
  // }

  let filter = modelsList.find((element) => element.id === slug);
  return {
    // Passed to the page component as props
    props: { data: filter || null },
  };
}

// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const data2 = JSON.parse(modelsList);
  const paths = data2.map((path) => {
    return {
      params: { id: path.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default id;
