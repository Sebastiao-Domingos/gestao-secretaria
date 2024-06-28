import CursoController from "@/controllers/instituicao/Curso";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetCursos() {
  const controller = new CursoController();

  const { data, ...result } = useQuery({
    queryKey: ["cursos"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
