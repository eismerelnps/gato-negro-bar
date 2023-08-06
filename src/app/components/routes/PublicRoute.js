"use client";
import { useContext } from "react";
import { AppContext } from "../appContext/AppContext";
import { useRouter } from "next/navigation";

export const PubliceRoute = ({ children }) => {
  //const router = useRouter();
  const { user } = useContext(AppContext);

  if (!user.logged) {
    return children;
  }

  return <></>;
};
//const { pathname, search } = useLocation();
//localStorage.setItem("lastPath", `${pathname}${search}`);
