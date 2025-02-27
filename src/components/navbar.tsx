"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  BsBoxFill,
  BsFillClipboardCheckFill,
  BsFillGrid1X2Fill,
  BsFillPersonFill,
  BsGearFill,
  BsPower,
} from "react-icons/bs";

// import { RiBox2Line } from "react-icons/ri";

export default function Navbar() {
  const [tooltips, setTooltips] = useState<number>(0);

  const handleTooltips = (value: React.SetStateAction<number>) => {
    setTooltips(value);
  };
  return (
    <>
      <div className="h-screen p-2 z-10 bg-neutral-100 border-e border-neutral-300 absolute top-0 left-0 flex flex-col items-center justify-between">
        <div></div>
        <nav className="flex flex-col items-center justify-center space-y-1">
          <Link
            href="painel"
            className={`w-full h-full relative active:bg-neutral-400 transition-all hover:bg-neutral-300 p-2 text-neutral-900`}
            onMouseOver={() => handleTooltips(1)}
            onMouseOut={() => handleTooltips(0)}
          >
            <BsFillGrid1X2Fill className="text-base active:scale-75 ease-out duration-300" />
            {tooltips === 1 && (
              <span className="absolute top-0 -right-14 shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Painel
              </span>
            )}
          </Link>
          <Link
            href="pedidos"
            className={`w-full h-full relative active:bg-neutral-400 transition-all hover:bg-neutral-300 p-2 text-neutral-900`}
            onMouseOver={() => handleTooltips(2)}
            onMouseOut={() => handleTooltips(0)}
          >
            <BsFillClipboardCheckFill className="text-base active:scale-75 ease-out duration-300" />

            {tooltips === 2 && (
              <span className="absolute top-0 -right-[4.1rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Pedidos
              </span>
            )}
          </Link>
          <Link
            href="estoque"
            className={`w-full relative h-full active:bg-neutral-400 transition-all hover:bg-neutral-300 p-2 text-neutral-900`}
            onMouseOver={() => handleTooltips(3)}
            onMouseOut={() => handleTooltips(0)}
          >
            <BsBoxFill className="text-base active:scale-75 ease-out duration-300" />
            {tooltips === 3 && (
              <span className="absolute top-0 -right-[4.2rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Estoque
              </span>
            )}
          </Link>
          <Link
            href="usuarios"
            className={`w-full h-full active:bg-neutral-400 relative transition-all hover:bg-neutral-300 p-2 text-neutral-900`}
            onMouseOver={() => handleTooltips(4)}
            onMouseOut={() => handleTooltips(0)}
          >
            {tooltips === 4 && (
              <span className="absolute top-0 -right-[6.5rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Usuários
              </span>
            )}
            <BsFillPersonFill className="text-base active:scale-75 ease-out duration-300" />
          </Link>

          <Link
            href="config"
            className={`w-full h-full active:bg-neutral-400 relative transition-all hover:bg-neutral-300 p-2 text-neutral-900`}
            onMouseOver={() => handleTooltips(5)}
            onMouseOut={() => handleTooltips(0)}
          >
            {tooltips === 5 && (
              <span className="absolute top-0 -right-[6.4rem] shadow text-white bg-neutral-600 font-sans  p-2 text-xs font-bold ">
                Configurações
              </span>
            )}
            <BsGearFill className="text-base active:scale-75 ease-out duration-300" />
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
      <div className=" z-10 bg-neutral-900 w-screen sticky top-0 right-0 border-b border-neutral-300">
        <div className="flex justify-between items-center h-full px-4 py-3 ">
          <h1 className="text-white font-bold text-base">StockApp</h1>{" "}
          {/* <RiBox2Line className="text-white text-2xl" /> */}
          <div className="flex items-center">
            <div className="text-white text-sm font-medium">Nome Usuário</div>
          </div>
        </div>
      </div>
    </>
  );
}
