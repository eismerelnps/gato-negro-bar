
import Script from "next/script";
import { Footer } from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

//import ContextProvider from "./components/appContext/AppContext";

 import dynamic from "next/dynamic";

// import { Storage } from "redux-persist";
// import { persistReducer } from "redux-persist";
// import { combineReducers } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";

// import { Provider } from "react-redux";
// import { persistor, store } from "@/store/store";
// import { PersistGate } from "redux-persist/integration/react";
//import PersistProvider from "./components/appContext/PersistProvider";
//import { persistStore } from "redux-persist";

const StoreProvider = dynamic(() => import("./components/appContext/Provider"), {
  ssr: false,
});
const PersistProvider = dynamic(() => import("./components/appContext/PersistProvider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gato Negro",
  description:
    "Cafetería Gato Negro de Alamar, panes, pizzas, confituras, dulces, tragos, picadera y mucho más",
};

export default function RootLayout({ children }) {
  const id = "js?id=G-YBZYKQ4HNF";

  //const persistor

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/gato_negro_logo.png" />
        <Script src={`https://www.googletagmanager.com/gtag/${id}`} />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YBZYKQ4HNF');
        `}
        </Script>
      </head>

      <body className={`${inter.className}`}>
        {/* <Provider store={store}> */}
          {/* <PersistGate persistor={persistor}> */}
          <PersistProvider>
           <StoreProvider> 
            <header>
              <NavBar />
            </header>

            {children}

            <footer className="">
              <Footer />
            </footer>
            </StoreProvider>
          {/* </PersistGate> */}
          </PersistProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
