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

export function useGetDataEstudante(id: string) {
  const controller = new EstudanteController();
  console.log("hook ", id);

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
