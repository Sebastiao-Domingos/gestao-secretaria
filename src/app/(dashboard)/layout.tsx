"use client";
import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import MenuVertical from "@/components/Menu/MenuVertical";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Screens>{children}</Screens>
    </QueryClientProvider>
  );
}

function Screens({ children }: LayoutProps) {
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
