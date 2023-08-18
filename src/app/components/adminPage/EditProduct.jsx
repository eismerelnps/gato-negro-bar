"use client";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";

import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";
import { useRouter } from "next/navigation";
import BackDrop from "../backDrop/BackDrop";
import Modal from "../dialog/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  finishLoading,
  removeError,
  setError,
  startLoading,
} from "@/actions/ui";
import { startEditingProduct } from "@/actions/product";

//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_PRODUCTS;

export default function EditProduct() {
  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector((state) => state.product);
  const { token } = useSelector((state) => state.auth);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(startEditingProduct());
  };
  
  return (
    <button
      onClick={handleEdit}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Editar
    </button>
  );
}
