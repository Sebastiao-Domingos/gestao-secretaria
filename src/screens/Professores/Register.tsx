import Toast from "@/components/Toast";
import { Button } from "@/components/buttons/Button";
import { CloseButton } from "@/components/buttons/CloseButton";
import { useActionProfessor } from "@/hooks/instituicao/professor/useActionProfessor";
import { useGetMunicipios } from "@/hooks/localidade/municipios/useGetMunicipio";
import {
  Endereco,
  ProfessorData,
} from "@/services/instituicao/professor/Professor";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm<ProfessorData>();
  const [endereco, setEndereco] = useState<Endereco>({
    distrito: "",
    id_municipio: "",
    rua: "",
  });
  const { create } = useActionProfessor();
  const { data, result } = useGetMunicipios();

  const onSubmit = (data: ProfessorData) => {
    data.enderecos = [endereco];
    create.mutate(data);
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Adicionar</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed top-0 left-0 right-0 bottom-0 bg-black/20" />
          <Dialog.Content className="w-[500px] min-h-[240px] max-h-[80vh] p-4 rounded bg-white fixed top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="font-bold text-purple-600">Adicionar professor</h2>

              <Dialog.Close asChild>
                <CloseButton />
              </Dialog.Close>
            </div>
            <div className="mt-6 overflow-auto h-[65vh] pb-[70px]">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <fieldset
                  className="space-y-4 border p-2 rounded"
                  disabled={create.isPending}
                >
                  <legend className="mx-1">Dados pessoal</legend>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      {...register("nome", { required: true })}
                      placeholder="Nome do professor"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome">E-mail</label>
                    <input
                      type="text"
                      {...register("email", { required: true })}
                      placeholder="exemplo@gmail.com"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nº telefone</label>
                    <input
                      type="text"
                      {...register("telefone", { required: true })}
                      placeholder="Número de telefone"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="codigo">Nº de BI</label>
                    <input
                      type="text"
                      id="codigo"
                      {...register("numero_bi", { required: true })}
                      placeholder="Número de BI"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                </fieldset>
                <fieldset
                  className="space-y-4 border p-2 rounded"
                  disabled={create.isPending}
                >
                  <legend className="mx-1">Localização</legend>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pais">Selecionar o município</label>
                    <select
                      id="pais"
                      value={endereco?.id_municipio}
                      required
                      onChange={(e) =>
                        setEndereco((prev) => ({
                          ...prev,
                          id_municipio: e.target.value,
                        }))
                      }
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
                    <label htmlFor="distrito">Distrito</label>
                    <input
                      type="text"
                      value={endereco?.distrito}
                      onChange={(e) =>
                        setEndereco((prev) => ({
                          ...prev,
                          distrito: e.target.value,
                        }))
                      }
                      required
                      placeholder="Nome da distrito"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="rua">Rua</label>
                    <input
                      type="text"
                      id="rua"
                      value={endereco?.rua}
                      onChange={(e) =>
                        setEndereco((prev) => ({
                          ...prev,
                          rua: e.target.value,
                        }))
                      }
                      required
                      placeholder="nome da rua"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="fixed bottom-0 left-0 right-0 py-5 bg-white rounded-b px-4">
                    <Button className="w-full">
                      {create.isPending && (
                        <span className="material-icons animate-spin !text-white">
                          cached
                        </span>
                      )}
                      {!create.isPending && "Adicionar"}
                    </Button>
                  </div>
                </fieldset>
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      {create.isSuccess && (
        <Toast
          message="Adicionado com sucesso!"
          className="bg-green-400"
          duration={3000}
        />
      )}
      {create.isError && (
        <Toast
          message={create.error.message}
          className="bg-red-400"
          duration={3000}
        />
      )}
    </>
  );
}
