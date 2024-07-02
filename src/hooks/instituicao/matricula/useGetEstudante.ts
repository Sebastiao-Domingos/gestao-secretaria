import EstudanteController from "@/controllers/instituicao/Estudante";
import MatriculaController from "@/controllers/instituicao/Matricula";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useGetEstudantes() {
  const controller = new MatriculaController();

  const { data, ...result } = useQuery({
    queryKey: ["matriculas"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
