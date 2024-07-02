import NotaController from "@/controllers/instituicao/Nota";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetNotas() {
  const controller = new NotaController();

  const { data, ...result } = useQuery({
    queryKey: ["notas"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
