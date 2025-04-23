import AdminStock from "@/components/estoque/adminstock";

export default function Estoque() {
  return (
    <div className="w-full md:ps-[3rem]">
      <div className="bg-neutral-900 py-2 px-4 text-white flex justify-between items-center">
        <div>
          <h2 className="text-sm font-medium">Estoque</h2>
          <p className="text-xs">Aqui você pode organizar todos os produtos.</p>
        </div>
        <div className="text-left">
          <p className="text-xs">Unidade</p>
          <p className="text-sm font-medium">Zone Norte</p>
        </div>
      </div>
      <AdminStock />
    </div>
  );
}
