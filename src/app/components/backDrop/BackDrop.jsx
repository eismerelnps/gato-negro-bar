import React from "react";

export default function BackDrop() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="relative">
      {/* Flecha circular */}
      <div className="w-8 h-8 rounded-full border-t-4 border-white animate-spin absolute top-0 left-1/2 transform -translate-x-1/2"></div>

      {/* Mensaje */}
      <p className="text-white text-2xl mt-4">Autenticando...</p>
    </div>
  </div>
  );
}
