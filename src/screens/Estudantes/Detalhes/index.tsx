"use client";

import { Loader } from "@/components/Menu/Loader";

import Register from "./Register";
import { useGetDataEstudante } from "@/hooks/instituicao/estudante/useGetData";

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
          <Register id_estudante={params.estudante} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        {result.isSuccess && data && (
          <div>
            <div className="flex justify-between">
              <fieldset className="p-2 rounded border w-[46%]">
                <legend className="px-2">Dados Pessoal</legend>
                <ul className="flex flex-col gap3">
                  <li className="py-1">
                    <span className="text-slate-400">Nome : </span>
                    <span>{data.nome}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">Ano de ingresso : </span>
                    <span>{data.ano_ingresso}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">E-mail : </span>
                    <span>{data.email}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">
                      Número de telefone :{" "}
                    </span>
                    <span>{data.telefone}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">Número do BI : </span>
                    <span>{data.numero_bi}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">Ano de Nascimento : </span>
                    <span>{data.data_nascimento.split("T")[0]}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">Nome : </span>
                    <span>{data.nome}</span>
                  </li>
                </ul>
              </fieldset>

              <fieldset className="p-2 rounded border w-[48%]">
                <legend className="px-2">Endereços</legend>
                <ul className="flex flex-col gap3">
                  <li className="py-1">
                    <span className="text-slate-400">Província : </span>
                    {/* <span>{data.endereco && data.endereco[0].distrito}</span> */}
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">Ano de ingresso : </span>
                    <span>{data.ano_ingresso}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">E-mail : </span>
                    <span>{data.email}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">
                      Número de telefone :{" "}
                    </span>
                    <span>{data.telefone}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">Número do BI : </span>
                    <span>{data.numero_bi}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">Ano de Nascimento : </span>
                    <span>{data.data_nascimento.split("T")[0]}</span>
                  </li>
                  <li className="py-1">
                    <span className="text-slate-400">Nome : </span>
                    <span>{data.nome}</span>
                  </li>
                </ul>
              </fieldset>
            </div>
          </div>
        )}
        {result.isPending && (
          <>
            <Loader></Loader>
          </>
        )}
        {result.isSuccess && !data && (
          <p className="w-full text-center text-red-300 font-bold mt-6">
            Sem dados
          </p>
        )}
        {result.isError && <div>Erro! ao pegar dados</div>}
      </div>
    </div>
  );
}
