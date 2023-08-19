export const types = {
    login: '[auth] Login',
    logout: '[auth] Logout',
    
    addToCart: '[ui] AddToCart',
    addToWishList: '[ui] AddToWishList',
    lessToCart: '[ui] LessToCart',
    lessToWishList: '[ui] LessToWishList',
    
    addProduct: '[admin] AddProduct',
    editProduct: '[admin] EditProduct',
    deleteProduct: '[admin] DeleteProduct',
    resetProduct: '[admin] ResetProduct', 

    uiSetError: '[UI] uiSetError',
    uiRemoveError: '[UI] uiRemoveError',

    uiStartLoading: '[UI] Start Loading',
    uiFinishLoading: '[UI] Finish Loading',

    uiStartUpLoadingImage: '[UI] Start UpLoading Image',
    uiFinishUpLoadingImage : '[UI] Finish UpLoading Image'
}