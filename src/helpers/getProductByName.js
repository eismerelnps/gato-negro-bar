
export const getProductByName = (products, name = "") => {
  if (name === "") {
    return [];
  }
  name = name.toLowerCase();

  return products.filter((product) =>
    product.name.toLowerCase().trim().includes(name)
  );

  console.log()
};
