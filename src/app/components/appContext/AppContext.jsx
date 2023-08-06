"use client";
import { authReducer } from "@/reducers/authReducer";
import { createContext, useEffect, useReducer } from "react";

export const AppContext = createContext();

const USER_LOCAL_STORAGE_KEY = "gato_negro_user";

const init = () => {
  const storedUser = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  if (storedUser) {
    return {
      ...JSON.parse(storedUser),
      cart: { count: 0, items: [] },
      wishList: { count: 0, items: [] },
    };
  }

  return {
    logged: false,
    cart: { count: 0, items: [] },
    wishList: { count: 0, items: [] },
  };
};

export default function ContextProvider({ children }) {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  return (
    <AppContext.Provider value={{ user, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
