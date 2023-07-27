import { francois_one } from "@/fonts/francois_one";
import { gilda_display } from "@/fonts/gilda_display";
import { quicksand } from "@/fonts/quicksand";

import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
  return (
    <div className="bg-neutral-300">
      <h1 className={`${francois_one.className} text-center text-2xl`}>
        !Esperamos tu visita!
      </h1>
      <div></div>

      <div className=" m-5 bg-slate-300">
        <div>
          <h3 className={`${quicksand.className} text-center text-xl m-3`}>
            Contáctenos:
          </h3>
        </div>

        <div className="flex flex-rows">
          <ChatBubbleLeftEllipsisIcon
            className="block h-6 w-6 m-4"
            aria-hidden="true"
          />

          <div className="flex flex-col">
            <span className={`${gilda_display.className} text-center text-xl`}>
              Celular
            </span>
            <h4 className={`${gilda_display.className} text-center text-xl`}>
              +5350505050
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
