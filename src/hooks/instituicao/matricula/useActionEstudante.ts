import MatriculaController from "@/controllers/instituicao/Matricula";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new MatriculaController();

export function useActionMatricula() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["matriculas"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["matriculas"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["matriculas"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}
