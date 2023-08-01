
import Script from "next/script";
import { Footer } from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gato Negro",
  description:
    "Cafetería Gato Negro de Alamar, panes, pizzas, confituras, dulces, tragos, picadera y mucho más",
};

export default function RootLayout({ children }) {
  const user = "eismer";

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/gato_negro_logo.png" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YBZYKQ4HNF" />
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
        
          <header>
            <NavBar />
          </header>
         
          {children}
         
          <footer className="">
            <Footer />
          </footer>
        </body>
     
    </html>
  );
}
