"use client";

import { Loader } from "@/components/Menu/Loader";
import Link from "next/link";
import Register from "./Register";
import { usePathname } from "next/navigation";
import { useGetCursos } from "@/hooks/instituicao/curso/useGetCurso";
import Edit from "./Edit";

export default function Calendarios() {
  const path = usePathname();
  const { data, result } = useGetCursos();
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <h3 className="font-bold uppercase mr-2">Horário</h3>
        </div>
        <div>
          <Register />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        {result.isSuccess &&
          data?.map((item) => (
            <div
              key={item.id}
              className="border hover:border-purple-200 hover:bg-purple-50/50 p-3 rounded flex justify-between items-center"
            >
              <div>{item.nome}</div>
              <div className="space-x-4">
                <Link
                  href={`${path}/${item.id}}`}
                  className="mr-4 hover:text-purple-600 underline"
                >
                  Ver todas as disciplinas do curso
                </Link>

                <Edit item={item} />
                <button className="text-red-300 rounded hover:bg-white p-1">
                  <span className="material-icons">delete</span>
                </button>
              </div>
            </div>
          ))}
        {result.isPending && (
          <>
            <Loader></Loader>
          </>
        )}
        {result.isError && <div>Erro! ao pegar dados</div>}
      </div>
    </div>
  );
}
