"use client";
import { categorizeProducts } from "@/helpers/categorizeProducts";
import { MenuCard } from "./MenuCard";
import { francois_one } from "@/fonts/francois_one";
import { getProductByName } from "@/helpers/getProductByName";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";
import "animate.css";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const MenuContainer = ({ products }) => {
  const searchParams = useSearchParams()
  const router = useRouter();

  const search = searchParams.get('search')
  

  const menu = categorizeProducts(search ? getProductByName(products, search) : products)

 const handleResetSearch =() => {
  router.push(`/menu`);
 }


  return !search ? (
    <div className=" ">
      {menu.map((product) => (
        <div key={product.category} className="">
          <h1
            className={`${francois_one.className} z-30 animate__animated animate__flash sticky top-16 text-2xl text-slate-950 text-center m-4 border border-slate-50`}
          >
            {product.category}
          </h1>

          <div className="flex flex-wrap sm:flex-col lg:flex-row justify-center  ">
            {product.items.map((item) => (
              <MenuCard key={item.id} items={item} />
            ))}
            <br className="bg-white" />
          </div>
        </div>
      ))}
    </div>
  ) 
  :
  (
   <div className="text-center">
    <h1
            className={`${francois_one.className} z-30 animate__animated animate__flash sticky top-16 text-2xl text-slate-950 text-center m-4 border border-slate-50`}
          >
            No hay ningún producto con el nombre de &quot;{search}&quot;
          </h1>
          <p className={`${quicksand.className} basis-1/2 text-xl`}>Restablece la <b><button className="text-red-500" onClick={handleResetSearch}>búsqueda</button></b></p>
          <p
            className={`${gilda_display.className}  text-slate-600 text-sm font-bold`}
          >
            O intenta con otro nombre
          </p>
   </div> 
  )
};
