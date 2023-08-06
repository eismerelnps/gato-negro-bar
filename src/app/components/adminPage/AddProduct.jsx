import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";
import { AppContext } from "../appContext/AppContext";
import { useRouter } from "next/navigation";

export default function AddProduct({ product }) {
  const router = useRouter();
  const url = "https://gato-negro-backend.onrender.com/api/v1/products/";

  const { user } = useContext(AppContext);
  const { token } = user;

  const handleAdd = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.refresh();
        // setOpenDialog(false);
      })

      // .then(() => {
      //   navigate("/signin", {
      //     replace: true,
      //   });
      // })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button
      onClick={handleAdd}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Agregar
    </button>
  );
}
