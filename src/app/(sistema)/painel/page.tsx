import Painelinfo from "@/components/painel/painelinfo";

export default function Painel() {
  return (
    <div className="w-full md:ps-[3rem]">
      <div className="bg-neutral-900 py-2 px-4 text-white">
        <h1 className="text-sm font-medium">Painel administrativo</h1>
        <p className="text-xs">
          <strong>Bem vindo</strong>, aqui você encontra todas as informações do
          sistema.
        </p>
      </div>
      <section className="p-4">
        <Painelinfo />
      </section>
    </div>
  );
}
