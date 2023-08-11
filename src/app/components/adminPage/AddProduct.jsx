import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";
import { AppContext } from "../appContext/AppContext";
import { useRouter } from "next/navigation";
import BackDrop from "../backDrop/BackDrop";
import Modal from "../dialog/Modal";
import { useSelector } from "react-redux";

export default function AddProduct({ product }) {
  const router = useRouter();
  const url = "https://gato-negro-backend.onrender.com/api/v1/products/";

  //obtener el token del usuario desde el contexto
  //const { user } = useContext(AppContext);
  const state = useSelector((state) => state.auth);
 //console.log(user);
  const { token } = state;

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    alertType: "",
    alertMessage: "",
    showAlert: false,
  });
  const resetAlert = () => {
    setAlert({
      alertType: "",
      alertMessage: "",
      showAlert: false,
    });
  };
  const { alertType, alertMessage, showAlert } = alert;



  const handleAdd = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
       // console.log(data);
        router.refresh();
        setLoading(false);
        setAlert({
          alertType: "success",
          alertMessage: data.message,
          showAlert: true,
        });
        // setOpenDialog(false);
      })

      // .then(() => {
      //   navigate("/signin", {
      //     replace: true,
      //   });
      // })

      .catch((error) => {
        console.log(error);
        setLoading(false);
        setAlert({
          alertType: "error",
          alertMessage:
            "Se ha producido un error al crear el producto. Por favor, inténtelo de nuevo. Si el problema persiste, póngase en contacto con la administración.",
          showAlert: true,
        });
      });
  };
  return (
    <>
     {loading && <BackDrop />}
      {showAlert && (
        <Modal message={alertMessage} open={showAlert} setOpen={resetAlert} />
      )}
    <button
      onClick={handleAdd}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Agregar
    </button>
    </>
    
  );
}
