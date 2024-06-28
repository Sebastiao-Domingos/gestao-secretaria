import DisciplinaController from "@/controllers/instituicao/Disciplina";
import PaisController from "@/controllers/localidade/Pais";
import ProvinciaController from "@/controllers/localidade/Provincia";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new DisciplinaController();

export function useActionDisciplina() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["disciplinas"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["disciplinas"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["disciplinas"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}
