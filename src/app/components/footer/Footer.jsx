import { francois_one } from "@/fonts/francois_one";
import { gilda_display } from "@/fonts/gilda_display";
import { quicksand } from "@/fonts/quicksand";

import {
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

import gato_negro_CEO from "../../../../public/gato_negro_CEO.png";
import { Francois_One } from "next/font/google";

export const Footer = () => {
  return (
    <div className="bg-blue-950 mt-8 md:p-16 p-8 ">
      <h1
        className={`${francois_one.className} my-8 text-slate-50 text-center text-4xl md:text-6xl`}
      >
        !Esperamos tu visita!
      </h1>
      <hr />
      <section className="flex flex-col md:flex-row">
        <article className="basis-1/2 my-8">
          <div>
            <h1
              className={`${quicksand.className} text-slate-50 text-center text-xl m-3`}
            >
              <b
                className={`${quicksand.className} text-slate-400 text-center text-xl m-3`}
              >
                Contáctenos:
              </b>
            </h1>
          </div>

          <div className="flex  flex-col ">
            <div className="flex flex-col ">
              <div className="flex items-center flex-row justify-center">
                <GlobeAltIcon
                  className="text-slate-50 block h-6 w-6 m-4"
                  aria-hidden="true"
                />
                <span
                  className={`${quicksand.className} text-slate-50 text-center text-xl`}
                >
                  Grupo de Whatsapp
                </span>
              </div>

              <div className="flex flex-row justify-center  md:flex-col md:justify-start  ">
                <a
                  href="https://chat.whatsapp.com/FtNUB3JBm5x3AQ7o0Ik5lf
"
                  target="_blank"
                  className=" basis-1/2 text-slate-400 text-center text-xl"
                >
                  Únete Aquí
                </a>
                {/* <a
                  href="https://chat.whatsapp.com/FtNUB3JBm5x3AQ7o0Ik5lf
"
                  target="_blank"
                  className=" basis-1/2 text-slate-50 text-center text-xl"
                >
                  +5351946995
                </a> */}
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center flex-row justify-center">
                <PhoneIcon
                  className="text-slate-50 block h-6 w-6 m-4"
                  aria-hidden="true"
                />
                <span
                  className={`${quicksand.className} text-slate-50 text-center text-xl`}
                >
                  Celular
                </span>
              </div>

              <div className="flex flex-row justify-center  md:flex-col md:justify-start  ">
                <a
                  href="https://api.whatsapp.com/send?phone=5351946995
"
                  target="_blank"
                  className=" basis-1/2 text-slate-400 text-center text-xl"
                >
                  +5351946995
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5351946995
"
                  target="_blank"
                  className=" basis-1/2 text-slate-400 text-center text-xl"
                >
                  +5351946995
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center flex-row justify-center">
                <MapIcon
                  className="text-slate-50 block h-6 w-6 m-4"
                  aria-hidden="true"
                />
                <span
                  className={`${gilda_display.className} text-slate-50 text-center text-xl`}
                >
                  Dirección
                </span>
              </div>

              <h4
                className={`${gilda_display.className} text-slate-400 text-center text-xl`}
              >
                Calle 162 / Ave 5ta y 5ta A
              </h4>
              <h4
                className={`${gilda_display.className} text-slate-400 text-center text-xl`}
              >
                Alamar / La Habana del Este
              </h4>
            </div>
          </div>
        </article>

        <article className="basis-1/2 my-8 mx-auto">
          <div className=" ">
            <h4
              className={`${francois_one.className} text-slate-50 text-center text-xl`}
            >
              CEO
            </h4>
            <h6
              className={`${gilda_display.className} text-slate-50 text-center text-xl`}
            >
              Luis Alberto 
            </h6>
            <Image
              className="mx-auto"
              src={gato_negro_CEO}
              width={250}
              height={250}
              alt="Gato Negro Logo"
            />
          </div>
        </article>
      </section>
      <h4
        className={`${gilda_display.className} text-slate-50 text-center text-xl`}
      >
        Desarrollado por:{" "}
        <a
          href="https://api.whatsapp.com/send?phone=5356062474
"
          target="_blank"
          className=" basis-1/2 text-slate-400 text-center text-xl"
        >
         <b>elnps</b>
        </a>
      </h4>
    </div>
  );
};
