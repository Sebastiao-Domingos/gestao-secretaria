import PaisController from "@/controllers/localidade/Pais";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new PaisController();

function useActionPais() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["paises"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["paises"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["paises"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}

export { useActionPais };
