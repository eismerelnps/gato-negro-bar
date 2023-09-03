import { types } from "@/types/types";
import { finishLoading, setError, startLoading } from "./ui";
//import { setMessage, startLoading } from "./ui";

//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_USERS_LOGIN;

export const startLoginWithUserAndPassword = (username, password) => {
  return async (dispatch) => {
    dispatch(startLoading());

    try {
      const bodyData = new FormData();
      bodyData.append("username", username);
      bodyData.append("password", password);

      const headerData = new FormData();
      headerData.append("Content-Type", "application/json");
      headerData.append("Accept-Encoding", "gzip, deflate, br");

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
               username: username,
               password: password,
             }),
        headers: headerData,
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud de red");
      }
      const data = await response.json();
      dispatch(finishLoading());
      if (data.user) {
        dispatch(login(data.user, data.token));
      } else {
        dispatch(setError(data.message));
      }
    } catch (error) {
      dispatch(finishLoading());
      dispatch(setError("Ha producido un error al iniciar sesión."));
    }

    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "*/*",
    //     "Accept-Encoding": "gzip, deflate, br",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(finishLoading());
    //     if (data.user) {
    //       return dispatch(login(data.user, data.token));
    //     }
    //     dispatch(setError(data.message));
    //   })
    //   .catch((error) => {
    //     dispatch(finishLoading());
    //     dispatch(setError("Se ha producido un error al iniciar sesión."));
    //   });
  };
};

//accion para hacer el login en el contexto
export const login = (user, token) => ({
  type: types.login,
  payload: {
    user,
    token,
  },
});
export const signin = (user, token) => ({
  type: types.login,
  payload: {
    user,
    token,
  },
});

//accion para hacer el logout en el contexto
export const logout = () => ({
  type: types.logout,
  payload: {
    logged: false,
  },
});
