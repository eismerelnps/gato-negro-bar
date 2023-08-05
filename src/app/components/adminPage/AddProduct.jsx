import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

export default function AddProduct({product}) {
    const handleAdd = (e) => {
        e.preventDefault();
        fetch(`https://gato-negro-backend.onrender.com/api/v1/products/`, {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzQwOWRhOTVmMTEzNTUzMTI2ZDY4NiIsInVzZXJuYW1lIjoiRWlzbWVyIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE2OTEyNjUyODMsImV4cCI6MTY5MTI2ODg4M30.AjpcdQPmwC5qVFs9PaHSN-KXmlAlcJ-6MI2WPfnBI3Y",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
    
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
