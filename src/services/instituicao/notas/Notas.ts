import { api } from "@/infra/api";

export type NotaData = {
  id?: string;
  nota_parcelar1: number;
  nota_parcelar2?: number;
  nota_exame?: number;
  situacao: string;
  id_disciplina: string;
  id_estudante: string;
};

export default class NotaService {
  private readonly BASE_PATH = "/notas";

  /**
   * create
   */
  public async create(data: NotaData) {
    const response = await api
      .post<
        {},
        {
          data: NotaData;
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
  public async update(data: Partial<NotaData>) {
    const response = await api
      .put<
        {},
        {
          data: NotaData;
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
          data: NotaData[];
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
          data: NotaData;
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
