
import EstudanteController from "@/controllers/instituicao/Estudante";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new EstudanteController();

export function useActionEstudante() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["estudantes"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["estudantes"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["estudantes"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}
