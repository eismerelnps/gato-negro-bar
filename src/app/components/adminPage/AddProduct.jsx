"use client";
//Imports from React

//Local Project Imports
import {
  finishLoading,
  removeError,
  setError,
  startLoading,
} from "@/actions/ui";

//fonts
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

//Imports from Next
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

//get the endpoint of the api bd
const url=process.env.NEXT_PUBLIC_DB_API_PRODUCTS
console.log(url);

export default function AddProduct({ product }) {
  const { name, category, price } = product;

  const router = useRouter();
  const dispatch = useDispatch();

  //obtener el token del usuario desde el contexto
  const { token } = useSelector((state) => state.auth);

  const handleAdd1 = (e) => {
    e.preventDefault();
    dispatch(startLoading());
    //console.log(product);
    //isFormValid();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoading());

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
          dispatch(finishLoading());
          dispatch(setError(data.message));
          router.refresh();
        })

        .catch((error) => {
          dispatch(finishLoading());
          dispatch(
            setError(
              "Se ha producido un error al crear el producto. Por favor, inténtelo de nuevo."
            )
          );
        });
    }
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("El nombre del producto es requerido"));
      return false;
    } else if (category.length === 0) {
      dispatch(setError("La categoría del producto es requerida"));
      return false;
    } else if (price.length === 0) {
      dispatch(setError("El precio del producto es requerido"));
      return false;
    } else if (description.length > 50) {
      dispatch(setError("Inserte una descripcion más corta por favor"));
      return false;
    } else if (price > offerPrice) {
      dispatch(
        setError("El precio de rebaja no puede ser mayor que el precio fijado")
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };
  // };

  return (
    <>
      <button
        onClick={handleAdd}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Agregar
      </button>
    </>
  );
}
