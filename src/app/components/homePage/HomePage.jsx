import { francois_one } from "@/fonts/francois_one";
import { gilda_display } from "@/fonts/gilda_display";
import { quicksand } from "@/fonts/quicksand";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { LockClosed, LockOpen } from "heroicons-react";

import Image from "next/image";

import React from "react";
import Link from "next/link";
import ServiceClosed from "../service/ServiceClosed";
import ServiceOpen from "../service/ServiceOpen";

const about_us = [
  {
    name: "Sobre Nosotros",
    description:
      "En Cafetería Gato Negro de Alamar, nuestra historia es una mezcla de pasión por la gastronomía y el deseo de crear un espacio acogedor donde cada cliente se sienta como en casa. Desde nuestros humildes comienzos, hemos evolucionado para convertirnos en un destino culinario imprescindible en la comunidad de Alamar.",
    id: "001",
  },
  {
    name: "Nuestra Misión",
    description:
      "Nuestra misión es simple: deleitar los paladares de nuestros clientes con sabores auténticos y experiencias inolvidables. Nos esforzamos por superar las expectativas en cada plato que servimos, utilizando ingredientes frescos y de la más alta calidad para crear delicias que enamoren a todos.",
    id: "002",
  },
  {
    name: "Compromiso con la Calidad",
    description:
      "En Cafetería Gato Negro de Alamar, la calidad es nuestra máxima prioridad. Cada uno de nuestros panes, pizzas, confituras, dulces y tragos es preparado con esmero y cuidado, manteniendo los estándares más altos en cada paso del proceso. Queremos que cada visita sea una experiencia excepcional y un recordatorio de que la pasión por la buena comida se puede sentir en cada bocado.",
    id: "003",
  },
  {
    name: "Nuestro Equipo",
    href: "Detrás de cada plato delicioso se encuentra un equipo de profesionales apasionados por lo que hacen. Nuestros talentosos chefs, panaderos y baristas son el corazón de Cafetería Gato Negro de Alamar, y su dedicación se refleja en la calidad de cada creación. Trabajamos juntos para asegurarnos de que cada cliente se vaya con una sonrisa y el deseo de volver pronto.",
    id: "004",
  },
  {
    name: "Comunidad y Hospitalidad",
    description:
      "Para nosotros, Cafetería Gato Negro de Alamar es más que un negocio; es un lugar donde construimos conexiones con nuestra comunidad. Nos enorgullecemos de brindar un ambiente cálido y acogedor, donde amigos y familiares pueden reunirse, compartir momentos especiales y disfrutar de una excelente comida juntos.",
    id: "005",
  },
  {
    name: "Ven a Conocernos",
    href: "Te invitamos a visitar nuestra cafetería y experimentar por ti mismo lo que nos hace especiales. Nuestro equipo te recibirá con una sonrisa y te guiará a través de un mundo de sabores y aromas que te dejarán con ganas de regresar una y otra vez.",
    id: "006",
  },
];

import cover from "../../../../public/cover.jpg";
import home_gato_negro from "../../../../public/home_gato_negro.jpeg";

import banner_rounded from "../../../../public/banner_rounded.png";
import banner_rounded_2 from "../../../../public/banner_rounded_2.png";
import huella_gato_negro from "../../../../public/huella_gato_negro.png";
import banner_vertical from "../../../../public/banner_vertical.jpg";
import hamburger_bg_black from "../../../../public/wallpapers/hamburger_bg_black.jpg";
import hamburger_bg_colored from "../../../../public/wallpapers/hamburger_bg_colored.jpg";

import black_cat_bg_white from "../../../../public/wallpapers/black_cat_bg_white.jpg";
import black_cat_black from "../../../../public/wallpapers/black_cat_black.jpg";
import black_cat from "../../../../public/wallpapers/black_cat.jpg";
import black_cat_2 from "../../../../public/wallpapers/black_cat_2.jpg";
import pizza from "../../../../public/wallpapers/pizza.jpg";
import pizza_2 from "../../../../public/wallpapers/pizza_2.jpg";

