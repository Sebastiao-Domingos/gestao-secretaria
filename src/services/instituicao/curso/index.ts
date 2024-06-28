import { api } from "@/infra/api";
import { DisciplinaData } from "../disciplina";

export interface CursoData {
  id?: string;
  nome: string;
  codigo: string;
  duracao: number;
  disciplinas?: DisciplinaData[];
}

export default class CursoService {
  private readonly BASE_PATH = "/cursos";

  /**
   * create
   */
  public async create(data: CursoData) {
    data.duracao = Number(data.duracao);

    const response = await api
      .post<
        {},
        {
          data: CursoData;
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
  public async update(data: Partial<CursoData>) {
    data.duracao = Number(data.duracao);

    const response = await api
      .put<
        {},
        {
          data: CursoData;
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
          data: CursoData[];
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
          data: CursoData;
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
