import Toast from "@/components/Toast";
import { Button } from "@/components/buttons/Button";
import { CloseButton } from "@/components/buttons/CloseButton";
import { useActionCurso } from "@/hooks/instituicao/curso/useActionCurso";
import { CursoData } from "@/services/instituicao/curso";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm<CursoData>();
  const { create } = useActionCurso();

  const onSubmit = (data: CursoData) => {
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
              <h2 className="font-bold text-purple-600">Adicionar curso</h2>

              <Dialog.Close asChild>
                <CloseButton />
              </Dialog.Close>
            </div>
            <div className="mt-6">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="space-y-4" disabled={create.isPending}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      {...register("nome", { required: true })}
                      placeholder="Nome do curso"
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
                  <div className="flex flex-col gap-2">
                    <label htmlFor="duracao">Duração</label>
                    <input
                      type="number"
                      {...register("duracao", { required: true })}
                      placeholder="Duração"
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
