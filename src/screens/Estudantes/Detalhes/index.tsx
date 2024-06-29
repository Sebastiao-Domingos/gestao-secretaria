"use client";

import { Loader } from "@/components/Menu/Loader";
import { useRouter } from "next/navigation";
import {
  useGetDataEstudante,
  useGetEstudantes,
} from "@/hooks/instituicao/estudante/useGetEstudante";

import Register from "./Register";

export default function Estudante({
  params,
}: {
  params: { estudante: string };
}) {
  const { data, result } = useGetDataEstudante(params.estudante);
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <h3 className="font-bold uppercase mr-2">Estudantes</h3>
        </div>
        <div>
          <Register />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        {result.isSuccess && data && <div>{data.nome}</div>}
        {result.isPending && (
          <>
            <Loader></Loader>
          </>
        )}
        {result.isSuccess && data?.length === 0 && (
          <p className="w-full text-center text-red-300 font-bold mt-6">
            Sem dados
          </p>
        )}
        {result.isError && <div>Erro! ao pegar dados</div>}
      </div>
    </div>
  );
}
