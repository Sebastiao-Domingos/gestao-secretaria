import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import MenuVertical from "@/components/Menu/MenuVertical";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-[100vh] bg-slate-100">
      <Menu />
      <div className="ml-[220px] pr-6">
        <MenuVertical />
        <div className="min-h-[90vh]">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
