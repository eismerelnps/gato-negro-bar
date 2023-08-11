import { types } from "@/types/types";
import { type } from "os";

export const setError = ( msg ) => ({
  type: types.uiSetError,
  payload: msg,
});

export const removeError= () => ({
  type: types.uiRemoveError,
});

export const startLoading = () => ({
  type: types.uiStartLoading
})
export const fisnishLoading = () => ({
  type: types.uiFinishLoading
})