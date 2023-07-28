export const fetchProducts = (url) => {
  return fetch(url, {
    cache: "no-store",
  }).then((res) => res.json());
};
