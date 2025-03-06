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
              <h4 className="text-base font-medium text-neutral-700 mb-4">
                Cadastro de equipamento
              </h4>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12">
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm text-neutral-800" htmlFor="Nome">
                      Nome do equipamento
                    </label>
                    <input
                      id="nome"
                      type="text"
                      className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm text-neutral-800" htmlFor="senha">
                      Categoria
                    </label>
                    <input
                      id="senha"
                      type="text"
                      className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="flex flex-col space-y-1">
                    <label
                      className="text-sm text-neutral-800"
                      htmlFor="quantidade"
                    >
                      Quantidade
                    </label>
                    <input
                      id="quantidade"
                      type="number"
                      className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="flex flex-col space-y-1">
                    <label
                      className="text-sm text-neutral-800"
                      htmlFor="serial"
                    >
                      Serial
                    </label>
                    <input
                      id="serial"
                      type="text"
                      className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm text-neutral-800" htmlFor="placa">
                      Placa
                    </label>
                    <input
                      id="placa"
                      type="text"
                      className="border-b bg-neutral-100 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex flex-col space-y-1">
                    <label
                      className="text-sm text-neutral-800"
                      htmlFor="descrição"
                    >
                      Descrição
                    </label>
                    <textarea
                      rows={3}
                      cols={33}
                      id="descrição"
                      className="border-b bg-neutral-100 transition-all p-2 outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    ></textarea>
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex flex-col space-y-1">
                    <label
                      className="text-sm text-neutral-800"
                      htmlFor="devolução"
                    >
                      Requer devolução
                    </label>

                    <div className="flex flex-row gap-4">
                    <div className="space-x-1">
                      <input
                        type="radio"
                        id="sim"
                        name="dsim"
                        value="sim"
                        checked
                      />
                      <label htmlFor="sim">Sim</label>
                    </div>

                    <div className="space-x-1">
                      <input
                        type="radio"
                        id="não"
                        name="dnão"
                        value="não"
                      />
                      <label htmlFor="não">Não</label>
                    </div>



                    </div>
          

          
                  </div>
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
