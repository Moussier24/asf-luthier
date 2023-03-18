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
      <div className="flex p-1 flex-wrap justify-center border-l-2 border-r-2 border-black w-80vw">
        {data.map((data) => {
          console.log(data.name);
          return (
            <CardInstrument key={data.id} name={data.name} cover={data.cover} />
          );
        })}
      </div>
    </WebsiteLayout>
  );
};

export default instruments;
