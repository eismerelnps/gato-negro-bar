//ESTE COMPONENTE HAY QUE REESTRUCTURARLO Y DIVIDIR LA LOGICA DEL JSX
"use client";
//Imports from React
import { useState } from "react";

//local imports
import { categorizeProducts } from "@/helpers/categorizeProducts";
import Example from "../dialog/Dialog";
import Form from "../dialog/Form";
import DeleteProduct from "./DeleteProduct";

//Imports of local fonts
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

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
    });
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
    });
  };

  return (
    <div className="mt-16">
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
      <div className="flex justify-center m-4">
        <div
          className=" border border-red-500 rounded-xl bg-red-50  hover:bg-red-100 text-red-500  flex flex-col items-center justify-center m-2 p-2  "
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
      </div>

      <hr />
      <div className="mt-2 ">
        <h1
          className={` ${francois_one.className} sticky top-16  text-xl text-slate-950 text-center mx-4  bg-white  border border-slate-300 rounded-t-xl`}
        >
          Productos en Oferta
        </h1>
        {categoricedProducts.map((product) => (
          <div key={product.category} className="">
            <div
              className={`${francois_one.className} sticky top-16  text-2xl text-slate-950 text-center mx-4 mb-4 bg-slate-100 border border-slate-300 rounded-b-xl z-10 `}
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
            <div className="flex flex-wrap sm:flex-col md:flex-row justify-center">
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
                    className="basis-full bg-slate-50 rounded-xl md:basis-2/5 m-4 p-4"
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
                    <div className="flex flex-row justify-end space-x-2">
                      <div
                        className="basis-1/5 items-center   hover:bg-red-100 hover:rounded-full  flex flex-col justify-center text-red-500   "
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
                            <Form item={item} />
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
                        className="basis-1/5 items-center   hover:bg-red-100 hover:rounded-full  flex flex-col justify-center text-red-500  "
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
    </div>
  );
}
