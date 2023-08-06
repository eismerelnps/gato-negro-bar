import React from "react";
import AdminPage from "../components/adminPage/AdminPage";

export default async function DashboardPage() {
  const url = "https://gato-negro-backend.onrender.com/api/v1/products";
  
  const fetchMenu = () => {
    return fetch(url, { cache: "no-store" }).then((res) => res.json());
  };

  const products = await fetchMenu();

  return <AdminPage products={products} />;
}
