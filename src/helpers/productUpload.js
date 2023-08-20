export const fileUpload = async (product) => {
  //get the endpoint of the api bd
  const url = process.env.NEXT_PUBLIC_DB_API_PRODUCTS;

  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (err) {
    console.log(err);
  }
};
