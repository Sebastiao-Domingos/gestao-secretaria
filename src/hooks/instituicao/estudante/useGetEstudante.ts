import EstudanteController from "@/controllers/instituicao/Estudante";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetEstudantes() {
  const controller = new EstudanteController();

  const { data, ...result } = useQuery({
    queryKey: ["estudantes"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
