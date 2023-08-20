import { types } from "@/types/types";

const initialState = {
  loading: false,
  showFeedback: false,
  msgError: null,
  uploadingImage: false,
  cloudImageMessage: "",
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {

    // agrega/elimina el texto de feedback general de la ui
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
        showFeedback: true,
      };
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
        showFeedback: false,
      };


     // mostrar/ocultar el componente BACKDROP  para la subida de un productoa la BD en la administracionpara 
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };


    // activa/desactiva el feedback para la subida de la imagen del producto en la administracion
    case types.uiStartUpLoadingImage:
      return {
        ...state,
        uploadingImage: true,
      };
    case types.uiFinishUpLoadingImage:
      return {
        ...state,
        uploadingImage: false,
      };


    // agrega/elimina el texto de feedback de la subida de la imagen del producto en la administracion
    case types.uiSetCloudImageMessage:
      return {
        ...state,
        cloudImageMessage: action.payload,
      };
    case types.uiRemoveCloudImageMessage:
      return {
        ...state,
        cloudImageMessage: null,
      };
    default:
      return state;
  }
};
