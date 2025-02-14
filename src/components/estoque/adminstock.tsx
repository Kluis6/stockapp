"use client";

import { useState } from "react";
import {
  BsInfoLg,
  BsPencilFill,
  BsPlus,
  BsSearch,
  BsTrashFill,
  BsWhatsapp,
  BsX,
} from "react-icons/bs";

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
            <section className="flex flex-row justify-start items-center ease-in transition-all duration-300 even:border-r-4 even:border-red-600">
              <button
                type="button"
                className={`border-t-2 border-solid w-3/4 p-2 font-bold text-sm ${ activeTab === 0 ? ' border-blue-700 bg-neutral-50 text-neutral-800' : 'bg-neutral-400 border-neutral-400 text-neutral-700'}`}
                onClick={() => handleTabClick(0)}
              >
                Geral
              </button>
              <button
                type="button"
                className={`border-t-2 border-solid w-3/4 p-2 font-bold text-sm ${ activeTab === 1 ? ' border-blue-700 bg-neutral-50 text-neutral-800' : 'bg-neutral-400 border-neutral-400 text-neutral-700'}`}

                onClick={() => handleTabClick(1)}
              >
                Serviço
              </button>
              <button
                type="button"
                className={`border-t-2 w-3/4 p-2 border-solid font-bold text-sm ${ activeTab === 2 ? ' border-blue-700 bg-neutral-50 text-neutral-800' : 'bg-neutral-400 border-neutral-400 text-neutral-700'}`}

                onClick={() => handleTabClick(2)}
              >
                Avariados
              </button>
            </section>
            <section className="p-4 bg-neutral-50 w-full h-full ">
              {activeTab === 0 && <p>Conteúdo da Aba 1</p>}
              {activeTab === 1 && <p>Conteúdo da Aba 2</p>}
              {activeTab === 2 && <p>Conteúdo da Aba 3</p>}
            </section>

            <div className="space-y-4">
              <section className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 relative items-center justify-start w-full">
                  <BsSearch className=" absolute  text-base text-neutral-800 left-2" />
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    className="border-b w-2/5  bg-neutral-100 transition-all py-2 ps-8  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                  />
                </div>
              </section>
              <section className="">
                <div className="flex flex-row justify-between items-center ">
                  <span className="text-sm text-bold text-neutral-900">
                    Nome
                  </span>
                  <span className="text-sm text-medium text-neutral-900">
                    Quantidade
                  </span>
                  <span className="text-sm text-medium text-neutral-900">
                    Atualizalção
                  </span>

                  <span className="text-sm text-medium text-neutral-900">
                    Editar
                  </span>
                </div>
                <ul className="flex flex-col gap-1 divide-y">
                  <li className="flex flex-row justify-between items-center py-2">
                    <div className="flex flex-row justify-start items-center ">
                      <p className="text-sm font-bold text-neutral-950">Nome</p>
                    </div>
                    <div className=" flex justify-center items-center gap-2">
                      <BsWhatsapp className="text-green-900 text-base" />
                      <p className="font-bold text-sm">21 90000-0000</p>
                    </div>
                    <div className="">
                      <p className="text-sm font-bold">Tecnico</p>
                    </div>

                    <div className=" flex justify-center items-center gap-2">
                      <button
                        type="button"
                        className="bg-red-600 hover:bg-red-700 active:bg-red-800 p-2 transition-all"
                        onClick={() => handleModal(1)}
                      >
                        <BsTrashFill className="text-neutral-50 active:scale-75 ease-out duration-300" />
                      </button>
                      <button
                        type="button"
                        className="bg-green-600 hover:bg-green-700 active:bg-green-800 p-2 transition-all"
                        onClick={() => handleModal(2)}
                      >
                        <BsInfoLg className="text-neutral-50 active:scale-75 ease-out duration-300" />
                      </button>
                      <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 p-2 transition-all"
                        onClick={() => handleModal(3)}
                      >
                        <BsPencilFill className="text-neutral-50 active:scale-75 ease-out duration-300" />
                      </button>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      {modal === 1 && (
        <div className="top-0 left-0 absolute h-screen w-screen bg-black/50 z-10 flex justify-center items-center transition-all">
          <div className="bg-neutral-200 shadow flex flex-col gap-4">
            <div className="flex justify-end items-end">
              <button
                type="button"
                className="p-4 hover:bg-neutral-300 "
                onClick={() => handleModal(0)}
              >
                <BsX className=" text-xl text-neutral-800" />
              </button>
            </div>
            <article className="px-4">
              <h1>Excluir Colaborador</h1>
              <p>Tem certeza que deseja excluir o colaborador?</p>
            </article>

            <div className="flex flex-row">
              <button className="w-full text-white p-4 bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-sm flex justify-start items-center">
                Cancelar
              </button>
              <button className="w-full text-white p-4 bg-red-700 hover:bg-red-800 active:bg-red-900 text-sm flex justify-start items-center">
                Remover
              </button>
            </div>
          </div>
        </div>
      )}
      {modal === 2 && (
        <div className="top-0 left-0  absolute h-screen w-screen bg-black/50 z-10 flex justify-center items-center transition-all">
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
            <article className="px-4 pb-4">
              <div className="flex flex-row gap-2 items-center justify-start">
                <div className="size-32 flex-none">
                  <div className="w-full h-full bg-red-400 rounded-full flex items-center flex-row  justify-center"></div>
                </div>
                <div className="w-full">
                  <div className="flex flex-row items-center justify-between ">
                    <h3 className="font-medium text-neutral-900">
                      Nome usuário
                    </h3>
                    <span className="bg-green-400 px-4 py-1 rounded-2xl">
                      <p className="font-bold text-xs text-green-800">Ativo</p>
                    </span>
                  </div>
                  <p>Telefone</p>
                  <p>Função</p>
                  <p>
                    Pedidos: <strong>30</strong>{" "}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
      {modal === 3 && (
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
