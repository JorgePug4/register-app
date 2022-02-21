import React from "react";

export default function ProfileInfo() {
  return (
    <div className="grid p-2 w-full">
      <div className="flex justify-self-end w-56">
        <div className="my-auto grid">
          <div className="bg-orange-600 rounded-full w-9 h-9 ">
            <p className="text-2xl my-auto h-full font-medium text-white mx-auto">
              JB
            </p>
          </div>
        </div>
        <div className="block w-full px-2">
          <p className="block text-sm text-left text-black font-semibold">
            Bienvenido!
          </p>
          <p className="text-slate-400 font-normal text-sm text-left">
            Jorge Bolaños Puga
          </p>
          <p className="text-blue-600 text-left text-xs">perfil</p>
        </div>
      </div>
    </div>
  );
}
