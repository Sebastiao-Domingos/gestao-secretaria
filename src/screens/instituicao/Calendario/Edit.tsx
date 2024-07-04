import Toast from "@/components/Toast";
import { Button } from "@/components/buttons/Button";
import { CloseButton } from "@/components/buttons/CloseButton";
import { useActionCurso } from "@/hooks/instituicao/curso/useActionCurso";
import { useGetDisciplinas } from "@/hooks/instituicao/disciplina/useGetDisciplina";
import { useActionHorario } from "@/hooks/instituicao/horario/useActionEstudante";
import { useActionPais } from "@/hooks/localidade/pais/useActionPais";
import { useGetPais } from "@/hooks/localidade/pais/useGetPais";
import { useActionProvincias } from "@/hooks/localidade/provincia/useActionProvincia";
import { CursoData } from "@/services/instituicao/curso";
import { HorarioData } from "@/services/instituicao/horario/Horario";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export default function Edit({ item }: { item: HorarioData }) {
  const { register, handleSubmit } = useForm<HorarioData>({
    defaultValues: item,
  });
  const { update } = useActionHorario();

  const onSubmit = (data: HorarioData) => {
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
                Atualizar Horário de {item.disciplina?.nome}
              </h2>

              <Dialog.Close asChild>
                <CloseButton />
              </Dialog.Close>
            </div>
            <div className="mt-6 overflow-auto h-[65vh] pb-[70px]">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="space-y-4" disabled={update.isPending}>
                  {/* <div className="flex flex-col gap-2">
                    <label htmlFor="pais">Selecionar a disciplina</label>
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
                  </div> */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Hora de início</label>
                    <input
                      type="time"
                      {...register("hora_inicio", { required: true })}
                      placeholder="Hora de início"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Hora final</label>
                    <input
                      type="time"
                      {...register("hora_final", { required: true })}
                      placeholder="Hora final"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="codigo">Dia da seman(1-5)</label>
                    <input
                      type="number"
                      max={5}
                      min={1}
                      id="codigo"
                      {...register("dia_semana", { required: true })}
                      placeholder="Dia de semmana ( exemplo 1)"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="duracao">Sala</label>
                    <input
                      type="number"
                      {...register("sala", { required: true })}
                      placeholder="Número da sala"
                      className="border p-2 rounded outline-none focus:border-purple-300"
                    />
                  </div>
                  <div className="fixed bottom-0 left-0 right-0 py-5 bg-white rounded-b px-4">
                    <Button className="w-full">
                      {update.isPending && (
                        <span className="material-icons animate-spin !text-white">
                          cached
                        </span>
                      )}
                      {!update.isPending && "Adicionar"}
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
