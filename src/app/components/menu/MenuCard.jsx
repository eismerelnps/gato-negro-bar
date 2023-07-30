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
   
      <div className=" lg:basis-1/2 basis-full p-5 text-start">
        <div className="flex flex-row mb-4">
          <p className={`${quicksand.className} basis-1/2 text-xl`}>{name}</p>
          <div className="basis-1/2 text-end">
          <p className={`${gilda_display.className}  text-green-600 text-lg font-bold`}>{price}</p>
          <span className={`${quicksand.className} text-green-950`}>CUP</span>
          </div>
          
        </div>
        <hr />
      </div>
  
  );
};
