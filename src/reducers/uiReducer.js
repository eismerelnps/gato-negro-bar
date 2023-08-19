import { types } from "@/types/types";

const initialState = {
  loading: false,
  showFeedback: false,
  msgError: null,
  uploadingImage: false,
  cloudImageMessage: ''
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
