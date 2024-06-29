import ProfessorController from "@/controllers/instituicao/Professor";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
const controller = new ProfessorController();

export function useGetProfessores() {
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

export function useGetDataProfessor(id: string) {
  const { data, ...result } = useQuery({
    queryKey: ["estudantes"],
    queryFn: () => controller.pegar_dados(id),
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
