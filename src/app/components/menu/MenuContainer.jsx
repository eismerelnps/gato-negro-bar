import React from "react";
import { MenuCard } from "./MenuCard";
import { products } from "@/app/data/products";
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";


export default function MenuContainer() {
  return (
    <div className="relative top-16">
      {products.map((product) => (
        <div key={"ggg"} className="">
          <h1
            className={`${francois_one.className} text-2xl text-slate-950 text-center m-4 b`}
          >
            {product.category}
          </h1>
          <br />
          <div className="flex flex-wrap sm:flex-col lg:flex-row">
            {product.items.map((item) => (
              <MenuCard key={"12"} {...item} />
            ))}
            <br className="bg-white" />
          </div>
        </div>
      ))}
    </div>
  );
}
