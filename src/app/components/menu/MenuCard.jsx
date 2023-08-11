import React from "react";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";
import 'animate.css';


export const MenuCard = ({ items}) => {
  const {
    
    name,
    description,
    price,
    currency,
    stockAmount,
    inOffer,
    rating,
    images,
    reviews,
    _id
  } = items;
  //console.log(name);
  return (
    <div className="animate__animated animate__backInLeft animate__fast lg:basis-5/12 basis-full mx-3 p-4 my-2 text-start border bg-slate-50 rounded-xl">
      <div className="flex flex-row mb-4">
        <p className={`${quicksand.className} basis-1/2 text-xl`}>{name}</p>
        <div className="basis-1/2 text-end">
          <p
            className={`${gilda_display.className}  text-green-600 text-lg font-bold`}
          >
            {price}
          </p>
          <span className={`${quicksand.className} text-green-950 text-bold`}>CUP</span>
        </div>
       
      </div>
      <hr />
      <div className="mt-4">
        <p
            className={`${gilda_display.className}  text-slate-600 text-sm font-bold`}
          >
            {description}
          </p>
        </div>
      
    </div>
  );
};
