"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function RetornoEquip() {
  const [step, setStep] = useState<number>(0);

  const handlerStepPlus = () => {
    setStep(step === 3 ? step : step + 1);
  };

  const handlerStepMinus = () => {
    setStep(step === 0 ? 0 : step - 1);
  };
  console.log(step);
  return (
    <div className=" bg-neutral-100">
      <div className="px-4 pb-4">
        <h4 className="text-sm font-normal text-neutral-700">
          Devolução de equipamento
        </h4>
        <p className="text-xs font-normal text-neutral-600">
          {step === 0 && (
            <div>
              <h4>Nome do equipamento</h4>
            </div>
          )}
          {step === 1 && (
            <div>
              <div className="flex flex-col gap-2">
                <h4>Qual o estado do equipamento?</h4>
                <div className="relative flex justify-end items-center ">
                  <select 
                    name="select"
                    className="appearance-none p-3 focus:ring-2 hover:bg-neutral-300 focus:ring-blue-600 bg-neutral-200 w-full border-b border-b-neutral-500"
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>
                      Valor 2
                    </option>
                    <option value="valor3">Valor 3</option>
                  </select>
                  <BsChevronDown className="text-sm absolute right-4 text-neutral-900"/>
                </div>

                <label htmlFor="story">Observação:</label>

                <textarea
                  id="story"
                  name="story"
                  rows={5}
                  cols={33}
                  className="appearance-none outline-none  bg-neutral-200 p-1 focus:ring-2 ring-blue-600"
                ></textarea>
                <label htmlFor="file">Choose file to upload</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  multiple
                  className="bg-red-300 flex-none appearance-none "
                />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="transition-all">
              <h4>Enviar retorno para </h4>
              <div className="flex flex-row justify-items-center items-center">
                <div className=" size-10">
                  <div className="bg-amber-800 rounded-full">
                    <p className="text-neutral-50 text-center font-bold text-base">
                      U
                    </p>
                  </div>
                </div>
                <p>Nome do usuario</p>
              </div>
            </div>
          )}
          {step === 3 && <div>retorno enviado com sucesso!</div>}
        </p>
      </div>
      <div className="flex flex-row">
        <button
          onClick={handlerStepMinus}
          className={`w-full text-white p-4 font-normal ${
            step === 3 ? "hidden" : ""
          } bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-sm flex justify-start items-center`}
        >
          {step === 0 ? "Fechar" : "Voltar"}
        </button>
        <button
          onClick={handlerStepPlus}
          className="w-full text-white p-4 font-normal bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-sm flex justify-start items-center"
        >
          {step === 2 ? "Enviar" : step === 3 ? "Finalizar" : "avançar"}
        </button>
      </div>
    </div>
  );
}
