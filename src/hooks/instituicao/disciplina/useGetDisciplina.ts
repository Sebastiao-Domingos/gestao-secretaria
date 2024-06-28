import DisciplinaController from "@/controllers/instituicao/Disciplina";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetDisciplinas() {
  const controller = new DisciplinaController();

  const { data, ...result } = useQuery({
    queryKey: ["disciplinas"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
