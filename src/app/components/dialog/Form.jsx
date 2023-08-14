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

export default function Form({ item, setOpenDialog, operation }) {
  // const [showModal, setShowModal] = useState(false);
  const [formValues, handdleInputChange] = useForm(item);

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
                {/* <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p> */}
              </div>

              {/* <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div> */}

              {/* <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={() => setOpenDialog(false)}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancelar
          </button>
          {operation === "ADD" ? (
            <AddProduct product={formValues} />
          ) : (
            <EditProduct product={formValues} />
          )}
        </div>
      </form>
   
   
  );
}
