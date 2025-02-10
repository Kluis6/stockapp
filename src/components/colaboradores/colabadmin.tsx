"use client";
import React from "react";
import { BsInfoLg, BsInfoSquareFill, BsPencilFill, BsPersonExclamation, BsPlus, BsTrashFill, BsWhatsapp } from "react-icons/bs";

export default function colabadmin() {
  return (
    <div className="p-4 w-full h-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex justify-items-start items-center">
          <button
            type="button"
            className=" flex justify-start  items-center p-2 gap-2 w-[14rem] text-neutral-50 bg-blue-600 hover:bg-blue-700 active:bg-blue-900 font-bold text-sm "
          >
            <BsPlus className="text-2xl text-neutral-50" />
            <span>colaborador</span>
          </button>
        </div>
        <div className="col-span-12">
          <div className="p-4 bg-neutral-50 w-full h-full">
            <section className="flex flex-row justify-between items-center">
              {" "}
              botoes
            </section>
            <section className="">
              <div className="flex flex-row justify-between items-center ">
                <span className="text-sm text-bold text-neutral-900">Nome</span>
                <span className="text-sm text-medium text-neutral-900">
                  Contato
                </span>
                <span className="text-sm text-medium text-neutral-900">
                  Função
                </span>
                <span className="text-sm text-medium text-neutral-900">
                  Status
                </span>
                <span className="text-sm text-medium text-neutral-900">
                  Editar
                </span>
              </div>
              <ul className="flex flex-col gap-1 divide-y">
                <li className="flex flex-row justify-between items-center py-2">
                  <div className="flex flex-row justify-start gap-2 items-center ">
                    <div className="size-8  rounded-s-full flex items-center flex-row  justify-center">
                      <div className="bg-orange-600 w-full h-full rounded-full">
                        k
                      </div>
                    </div>
                    <div className=" bg-blue-700 flex flex-col gap-1">
                      <span className="text-sm">Nome</span>
                    </div>
                  </div>
                  <div className=" flex justify-center items-center gap-2">
                    <BsWhatsapp className="text-green-900 text-base" />
                    <p className="font-bold text-sm">21 90000-0000</p>
                  </div>
                  <div className="">
                    <p className="text-sm font-bold">Tecnico</p>
                  </div>
                  <div className="">
                    <div className="text-xs bg-green-400 px-4 py-1 rounded-2xl text-green-800 font-bold ">
                      <p>ativo</p>
                    </div>
                  </div>
                  <div className=" flex justify-center items-center gap-2">
                    <button type="button" className="bg-red-500 p-2"><BsTrashFill className="text-neutral-50"  /></button>
                    <button type="button"className="bg-green-500 p-2" ><BsInfoLg className="text-neutral-50" /></button>
                    <button type="button" className="bg-blue-500 p-2"><BsPencilFill className="text-neutral-50" /></button>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
