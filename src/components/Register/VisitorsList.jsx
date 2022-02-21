import React, { useRef } from "react";
import "../../pages/Register/Register.css";
import { BiCar, BiLaptop } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import "../../pages/Register/Register.css";
export default function VisitorList() {
  const onChangeRecepcion = () => {
    refdpbutton.current.parentElement.classList.add("tab-active");
    refParkingbtn.current.parentElement.classList.remove("tab-active");
    refAllbtn.current.parentElement.classList.remove("tab-active");
  };
  const onChangeParking = () => {
    refdpbutton.current.parentElement.classList.remove("tab-active");
    refParkingbtn.current.parentElement.classList.add("tab-active");
    refAllbtn.current.parentElement.classList.remove("tab-active");
  };
  const onChangeAll = () => {
    refdpbutton.current.parentElement.classList.remove("tab-active");
    refParkingbtn.current.parentElement.classList.remove("tab-active");
    refAllbtn.current.parentElement.classList.add("tab-active");
  };
  const refdpbutton = useRef(null);
  const refParkingbtn = useRef(null);
  const refAllbtn = useRef(null);
  return (
    <>
      <div className="px-2 mt-5 mb-0">
        <span className="iconW">
          <FiSearch />
        </span>
        <input
          className="w-full mx-3"
          type="text"
          placeholder="Buscar Visitante..."
          value=""
        />
      </div>
      <div class=" mx-auto mt-0  rounded">
        <ul id="tabs" class="inline-flex w-full px-1 pt-0 ">
          <li class="px-4 py-2 -mb-px font-semibold tab-active">
            <a
              onClick={onChangeRecepcion}
              ref={refdpbutton}
              id="default-tab"
              href="#Recepcion"
            >
              Recepción
            </a>
          </li>
          <li class="px-4 py-2 font-semibold">
            <a onClick={onChangeParking} ref={refParkingbtn} href="#Vehicular">
              Vehicular
            </a>
          </li>
          <li class="px-4 py-2 font-semibold">
            <a onClick={onChangeAll} ref={refAllbtn} href="#All">
              Todo
            </a>
          </li>
        </ul>
        <div>
          <div id="tab-contents-visit">
            <ul role="list" class="p-1 divide-y divide-slate-200">
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex  first:pt-0 last:pb-0 itemVisit">
                <div class="py-2 px-2 bg-white w-full   space-y-2  sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img
                    class="block mx-auto h-12 w-12 rounded-full sm:mx-0 sm:shrink-0"
                    src="https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/3988-800x600.jpg"
                    alt="Woman's Face"
                  />
                  <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                      <span className="font-sans text-xs text-gray-400 DateTimeSpan">
                        15:25
                      </span>
                      <p class="text-base text-black font-semibold">
                        Erin Lindford
                      </p>
                      <p class="text-slate-400 font-normal text-sm">
                        Product Engineer
                      </p>
                      <span className="text-blue-600 iconCar">
                        <BiCar />
                      </span>
                      <span>
                        <BiLaptop className="text-orange-500 iconLaptop" />
                      </span>
                    </div>
                    <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none btnExit">
                      Salir
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
