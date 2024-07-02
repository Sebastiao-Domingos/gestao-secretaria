import HorarioController from "@/controllers/instituicao/Horario";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useGetDataHorario(id: string) {
  const [id_estudante, setId_estudante] = useState(id);
  const controller = new HorarioController();

  const { data, ...result } = useQuery({
    queryKey: ["horarios", id_estudante],
    queryFn: () => controller.pegar_dados(id_estudante),
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
    setId_estudante,
  };
}
