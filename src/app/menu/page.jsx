import MenuContainer from "../components/menu/MenuContainer";
import { categorizeProducts } from "@/helpers/categorizeProducts";

export default async function page() {
  const url = "https://gato-negro-backend.onrender.com/api/v1/products"
  const fetchMenu = () => {
    return fetch(url, { cache: "no-store" }).then((res) => res.json());
  };
  const products = await fetchMenu();
  const categoricedProducts = categorizeProducts(products);

  return <MenuContainer products={categoricedProducts} />;
}
