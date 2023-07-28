export const categorizeProducts = (products) => {
    const categorizedProducts = products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  
    return Object.entries(categorizedProducts).map(([category, items]) => ({
      category,
      items,
    }));
  }
  
//   const products = [/* ... (tu array de productos) ... */];
//   const categorizedProducts = categorizeProducts(products);
  
//   console.log(categorizedProducts);
  