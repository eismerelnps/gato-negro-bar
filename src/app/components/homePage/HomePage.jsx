import { francois_one } from "@/fonts/francois_one";
import { gilda_display } from "@/fonts/gilda_display";
import { quicksand } from "@/fonts/quicksand";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import banner_rounded from "../../../../public/banner_rounded.png";
import banner_rounded_2 from "../../../../public/banner_rounded_2.png";

import banner_vertical from "../../../../public/banner_vertical.jpg";

import React from "react";
import Link from "next/link";

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

export const HomePage = () => {
  return (
    <>
      <div className="mt-16 p-3 bg-slate-100">
        <section className="flex flex-rows border-dotted border-4">
          <Image
            className="float-right me-2"
            src={banner_rounded_2}
            width={200}
            height={200}
            alt="Gato Negro Logo"
          />

          <div className="">
            <h1 className={`${francois_one.className} text-end text-4xl m-3`}>
              GATO NEGRO
            </h1>

            <h4
              className={`${gilda_display.className} text-end text-slate-800`}
            >
              Delicias <br /> Hechas a Mano 🥐
            </h4>
          </div>
        </section>

        <section className="flex flex-rows m-3">
          <article className="basis-4/5 w-6">
            <p className={`${gilda_display.className} text-slate-950`}>
              Sumérgete en un mundo de sabores y aromas exquisitos en nuestro
              acogedor rincón en Alamar. Nuestra pasión por la buena comida y
              las experiencias inolvidables nos ha llevado a crear un espacio
              donde cada visita es un verdadero festín para tu paladar.
            </p>
          </article>
          <article className="basis-1/5 "></article>
        </section>


        <Link
        href={'/menu'}
        >
        <div className="bg-slate-800 h-16 mb-3  hover:bg-slate-950 rounded-e-full">
          <div className="flex flex-rows items-center justify-center">
            <h2 className={`${francois_one.className} text-slate-50 text-xl`}>
              VEA NUETRO MENU
            </h2>

            <ArrowTopRightOnSquareIcon
              className="block h-6 w-6 m-4 text-slate-50"
              aria-hidden="true"
            />
          </div>
          </div>
        </Link>
        
        

        <div className="bg-slate-800 h-16 hover:bg-slate-950 mb-3 rounded-e-full">
          <div className="flex flex-rows items-center justify-center">
            <h2 className={`${francois_one.className} text-slate-50 text-xl`}>
              HAZ TU PEDIDO YA
            </h2>

            <ArrowTopRightOnSquareIcon
              className="block h-6 w-6 m-4 text-slate-50"
              aria-hidden="true"
            />
          </div>
        </div>




        <div className="">
          <section className="m-3 p-3">
            <h2 className={`${francois_one.className}  text-slate-800`}>
              NUESTROS HORARIO
            </h2>
            <h4>Todos los días</h4>
            <span>07:30 AM - 11:00 PM</span>
          </section>

          <section className="m-3 p-3">
            <h2 className={`${francois_one.className}  text-slate-800`}>
              Contáctanos
            </h2>
            <h4>Haz tu pedido desde casa</h4>
            <span>(+53) 50505050 </span>
            <span>(+53) 50505050 </span>
          </section>

          <section className="m-3 p-3">
            <h2 className={`${francois_one.className}  text-slate-800`}>
              Donde radicamos
            </h2>
            {/* <h4>Haz tu pedido desde casa</h4> */}
            <span>Calle 162 / Ave 5ta y 5ta A </span>
            <span>Alamar / La Habana del Este </span>
          </section>

          <section></section>
        </div>
      </div>

      <div className="p-6 bg-slate-50">
        <section className="">
          {/* <h1
            className={`${francois_one.className} text-slate-800 text-center text-4xl m-3`}
          >
            SOBRE NOSOTROS
          </h1>

          <p className={`${quicksand.className} text-slate-950`}>
            En Cafetería Gato Negro de Alamar, nuestra historia es una mezcla de
            pasión por la gastronomía y el deseo de crear un espacio acogedor
            donde cada cliente se sienta como en casa. Desde nuestros humildes
            comienzos, hemos evolucionado para convertirnos en un destino
            culinario imprescindible en la comunidad de Alamar.
          </p> */}
        </section>

        <section className="">
          {about_us.map((about) => (
            <article key={about.id}>
              <h1
                className={`${francois_one.className} text-slate-800 text-center text-4xl m-3`}
              >
                {about.name}
              </h1>

              <p className={`${quicksand.className} text-slate-950`}>
                {about.description}
              </p>
            </article>
          ))}

          {/* <h1
            className={`${francois_one.className} text-slate-800 text-center text-4xl m-3`}
          >
            SOBRE NOSOTROS
          </h1>

          <p className={`${quicksand.className} text-slate-950`}>
            En Cafetería Gato Negro de Alamar, nuestra historia es una mezcla de
            pasión por la gastronomía y el deseo de crear un espacio acogedor
            donde cada cliente se sienta como en casa. Desde nuestros humildes
            comienzos, hemos evolucionado para convertirnos en un destino
            culinario imprescindible en la comunidad de Alamar.
          </p> */}
        </section>
      </div>
    </>
  );
};
