export const getProductByOffer = (products) => {

    return products.filter((product) => product.inOffer === true);
}