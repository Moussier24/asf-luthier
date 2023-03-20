import React from "react";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import CardInstrument from "@/components/CardInstrument/CardInstrument";
import data from "../json/data.json";

const instruments = () => {
  // let stringify = JSON.stringify(data);
  // let models = JSON.parse(stringify);
  // console.log(models);
  return (
    <WebsiteLayout>
      <h2 className="text-2xl m-5 p-5 border-b-1 border-black font-bold">
        Classical Guitars - Past Masters models
      </h2>
      <div className="flex p-1 flex-wrap justify-center border-l-2 border-r-2 border-black w-80vw">
        {data.map((data) => {
          console.log(data.name);
          return data.categorie ===
            "Classical Guitars - Past Masters models" ? (
            <CardInstrument
              key={data.id}
              name={data.name}
              cover={data.cover}
              id={data.id}
              categorie={data.categorie}
              length={data.scaleLength}
              top={data.top}
              weight={data.weight}
              width={data.nutWidth}
              description={data.description}
              picturesCourtesy={data.picturesCourtesy}
              imageList={data.imageList}
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
        {data.map((data) => {
          console.log(data.name);
          return data.categorie === "Romantic Guitar" ? (
            <CardInstrument
              key={data.id}
              name={data.name}
              cover={data.cover}
              id={data.id}
              categorie={data.categorie}
              length={data.scaleLength}
              top={data.top}
              weight={data.weight}
              width={data.nutWidth}
              description={data.description}
              picturesCourtesy={data.picturesCourtesy}
              imageList={data.imageList}
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
