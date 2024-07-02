import DisciplinaController from "@/controllers/instituicao/Disciplina";
import EstudanteController from "@/controllers/instituicao/Estudante";
import NotaController from "@/controllers/instituicao/Nota";
import PaisController from "@/controllers/localidade/Pais";
import ProvinciaController from "@/controllers/localidade/Provincia";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new NotaController();

export function useActionNota() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["notas"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["notas"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["notas"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}
