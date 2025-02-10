import ColabAdmin from "@/components/colaboradores/colabadmin";
export default function Colaboradores() {
  return (
    <div className="w-full ps-[3rem]">
      <div className="bg-neutral-900 py-2 px-4 text-white">
        <h1 className="text-sm font-medium">Colaboradores</h1>
        <p className="text-xs">
          Aqui você pode visualizar e gerenciar todos os colaboradores do
          sistema.
        </p>
      </div>
      <ColabAdmin />
    </div>
  );
}
