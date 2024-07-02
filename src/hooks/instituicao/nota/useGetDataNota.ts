import NotaController from "@/controllers/instituicao/Nota";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useGetDataNota(id: string) {
  const [id_estudante, setId_estudante] = useState(id);
  const controller = new NotaController();

  const { data, ...result } = useQuery({
    queryKey: ["notas", id_estudante],
    queryFn: () => controller.pegar_dados(id_estudante),
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
    setId_estudante,
  };
}
