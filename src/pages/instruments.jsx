import React from "react";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import CardInstrument from "@/components/CardInstrument/CardInstrument";
import data from "../json/data.json";

const instruments = () => {
  console.log(data);
  return (
    <WebsiteLayout>
      <div className="flex p-1 flex-wrap justify-center border-l-2 border-r-2 border-black w-80vw">
        <CardInstrument />
      </div>
    </WebsiteLayout>
  );
};

export default instruments;
