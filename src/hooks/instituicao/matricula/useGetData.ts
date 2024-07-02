import EstudanteController from "@/controllers/instituicao/Estudante";
import MatriculaController from "@/controllers/instituicao/Matricula";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useGetDataMAtricula(id: string) {
  const [id_estudante, setId_estudante] = useState(id);
  const controller = new MatriculaController();

  const { data, ...result } = useQuery({
    queryKey: ["matriculas", id_estudante],
    queryFn: () => controller.pegar_dados(id_estudante),
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
    setId_estudante,
  };
}
