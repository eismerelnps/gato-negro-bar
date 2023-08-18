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
import { addProduct, startAddingNewProduct } from "@/actions/product";

//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_PRODUCTS;

export default function AddProduct() {
  //obtener el token del usuario desde el contexto
  const { token } = useSelector((state) => state.auth);
  const product = useSelector((state) => state.product);

  const { name, category, price, description } = product;

  const router = useRouter();
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startAddingNewProduct());
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
    } else if (description.length > 75) {
      dispatch(setError("Inserte una descripción más corta por favor"));
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
