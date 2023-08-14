import Script from "next/script";
import dynamic from "next/dynamic";

import "./globals.css";
import { Inter } from "next/font/google";

//App's components
import NavBar from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer";
import Modal from "./components/dialog/Modal";
import BackDrop from "./components/backDrop/BackDrop";

const StoreProvider = dynamic(
  () => import("./components/appContext/Provider"),
  {
    ssr: false,
  }
);
const PersistProvider = dynamic(
  () => import("./components/appContext/PersistProvider"),
  {
    ssr: false,
  }
);

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
        <PersistProvider>
          <StoreProvider>
          <Modal/>
          <BackDrop />

            <header>
              <NavBar />
            </header>

            {children}

            <footer className="">
              <Footer />
            </footer>
          </StoreProvider>
        </PersistProvider>
      </body>
    </html>
  );
}
