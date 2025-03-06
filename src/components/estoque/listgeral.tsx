"use client";
import { useState } from "react";
import {
  BsInfoLg,
  BsPencilFill,
  BsSearch,
  BsTrashFill,
  BsX,
} from "react-icons/bs";

export default function ListGeral() {
  const [modal, setModal] = useState<number>(0);

  const handleModal = (id: React.SetStateAction<number>) => {
    setModal(id);
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <section className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 relative items-center justify-start w-full">
            <BsSearch className=" absolute  text-base text-neutral-800 left-2" />
            <input
              type="text"
              placeholder="Pesquisar"
              className="border-b w-2/5  bg-neutral-200 transition-all py-2 ps-8  outline-none focus:ring focus:ring-blue-600 border-neutral-400"
            />
          </div>
        </section>
        <table className="table-fixed w-full  border-spacing-2">
          <thead className="">
            <tr className="text-neutral-800 text-xs bg-neutral-300">
              <th className="py-3">Equipamento</th>
              <th>Quantidade</th>
              <th className="py-3">Categoria</th>
              <th>Atualização</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-300 w-full">
            <tr className="bg-neutral-100 hover:bg-neutral-200">
              <th className="text-sm  text-neutral-700 font-medium px-2 line-clamp-1">
                nome produto sdsds
              </th>
              <td className="text-center text-sm font-medium text-neutral-700 px-2">
                20
              </td>
              <td className="text-center text-sm font-medium text-neutral-700 px-2 ">
                Eletronicos
              </td>
              <td className="text-center text-sm font-medium text-neutral-700 px-2 ">
                15/01/25
              </td>
              <td className=" flex justify-center items-center py-2 space-x-2">
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modals */}

      {/* modal exclusão */}
      {modal === 1 && (
        <div className="top-0 left-0 absolute h-screen w-screen bg-black/50 z-10 flex justify-center items-center transition-all">
          <div className="bg-neutral-200 shadow flex flex-col">
            <div className="flex justify-end items-end">
              <button
                type="button"
                className="p-4 hover:bg-neutral-300 "
                onClick={() => handleModal(0)}
              >
                <BsX className="text-xl text-neutral-800" />
              </button>
            </div>
            <article className="px-4 mb-8 space-y-1">
              <h4 className="text-sm font-normal text-neutral-700">
                Remover Equipamento
              </h4>
              <p className="font-medium text-base text-neutral-900">
                Tem certeza que deseja remover o nome do equipamento?
              </p>
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

{/* modal informações */}

      {modal === 2 && (
        <div className="top-0 left-0  absolute h-screen w-screen bg-black/50 z-10 flex justify-center items-center transition-all">
          <div className="bg-neutral-200 shadow flex flex-col w-2/5">
            <div className="flex flex-row justify-end items-end">
              <button
                type="button"
                className="p-4 hover:bg-neutral-300 "
                onClick={() => handleModal(0)}
              >
                <BsX className="text-xl text-neutral-800" />
              </button>
            </div>
            <article className="px-4 mb-8 space-y-1">
              <div className="">
                <h3 className="text-sm font-normal text-neutral-700">
                  Informações do Equipamento
                </h3>
              </div>

              <div className="flex flex-row justify-between items-center">
                <p className="font-medium text-base text-neutral-900">
                  Nome do equipamento
                </p>
                <span className="flex flex-row justify-center items-center bg-green-300 px-2 py-1 rounded-full">
                  <p className="font-medium text-xs text-green-800">Em uso</p>
                </span>
              </div>
              <p className="text-sm text-neutral-800">Telefone</p>
              <p className="text-sm text-neutral-800">Função</p>
              <p className="text-sm text-neutral-800">Data de Atualização:</p>
              <p className="text-sm text-neutral-800">
                Quantidade:
                <strong> 20</strong>
              </p>
            </article>
            <div className="flex flex-row">
              <button className="w-full text-white p-4 bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-sm flex justify-start items-center">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

{/* modal edição */}
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
         <h4 className="text-base font-medium text-neutral-700 mb-4">
           Editar de equipamento
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
