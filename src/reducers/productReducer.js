import { types } from "../types/types";

const initialState = {
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
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      return {
        ...action.payload,
      };

    case types.editProduct:
      return {
        ...state,
        [action.payload.item]: action.payload.value,
      };
    case types.deleteProduct:
      return {
        ...action.payload,
      };
      case types.resetProduct:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
