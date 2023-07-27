import { Footer } from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gato Negro',
  description: 'Cafetería Gato Negro de Alamar, panes, pizzas, confituras, dulces, tragos, picadera y mucho más',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="icon" href="/gato_negro_logo.png" />
      <body className={`${inter.className}`}>
        <header>
          <NavBar />
        </header>
      
        {children}
         <footer className=''>
          <Footer />
        </footer>
        </body>
    </html>
  )
}
