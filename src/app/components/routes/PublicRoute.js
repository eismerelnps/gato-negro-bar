"use client";
import { useSelector } from "react-redux";

export const PubliceRoute = ({ children }) => {
  const user = useSelector((state) => state.auth);

  if (!user.logged) {
    return children;
  }

  return <></>;
};
