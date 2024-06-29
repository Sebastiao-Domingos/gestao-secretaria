import ProfessorController from "@/controllers/instituicao/Professor";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new ProfessorController();

export function useActionProfessor() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["professores"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["professores"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["professores"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}
