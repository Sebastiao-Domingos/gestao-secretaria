"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

const links = [
  {
    titulo: "Dashboard",
    link: "/home",
    icone: "home",
  },
  {
    titulo: "Professores",
    link: "/professores",
    icone: "school",
  },

  {
    titulo: "Estudantes",
    link: "/estudantes",
    icone: "groups",
  },

  {
    titulo: "Calendário",
    link: "/calendaria",
    icone: "calendar_month",
  },
];

const linksServices = [
  {
    titulo: "Perfil",
    link: "/perfil",
    icone: "person",
  },
  {
    titulo: "Definições",
    link: "/definicoes",
    icone: "settings",
  },

  {
    titulo: "Sair",
    link: "#",
    icone: "logout",
  },
];

export default function Menu() {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-[200px] bg-white p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b">
        <span className="material-icons">school</span>
        <span className="font-bold text-purple-600 text-2xl">INSTIC</span>
      </div>
      <div className="mt-4">
        <h3 className="text-slate-400 text-sm"> Menu</h3>
        <div className="flex flex-col gap-2 w-full">
          {links.map((item, index) => (
            <LinkMenu data={item} key={index} />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-slate-400 text-sm"> Outros</h3>
        <div className="flex flex-col gap-2 w-full">
          {linksServices.map((item, index) => (
            <LinkMenu data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface LinkProps extends ComponentProps<"a"> {
  data: {
    titulo: string;
    link: string;
    icone: string;
  };
}
function LinkMenu({ data, ...others }: LinkProps) {
  const path = usePathname();
  return (
    <Link
      href={data.link}
      className={`p-2 rounded hover:bg-purple-600/10 flex items-center gap-2 ${
        data.link == path && "bg-purple-600/10 text-purple-600"
      }`}
    >
      <span className="material-icons text-slate-400">{data.icone}</span>{" "}
      {data.titulo}
    </Link>
  );
}
