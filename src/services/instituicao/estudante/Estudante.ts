import { api } from "@/infra/api";
import { Endereco } from "../professor/Professor";

export type EstudanteData = {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  numero_bi: string;
  id_curso: string;
  data_nascimento: string;
  ano_ingresso: number;
  enderecos: Endereco[];
};

export default class EstudanteService {
  private readonly BASE_PATH = "/estudantes";

  /**
   * create
   */
  public async create(data: EstudanteData) {
    data.ano_ingresso = Number(data.ano_ingresso);

    const response = await api
      .post<
        {},
        {
          data: EstudanteData;
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
  public async update(data: Partial<EstudanteData>) {
    const response = await api
      .put<
        {},
        {
          data: EstudanteData;
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
          data: EstudanteData[];
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
    console.log("service : " + id);

    const response = await api
      .get<
        {},
        {
          data: EstudanteData;
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
