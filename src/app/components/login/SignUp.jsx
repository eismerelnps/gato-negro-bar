"use client";
//Imports from Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

//Local Imports
import { useForm } from "@/hooks/useForm";
import gato_negro_logo from "../../../../public/gato_negro_logo.png";
import {
  setError,
  removeError,
  startLoading,
  finishLoading,
} from "@/actions/ui";

//Imports from Redux
import { useDispatch } from "react-redux";

//Other imports
import validator from "validator";

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

export default function SignUp() {
  const dispatch = useDispatch();
  const router = useRouter();

  const url =
    "https://gato-negro-backend.onrender.com/api/v1/users/create-user";

  const [formValues, handdleInputChange] = useForm({
    role: "user",
    logged: false,
    username: "",
    password: "",
    repassword: "",
    email: "",
    number: "",
    cart: { count: 0, items: [] },
    wishList: { count: 0, items: [] },
  });

  const {
    role,
    logged,
    username,
    password,
    repassword,
    email,
    number,
    cart,
    wishList,
  } = formValues;

  const handleSignUp = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoading());

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          role: role,
          logged: logged,
          username: username,
          password: password,
          email: email,
          number: number,
          cart: cart,
          wishList: wishList,
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
          dispatch(setError(data.message));

          if (data.user) {
            router.replace("/login");
          }
        })
        .catch((error) => {
          dispatch(finishLoading());
          dispatch(setError("Se ha producido un error al crear la cuenta."));
        });
    }
  };

  const isFormValid = () => {
    if (username.trim().length === 0) {
      dispatch(setError("El nombre de usuario es requerido"));
      return false;
    } else if (username.trim().length < 3) {
      dispatch(
        setError("Su nombre de usuario como minimo debe tener 3 caracteres")
      );
      return false;
    } else if (password.length === 0) {
      dispatch(setError("Introduzca una contraseña por favor"));
      return false;
    } else if (password.length < 4) {
      dispatch(setError("Su contraseña debe tener como mínimo 4 caracteres."));
      return false;
    } else if (password.length > 128) {
      dispatch(
        setError("Su contraseña debe tener como máximo 128 caracteres.")
      );
      return false;
    } else if (repassword.length === 0) {
      dispatch(setError("Repita su contraseña por favor"));
      return false;
    } else if (password !== repassword) {
      dispatch(setError("Sus contrseñas no coinciden"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Inserte un correo electrónico válido por favor"));
      return false;
    } else if (!validator.isMobilePhone(number)) {
      dispatch(setError("Inserte un número de teléfono válido"));
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
          Crear una cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignUp}>
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
            <label
              htmlFor="repassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Repita la contraseña
            </label>
            <div className="mt-2">
              <input
                id="repassword"
                name="repassword"
                type="password"
                autoComplete
                //required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handdleInputChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete
                //required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handdleInputChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Número de teléfono
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                type="number"
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
              Crear Cuenta
            </button>
          </div>
        </form>

        <p className="mt-10  text-center text-sm text-gray-500">
          Ya tienes cuenta
          <Link
            href="/login"
            className="font-semibold ms-2 leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
{
  /*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */
}
