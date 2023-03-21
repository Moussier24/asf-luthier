import React from "react";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import CardInstrument from "@/components/CardInstrument/CardInstrument";
import data from "../json/data.json";

const instruments = () => {
  // let stringify = JSON.stringify(item);
  // let models = JSON.parse(stringify);
  // console.log(models);
  return (
    <WebsiteLayout>
      <h2 className="text-2xl m-5 p-5 border-b-1 border-black font-bold">
        Classical Guitars - Past Masters models
      </h2>
      <div className="flex p-1 flex-wrap justify-center border-l-2 border-r-2 border-black w-80vw">
        {data.map((item) => {
          // console.log(item.images);
          return item.categorie ===
            "Classical Guitars - Past Masters models" ? (
            <CardInstrument
              key={item.id}
              name={item.name}
              cover={item.cover}
              id={item.id}
              categorie={item.categorie}
              length={item.scaleLength}
              top={item.top}
              weight={item.weight}
              width={item.nutWidth}
              description={item.description}
              picturesCourtesy={item.picturesCourtesy}
              images={item.images}
            />
          ) : (
            ""
          );
        })}
      </div>
      <h2 className="text-2xl m-5 p-5 border-b-1 border-black font-bold">
        Romantic Guitar
      </h2>
      <div className="flex p-1 flex-wrap justify-center border-l-2 border-r-2 border-black w-80vw">
        {data.map((item) => {
          return item.categorie === "Romantic Guitar" ? (
            <CardInstrument
              key={item.id}
              name={item.name}
              cover={item.cover}
              id={item.id}
              categorie={item.categorie}
              length={item.scaleLength}
              top={item.top}
              weight={item.weight}
              width={item.nutWidth}
              description={item.description}
              picturesCourtesy={item.picturesCourtesy}
              images={item.images}
            />
          ) : (
            ""
          );
        })}
      </div>
    </WebsiteLayout>
  );
};

export default instruments;
