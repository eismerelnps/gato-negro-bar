export const fileUpload = async (file) => {
  const cloudURL = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_API
  const formData = new FormData();
  formData.append("upload_preset","gatonegro");
  formData.append("file",file);

  try {
    const resp = await fetch(cloudURL, {
      method: "POST",
      body: formData,
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
