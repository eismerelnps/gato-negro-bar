//ESTE COMPONENTE HAY QUE REESTRUCTURARLO Y DIVIDIR LA LOGICA DEL JSX
"use client";
import React from "react";
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

import { categorizeProducts } from "@/helpers/categorizeProducts";

import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import Example from "../dialog/Dialog";
import Form from "../dialog/Form";
import DeleteProduct from "./DeleteProduct";

export default function AdminPage({ products }) {
  const [showDialog, setOpenDialog] = useState({
    showDialogOpen: false,
    operation: "",
  });
  const resetDialog = () => {
    setOpenDialog({
      showDialog: false,
      operation: "",
    });
  };

  const { showDialogOpen, operation } = showDialog;

  const [showDeleteDialog, setOpenDeleteDialog] = useState({
    openDelete: false,
    itemToDelete: "",
  });
  const resetDeleteDialog = () => {
    setOpenDeleteDialog({
      openDelete: false,
      itemToDelete: "",
    });
  };
  const { openDelete, itemToDelete } = showDeleteDialog;

  const [item, setItem] = useState({
    _id: "",
    category: "",
    name: "",
    description: "",
    currency: "CUP",
    price: "",
    offerPrice: "",
    stocked: false,
    inOffer: false,
    image: [""],
    rating: null,
    reviews: [""],
  });

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const response = await fetch(
  //       "https://gato-negro-backend.onrender.com/api/v1/products"
  //     );
  //     const data = await response.json();
  //     setProducts(data);
  //   }

  //   fetchProducts();
  // }, []);

  // const fetchMenu = (url) => {
  //   return fetch(url, { method: "GET" }).then((response) => response.json());
  // };
  const categoricedProducts = categorizeProducts(products);

  const handleOpenEdit = (
    _id,
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
    reviews
  ) => {
    setItem({
      _id: _id,
      category: category,
      name: name,
      description: description,
      currency: currency,
      price: price,
      offerPrice: offerPrice,
      stocked: stocked,
      inOffer: inOffer,
      image: image,
      rating: rating,
      reviews: reviews,
    });
    setOpenDialog({
      showDialogOpen: true,
      operation: "EDIT",
    })
  };
  const handleAddProduct = () => {
    setItem({
      _id: "",
      category: "",
      name: "",
      description: "",
      currency: "CUP",
      price: "",
      offerPrice: "",
      stocked: false,
      inOffer: false,
      image: [""],
      rating: null,
      reviews: [""],
    });
    setOpenDialog({
      showDialogOpen: true,
      operation: "ADD",
    })
  };

  return (
    <div className="mt-16  ">
      <div
        className=" border border-red-500 rounded-xl bg-red-50  hover:bg-red-100 text-red-500  flex flex-col items-center justify-center m-4  "
        onClick={handleAddProduct}
      >
        <div className="">
          <PlusCircleIcon
            id="plusCircleIcon"
            className="block h-8 w-8  "
            aria-hidden="true"
          />
        </div>
        <div className="">
          <p
            className={`${gilda_display.className} text-sm text-center text-center `}
          >
            Crear Producto Nuevo
          </p>
        </div>
      </div>
      <hr />
      <div className="mt-2 ">
        <h1
          className={` ${francois_one.className} sticky top-16  text-xl text-slate-950 text-center mx-4  bg-white  border border-slate-300 rounded-t-xl  z-30`}
        >
          Productos en Oferta
        </h1>
        {categoricedProducts.map((product) => (
          <div key={product.category} className="">
            <div
              className={`${francois_one.className} sticky top-20  text-2xl text-slate-950 text-center mx-4 mb-4 bg-white border border-slate-300 rounded-b-xl z-20 `}
            >
              <span
                className={`${quicksand.className} text-sm text-slate-950 text-center `}
              >
                Categoría:
              </span>
              <h1
                className={`${francois_one.className} text-xl text-slate-950 text-center `}
              >
                {product.category}
              </h1>
            </div>
            <br />
            <div className="flex flex-wrap sm:flex-col lg:flex-row">
              {product.items.map(
                ({
                  _id,
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
                }) => (
                  <div
                    key={_id}
                    className=" lg:basis-1/2 basis-full m-4 rounded-xl p-5 text-start bg-slate-100"
                  >
                    <div className="flex flex-row mb-4 ">
                      <div className="basis-3/4">
                        <p
                          className={`${quicksand.className}  text-xl text-blue-950`}
                        >
                          {name}
                        </p>
                        {/* <p>{_id}</p> */}
                        <p
                          className={`${gilda_display.className} text-md text-gray-900`}
                        >
                          {product.category}
                        </p>

                        {/* <span>{stockAmount}</span> */}
                        {inOffer && <span>En Oferta</span>}
                        <span>{rating}</span>
                      </div>

                      <div className="basis-1/4 text-end">
                        <p
                          className={`${gilda_display.className}  text-green-600 text-lg font-bold`}
                        >
                          {price}
                        </p>
                        <span
                          className={`${quicksand.className} text-green-950`}
                        >
                          {currency}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p
                        className={`${gilda_display.className} text-sm text-start text-slate-950 text-center `}
                      >
                        Descripción:
                      </p>
                      <p
                        className={`${quicksand.className} text-lg text-start text-slate-950 text-center `}
                      >
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-row justify-end space-x-5">
                      <div
                        className="basis-1/5 items-center flex flex-col justify-center border border-red-500 rounded-xl bg-red-50  hover:bg-red-100 text-red-500 my-2  px-2 rounded-xl"
                        onClick={() =>
                          handleOpenEdit(
                            _id,
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
                            <Form
                              item={item}
                             
                            />
                          )
                        }
                      >
                        <PencilSquareIcon
                          className="block h-4 w-4  "
                          aria-hidden="true"
                        />
                        <p
                          className={`${gilda_display.className} text-sm text-center `}
                        >
                          Editar
                        </p>
                      </div>
                      <div
                        // onClick={ () => handleDeleteProduct(_id)}
                        onClick={() =>
                          setOpenDeleteDialog({
                            openDelete: true,
                            itemToDelete: { _id },
                          })
                        }
                        className="basis-1/5 items-center  border border-red-500 rounded-xl bg-red-50  hover:bg-red-100 flex flex-col justify-center text-red-500 my-2 px-2 rounded-xl"
                      >
                        <TrashIcon
                          className="block h-4 w-6  text-center"
                          aria-hidden="true"
                        />
                        <p
                          className={`${gilda_display.className} text-sm text-center  text-center `}
                        >
                          Eliminar
                        </p>
                      </div>
                    </div>

                    <hr />
                  </div>
                )
              )}
              <br className="bg-white" />
            </div>
          </div>
        ))}
      </div>
      {showDialogOpen && (
        <Example
          showDialog={showDialogOpen}
          setOpenDialog={resetDialog}
          item={item}
          operation={operation}
        />
      )}
      {openDelete && (
        <DeleteProduct
          open={openDelete}
          setOpen={resetDeleteDialog}
          id={itemToDelete._id}
        />
      )}
    </div>
  );
}
