import React from "react";
import AdminPage from "../components/adminPage/AdminPage";

export default async function DashboardPage() {
  //get the endpoint of the api bd
  const url = process.env.NEXT_PUBLIC_DB_API_PRODUCTS;

  const fetchMenu = () => {
    return fetch(url, { cache: "no-store" }).then((res) => res.json());
  };

  const products = await fetchMenu();

  return <AdminPage products={products} />;
}
