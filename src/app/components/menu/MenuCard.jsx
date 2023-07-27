import React from "react";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";


export const MenuCard = ({
  category,
  name,
  description,
  price,
  stockAmount,
  inOffer,
  rating,
  images,
  reviews,
}) => {
  //console.log(name);
  return (
   
      <div className=" lg:basis-1/2 basis-full p-5 text-center">
        <div className="flex flex-row mb-4">
          <p className={`${quicksand.className} "basis-1/2 text-5"`}>{name}</p>
          <p className={`${gilda_display.className} basis-1/2 text-end text-green-600`}>{price}</p>
        </div>
        <hr />
      </div>
  
  );
};
