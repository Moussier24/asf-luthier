import React from "react";
import { useRouter } from "next/router";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import cover from "../../assets/Adrien_Garcia_montage.jpg";
import Image from "next/image";

const id = () => {
  let router = useRouter();
  let id = router.query.id;
  console.log(router.query.name);
  console.log(id);

  return (
    <WebsiteLayout>
      <section className="gallery border-2 border-black">
        <div className="gallery__item">
          <input
            type="radio"
            id="img-1"
            defaultChecked
            name="gallery"
            className="gallery__selector"
          />
          <Image
            className="gallery__img "
            src={cover}
            alt=""
            width={700}
            height={700}
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
            width={550}
            height={550}
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
            width={550}
            height={550}
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
            width={550}
            height={550}
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
            width={550}
            height={550}
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
            width={550}
            height={550}
          />
          <label htmlFor="img-6" className="gallery__thumb">
            <Image src={cover} alt="" width={100} height={100} />
          </label>
        </div>
      </section>
    </WebsiteLayout>
  );
};

export default id;
