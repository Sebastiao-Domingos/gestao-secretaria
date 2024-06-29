"use client";

import { Loader } from "@/components/Menu/Loader";
import { Button } from "@/components/buttons/Button";
import { useGetPais } from "@/hooks/localidade/pais/useGetPais";
import Link from "next/link";
import { useEffect } from "react";
import Register from "./Register";
import Edit from "./Edit";

export default function Localizacao() {
  const { data, result } = useGetPais();
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <h3 className="font-bold uppercase mr-2">Localização</h3>
          <span className="border-l pl-2 text-purple-600">Países</span>
        </div>
        <div>
          <Register />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        {result.isSuccess &&
          data?.map((pais) => (
            <div
              key={pais.id}
              className="border hover:border-purple-200 hover:bg-purple-50/50 p-3 rounded flex justify-between items-center"
            >
              <div>{pais.nome}</div>
              <div className="space-x-4">
                <Link
                  href={`/localizacao/paises/${pais.id!}`}
                  className="mr-4 hover:text-purple-600 underline"
                >
                  Ver todas as suas províncias
                </Link>

                <Edit pais={pais} />
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
