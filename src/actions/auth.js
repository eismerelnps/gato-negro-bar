import { types } from "@/types/types";

export const startLoginWithUserAndPassword = (username, password) => {
  return (dispatch) => {
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
        //setLoading(false);
        // setAlert({
        //   alertType: "success",
        //   alertMessage: data.message,
        //   showAlert: true,
        // });

        if (data.user) {
          dispatch(login(data.user, data.token));
          //   console.log(data.user);
          //   // const action = {
          //   //   type: types.login,
          //   //   payload: {
          //   //     user: data.user,
          //   //     token: data.token,
          //   //   },
        }

        //   //dispatch(startLogin(data.user, data.token));

        router.replace("/");
        // }
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
        // setAlert({
        //   alertType: "error",
        //   alertMessage: "Se ha producido un error al iniciar sesión.",
        //   showAlert: true,
        // });
      });

    // setTimeout(() => {
    //   dispatch(login(username, "4541qwqwqw"));
    // }, 3500);
  };
};

export const login = (user, token) => ({
  type: types.login,
  payload: {
    user,
    token,
  },
});

export const logout = () => ({
  type: types.logout,
  payload: {
    logged: false,
    cart: { count: 0, items: [] },
    wishList: { count: 0, items: [] },
  },
});
