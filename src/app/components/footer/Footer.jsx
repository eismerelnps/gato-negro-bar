import { francois_one } from "@/fonts/francois_one";
import { gilda_display } from "@/fonts/gilda_display";
import { quicksand } from "@/fonts/quicksand";

import { ChatBubbleLeftEllipsisIcon, MapPinIcon } from "@heroicons/react/24/solid";


export const Footer = () => {
  return (
    <div className="bg-neutral-950 mt-8 p-4">
      <h1 className={`${francois_one.className} text-slate-50 text-center text-2xl`}>
        !Esperamos tu visita!
      </h1>
      <div></div>

      <div className="">
        <div>
          <h3 className={`${quicksand.className} text-slate-50 text-center text-xl m-3`}>
            Contáctenos:
          </h3>
        </div>

        <div className="flex  flex-col">
          <div className="flex flex-rows">
          <ChatBubbleLeftEllipsisIcon
            className="text-slate-50 block h-6 w-6 m-4"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <span className={`${gilda_display.className} text-slate-50 text-center text-xl`}>
              Celular
            </span>
            <h4 className={`${gilda_display.className} text-slate-50 text-center text-xl`}>
              +5350505050
            </h4>
          </div>

          </div>
         

          

          <div className="flex flex-col">
            <span className={`${gilda_display.className} text-slate-50 text-center text-xl`}>
              Dirección
            </span>
            <h4 className={`${gilda_display.className} text-slate-50 text-center text-xl`}>
            Calle 162 / Ave 5ta y 5ta A 
            </h4>
            <h4 className={`${gilda_display.className} text-slate-50 text-center text-xl`}>
            Alamar / La Habana del Este 
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
