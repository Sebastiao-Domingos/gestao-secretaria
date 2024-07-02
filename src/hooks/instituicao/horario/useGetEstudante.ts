import HorarioController from "@/controllers/instituicao/Horario";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useGetHorario() {
  const controller = new HorarioController();

  const { data, ...result } = useQuery({
    queryKey: ["horarios"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
