import { fileUpload } from "@/helpers/fileUpload";
import { types } from "@/types/types";
import {
  finishLoading,
  finishUpLoadingImage,
  setError,
  startLoading,
} from "./ui";
import { useRouter } from "next/navigation";

//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_PRODUCTS;

export const startAddingNewProduct = () => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    const product = getState().product;

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
        //router.refresh();
      })

      .catch((error) => {
        dispatch(finishLoading());
        dispatch(
          setError(
            "Se ha producido un error al crear el producto. Por favor, inténtelo de nuevo."
          )
        );
      });
  };
};

export const startEditingProduct = () => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    const product = getState().product;

    const { _id } = product;

    fetch(`${url}/${_id}`, {
      method: "PUT",
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
        //router.refresh();
      })

      .catch((error) => {
        dispatch(finishLoading());
        dispatch(
          setError(
            "Se ha producido un error al crear el producto. Por favor, inténtelo de nuevo. "
          )
        );
      });
  };
};

export const startDeletingProduct = (id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    //const product = getState().product;

    dispatch(startLoading());
    fetch(`${url}/${id}`, {
      method: "DELETE",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Authorization: token,
      },
      //{headers},
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(finishLoading());
        dispatch(setError(data.message));
        //router.refresh();
      })
      .catch((error) => {
        dispatch(finishLoading());
        dispatch(
          setError(
            "Se ha producido un error al crear el producto. Por favor, inténtelo de nuevo."
          )
        );
      });
  };
};

//accion para agregar un nuevo producto
export const addProduct = (product) => ({
  type: types.addProduct,
  payload: product,
});

//accion para resetear un producto
export const resetProduct = () => ({
  type: types.resetProduct,
  payload: {
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
  },
});

//accion para agregar un nuevo producto
export const editProduct = (item, value) => ({
  type: types.editProduct,
  payload: { item, value },
});

//accion para subir la foto
export const startUploadingPhoto = (file) => {
  return async (dispatch) => {
    const fileUrl = await fileUpload(file);
    // const fileUrl =
    //   "https://res.cloudinary.com/de3tluzbk/image/upload/v1692321453/llqovdfcsjtwzxemwv1e.jpg";
    if (fileUrl) {
      dispatch(editProduct("image", fileUrl));
      dispatch(finishUpLoadingImage());
    }
  };
};
