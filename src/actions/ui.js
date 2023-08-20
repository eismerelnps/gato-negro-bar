import { types } from "@/types/types";

// agrega/elimina el texto de feedback general de la ui
export const setError = (msg) => ({
  type: types.uiSetError,
  payload: msg,
});
export const removeError = () => ({
  type: types.uiRemoveError,
});

// mostrar/ocultar el componente BACKDROP  para la subida de un productoa la BD en la administracionpara
export const startLoading = () => ({
  type: types.uiStartLoading,
});
export const finishLoading = () => ({
  type: types.uiFinishLoading,
});

// activa/desactiva el feedback para la subida de la imagen del producto en la administracion
export const startUpLoadingImage = () => ({
  type: types.uiStartUpLoadingImage,
});
export const finishUpLoadingImage = () => ({
  type: types.uiFinishUpLoadingImage,
});

// agrega/elimina el texto de feedback de la subida de la imagen del producto en la administracion
export const setCloudImageMessage = (msg) => ({
  type: types.uiSetCloudImageMessage,
  payload: msg,
});
export const removeCloudImageMessage = () => ({
  type: types.uiRemoveCloudImageMessage,
});