import InOffer from "../inOffer/InOffer";
import BackDrop from "../backDrop/BackDrop";

//animation library
import 'animate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// //Font Awensome Icon library

// // Specify all properties: name, family, style
 icon({name: 'user', family: 'classic', style: 'solid'})
// icon({name: 'user', family: 'classic', style: 'regular'})
//icon({name: 'twitter', family: 'classic', style: 'brands'})

// // 'classic' is the default family, you can leave that off
// icon({name: 'user', style: 'solid'})
// icon({name: 'user', style: 'regular'})
// icon({name: 'twitter', style: 'brands'})

// // 'solid' is the default style, you can leave that off
// icon({name: 'user'})


export function HomePage() {
  //const {open} = await fetchProducts('https://gato-negro-backend.onrender.com/api/v1/app', '');
  const open = true;

  return (
    <>
      <div className=" mt-16 ">
        <div className="bg-black ">
          <Image
            className=""
            src={black_cat_2}
            width={768}
            height={350}
            alt="Gato Negro Logo"
          />
          <div className="  absolute top-16 right-0  ">
            <h4
              className={`${francois_one.className} animate__animated animate__bounceInDown animate__slower		 mt-2 text-end text-xl text-slate-50`}
            >
              🥐 Delicias Hechas a Mano
            </h4>
            
            <p
              className={`${quicksand.className} animate__animated animate__bounceInUp animate__slower ms-44 me-2 mt-2  text-end  text-xs xl:text-2xl xl:ms-96 text-slate-50`}
            >
              Sumérgete en un mundo de sabores y aromas exquisitos en nuestro
              acogedor rincón en Alamar. Nuestra pasión por la buena comida y
              las experiencias inolvidables nos ha llevado a crear un espacio
              donde cada visita es un verdadero festín para tu paladar.
            </p>
          </div>
        </div>

        <div>{open ? <ServiceOpen /> : <ServiceClosed />}</div>

        <div className="animate__animated animate__fadeInLeft bg-slate-100  p-6">
          <section className="m-3 p-3">
            <h2
              className={`${francois_one.className}  text-slate-800 text-xl `}
            >
              NUESTRO HORARIO
            </h2>
            <h4 className={`${quicksand.className}  text-slate-800 `}>
              Domingo a Jueves
            </h4>
            <span className={`${gilda_display.className}  text-slate-800`}>
              08:00 AM - 09:00 PM
            </span>
            <h4 className={`${quicksand.className}  text-slate-800 `}>
              Viernes y Sábado
            </h4>
            <span className={`${gilda_display.className}  text-slate-800`}>
              08:00 AM - 12:00 pM
            </span>
          </section>

          <section className="m-3 p-3">
            <h2 className={`${francois_one.className}  text-slate-800 text-xl`}>
              Contáctanos
            </h2>
            <h4 className={`${quicksand.className}  text-slate-800`}>
              Haz tu pedido desde casa
            </h4>
            <br/>
            <span className={`${gilda_display.className}  text-slate-800`}>
              (+53) 5 1946995{" "}
            </span>
            <br/>
            <span className={`${gilda_display.className}  text-slate-800`}>
              (+53) 53008869{" "}
            </span>
            <br/>
            <span className={`${gilda_display.className}  text-slate-800`}>
              (+53) 77645581{" "}
            </span>
          </section>

          <section className="m-3 p-3">
            <h2 className={`${francois_one.className}  text-slate-800 text-xl`}>
              Donde radicamos
            </h2>
            {/* <h4>Haz tu pedido desde casa</h4> */}
            <span className={`${gilda_display.className}  text-slate-800`}>
              Calle 162 / Ave 5ta y 5ta A{" "}
            </span>
            <span className={`${gilda_display.className}  text-slate-800`}>
              Alamar / La Habana del Este{" "}
            </span>
            <span className={`${gilda_display.className}  text-slate-800`}>
              Frente al IPU Lázaro Peña{" "}
            </span>
          </section>
        
        </div>
      </div>
      <div
        className="
            bg-neutral-700 h-16 mb-3
            border  border-s-slate-100 border-y-slate-950 border-e-slate-950    
            
            
            "
      >
        <div className="flex flex-rows items-center justify-center">
          <div className="basis-1/3 border border-slate-50 rounded hover:bg-slate-50 h-auto hover:rounded-full p-1">
            <Link href={"/menu"} className="hover:text-black ">
              <h2
                className={`${francois_one.className} text-center text-slate-50 text-xs hover:text-black`}
              >
                MENU
              </h2>
            </Link>
          </div>
          <div className="basis-8 text-center ">
            <div className="flex justify-center">
              <ArrowTopRightOnSquareIcon
                className="block h-6 w-6 m-4 text-slate-50"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="basis-1/3 border border-slate-50 rounded hover:bg-slate-50 h-auto hover:rounded-full p-1">
            <a
              href="https://api.whatsapp.com/send?phone=5351946995
                 "
              target="_blank"
              className="hover:text-black "
            >
              <h2
                className={`${francois_one.className} text-center  text-slate-50 text-xs hover:text-black`}
              >
                HAZ TU PEDIDO
              </h2>
            </a>
            {/* <Link href={"#"} className="hover:text-black ">
              <h2
                className={`${francois_one.className} text-center  text-slate-50 text-xs hover:text-black`}
              >
                HAZ TU PEDIDO
              </h2>
            </Link> */}
          </div>
        </div>
      </div>

      {/* <>
        <InOffer />
      </> */}

      <div className="p-4 my-4 bg-slate-50">
        <section className="flex flex-col md:flex-row flex-wrap">
          <article className="lg:basis-1/3 md:basis-1/2  basis-full my-8">
            <h1
              className={`${francois_one.className} text-slate-800  text-4xl `}
            >
              SOBRE NOSOTROS
            </h1>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <p
              className={`${gilda_display.className} text-lg m-8 text-slate-950`}
            >
              En Cafetería &quot;Gato Negro&quot; de Alamar, nuestra historia es
              una mezcla de pasión por la gastronomía y el deseo de crear un
              espacio acogedor donde cada cliente se sienta como en casa. Desde
              nuestros humildes comienzos, hemos evolucionado para convertirnos
              en un destino culinario imprescindible en la comunidad de Alamar.
            </p>
            <div className="flex justify-center">
              <Image
                className=" hover:blur-none rounded-xl"
                src={cover}
                width={280}
                height={280}
                alt="Gato Negro Cafeteria"
              />
            </div>
          </article>
          <article className="lg:basis-1/3 md:basis-1/2 basis-full my-8">
            <h1
              className={`${francois_one.className} text-slate-800  text-4xl `}
            >
              Nuestra Misión
            </h1>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <p
              className={`${gilda_display.className} text-lg m-8 text-slate-950`}
            >
              Nuestra misión es simple: deleitar los paladares de nuestros
              clientes con sabores auténticos y experiencias inolvidables. Nos
              esforzamos por superar las expectativas en cada plato que
              servimos, utilizando ingredientes frescos y de la más alta calidad
              para crear delicias que enamoren a todos.,
            </p>
            <div className="flex justify-center">
              <Image
                className=" hover:blur-none rounded-xl"
                src={hamburger_bg_colored}
                width={280}
                height={280}
                alt="Gato Negro Cafeteria"
              />
            </div>
          </article>
          <article className="lg:basis-1/3 md:basis-1/2 basis-full my-8">
            <h1
              className={`${francois_one.className} text-slate-800  text-4xl `}
            >
              Visítanos
            </h1>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <p
              className={`${gilda_display.className} text-lg m-8 text-slate-950`}
            >
              Visite nuestra cafetería &quot;Gato Negro&quot;, ubicada frente al
              IPU Lázaro Peña, donde le ofrecemos una variedad de productos:
              panes en bolsas, galletas, confituras importadas, panes
              elaborados, pizzas, espaguetis, bebidas y muchas otras opciones
              que serán de su agrado.
            </p>
            <div className="flex justify-center">
              <Image
                className="blur-24 hover:blur-none rounded-xl"
                src={home_gato_negro}
                width={280}
                height={280}
                alt="Gato Negro Cafeteria"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
