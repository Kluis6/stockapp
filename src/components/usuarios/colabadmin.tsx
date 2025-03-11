"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BsInfoLg,
  BsPencilFill,
  BsPersonBoundingBox,
  BsPlus,
  BsSearch,
  BsTrashFill,
  BsWhatsapp,
  BsX,
} from "react-icons/bs";

export default function Colabadmin() {
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
              className="flex justify-start  items-center p-2 gap-2 w-[14rem] transition-all text-neutral-50 bg-blue-600 hover:bg-blue-700 active:bg-blue-900 text-sm "
              onClick={() => handleModal(4)}
            >
              <BsPlus className="text-xl  text-neutral-50" />
              <p className="text-sm font-medium">Usuário</p>
            </button>
          </div>
          <div className="col-span-12 h-full w-full bg-neutral-50">
            <div className="p-4 bg-neutral-50 w-full h-full space-y-4">
              <section className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 relative items-center justify-start w-full">
                  <BsSearch className=" absolute  text-base text-neutral-800 left-2" />
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    className="border-b w-2/5  bg-neutral-100 hover:bg-neutral-200 transition-all py-2 ps-8  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                  />
                </div>
              </section>

              <table className="table-fixed w-full  border-spacing-2">
                <thead className="">
                  <tr className="text-neutral-800 text-xs bg-neutral-300">
                    <th className="py-3">Nome</th>
                    <th>Contato</th>
                    <th>Função</th>
                    <th>Status</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 w-full">
                  <tr className="bg-neutral-100 hover:bg-neutral-200">
                    <td className=" flex justify-center items-center py-2 space-x-2">
                      <div className="size-7">
                        <div className="bg-blue-600 text-center w-full h-full flex justify-center items-center  rounded-full">
                          <p className="text-white text-xs font-medium">U</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-neutral-800">
                        nome usuario
                      </p>
                    </td>

                    <td className="text-center text-sm font-medium text-neutral-700 px-2">
                      <div className=" flex justify-center items-center gap-2">
                        <BsWhatsapp className="text-green-900 text-base" />
                        <p className="font-bold text-sm">21 90000-0000</p>
                      </div>
                    </td>
                    <td className="text-center text-sm font-medium text-neutral-700 px-2 ">
                      Tecnico
                    </td>

                    <td className="flex justify-center items-center">
                      <div className="text-xs bg-green-400 px-4 py-1 rounded-2xl text-green-800 font-bold  w-fit">
                        <p>ativo</p>
                      </div>
                    </td>

                    <td className=" space-x-2 text-center py-1">
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* modal de exlução de usuário */}
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
              <h3 className="text-neutral-700 text-sm ">Remover usuário</h3>
              <p className="text-neutral-900 font-medium">
                Tem certeza que deseja remover o nome do usuário?
              </p>
            </article>

            <div className="flex flex-row">
              <button className="w-full text-neutral-50 p-4 bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-sm flex justify-start items-center">
                Cancelar
              </button>
              <button className="w-full text-neutral-50 p-4 bg-red-700 hover:bg-red-800 active:bg-red-900 text-sm flex justify-start items-center">
                Remover
              </button>
            </div>
          </div>
        </div>
      )}
      {/* modal de info do usuário */}
      {modal === 2 && (
        <div className="top-0 left-0  absolute h-screen w-screen bg-black/50 z-10 p-4 transition-all">
          <div className="bg-neutral-200 w-full h-full overflow-hidden relative">
            <div className="flex justify-end items-end">
              <button
                type="button"
                className="p-4 hover:bg-neutral-300 "
                onClick={() => handleModal(0)}
              >
                <BsX className="text-xl text-neutral-800" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              <h4 className="font-normal text-sm">Informações de usuário</h4>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12">
                  <div className="flex flex-row justify-items-start items-center gap-2">
                    <div className="size-32 flex-none">
                      <div className="bg-blue-600 w-full h-full flex rounded-full justify-center items-center">
                        <p className="font-medium text-4xl text-neutral-50">
                          U
                        </p>
                      </div>
                    </div>
                    <article className="flex flex-col justify-start items-start h-full w-full">
                      <p>nome do usuário</p>
                      <p>contato</p>
                      <p>função</p>
                      <p>data de entrada</p>
                    </article>
                  </div>
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
                      Pedidos <strong>(30)</strong>
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
                      Devoluções <strong>(10)</strong>
                    </button>
                  </section>
                  <section className="p-4 w-full h-full bg-neutral-50">
                    {activeTab === 0 && (
                      <table className="table-fixed w-full  border-spacing-2">
                        <thead className="">
                          <tr className="text-neutral-800 text-xs bg-neutral-300">
                            <th className="py-3">Data do pedido</th>
                            <th>Quantidade de itens</th>
                            <th>Unidade</th>
                            <th>Atendimento</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-300 w-full">
                          <tr className="bg-neutral-100 hover:bg-neutral-200">
                            <td className="text-center text-sm font-medium text-neutral-700 px-2">
                              <p className="font-medium text-sm">14/01/2025</p>
                            </td>

                            <td className="text-center text-sm font-medium text-neutral-700 px-2 ">
                              5
                            </td>

                            <td className="text-center text-sm font-medium text-neutral-700 px-2 ">
                              Zona Leste
                            </td>

                            <td className=" flex justify-center items-center py-2 space-x-2">
                              <div className="size-7">
                                <div className="bg-blue-600 text-center w-full h-full flex justify-center items-center  rounded-full">
                                  <p className="text-white text-xs font-medium">
                                    U
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm font-medium text-neutral-800">
                                nome usuario
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                    {activeTab === 1 && (
                      <table className="table-fixed w-full  border-spacing-2">
                        <thead className="">
                          <tr className="text-neutral-800 text-xs bg-neutral-300">
                            <th className="py-3">Data da devolução</th>
                            <th>Equipamento</th>
                            <th>Estado</th>
                            <th>Unidade</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-300 w-full">
                          <tr className="bg-neutral-100 hover:bg-neutral-200">
                            <td className=" flex justify-center items-center py-2 ">
                              <p className="text-sm font-medium text-neutral-800">
                                30/02/2024
                              </p>
                            </td>

                            <td className="px-2">
                              <p className="text-center text-sm font-medium text-neutral-700">
                                21 90000-0000
                              </p>
                            </td>

                            <td className="flex justify-center items-center">
                              <div className="text-xs bg-red-400 px-4 py-1 rounded-2xl text-red-800 font-bold  w-fit">
                                <p>Perdido</p>
                              </div>
                            </td>
                            <td className=" px-2 ">
                              <p className="text-center text-sm font-medium text-neutral-700">
                                Zona Leste
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </section>
                </div>
              </div>
            </div>

            <div className=" absolute bottom-0 w-full">
              <button
                className="w-full font-medium text-white p-4 bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-sm flex justify-start items-center"
                onClick={() => handleModal(0)}
              >
                fechar
              </button>
            </div>
          </div>
        </div>
      )}
      {/* modal de edição do usuário */}
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
            <section className="px-4 space-y-4">
              <h3 className="text-sm font-normal text-neutral-700">
                Editar usuário
              </h3>
              <div className="flex flex-row gap-2 items-start justify-start ">
                <div className="">
                  <label htmlFor="myfile" className="block cursor-pointer">
                    <input
                      className="hidden"
                      type="file"
                      id="myfile"
                      name="myfile"
                    ></input>
                    <div className=" size-32 bg-neutral-100 hover:bg-neutral-300 rounded-full flex items-center justify-center overflow-hidden">
                      <Image src={""} alt={""} />
                      <span className="text-center">
                        <BsPersonBoundingBox className="size-10 text-neutral-600 hover:text-neutral-700" />
                      </span>
                    </div>
                  </label>
                </div>
                <div className="w-full flex flex-col space-y-2">
                  <div className="flex flex-col">
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor="Nome"
                    >
                      Nome
                    </label>
                    <input
                      id="nome"
                      type="text"
                      className="border-b bg-neutral-100 transition-all p-2 outline-none hover:bg-neutral-300 focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor="senha"
                    >
                      Senha
                    </label>
                    <input
                      id="senha"
                      type="text"
                      className="border-b bg-neutral-100 hover:bg-neutral-300 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor="tel"
                    >
                      Telefone
                    </label>
                    <input
                      id="tel"
                      type="text"
                      className="border-b bg-neutral-100  hover:bg-neutral-300 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor="função"
                    >
                      Função
                    </label>
                    <input
                      id="função"
                      type="text"
                      className="border-b bg-neutral-100 transition-all p-2 hover:bg-neutral-300  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>

                  <div>
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor=""
                    >
                      Permisão administrativa
                    </label>
                    <div className="flex flex-row space-x-4">
                      <div className="flex flex-row space-x-1 items-center">
                        <input type="radio" name="sim" id="sim" />
                        <label htmlFor="sim">sim</label>
                      </div>
                      <div className="flex flex-row space-x-1 items-center">
                        <input type="radio" name="não" id="nao" />
                        <label htmlFor="sim">não</label>
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
      {/* modal de cadastro de usuário */}
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
            <section className="px-4 space-y-4">
              <h3 className="text-sm font-normal text-neutral-700">
                Cadastrar novo usuário
              </h3>
              <div className="flex flex-row gap-2 items-start justify-start ">
                <div className="">
                  <label htmlFor="myfile" className="block cursor-pointer">
                    <input
                      className="hidden"
                      type="file"
                      id="myfile"
                      name="myfile"
                    ></input>
                    <div className=" size-32 bg-neutral-100 hover:bg-neutral-300 rounded-full flex items-center justify-center overflow-hidden">
                      <Image src={""} alt={""} />
                      <span className="text-center">
                        <BsPersonBoundingBox className="size-10 text-neutral-600 hover:text-neutral-700" />
                      </span>
                    </div>
                  </label>
                </div>
                <div className="w-full flex flex-col space-y-2">
                  <div className="flex flex-col">
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor="Nome"
                    >
                      Nome
                    </label>
                    <input
                      id="nome"
                      type="text"
                      className="border-b bg-neutral-100 transition-all p-2 outline-none hover:bg-neutral-300 focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor="senha"
                    >
                      Senha
                    </label>
                    <input
                      id="senha"
                      type="text"
                      className="border-b bg-neutral-100 hover:bg-neutral-300 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor="tel"
                    >
                      Telefone
                    </label>
                    <input
                      id="tel"
                      type="text"
                      className="border-b bg-neutral-100  hover:bg-neutral-300 transition-all p-2  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor="função"
                    >
                      Função
                    </label>
                    <input
                      id="função"
                      type="text"
                      className="border-b bg-neutral-100 transition-all p-2 hover:bg-neutral-300  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
                    />
                  </div>

                  <div>
                    <label
                      className="text-sm font-normal text-neutral-800"
                      htmlFor=""
                    >
                      Permisão administrativa
                    </label>
                    <div className="flex flex-row space-x-4">
                      <div className="flex flex-row space-x-1 items-center">
                        <input type="radio" name="sim" id="sim" />
                        <label htmlFor="sim">sim</label>
                      </div>
                      <div className="flex flex-row space-x-1 items-center">
                        <input type="radio" name="não" id="nao" />
                        <label htmlFor="sim">não</label>
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
