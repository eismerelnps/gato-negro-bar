// Este es el componente que es mostrado en el formulario de administracion mientras se esta subiendo una foto..
"use client";

import { useSelector } from "react-redux";

export const UpLoadingImage = () => {
  const { cloudImageMessage } = useSelector((state) => state.ui);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-20 h-20 animate-spin text-neutral-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
      <h2 className=" mt-4 text-center text-xs leading-5 text-gray-600">
        {cloudImageMessage}
      </h2>
    </div>
  );
};
