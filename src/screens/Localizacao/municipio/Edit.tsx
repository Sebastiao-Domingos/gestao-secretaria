import Toast from "@/components/Toast";
import { Button } from "@/components/buttons/Button";
import { CloseButton } from "@/components/buttons/CloseButton";
import { useActionMunicipios } from "@/hooks/localidade/municipios/useActionMunicipio";
import { useGetProvincias } from "@/hooks/localidade/provincia/useGetProvincia";
import { MunicipioData } from "@/services/localidade/municipio";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export default function Edit({ item }: { item: MunicipioData }) {
  const { register, handleSubmit } = useForm<MunicipioData>({
    defaultValues: item,
  });
  const { update } = useActionMunicipios();
  const { data, result } = useGetProvincias();

  const onSubmit = (data: MunicipioData) => {
    update.mutate(data);
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="text-green-500 rounded hover:bg-white p-1">
            <span className="material-icons">edit</span>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed top-0 left-0 right-0 bottom-0 bg-black/20" />
          <Dialog.Content className="w-[400px] min-h-[240px] p-4 rounded bg-white fixed top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="font-bold text-purple-600">
                Atualizar a Município {item.nome}
              </h2>

              <Dialog.Close asChild>
                <CloseButton />
              </Dialog.Close>
            </div>
            <div className="mt-6">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="space-y-4" disabled={update.isPending}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pais">Selecionar a província</label>
                    <select
                      id="pais"
                      {...register("id_provincia", { required: true })}
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    >
                      {result.isSuccess &&
                        data?.map((pais) => (
                          <option value={pais.id!} key={pais.id!}>
                            {pais.nome}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      {...register("nome", { required: true })}
                      placeholder="Nome do município"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Dialog.Close asChild>
                      <Button className="w-full bg-transparent border border-purple-400 text-purple-600">
                        Sair
                      </Button>
                    </Dialog.Close>
                    <Button className="w-full">
                      {update.isPending && (
                        <span className="material-icons animate-spin !text-white">
                          cached
                        </span>
                      )}
                      {!update.isPending && "Salvar"}
                    </Button>
                  </div>
                </fieldset>
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      {update.isSuccess && (
        <Toast
          message="Adicionado com sucesso!"
          className="bg-green-400"
          duration={3000}
        />
      )}
      {update.isError && (
        <Toast
          message={update.error.message}
          className="bg-red-400"
          duration={3000}
        />
      )}
    </>
  );
}
