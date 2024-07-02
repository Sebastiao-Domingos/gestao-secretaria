import { api } from "@/infra/api";
import { DisciplinaData } from "../disciplina";

export type HorarioData = {
  id?: string;
  hora_inicio: string;
  hora_final: string;
  dia_semana: number;
  sala: number;
  id_disciplina: string;
  disciplina?: DisciplinaData;
};

export default class HorarioService {
  private readonly BASE_PATH = "/horarios";

  /**
   * create
   */
  public async create(data: HorarioData) {
    const response = await api
      .post<
        {},
        {
          data: HorarioData;
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
  public async update(data: Partial<HorarioData>) {
    const response = await api
      .put<
        {},
        {
          data: HorarioData;
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
          data: HorarioData[];
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
          data: HorarioData;
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
