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
import { useDispatch } from "react-redux";
import { addProduct, resetProduct } from "@/actions/product";
import Image from "next/image";
import { MenuCard } from "../menu/MenuCard";

export default function AdminPage({ products = [] }) {
  const dispatch = useDispatch();
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

  const handleOpenEdit = (current) => {
    dispatch(addProduct(current));

    setOpenDialog({
      showDialogOpen: true,
      operation: "EDIT",
    });
  };
  const handleAddProduct = () => {
    dispatch(resetProduct());

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
          operation={operation}
        />
      )}
      {openDelete && (
        <DeleteProduct
          open={openDelete}
          setOpen={resetDeleteDialog}
          id={itemToDelete}
        />
      )}
      <div className="flex justify-center m-4">
        <div
          className="focus:outline-none focus:ring focus:ring-slate-950 border border-red-500 rounded-xl  hover:bg-red-100 text-red-500  flex flex-col items-center justify-center m-2 p-2  "
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
              Añadir nuevo
            </p>
          </div>
        </div>
      </div>

      <hr />
      <div className="mt-2 ">
        {categoricedProducts.map((product) => (
          <div key={product.category} className="">
            <div className=" animate__animated animate__flash bg-gradient-to-r from-white rounded-br-3xl  text-2xl text-slate-950 text-start md:text-center mt-4  pt-4 sticky top-16  z-10">
              <h1 className={`${francois_one.className}  `}>
                {product.category}
              </h1>
            </div>
            <br />
            <div className="flex flex-wrap flex-col md:flex-row justify-center">
              {product.items.map((current) => (
                <>
                  <div className="   animate__animated animate__backInLeft animate__fast duration-400 max-w-sm basis-1/2  md:basis-2/5  bg-gradient-to-r from-white to-neutral-300 hover:bg-gradient-to-t hover:from-neutral-50  mx-3 px-4 pt-2 pb-4 my-2 text-start border  rounded-xl shadow-xl outline-2  ">
                    <div className="flex flex-row justify-center  m-0.5 mb-4">
                      <div
                        className="basis-1/5 items-center hover:bg-red-100 hover:rounded-3xl  flex flex-col justify-center text-red-500   "
                        onClick={() => handleOpenEdit(current)}
                      >
                        <PencilSquareIcon
                          className="block h-6 w-5 hover:w-6 "
                          aria-hidden="true"
                        />
                        {/* <p
                        className={`${gilda_display.className} text-sm text-center `}
                      >
                        Editar
                      </p> */}
                      </div>
                      <div
                        // onClick={ () => handleDeleteProduct(_id)}
                        onClick={() =>
                          setOpenDeleteDialog({
                            openDelete: true,
                            itemToDelete: current._id,
                          })
                        }
                        className="basis-1/5 items-center hover:bg-red-100 hover:rounded-full  flex flex-col justify-center text-red-500  "
                      >
                        <TrashIcon
                          className="block h-5 w-5 hover:w-6 text-center"
                          aria-hidden="true"
                        />
                        {/* <p
                        className={`${gilda_display.className} text-sm text-center  text-center `}
                      >
                        Eliminar
                      </p> */}
                      </div>
                    </div>
                    <hr className=" bg-slate-950" />
                    <div className="flex flex-row mt-4 mb-4">
                      <div className="basis-1/3 flex justify-center  ">
                        {current.image[0] ? (
                          <Image
                            className="rounded-lg"
                            width={50}
                            height={50}
                            src={current.image[0]}
                            alt={"alt"}
                          />
                        ) : (
                          <svg
                            class="mx-auto h-20 w-20 text-white"
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
                        )}
                      </div>
                      <div className="basis-2/3">
                        <div className="text-end">
                          <p className={`${quicksand.className}text-xl `}>
                            {current.name}
                          </p>
                        </div>
                        <div className="text-end">
                          <p
                            className={`${gilda_display.className}  text-green-600 text-xl font-bold`}
                          >
                            {current.price}
                          </p>
                          <span
                            className={`${quicksand.className} text-green-950 text-bold`}
                          >
                            CUP
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-4 whitespace-normal ">
                      {current.description}
                      {/* <p
          className={`${gilda_display.className} text-slate-600 text-sm font-bold whitespace-normal`}
        >
          {description}
        </p> */}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
