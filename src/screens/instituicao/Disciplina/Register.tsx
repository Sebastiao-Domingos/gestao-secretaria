import Toast from "@/components/Toast";
import { Button } from "@/components/buttons/Button";
import { CloseButton } from "@/components/buttons/CloseButton";
import { useGetCursos } from "@/hooks/instituicao/curso/useGetCurso";
import { useActionDisciplina } from "@/hooks/instituicao/disciplina/useActionDisciplina";
import { DisciplinaData } from "@/services/instituicao/disciplina";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm<DisciplinaData>();
  const { create } = useActionDisciplina();
  const { data, result } = useGetCursos();

  const onSubmit = (data: DisciplinaData) => {
    console.log(data);
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
          <Dialog.Content className="w-[400px] min-h-[240px] p-4 rounded bg-white fixed top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="font-bold text-purple-600">
                Adicionar disciplina
              </h2>

              <Dialog.Close asChild>
                <CloseButton />
              </Dialog.Close>
            </div>
            <div className="mt-6">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="space-y-4" disabled={create.isPending}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pais">Selecionar o curso</label>
                    <select
                      id="pais"
                      {...register("id_curso", { required: true })}
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
                      placeholder="Nome da disciplina"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="codigo">Código</label>
                    <input
                      type="text"
                      id="codigo"
                      {...register("codigo", { required: true })}
                      placeholder="Código"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <Button className="w-full">
                    {create.isPending && (
                      <span className="material-icons animate-spin !text-white">
                        cached
                      </span>
                    )}
                    {!create.isPending && "Adicionar"}
                  </Button>
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
