import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full h-screen bg-amber-300 flex justify-center items-center">
      <div className="flex gap-2">
        <Link href={"painel"}>painel</Link>
      </div>
    </div>
  );
}
