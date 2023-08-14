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
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

//Imports of local fonts
import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_USERS_LOGIN;

export const SignIn = () => {
  const dispatch = useDispatch();

  const [formValues, handdleInputChange] = useForm({
    username: "",
    password: "",
  });

  const { username, password } = formValues;

  // to show & hide password field
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const handleSignIn1 = (e) => {
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
        <h1
          className={`${francois_one.className} mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900`}
        >
          Iniciar Sesión
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignIn}>
          <div>
            <label
              htmlFor="username"
              className={`${gilda_display.className} block text-sm font-medium leading-6 text-gray-900`}
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
                className={`${quicksand.className}  bg-white
                outline  outline-1 outline-slate-300
                focus:outline-2 hover:bg-slate-50 
                duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                onChange={handdleInputChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className={`${gilda_display.className} block text-sm font-medium leading-6 text-gray-900`}
            >
              Contraseña
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete
                //required
                className={`${quicksand.className} 
                bg-white
                outline  outline-1 outline-slate-300
                focus:outline-2 hover:bg-slate-50 
                duration-100
                
                block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                onChange={handdleInputChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="h-full rounded-md bg-transparent py-0 p-2 text-gray-500  sm:text-sm"
                >
                  {showPassword ? (
                    <EyeSlashIcon
                      className="block h-4 w-4 duration-200 text-slate-500 "
                      aria-hidden="true"
                    />
                  ) : (
                    <EyeIcon
                      className="block h-4 w-4  duration-200 text-slate-500"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`${francois_one.className} 
               duration-200 flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6
                bg-slate-950 text-slate-100 hover:text-slate-950
                outline  outline-1 outline-slate-300
                focus:outline-4 hover:bg-slate-50 
                duration-100`}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <p
          className={`${gilda_display.className} mt-10  text-center text-sm text-gray-400`}
        >
          No tienes cuenta
          <Link
            href="/signup"
            className={`${quicksand.className}  ms-2 leading-6 text-blue-800 hover:text-blue-600`}
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
