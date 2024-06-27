import { twMerge } from "tailwind-merge";

const data = [
  {
    titulo: "Estudantes ativos",
    quantidade: "1305",
    cor: "text-green-400",
    icon: "person_checked",
  },
  {
    titulo: "Estudantes inativos",
    quantidade: "60",
    cor: "text-orange-300",
    icon: "person_cancel",
  },
  {
    titulo: "Estudantes não matriculados",
    quantidade: "100",
    cor: "text-red-300",
    icon: "person_cancel",
  },
];

const data_professores = [
  {
    titulo: "Professores ativos",
    quantidade: "50",
    cor: "text-blue-400",
    icon: "school",
  },
  {
    titulo: "Professores inativos",
    quantidade: "20",
    cor: "text-yellow-400",
    icon: "school",
  },
  {
    titulo: "Professores não matriculados",
    quantidade: "10",
    cor: "text-red-400",
    icon: "schools",
  },
];

const data_outros = [
  {
    titulo: "Propinas",
    quantidade: "50",
    cor: "text-purple-400",
    icon: "payments",
  },
  {
    titulo: "Matriculas",
    quantidade: "20",
    cor: "text-blue-400",
    icon: "descriptions",
  },
  {
    titulo: "Calendário escolar",
    quantidade: "10",
    cor: "text-yellow-400",
    icon: "calendar_month",
  },
];

export default function Home() {
  return (
    <div className="min-h-[80vh] bg-white rounded p-4 space-y-12">
      <div>
        <h2 className="text-purple-400 border-l-8 rounded-l border-l-purple-600/50 pl-2 bg-purple-100/30 p-2">
          {" "}
          Resumo geral dos estudantes
        </h2>
        <div className="flex flex-wrap justify-between mt-3">
          {data.map((data, index) => (
            <div
              key={index}
              className="rounded shadow p-4 w-[32%] border hover:border-purple-600/30"
            >
              <div>
                <span className={twMerge("material-icons !text-6xl", data.cor)}>
                  {data.icon}
                </span>
                <p className="text-sm">{data.titulo}</p>
              </div>
              <div className="flex gap-2 items-center">
                <h2 className={twMerge("font-bold text-2xl italic", data.cor)}>
                  {data.quantidade}
                </h2>
                <div className="border-l pl-2">
                  <p className="text-[12px] text-slate-500">
                    Para todos os cursos
                  </p>
                  <p className="text-[12px] text-slate-500">
                    Excluuindos os inativos
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-purple-400 border-l-8 border-l-purple-600/50 rounded-l pl-2 bg-purple-100/30 p-2">
          {" "}
          Resumo geral dos Professores
        </h2>
        <div className="flex flex-wrap justify-between mt-3">
          {data_professores.map((data, index) => (
            <div
              key={index}
              className="rounded shadow p-4 w-[32%] border hover:border-purple-600/30"
            >
              <div>
                <span className={twMerge("material-icons !text-6xl", data.cor)}>
                  {data.icon}
                </span>
                <p className="text-sm">{data.titulo}</p>
              </div>
              <div className="flex gap-2 items-center">
                <h2 className={twMerge("font-bold text-2xl italic", data.cor)}>
                  {data.quantidade}
                </h2>
                <div className="border-l pl-2">
                  <p className="text-[12px] text-slate-500">
                    Para todos os cursos
                  </p>
                  <p className="text-[12px] text-slate-500">
                    Excluuindos os inativos
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-purple-400 border-l-8 border-l-purple-600/50 rounded-l pl-2 bg-purple-100/30 p-2">
          {" "}
          Outros ...
        </h2>
        <div className="flex flex-wrap justify-between mt-3">
          {data_outros.map((data, index) => (
            <div
              key={index}
              className="rounded shadow p-4 w-[32%] border hover:border-purple-600/30"
            >
              <div>
                <span className={twMerge("material-icons !text-6xl", data.cor)}>
                  {data.icon}
                </span>
                <p className="text-sm">{data.titulo}</p>
              </div>
              <div className="flex gap-2 items-center">
                <h2 className={twMerge("font-bold text-2xl italic", data.cor)}>
                  {data.quantidade}
                </h2>
                <div className="border-l pl-2">
                  <p className="text-[12px] text-slate-500">
                    Para todos os cursos
                  </p>
                  <p className="text-[12px] text-slate-500">
                    Excluuindos os inativos
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
