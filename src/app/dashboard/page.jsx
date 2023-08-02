import React from "react";
import AdminPage from "../components/adminPage/AdminPage";

export default async function DashboardPage() {
  const fetchMenu = () => {
    return fetch("https://gato-negro-backend.onrender.com/api/v1/products/", {
      next: {
        revalidate: 60,
      },
    }).then((res) => res.json());
  };

  const products = await fetchMenu();

  return <AdminPage products={products} />;
}
