"use client";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function PersistProvider({ children }) {
  return <PersistGate persistor={persistor}>{children}</PersistGate>;
}
