import { types } from "../types/types";

const initialState = {
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        ...action.payload,
        logged: false,
      };

    default:
      return state;
  }
};
