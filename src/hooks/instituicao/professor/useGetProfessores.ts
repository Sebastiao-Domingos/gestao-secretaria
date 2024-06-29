import ProfessorController from "@/controllers/instituicao/Professor";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetProfessores() {
  const controller = new ProfessorController();

  const { data, ...result } = useQuery({
    queryKey: ["professores"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
