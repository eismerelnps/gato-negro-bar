"use client";
import { useContext } from "react";
import { AppContext } from "../appContext/AppContext";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export const PubliceRoute = ({ children }) => {
  //const router = useRouter();
  //const { user } = useContext(AppContext);
  const user = useSelector((state) => state.auth);

  if (!user.logged) {
    return children;
  }

  return <></>;
};
//const { pathname, search } = useLocation();
//localStorage.setItem("lastPath", `${pathname}${search}`);
