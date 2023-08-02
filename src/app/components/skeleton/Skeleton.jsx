import React from "react";
import { francois_one } from "@/fonts/francois_one";

export default function Skeleton() {
  return (
    <div className="mt-16">
      <h1
        className={`${francois_one.className}animate-pulse text-2xl text-slate-950 text-center m-4 b`}
      >
        Cargando productos
      </h1>
      <div class="animate-pulse flex justify-center">
        <div class="basis-1/2  space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>

      <div className="my-2 mx-2 flex flex-wrap flex-col md:flex-row">
        <div class=" basis-1/2 my-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="animate-pulse flex justify-center">
        <div class="basis-1/2  space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}

        <div class=" basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="animate-pulse flex justify-center">
        <div class="basis-1/2  space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}
        <div class="basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="animate-pulse flex justify-center">
        <div class="basis-1/2  space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}
        <div class=" basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="animate-pulse flex justify-center">
        <div class="basis-1/2  space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}
        <div class=" basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="animate-pulse flex justify-center">
        <div class="basis-1/2  space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}
        <div class="basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
