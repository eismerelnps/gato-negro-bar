"use client";
//Next Imports
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

//Local Imports
import { useForm } from "@/hooks/useForm";
import {
  finishLoading,
  removeError,
  setError,
  startLoading,
} from "@/actions/ui";
////images
import gato_negro_logo from "../../../../public/gato_negro_logo.png";
import { login } from "@/actions/auth";

export const SignIn = () => {
  const dispatch = useDispatch();

  //const url = "https://gato-negro-backend.onrender.com/api/v1/users/login";
  const url = "http://localhost:8787/api/v1/users/login";

  const [formValues, handdleInputChange] = useForm({
    username: "",
    password: "",
  });

  const { username, password } = formValues;

  const handleSignIn = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoading());

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
          dispatch(finishLoading());

          if (data.user) {
            return dispatch(login(data.user, data.token));
          }
          dispatch(setError(data.message));
        })
        .catch((error) => {
          dispatch(finishLoading());
          dispatch(setError("Se ha producido un error al iniciar sesión."));
        });
    }
  };
  const isFormValid = () => {
    if (username.trim().length === 0) {
      dispatch(setError("Introduzca un nombre de usuario por favor"));
      return false;
    } else if (password.length === 0) {
      dispatch(setError("Introduzca una contraseña por favor"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
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
          Iniciar Sesión
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignIn}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre de usuario
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplet="off"
                // required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handdleInputChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contraseña
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete
                //required
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
              Iniciar Sesión
            </button>
          </div>
        </form>

        <p className="mt-10  text-center text-sm text-gray-500">
          No tienes cuenta
          <Link
            href="/signup"
            className="font-semibold ms-2 leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Crear una
          </Link>
        </p>
      </div>
    </div>
  );
};
{
  /*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */
}
