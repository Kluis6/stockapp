import AdminStock from "@/components/estoque/adminstock";

export default function Estoque() {
  return (
    <div className="w-full ps-[3rem]">
      <div className="bg-neutral-900 py-2 px-4 text-white">
        <h1 className="text-sm font-medium">Estoque</h1>
        <p className="text-xs">Aqui você pode organizar todos os produtos.</p>
      </div>
      <AdminStock />
    </div>
  );
}
