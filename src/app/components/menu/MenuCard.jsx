import React from "react";

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
      <div className="flex flex-row">
        <p className="basis-1/2">{name}</p>
        <p className="basis-1/2 text-end text-bermuda">{price}</p>
      </div>
    </div>
  );
};
