"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export const IsLogged = ({ children }) => {
    const router = useRouter();
  
  const user = useSelector((state) => state.auth);

  if (!user.logged) {
    return children;
  }
  router.back();
  
};