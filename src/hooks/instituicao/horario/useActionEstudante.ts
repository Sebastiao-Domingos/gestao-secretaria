import HorarioController from "@/controllers/instituicao/Horario";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new HorarioController();

export function useActionHorario() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["horarios"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["horarios"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["horarios"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}
