import PaisController from "@/controllers/localidade/Pais";
import ProvinciaController from "@/controllers/localidade/Provincia";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new ProvinciaController();

function useActionProvincias() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["provincias"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["provincias"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["provincias"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}

export { useActionProvincias };
