import React from "react";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";
import "animate.css";
import Image from "next/image";

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
    image,
    reviews,
    _id,
  } = items;

  //bg-[url('/public/huella_gato_negro.png')]
  return (
    <div className="   animate__animated animate__backInLeft animate__fast duration-400 max-w-sm basis-1/2  md:basis-2/5  bg-gradient-to-r from-white to-neutral-300 hover:bg-gradient-to-t hover:from-neutral-50  mx-3 px-4 pt-2 pb-4 my-2 text-start border  rounded-xl shadow-xl outline-2  ">
      <div className="flex flex-row mb-4">
        <div className="basis-1/3 flex justify-center  ">
          {image[0] ? (
            <Image
              className="rounded-lg"
              width={50}
              height={50}
              src={image[0]}
              alt={name}
            />
          ) : (
            <svg
              class="mx-auto h-20 w-20 text-neutral-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="basis-2/3">
          <div className="text-end">
            <p className={`${quicksand.className}text-xl `}>{name}</p>
          </div>
          <div className="text-end">
            <p
              className={`${gilda_display.className}  text-green-600 text-xl font-bold`}
            >
              {price}
            </p>
            <span className={`${quicksand.className} text-green-950 text-bold`}>
              CUP
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center mt-4 whitespace-normal ">
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
