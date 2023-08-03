"use client";
import React, { Suspense } from "react";
import Skeleton from "../skeleton/Skeleton";
import MenuContainer from "../menu/MenuContainer";
import { fetchProducts } from "@/helpers/fetchProducts";
import { categorizeProducts } from "@/helpers/categorizeProducts";

import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { METHODS } from "http";

import { useState, useEffect } from "react";
import Example from "../dialog/Dialog";
import Form from "../dialog/Form";
import DialogConfirm from "../dialog/DialogConfirm";

export default function AdminPage({ products }) {
  const [showDialog, setOpenDialog] = useState(false);

  const [confirmDialog, setConfirmDialog] = useState({
    body: "",
    buttonAction: "",
    openConfirmDialog: false,
    title: "",
    itemToDelete: '',
  });

  const resetConfirmDialog = () => {
    setConfirmDialog({
      openConfirmDialog: false,
      title: "",
      body: "",
    });
  };

  const { body, buttonAction, openConfirmDialog, title, itemToDelete } = confirmDialog;

//funcion que hace un peticion al backend para eliminar un producto
const handleDeleteProduct = ( ) => {
 // e.preventDefault();

  //console.log(formValues);

  fetch(`https://gato-negro-backend.onrender.com/api/v1/products/897967779`, {
    method: "POST",
     body: JSON.stringify({}),
    //   role: "user",
    //   logged: false,
    //   username: username,
    //   password: password,
    //   email: email,
    //   number: number,
    //   cart: { count: 0, items: [] },
    //   wishList: { count: 0, items: [] },
    //}),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzQwOWRhOTVmMTEzNTUzMTI2ZDY4NiIsInVzZXJuYW1lIjoiRWlzbWVyIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE2OTA5MTY4NzcsImV4cCI6MTY5MDkyMDQ3N30.0bJCFd842gAEZOT6loKeUyAIiwH6AbNs3pi3k5jQIL8"
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

  const handleSignUp = (e) => {
    e.preventDefault();

    //console.log(formValues);

    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        role: "user",
        logged: false,
        username: username,
        password: password,
        email: email,
        number: number,
        cart: { count: 0, items: [] },
        wishList: { count: 0, items: [] },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setOpenDialog(false);
      })

      .then(() => {
        navigate("/signin", {
          replace: true,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

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
    setOpenDialog(true);
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
    setOpenDialog(true);
  };

  return (
    <div className="mt-16  ">
      <div className=" border border-red-500 rounded-xl bg-red-50  hover:bg-red-100 text-red-500  flex flex-col items-center justify-center m-4  ">
        <div className="">
          <PlusCircleIcon
            id="plusCircleIcon"
            onClick={handleAddProduct}
            className="block h-10 w-12 m-4 "
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
      <div className="my-2 ">
        <h1
          className={` ${francois_one.className} sticky top-16  text-2xl text-slate-950 text-center m-4 bg-slate-100 border border-slate-950 rounded-xl z-30`}
        >
          Productos Actuales
        </h1>
        {categoricedProducts.map((product) => (
          <div key={product.category} className="">
            <div
              className={`${francois_one.className}sticky top-24  text-2xl text-slate-950 text-center m-4 sticky top-18`}
            >
              <span
                className={`${quicksand.className} text-sm text-slate-950 text-center `}
              >
                Categoría:
              </span>
              <h1
                className={`${francois_one.className} text-2xl text-slate-950 text-center `}
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
                    className=" lg:basis-1/2 basis-full p-5 text-start"
                  >
                    <div className="flex flex-row mb-4">
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
                            <Form item={item} setOpenDialog={setOpenDialog} />
                          )
                        }
                      >
                        <PencilSquareIcon
                          className="block h-6 w-6 m-2 "
                          aria-hidden="true"
                        />
                        <p
                          className={`${gilda_display.className} text-sm text-center  text-center `}
                        >
                          Editar
                        </p>
                      </div>
                      <div
                        onClick={() =>
                          setConfirmDialog({
                            body: "Una vez elimines este producto ya no será posible deshacer la operación",
                            buttonAction: handleDeleteProduct,
                            openConfirmDialog: true,
                            title: "Eliminar Producto",
                            itemToDelete: {_id}
                          })
                        }
                        className="basis-1/5 items-center  border border-red-500 rounded-xl bg-red-50  hover:bg-red-100 flex flex-col justify-center text-red-500 my-2 px-2 rounded-xl"
                      >
                        <TrashIcon
                          className="block h-6 w-6 m-2  text-center"
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
      {showDialog && (
        <Example
          showDialog={showDialog}
          setOpenDialog={setOpenDialog}
          item={item}
        />
      )}
      {confirmDialog && (
        <DialogConfirm
          open={openConfirmDialog}
          title={title}
          body={body}
          buttonAction={buttonAction}
          setOpen={resetConfirmDialog}
        />
      )}
    </div>
  );
}
