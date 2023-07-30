import { francois_one } from "@/fonts/francois_one";
import { gilda_display } from "@/fonts/gilda_display";
import { quicksand } from "@/fonts/quicksand";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

import { LockClosed, LockOpen } from "heroicons-react";
import React from "react";

export default function ServiceClosed() {
  return (
    <div
      className="
          bg-neutral-700 h-16 "
    >
      <div className="flex flex-rows items-center justify-center">
        <div className="basis-1/5 text-center ">
          <div className="flex justify-center">
            <FaceFrownIcon
              className="block h-6 w-6 m-4 text-slate-50"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="basis-3/5  h-auto  p-1">
          <h2
            className={`${francois_one.className} text-center  text-slate-50 text-lg `}
          >
            Estamos cerrados
          </h2>
          <p
            className={`${quicksand.className} text-center  text-slate-50 text-sm `}
          >
            Pero nos vemos pronto
          </p>
        </div>
        <div className="basis-1/5 text-center ">
          <div className="flex justify-center">
            <FaceFrownIcon
              className="block h-6 w-6 m-4 text-slate-50"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
