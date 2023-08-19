/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

import { useForm } from "@/hooks/useForm";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import { useState } from "react";
import AddProduct from "../adminPage/AddProduct";
import EditProduct from "../adminPage/EditProduct";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

//local imports
import { resetProduct, startUploadingPhoto } from "@/actions/product";
import {finishUpLoadingImage, startUpLoadingImage} from "@/actions/ui";

export default function Form({ item, setOpenDialog, operation }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { uploadingImage } = useSelector((state) => state.ui);
  //console.log(uploadingImage)

  const [formValues, handdleInputChange, reset] = useForm(product);

  const {
    category,
    name,
    description,
    currency,
    price,
    offerPrice,
    stocked,
    inOffer,
    image,
    rating,
    reviews,
    _id,
  } = formValues;

  const test = (e) => {
    console.log(formValues);
    console.log(product);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      //modifica la UI en el formulario para mostrar un spinner indicando que la imagen se esta subiendo
      dispatch(startUpLoadingImage());
      //llama a la funcion que se encarga de subir la imagen
      dispatch(startUploadingPhoto(file));
      
    }
    //console.log(file);
  };
  const handdleCancel = () => {
  
    setOpenDialog(false);
    dispatch(resetProduct());
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2
            className={`${francois_one.className} text-base font-semibold leading-7 text-gray-900`}
          >
            Administración
          </h2>
          <p
            className={`${quicksand.className} mt-1 text-sm leading-6 text-gray-600`}
          >
            Por favor verifique todos los campos antes de realizar cualquier
            cambio
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className={` ${quicksand.className} block text-sm font-medium leading-6 text-gray-900`}
              >
                Nombre del producto
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    {name}
                  </span> */}
                  <input
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nombre del producto"
                    onChange={handdleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="category"
                className={` ${quicksand.className} block text-sm font-medium leading-6 text-gray-900`}
              >
                Categoría del producto
              </label>
              <div className="mt-2">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  {category}
                </span>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={category}
                    type="text"
                    name="category"
                    id="category"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Categoría del producto"
                    onChange={handdleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="price"
                className={` ${quicksand.className} block text-sm font-medium leading-6 text-gray-900`}
              >
                Precio
              </label>
              <div className="mt-2">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  {price}
                </span>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={price}
                    type="number"
                    name="price"
                    id="price"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Precio del producto"
                    onChange={handdleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <fieldset>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="inOffer"
                          name="inOffer"
                          type="checkbox"
                          value={inOffer}
                          // checked={inOffer}
                          onChange={handdleInputChange}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="inOffer"
                          className="font-medium text-gray-900"
                        >
                          En rebaja
                        </label>
                        <p className="text-gray-500">
                          Si activas esta opción, se mostrará el precio de
                          rebaja que definas en lugar del precio oficial del
                          producto.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="stocked"
                          name="stocked"
                          type="checkbox"
                          value={stocked}
                          //checked={stocked}
                          onChange={handdleInputChange}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="stocked"
                          className="font-medium text-gray-900"
                        >
                          Sin Stock
                        </label>
                        <p className="text-gray-500">
                          Si activas esta opción, el producto se mostrará como
                          no disponible o agotado.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="offerPrice"
                className={` ${quicksand.className} block text-sm font-medium leading-6 text-gray-900`}
              >
                Precio de rebaja
              </label>
              <div className="mt-2">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  {offerPrice}
                </span>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={offerPrice}
                    type="number"
                    name="offerPrice"
                    id="offerPrice"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Precio de rebaja del producto"
                    onChange={handdleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="currency"
                className={` ${quicksand.className} block text-sm font-medium leading-6 text-gray-900`}
              >
                Moneda
              </label>
              <div className="mt-2">
                <select
                  id="currency"
                  name="currency"
                  autoComplete="Moneda"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>CUP</option>
                  {/* <option>USD</option> */}
                  {/* <option>Mexico</option> */}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className={` ${quicksand.className} block text-sm font-medium leading-6 text-gray-900`}
              >
                Descripción
              </label>
              <div className="mt-2">
                <textarea
                  onChange={handdleInputChange}
                  placeholder="Descripción del producto"
                  id="description"
                  name="description"
                  rows={3}
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={description}
                />
              </div>

              <div className="col-span-full">
                <label
                  for="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Foto
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="">
                    <div className="flex justify-center">
                      {uploadingImage ? (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-20 h-20 animate-spin text-neutral-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                          </svg>
                          <h2 className=" mt-4 text-center text-xs leading-5 text-gray-600">
                            Subiendo foto...
                              </h2>
                        </div>
                      ) : (
                        <div className="">
                          {image[0] ? (
                            <div >
                              <div className="flex justify-center">
                                <Image
                              className="rounded-lg text-center"
                              width={70}
                              height={50}
                              src={image[0]}
                              alt={"alt"}
                            />
                              </div>
                              
                            
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  for="image"
                                  className=" text-center relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span className=" text-center">Cambiar foto</span>
                                  <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="sr-only "
                                  />
                                </label>
                              </div>
                              <p className="text-xs text-center leading-5 text-gray-600">
                                PNG, JPG hasta 1MB
                              </p>
                            </div>

                            
                          ) : (
                            <div>
                              <svg
                                className="mx-auto h-20 w-20 text-neutral-300 animate-pulse"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  for="image"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Seleccionar foto</span>
                                  <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="sr-only"
                                  />
                                </label>
                              </div>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG hasta 1MB
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={handdleCancel}
          //onClick={test}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancelar
        </button>
        {operation === "ADD" ? <AddProduct /> : <EditProduct />}
      </div>
    </form>
  );
}
