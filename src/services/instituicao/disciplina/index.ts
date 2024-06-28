import { api } from "@/infra/api";
import { CursoData } from "../curso";

export type DisciplinaData = {
  id?: string;
  nome: string;
  codigo: string;
  id_curso: string;
  id_professor?: string;
  curso?: CursoData;
  horarios?: Horario[];
};

export interface Horario {
  id: string;
  hora_inicio: string;
  hora_final: string;
  dia_semana: number;
  sala: number;
  id_disciplina: string;
}

export default class DisciplinaService {
  private readonly BASE_PATH = "/disciplinas";

  /**
   * create
   */
  public async create(data: DisciplinaData) {
    const response = await api
      .post<
        {},
        {
          data: DisciplinaData;
        }
      >(this.BASE_PATH, data)
      .then((response) => response.data);

    return {
      status: 201,
      response,
    };
  }

  /**
   * create
   */
  public async update(data: Partial<DisciplinaData>) {
    const response = await api
      .put<
        {},
        {
          data: DisciplinaData;
        }
      >(`${this.BASE_PATH}/${data.id!}`, data)
      .then((response) => response.data);

    return {
      status: 201,
      response,
    };
  }

  /**
   * create
   */
  public async get() {
    const response = await api
      .get<
        {},
        {
          data: DisciplinaData[];
        }
      >(this.BASE_PATH)
      .then((response) => response.data);

    return {
      status: 201,
      response,
    };
  }

  /**
   * create
   */
  public async find(id: string) {
    const response = await api
      .get<
        {},
        {
          data: DisciplinaData;
        }
      >(`${this.BASE_PATH}/${id}`)
      .then((response) => response.data);

    return {
      status: 201,
      response,
    };
  }

  /**
   * create
   */
  public async delete(id: string) {
    const response = await api
      .delete<
        {},
        {
          data: string;
        }
      >(`${this.BASE_PATH}/${id}`)
      .then((response) => response.data);

    return {
      status: 201,
      response,
    };
  }
}
