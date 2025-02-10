"use client";
import React from "react";
import { BsPlus } from "react-icons/bs";

export default function colabadmin() {
  return (
    <div className="p-4 w-full h-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex justify-items-start items-center">
          <button
            type="button"
            className=" flex justify-start  items-center p-2 gap-2 w-[14rem] text-neutral-50 bg-blue-600 font-bold text-sm "
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
              <div className="flex flex-row justify-between items-center">
                <span className="text-sm">Nome</span>
                <span className="text-sm">area</span>
                <span className="text-sm">Cargo</span>
                <span className="text-sm">Status</span>
                <span className="text-sm">Editar</span>
              </div>
              <ul className="flex flex-col gap-1">
                <li className="flex flex-row justify-between items-center ">
                  <div className="flex flex-row justify-start gap-2 items-center w-full h-full bg-slate-600">
                    <div className="bg-teal-700 size-6 rounded-s-full pe-2 flex items-center flex-row justify-center">d</div>
                    <div className=" bg-blue-700 flex flex-col gap-1">
                      <span className="text-sm">Nome</span>
                      <span className="text-sm">Nome</span>
                    </div>
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
