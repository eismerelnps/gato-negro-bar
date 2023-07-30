import { francois_one } from "@/fonts/francois_one";
import { gilda_display } from "@/fonts/gilda_display";
import { quicksand } from "@/fonts/quicksand";
import { MapPinIcon } from "@heroicons/react/24/solid";



import { LockClosed, LockOpen } from 'heroicons-react'
import React from 'react'





export default function ServiceOpen() {
  return (
    <div
          className="
            bg-neutral-800 h-16 mb-3
            border  border-s-slate-100 border-y-slate-950 border-e-slate-950    
            
            
            "
        >
        <div className="flex flex-rows items-center justify-center">
            <div className="basis-1/5 text-center ">
              <div className="flex justify-center">
                <MapPinIcon
                  className="block h-6 w-6 m-4 text-slate-50"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="basis-3/5 hover:bg-slate-50 h-auto hover:rounded-full p-1">
              
                <h2
                  className={`${francois_one.className} text-center  text-slate-50 text-lg hover:text-black`}
                >
                 ABIERTO AHORA
                </h2>
                <p className={`${quicksand.className} text-center  text-slate-50 text-sm hover:text-black`}>Esperamos tu visita</p>
            
            </div>
            <div className="basis-1/5 text-center ">
              <div className="flex justify-center">
                <MapPinIcon
                  className="block h-6 w-6 m-4 text-slate-50"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
  )
}
