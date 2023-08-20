export const types = {
  //para manejar la autenticacion
  login: "[auth] Login",
  logout: "[auth] Logout",

  //para manejar las acciones del carrito de compras
  addToCart: "[ui] AddToCart",
  addToWishList: "[ui] AddToWishList",
  lessToCart: "[ui] LessToCart",
  lessToWishList: "[ui] LessToWishList",

  //para el CRUD de acciones de administracion
  addProduct: "[admin] AddProduct",
  editProduct: "[admin] EditProduct",
  deleteProduct: "[admin] DeleteProduct",
  resetProduct: "[admin] ResetProduct",

  // agrega/elimina el texto de feedback general de la ui
  uiSetError: "[UI] ui SetError",
  uiRemoveError: "[UI] ui RemoveError",

  // mostrar/ocultar el componente BACKDROP  para la subida de un productoa la BD en la administracionpara
  uiStartLoading: "[UI] Start Loading",
  uiFinishLoading: "[UI] Finish Loading",

  // activa/desactiva el feedback para la subida de la imagen del producto en la administracion
  uiStartUpLoadingImage: "[UI] Start UpLoading Image",
  uiFinishUpLoadingImage: "[UI] Finish UpLoading Image",

  // agrega/elimina el texto de feedback de la subida de la imagen del producto en la administracion
  uiSetCloudImageMessage: "[UI] ui Set Cloud Image Message",
  uiRemoveCloudImageMessage: "[UI] ui Remove Cloud Image Message",
};
