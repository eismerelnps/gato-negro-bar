export const getProductById = ( products, id = '' ) => {
  return products.find((product) => product.id === id);
};
