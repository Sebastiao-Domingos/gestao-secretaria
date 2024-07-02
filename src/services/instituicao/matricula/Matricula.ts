import { api } from "@/infra/api";

export type MatriculaData = {
  id?: string;
  status: string;
  data_matricula: string;
  id_disciplina: string;
  id_estudante: string;
};

export default class MatriculaService {
  private readonly BASE_PATH = "/matriculas";

  /**
   * create
   */
  public async create(data: MatriculaData) {
    const response = await api
      .post<
        {},
        {
          data: MatriculaData;
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
  public async update(data: Partial<MatriculaData>) {
    const response = await api
      .put<
        {},
        {
          data: MatriculaData;
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
          data: MatriculaData[];
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
          data: MatriculaData;
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
