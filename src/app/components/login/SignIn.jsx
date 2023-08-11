"use client";

import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AppContext } from "../appContext/AppContext";
import Image from "next/image";
import gato_negro_logo from "../../../../public/gato_negro_logo.png";
import { types } from "@/types/types";
import BackDrop from "../backDrop/BackDrop";
import Alert from "../feedBack/Alert";
import Modal from "../dialog/Modal";

import { useDispatch } from "react-redux";
import { login, startLoginWithUserAndPassword } from "@/actions/auth";
import { fisnishLoading, setError, startLoading } from "@/actions/ui";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function SignIn() {
  const dispatch = useDispatch();

  const url = "https://gato-negro-backend.onrender.com/api/v1/users/login";

  const router = useRouter();

  ////dispatch del useContext
  //const { dispatch } = useContext(AppContext);

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

  const [formValues, handdleInputChange] = useForm({
    username: "",
    password: "",
    email: "",
    number: "",
  });

  const { username, password } = formValues;

  const handleSignIn = (e) => {
    setLoading(true);
    dispatch( startLoading() );

    e.preventDefault();

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch( fisnishLoading() );

        setLoading(false);
        if (data.user) {
          dispatch(login(data.user, data.token));
          router.replace("/");
        }

        setAlert({
          alertType: "success",
          alertMessage: data.message,
          showAlert: true,
        });
      })
      .catch((error) => {
        dispatch( fisnishLoading() );
        dispatch( setError("Se ha producido un error al iniciar sesión."))
        setLoading(false);
        setAlert({
          alertType: "error",
          alertMessage: "Se ha producido un error al iniciar sesión.",
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
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            width={250}
            height={250}
            className="mx-auto h-10 w-auto"
            src={gato_negro_logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicia seccion
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre de usuario
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="true"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handdleInputChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Olvidaste la contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="true"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handdleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar seccion
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes cuenta
            <a
              href="/signup"
              className="font-semibold ms-2 leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Crearte una
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
