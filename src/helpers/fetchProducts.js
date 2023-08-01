export const fetchProducts = (url) => {
  return fetch(url).then((res) => res.json());
};
