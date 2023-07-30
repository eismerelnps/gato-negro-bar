export const categorizeProducts = (products) => {
  const categorizedProducts = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const sortedCategories = Object.entries(categorizedProducts)
    .map(([category, items]) => ({
      category,
      items,
    }))
    .sort((a, b) => a.category.localeCompare(b.category)); // sort by category name

  return sortedCategories;
};