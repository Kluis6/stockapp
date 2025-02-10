import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      login
      <section className="p-4">
        <nav>
          <Link href={"painel"}> user</Link>
        </nav>
      </section>
    </div>
  );
}
