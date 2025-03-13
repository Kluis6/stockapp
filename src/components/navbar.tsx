"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  BsBox,
  BsClipboard2,
  BsGear,
  BsGrid1X2,
  BsList,
  BsPerson,
  BsPower,
} from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [tooltips, setTooltips] = useState<number>(0);

  const [drawer, setDrawer] = useState<boolean>(false);

  const draw = () => {
    setDrawer(!drawer);
  };

  const pathname = usePathname();
  const handleTooltips = (value: React.SetStateAction<number>) => {
    setTooltips(value);
  };
  return (
    <>
      <div
        className={`h-screen p-2 w-screen md:w-auto z-10  transition-all duration-300 ease-in ${
          drawer ? "translate-x" : "-translate-x-full md:translate-x-0"
        } bg-neutral-100 border-e border-neutral-300 absolute top-0 left-0 flex flex-col items-center md:justify-between`}
      >
        <div>
          <div className=""></div>;
        </div>
        <nav className="flex flex-col items-center justify-center space-y-1">
          <Link
            href="painel"
            className={`w-full h-full relative active:bg-neutral-400  p-2 ${
              pathname === "/painel"
                ? "bg-neutral-800 hover:bg-neutral-900 "
                : " transition-all hover:bg-neutral-300"
            }`}
            onMouseOver={() => handleTooltips(1)}
            onMouseOut={() => handleTooltips(0)}
          >
            <BsGrid1X2
              className={`text-base antialiased active:scale-75 ease-out duration-300 ${
                pathname === "/painel" ? "text-neutral-50" : "text-neutral-800"
              }`}
            />
            {tooltips === 1 && (
              <span className="absolute top-0 -right-14 shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Painel
              </span>
            )}
          </Link>
          <Link
            href="pedidos"
            className={`w-full h-full relative active:bg-neutral-400  p-2 ${
              pathname === "/pedidos"
                ? "bg-neutral-800 hover:bg-neutral-900 "
                : " transition-all hover:bg-neutral-300"
            }`}
            onMouseOver={() => handleTooltips(2)}
            onMouseOut={() => handleTooltips(0)}
          >
            <BsClipboard2
              className={`text-base antialiased  active:scale-75 ease-out duration-300 ${
                pathname === "/pedidos" ? "text-neutral-50" : "text-neutral-800"
              }`}
            />

            {tooltips === 2 && (
              <span className="absolute top-0 -right-[4.1rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Pedidos
              </span>
            )}
          </Link>
          <Link
            href="estoque"
            className={`w-full h-full relative active:bg-neutral-400  p-2 ${
              pathname === "/estoque"
                ? "bg-neutral-800 hover:bg-neutral-900 "
                : " transition-all hover:bg-neutral-300"
            }`}
            onMouseOver={() => handleTooltips(3)}
            onMouseOut={() => handleTooltips(0)}
          >
            <BsBox
              className={`text-base antialiased  active:scale-75 ease-out duration-300 ${
                pathname === "/estoque" ? "text-neutral-50" : "text-neutral-800"
              }`}
            />
            {tooltips === 3 && (
              <span className="absolute top-0 -right-[4.2rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Estoque
              </span>
            )}
          </Link>
          <Link
            href="usuarios"
            className={`w-full h-full relative active:bg-neutral-400  p-2 ${
              pathname === "/usuarios"
                ? "bg-neutral-800 hover:bg-neutral-900 "
                : " transition-all hover:bg-neutral-300"
            }`}
            onMouseOver={() => handleTooltips(4)}
            onMouseOut={() => handleTooltips(0)}
          >
            {tooltips === 4 && (
              <span className="absolute top-0 -right-[6.5rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Usuários
              </span>
            )}
            <BsPerson
              className={`text-base antialiased active:scale-75 ease-out duration-300 ${
                pathname === "/usuarios"
                  ? "text-neutral-50"
                  : "text-neutral-800"
              }`}
            />
          </Link>

          <Link
            href="config"
            className={`w-full h-full relative active:bg-neutral-400  p-2 ${
              pathname === "/config"
                ? "bg-neutral-800 hover:bg-neutral-900 "
                : " transition-all hover:bg-neutral-300"
            }`}
            onMouseOver={() => handleTooltips(5)}
            onMouseOut={() => handleTooltips(0)}
          >
            {tooltips === 5 && (
              <span className="absolute top-0 -right-[6.4rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Configurações
              </span>
            )}
            <BsGear
              className={`text-base antialiased active:scale-75 ease-out duration-300 ${
                pathname === "/config" ? "text-neutral-50" : "text-neutral-800"
              }`}
            />
          </Link>
        </nav>

        <button
          type="button"
          className={`p-2 active:bg-neutral-400 relative transition-all hover:bg-neutral-300 text-neutral-900`}
          onMouseOver={() => handleTooltips(6)}
          onMouseOut={() => handleTooltips(0)}
        >
          {tooltips === 6 && (
            <span className="absolute top-0 -right-[2.7rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
              Sair
            </span>
          )}
          <BsPower className="text-base text-neutral-900 active:scale-75 ease-out duration-300" />
        </button>
      </div>
      <div className=" z-10 bg-neutral-900 w-screen sticky top-0 left-0 right-0 border-b border-neutral-300">
        <div className="flex justify-between items-center h-full px-4 py-3 ">
          <h1 className="text-white font-bold text-base">StockApp</h1>
          {/* <RiBox2Line className="text-white text-2xl" /> */}
          <div className="flex items-center">
            <div className="text-white text-sm font-medium hidden md:block">
              Nome Usuário
            </div>
            <button type="button" className="md:hidden" onClick={draw}>
              <BsList className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
