import React from "react";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import CardInstrument from "@/components/CardInstrument/CardInstrument";

const instruments = () => {
  return (
    <WebsiteLayout>
      <div className="flex p-1 flex-wrap justify-center border-2 border-black w-80vw">
        <CardInstrument />
        <CardInstrument />
        <CardInstrument />
        <CardInstrument />
        <CardInstrument />
        <CardInstrument />
        {/*  */}
        <CardInstrument />
        <CardInstrument />
        <CardInstrument />
        <CardInstrument />
        <CardInstrument />
        <CardInstrument />
      </div>
    </WebsiteLayout>
  );
};

export default instruments;
