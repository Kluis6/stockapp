"use client";

import { useState } from "react";
import { BsPlus, BsX } from "react-icons/bs";
import ListServico from "./listservico";
import ListGeral from "./listgeral";
import ListAvaria from "./listavaria";

export default function AdminStock() {
  const [modal, setModal] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleModal = (id: React.SetStateAction<number>) => {
    setModal(id);
  };

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="p-4 w-full h-full">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 flex justify-items-start items-center">
            <button
              type="button"
              className="flex justify-start  items-center p-2 gap-2 w-[14rem] transition-all text-neutral-50 bg-blue-600 hover:bg-blue-700 active:bg-blue-900 font-bold text-sm "
              onClick={() => handleModal(4)}
            >
              <BsPlus className="text-2xl text-neutral-50" />
              <span>Produto</span>
            </button>
          </div>
          <div className="col-span-12">
            <section className="flex flex-row justify-start items-center ease-in transition-all duration-300 space-x-1">
              <button
                type="button"
                className={`border-t-2  w-full p-2 font-bold text-sm ${
                  activeTab === 0
                    ? " border-blue-700 bg-neutral-50 text-neutral-800"
                    : "bg-neutral-400 border-neutral-400 text-neutral-700 "
                } ${
                  activeTab === 1
                    ? "border-e-neutral-200"
                    : "border-s-neutral-200"
                }`}
                onClick={() => handleTabClick(0)}
              >
                Geral
              </button>
              <button
                type="button"
                className={`border-t-2 w-full p-2 font-bold text-sm  ${
                  activeTab === 1
                    ? " border-blue-700 bg-neutral-50 text-neutral-800"
                    : "bg-neutral-400 border-neutral-400 text-neutral-700"
                }`}
                onClick={() => handleTabClick(1)}
              >
                Em serviço
              </button>
              <button
                type="button"
                className={`border-t-2 w-full p-2 border-solid font-bold text-sm ${
                  activeTab === 2
                    ? " border-blue-700 bg-neutral-50 text-neutral-800"
                    : "bg-neutral-400 border-neutral-400 text-neutral-700"
                }`}
                onClick={() => handleTabClick(2)}
              >
                Avariados
              </button>
            </section>
            <section className="p-4 bg-neutral-50 w-full h-full ">
              {activeTab === 0 && <ListGeral />}
              {activeTab === 1 && <ListServico />}
              {activeTab === 2 && <ListAvaria />}
            </section>
          </div>
        </div>
      </div>

      {modal === 4 && (
        <div className="top-0 left-0 absolute h-screen w-screen bg-black/50 z-10 flex justify-center items-center transition-all">
          <div className="bg-neutral-200 shadow flex flex-col gap-4 w-2/5">
            <div className="flex justify-end items-end">
              <button
                type="button"
                className="p-4 hover:bg-neutral-300 "
                onClick={() => handleModal(0)}
              >
                <BsX className=" text-xl text-neutral-800" />
              </button>
            </div>
            <section className="px-4">
              <div className="flex flex-row gap-2 items-start justify-start">
                <div className="size-32 flex-none">
                  <div className="w-full h-full bg-amber-600 rounded-full flex items-center flex-row  justify-center"></div>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="Nome">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                  />
                  <label htmlFor="senha">Senha</label>
                  <input
                    id="senha"
                    type="text"
                    className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                  />
                  <label htmlFor="tel">Telefone</label>
                  <input
                    id="tel"
                    type="text"
                    className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                  />
                  <label htmlFor="função">Função</label>
                  <input
                    id="função"
                    type="text"
                    className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                  />
                </div>
              </div>
            </section>

            <div className="flex flex-row">
              <button className="w-full text-white p-4 bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-sm flex justify-start items-center">
                Cancelar
              </button>
              <button className="w-full text-white p-4 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-sm flex justify-start items-center">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
