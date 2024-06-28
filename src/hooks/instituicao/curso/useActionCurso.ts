import CursoController from "@/controllers/instituicao/Curso";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new CursoController();

function useActionCurso() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["cursos"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["cursos"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["cursos"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}

export { useActionCurso };
