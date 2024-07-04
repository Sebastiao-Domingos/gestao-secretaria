import Toast from "@/components/Toast";
import { Button } from "@/components/buttons/Button";
import { CloseButton } from "@/components/buttons/CloseButton";
import { useGetDisciplinas } from "@/hooks/instituicao/disciplina/useGetDisciplina";
import { useActionMatricula } from "@/hooks/instituicao/matricula/useActionEstudante";
import { MatriculaData } from "@/services/instituicao/matricula/Matricula";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export default function Register({ id_estudante }: { id_estudante: string }) {
  const { register, handleSubmit } = useForm<MatriculaData>();

  const { create } = useActionMatricula();
  const { data, result } = useGetDisciplinas();

  const onSubmit = (data: MatriculaData) => {
    data.status = "ativo";
    data.id_estudante = id_estudante;
    create.mutate(data);
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className="p-2 rounded bg-purple-300 hover:bg-purple-300/50 active:bg-purple-300/70">
          Matricular
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed top-0 left-0 right-0 bottom-0 bg-black/20" />
          <Dialog.Content className="w-[500px] min-h-[240px] max-h-[80vh] p-4 rounded bg-white fixed top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="font-bold text-purple-600">Matricular</h2>

              <Dialog.Close asChild>
                <CloseButton />
              </Dialog.Close>
            </div>
            <div className="mt-6 overflow-auto h-[250px] pb-[70px]">
              <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="pais">Selecionar o disciplina</label>
                  <select
                    id="pais"
                    {...register("id_disciplina", { required: true })}
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
                  <label htmlFor="data">Data da matrícula</label>
                  <input
                    type="date"
                    {...register("data_matricula")}
                    id="data"
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
