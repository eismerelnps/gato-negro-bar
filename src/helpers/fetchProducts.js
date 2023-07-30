export const fetchProducts = (url) => {
  return fetch(url, { next: { revalidate: 10000 } }).then((res) => res.json());
};
