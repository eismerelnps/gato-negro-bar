import { MenuContainer } from "../components/menu/MenuContainer";

//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_PRODUCTS;

const fetchMenu = () => {
  return fetch(url, { cache: "no-store" }).then((res) => res.json());
};

export default async function page() {
  const products = await fetchMenu();

  return <MenuContainer products={products} />;
}
