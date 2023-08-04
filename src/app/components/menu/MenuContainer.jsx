import React from "react";
import { MenuCard } from "./MenuCard";
import { francois_one } from "@/fonts/francois_one";
//import { quicksand } from "@/fonts/quicksand";
//import { gilda_display } from "@/fonts/gilda_display";
import { fetchProducts } from "@/helpers/fetchProducts";
import { categorizeProducts } from "@/helpers/categorizeProducts";




export default async function MenuContainer() {
  const products = await fetchProducts('https://gato-negro-backend.onrender.com/api/v1/products', { cache: 'no-store' });
  const categoricedProducts = categorizeProducts(products);



  
  return (
    <div className=" ">
        {categoricedProducts.map((product) => (
        <div key={"ggg"} className="">
          <h1
            className={`${francois_one.className} sticky top-16 text-2xl text-slate-950 text-center m-4 b`}
          >
            {product.category}
          </h1>
          <br /> 
          <div className="flex flex-wrap sm:flex-col lg:flex-row">
            {product.items.map((item) => (
              <MenuCard key={"12"} items={item}/>
            ))}
            <br className="bg-white" />
          </div>  
        </div>
      ))}  
    </div>
  );
}
