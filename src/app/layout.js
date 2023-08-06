import Script from "next/script";
import { Footer } from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

import { cookies } from "next/headers";
import ContextProvider from "./components/appContext/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gato Negro",
  description:
    "Cafetería Gato Negro de Alamar, panes, pizzas, confituras, dulces, tragos, picadera y mucho más",
};

export default function RootLayout({ children }) {
  const id = "js?id=G-YBZYKQ4HNF";

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
        <ContextProvider>
          <header>
            <NavBar />
          </header>

          {children}

          <footer className="">
            <Footer />
          </footer>
        </ContextProvider>
      </body>
    </html>
  );
}
