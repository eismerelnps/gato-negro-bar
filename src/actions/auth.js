import { types } from "@/types/types";
//import { setMessage, startLoading } from "./ui";

//const url = "https://gato-negro-backend.onrender.com/api/v1/users/login";

// export const startLoginWithUserAndPassword = (username, password) => {

//   return (dispatch) => {
//     dispatch(startLoading())
//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "*/*",
//         "Accept-Encoding": "gzip, deflate, br",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {

//         dispatch(setMessage(data.message));
//         if (data.user) {
//           dispatch(login(data.user, data.token));

//         }

//         router.replace("/");
//         // }
//       })
//       .catch((error) => {
//         dispatch(
//           setError(
//             "Se ha producido un error al crear su cuenta. Por favor, inténtelo de nuevo. Si el problema persiste, póngase en contacto con la administración."
//           )
//         );
//         console.log(error);

//       });
//       // dispatch(fisnishLoading());
//       // dispatch(removeError());
//       // dispatch(removeMessage());

//   };
// };

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
    token
  }
})

export const logout = () => ({
  type: types.logout,
  payload: {
    logged: false,
  },
});
