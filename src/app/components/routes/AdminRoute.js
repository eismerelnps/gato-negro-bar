"use client";
import { useSelector } from "react-redux";

export const AdminRoute = ({ children }) => {
  const user = useSelector((state) => state.auth);

  if (user.user) {
    if (user.user.role === "superadmin") {
      return children;
    }
  }
  return <></>;
};
