import MunicipioController from "@/controllers/localidade/Municipio";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const controller = new MunicipioController();

function useActionMunicipios() {
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationFn: controller.criar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["municipios"] });
    },
  });

  const update = useMutation({
    mutationFn: controller.actualizar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["municipios"] });
    },
  });

  const deleteItem = useMutation({
    mutationFn: controller.apagar,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["municipios"] });
    },
  });

  return {
    create,
    deleteItem,
    update,
  };
}

export { useActionMunicipios };
