import { fileUpload } from "@/helpers/fileUpload";

export const startUploadingPhoto = (file) => {
  return async(dispatch, getState) => {
    //const product = getState().product;
    //console.log(product);
    const fileUrl = await fileUpload( file )
    console.log(fileUrl);
  };
};
