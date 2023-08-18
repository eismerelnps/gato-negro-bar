import React from "react";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";
import "animate.css";

//import huella from '../../../../public/huella_gato_negro.png'

export const MenuCard = ({ items }) => {
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
    _id,
  } = items;
  //console.log(name);
  //bg-[url('/public/huella_gato_negro.png')]
  return (
    <div className="   animate__animated animate__backInLeft animate__fast duration-400 max-w-sm basis-1/2  md:basis-2/5  bg-gradient-to-r from-neutral-300 to-white hover:bg-gradient-to-t hover:from-neutral-50  mx-3 p-4 my-2 text-start border  rounded-xl shadow-xl outline-2  ">
      <div className="flex flex-row mb-4">
        <p className={`${quicksand.className} basis-1/2 text-xl`}>{name}</p>
        <div className="basis-1/2 text-end">
          <p
            className={`${gilda_display.className}  text-green-600 text-lg font-bold`}
          >
            {price}
          </p>
          <span className={`${quicksand.className} text-green-950 text-bold`}>
            CUP
          </span>
        </div>
      </div>
      <hr />
      <div className="mt-4 whitespace-normal ">
      {description}
        {/* <p
          className={`${gilda_display.className} text-slate-600 text-sm font-bold whitespace-normal`}
        >
          {description}
        </p> */}
      </div>
    </div>
  );
};
