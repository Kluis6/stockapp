"use client";

import { useState } from "react";
import {
  BsChevronDown,
  BsFillCheckCircleFill,
  BsFillXCircleFill,
  BsPencilFill,
  BsSearch,
  BsTrashFill,
  BsX,
} from "react-icons/bs";

export default function Pedidos() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [modal, setModal] = useState<number>(0);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  const handlerModal = (id: React.SetStateAction<number>) => {
    setModal(id);
  };
  return (
    <>
      <div className="w-full md:ps-[3rem]">
        <div className="bg-neutral-900 py-2 px-4 text-white">
          <h2 className="text-sm font-medium">Pedidos</h2>
          <p className="text-xs">
            Aqui você pode gerenciar os pedidos feitos pelos colaboradores.
          </p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-12">
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
                  Novos <strong>(30)</strong>
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
                  Concluídos <strong>(10)</strong>
                </button>
              </section>
              <section className="p-4 w-full h-full bg-neutral-50">
                {activeTab === 0 && (
                  <div className="space-y-4">
                    <section className="flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-2 relative items-center justify-start w-full">
                        <BsSearch className=" absolute  text-base text-neutral-800 left-2" />
                        <input
                          type="text"
                          placeholder="Pesquisar"
                          className="border-b w-2/5  bg-neutral-200 hover:bg-neutral-300 transition-all py-2 ps-8  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                        />
                      </div>
                    </section>
                    <table className="table-fixed w-full  border-spacing-2">
                      <thead className="">
                        <tr className="text-neutral-800 text-xs bg-neutral-300">
                          <th className="py-3">Usuário</th>
                          <th>Quantidade de itens</th>
                          <th>Data do pedido</th>
                          <th>Editar</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-300 w-full">
                        <tr className="bg-neutral-100 hover:bg-neutral-200">
                          <td className=" flex justify-center items-center py-2 space-x-2">
                            <div className="size-7">
                              <div className="bg-blue-600 text-center w-full h-full flex justify-center items-center  rounded-full">
                                <p className="text-white text-xs font-medium">
                                  U
                                </p>
                              </div>
                            </div>
                            <p className="text-sm font-medium text-neutral-800">
                              nome usuário
                            </p>
                          </td>
                          <td className="text-center text-sm font-medium text-neutral-700 px-2">
                            <p className="font-medium text-sm">12</p>
                          </td>

                          <td className="text-center text-sm font-medium text-neutral-700 px-2 ">
                            05/01/2025
                          </td>

                          <td className="px-2">
                            <div className=" flex justify-center items-center gap-2">
                              <button
                                type="button"
                                className="bg-red-600 hover:bg-red-700 active:bg-red-800 p-2 transition-all"
                                onClick={() => handlerModal(1)}
                              >
                                <BsTrashFill className="text-neutral-50 active:scale-75 ease-out duration-300" />
                              </button>

                              <button
                                type="button"
                                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 p-2 transition-all"
                                onClick={() => handlerModal(2)}
                              >
                                <BsPencilFill className="text-neutral-50 active:scale-75 ease-out duration-300" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="space-y-4">
                    <section className="flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-2 relative items-center justify-start w-full">
                        <BsSearch className=" absolute  text-base text-neutral-800 left-2" />
                        <input
                          type="text"
                          placeholder="Pesquisar"
                          className="border-b w-2/5  bg-neutral-200 hover:bg-neutral-300 transition-all py-2 ps-8  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                        />
                      </div>
                    </section>
                    <table className="table-fixed w-full  border-spacing-2">
                      <thead className="">
                        <tr className="text-neutral-800 text-xs bg-neutral-300">
                          <th className="py-3">Usuário</th>
                          <th>Quantidade de itens</th>
                          <th>Data da entrega</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-300 w-full">
                        <tr className="bg-neutral-100 hover:bg-neutral-200">
                          <td className=" flex justify-center items-center py-2 space-x-2">
                            <div className="size-7">
                              <div className="bg-blue-600 text-center w-full h-full flex justify-center items-center  rounded-full">
                                <p className="text-white text-xs font-medium">
                                  U
                                </p>
                              </div>
                            </div>
                            <p className="text-sm font-medium text-neutral-800">
                              nome usuário
                            </p>
                          </td>
                          <td className="text-center text-sm font-medium text-neutral-700 px-2">
                            <p className="font-medium text-sm">5</p>
                          </td>

                          <td className="text-center text-sm font-medium text-neutral-700 px-2 ">
                            02/02/2025
                          </td>

                          <td className="flex justify-center items-center">
                            <div className="text-xs bg-blue-300 px-4 py-1 rounded-2xl   w-fit">
                              <p className="text-blue-800 font-bold">
                                Entregue
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* modais */}
      {/* modal cancelar pedido */}
      {modal === 1 && (
        <div className="top-0 left-0 absolute h-screen w-screen bg-black/50 z-10 flex justify-center items-center transition-all">
          <div className="bg-neutral-200 w-md flex flex-col">
            <div className="flex justify-end items-end">
              <button
                type="button"
                className="p-4 hover:bg-neutral-300 "
                onClick={() => handlerModal(0)}
              >
                <BsX className="text-xl text-neutral-800" />
              </button>
            </div>
            <section className="p-4 space-y-2">
              <article className="space-y-2 ">
                <h4 className="text-sm font-normal text-neutral-700">
                  Cancelar Pedido
                </h4>
                <p className="font-medium text-base text-neutral-800">
                  Tem certeza que deseja cancelar esse pedido?
                </p>
              </article>
              <article className="space-y-2">
                <h4 className="text-xs font-normal text-neutral-800">
                  Qual o motivo para o cancelamento?
                </h4>
                <div className="relative flex justify-end items-center ">
                  <select
                    name="select"
                    className="appearance-none p-2 focus:ring-2 hover:bg-neutral-300 focus:ring-blue-600 bg-neutral-100 w-full border-b border-b-neutral-500"
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>
                      Valor 2
                    </option>
                    <option value="valor3">Valor 3</option>
                  </select>
                  <BsChevronDown className="text-sm absolute right-4 text-neutral-900" />
                </div>
              </article>
            </section>

            <div className="flex flex-row">
              <button className="w-full text-white p-4 bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-sm flex justify-start items-center">
                Fechar
              </button>
              <button className="w-full text-white p-4 bg-red-700 hover:bg-red-800 active:bg-red-900 text-sm flex justify-start items-center">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      {/* modal de entregar pedido */}
      {modal === 2 && (
        <div className="top-0 left-0 absolute h-screen w-screen bg-black/50 z-10 flex justify-center items-center transition-all">
          <div className="bg-neutral-200 w-md flex flex-col">
            <div className="flex justify-end items-end">
              <button
                type="button"
                className="p-4 hover:bg-neutral-300 "
                onClick={() => handlerModal(0)}
              >
                <BsX className="text-xl text-neutral-800" />
              </button>
            </div>
            <section className="p-4 space-y-2">
              <article className="space-y-1 ">
                <h4 className="text-sm font-normal text-neutral-700">
                  Novo pedido de:
                </h4>
                <div className=" flex justify-start items-center space-x-2">
                  <div className="size-7">
                    <div className="bg-blue-600 text-center w-full h-full flex justify-center items-center  rounded-full">
                      <p className="text-white text-xs font-medium">U</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-neutral-800">
                    nome usuário
                  </p>
                </div>
              </article>
              <div className="">
                <h4 className="text-sm font-normal text-neutral-700">
                  Itens solicitados:
                </h4>
                <ul className="divide-y  divide-neutral-400">
                  <li className="flex flex-row justify-between items-center py-2">
                    <p className="text-sm font-normal text-neutral-900">
                      <strong>1</strong> Nome do equipamento
                    </p>{" "}
                    <span>
                      <BsFillCheckCircleFill className="text-green-700" />
                    </span>
                  </li>
                  <li className="flex flex-row justify-between items-center py-2">
                    <p className="text-sm font-normal text-neutral-900">
                      <strong>1</strong> Nome do equipamento
                    </p>{" "}
                    <span>
                      <BsFillCheckCircleFill className="text-green-700" />
                    </span>
                  </li>
                  <li className="flex flex-row justify-between items-center py-2">
                    <p className="text-sm font-normal text-neutral-900">
                      <strong>3</strong> Nome do equipamento
                    </p>{" "}
                    <span>
                      <BsFillXCircleFill className="text-red-700" />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row justify-center items-center">
                <span></span>
                <p className="text-sm font-medium text-red-700">
                  Alguns itens estão em falta para esse pedido, deseja continuar?
                </p>
              </div>
            </section>

            <div className="flex flex-row">
              <button className="w-full text-white p-4 bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-sm flex justify-start items-center">
                Fechar
              </button>
              <button className="w-full text-white p-4 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-sm flex justify-start items-center">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
