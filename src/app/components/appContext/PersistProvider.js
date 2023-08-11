'use client'
import { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function PersistProvider({ children }) {
  return <PersistGate persistor={persistor}>{children}</PersistGate>;
}
