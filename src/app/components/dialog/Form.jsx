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

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

//local imports
import { resetProduct, startUploadingPhoto } from "@/actions/product";
import {
  finishUpLoadingImage,
  setCloudImageMessage,
  startUpLoadingImage,
} from "@/actions/ui";
import { UpLoadingImage } from "../feedBack/UpLoadingImage";
import { useForm } from "@/hooks/useForm";
import AddProduct from "../adminPage/AddProduct";
import EditProduct from "../adminPage/EditProduct";

export default function Form({ setOpenDialog, operation }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { uploadingImage } = useSelector((state) => state.ui);
  const { cloudImageMessage } = useSelector((state) => state.ui);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
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
                    className={`${quicksand.className}  bg-white
                    outline  outline-1 outline-slate-300
                    focus:outline-2 hover:bg-slate-50 
                    duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                    placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
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
                    className={`${quicksand.className}  bg-white
                    outline  outline-1 outline-slate-300
                    focus:outline-2 hover:bg-slate-50 
                    duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                    placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
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
                    className={`${quicksand.className}  bg-white
                    outline  outline-1 outline-slate-300
                    focus:outline-2 hover:bg-slate-50 
                    duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                    placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
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
                          className={`${quicksand.className}  bg-white
                          outline  outline-1 outline-slate-300
                          focus:outline-2 hover:bg-slate-50 
                          duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                          placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
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
                          className={`${quicksand.className}  bg-white
                          outline  outline-1 outline-slate-300
                          focus:outline-2 hover:bg-slate-50 
                          duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                          placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
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
                    className={`${quicksand.className}  bg-white
                    outline  outline-1 outline-slate-300
                    focus:outline-2 hover:bg-slate-50 
                    duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                    placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
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
                  className={`${quicksand.className}  bg-white
                  outline  outline-1 outline-slate-300
                  focus:outline-2 hover:bg-slate-50 
                  duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                  placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                >
                  <option>CUP</option>
                  {/* <option>USD</option> */}
                  {/* <option>MLC</option> */}
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
                  className={`${quicksand.className}  bg-white
                  outline  outline-1 outline-slate-300
                  focus:outline-2 hover:bg-slate-50 
                  duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                  placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
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
                        <UpLoadingImage />
                      ) : (
                        <div className="">
                          {image[0] ? (
                            <>
                              <div className="flex justify-center">
                                <Image
                                  className="rounded-lg text-center"
                                  width={70}
                                  height={50}
                                  src={product.image[0]}
                                  alt={"alt"}
                                />
                              </div>

                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  for="image"
                                  className=" text-center relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span className=" text-center">
                                    Cambiar foto
                                  </span>
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
                            </>
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
                          <h2 className=" mt-4 text-center text-xs leading-5 text-gray-600">
                            {cloudImageMessage}
                          </h2>
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
