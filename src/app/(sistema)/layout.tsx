import type { Metadata } from "next";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "StockApp",
  description: "App de gerenciamento de estoque e logistica de produtos",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
