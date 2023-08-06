"use client";
import { useContext } from "react";
import { AppContext } from "../appContext/AppContext";
import { useRouter } from "next/navigation";

export const AdminRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(AppContext);
  if (user.user) {
    if (user.user.role === "superadmin") {
      return children;
    }
  }
  return <></>;
};
  //const { pathname, search } = useLocation();
  //localStorage.setItem("lastPath", `${pathname}${search}`);