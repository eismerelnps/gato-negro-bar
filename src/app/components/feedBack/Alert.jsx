import React, { useEffect, useState } from "react";

export default function Alert({ type, message, show, setShow }) {
 

  useEffect(() => {
    // Después de 4 segundos, ocultamos la notificación
    const timeout = setTimeout(() => {
      setShow();
    }, 10000);
    // Limpiar el timeout cuando el componente se desmonta
    return () => clearTimeout(timeout);
  }, [setShow]);

  // Define las clases de Tailwind CSS según el tipo de alerta
  let alertClasses = "px-4 py-2 rounded-lg ";
  if (type === "success") {
    alertClasses += "bg-green-500 text-white";
  } else if (type === "warning") {
    alertClasses += "bg-yellow-500 text-black";
  } else if (type === "error") {
    alertClasses += "bg-red-500 text-white";
  } else {
    alertClasses += "bg-blue-500 text-white";
  }
  return (
    <>
      {show && (
        <div className={alertClasses}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}
