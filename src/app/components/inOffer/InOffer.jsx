import { fetchProducts } from "@/helpers/fetchProducts";
import { getProductByOffer } from "@/helpers/getProductByOffer";
import React from "react";

import { francois_one } from "@/fonts/francois_one";
import { gilda_display } from "@/fonts/gilda_display";
import { quicksand } from "@/fonts/quicksand";

export default async function InOffer() {
  const products = await fetchProducts(
    "https://gato-negro-backend.onrender.com/api/v1/products"
  );
  const inOfferProducts = getProductByOffer(products);
  return (
    <div className="my-8">
      <h1
        className={`${francois_one.className} text-slate-950 text-center text-4xl my-4 `}
      >
        Productos en oferta
      </h1>
      <hr />

      <div className="overflow-x-auto">
  <section className="flex flex-rows overflow-x-auto my-4 mx-2">
    {inOfferProducts.map(({ id, name, price, offerPrice, inOffer }) => (
      <article key={id} className="w-1/2 bg-slate-50 border-2 rounded-xl mx-2 my-2 p-4 text-center">
        <p className={`${quicksand.className} text-lg`}>{name}</p>
        <div className="flex flex-rows justify-end">
          <p className={`${gilda_display.className} text-neutral-500 text-lg font-bold line-through`}>{price}</p>
          <p className={`${gilda_display.className} text-green-600 text-lg font-bold`}>{offerPrice}</p>
        </div>
      </article>
    ))}
  </section>
</div>

    </div>
  );
}
