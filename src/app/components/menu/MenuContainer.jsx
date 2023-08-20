"use client";
//Imports from Next
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

//Local Imports
import { categorizeProducts } from "@/helpers/categorizeProducts";
import { MenuCard } from "./MenuCard";
import { getProductByName } from "@/helpers/getProductByName";

//fonts
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

import "animate.css";

export const MenuContainer = ({ products }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("search");

  const menu = categorizeProducts(
    search ? getProductByName(products, search) : products
  );

  const handleResetSearch = () => {
    router.push(`/menu`);
  };

  return menu.length !== 0 ? (
    <div className="  ">
      {menu.map((product) => (
        <div key={product.category} className="">
          <div className=" animate__animated animate__flash bg-gradient-to-r from-white rounded-br-3xl  text-2xl text-slate-950 text-start md:text-center my-4    p-4 sticky top-16  z-10">
            <h1 className={`${francois_one.className}  `}>
              {product.category}
            </h1>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row justify-center ">
            {product.items.map(
              (
                item,
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
              ) => (
                <MenuCard key={item.id} items={item} />
              )
            )}
            <br className="bg-white" />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center">
      <h1
        className={`${francois_one.className} z-30 animate__animated animate__flash sticky top-16 text-2xl text-slate-950 text-center m-4 border border-slate-50`}
      >
        No hay ningún producto con el nombre de &quot;{search}&quot;
      </h1>
      <p className={`${quicksand.className} basis-1/2 text-xl`}>
        Restablece la{" "}
        <b>
          <button className="text-red-500" onClick={handleResetSearch}>
            búsqueda
          </button>
        </b>
      </p>
      <p
        className={`${gilda_display.className}  text-slate-600 text-sm font-bold`}
      >
        O intenta con otro nombre
      </p>
    </div>
  );
};
