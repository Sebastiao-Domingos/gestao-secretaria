import EstudanteController from "@/controllers/instituicao/Estudante";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useGetDataEstudante(id: string) {
  const [id_estudante, setId_estudante] = useState(id);
  const controller = new EstudanteController();
  console.log("hook ", id);

  const { data, ...result } = useQuery({
    queryKey: ["estudantes", id_estudante],
    queryFn: () => controller.pegar_dados(id_estudante),
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
    setId_estudante,
  };
}
