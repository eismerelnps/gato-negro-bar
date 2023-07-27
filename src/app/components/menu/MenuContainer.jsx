import React from "react";
import { MenuCard } from "./MenuCard";
import { products } from "@/app/data/products";

export default function MenuContainer() {
  return (
    <div>
      {products.map((product) => (
        <div key={"ggg"} className="">
          <h1 className="text-2xl text-white text-center m-4 b">
            {product.category}
          </h1>
          <div className="flex flex-wrap sm:flex-col lg:flex-row">
            {product.items.map((item) => (
              <MenuCard key={"12"} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
