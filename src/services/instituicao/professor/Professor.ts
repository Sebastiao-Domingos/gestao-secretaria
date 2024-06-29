import { api } from "@/infra/api";
import { MunicipioData } from "@/services/localidade/municipio";

export type ProfessorData = {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  numero_bi: string;
  enderecos: Endereco[];
};

export interface Endereco {
  distrito: string;
  rua: string;
  id_municipio: string;
  municipio?: MunicipioData;
}

export default class ProfessorService {
  private readonly BASE_PATH = "/professores";

  /**
   * create
   */
  public async create(data: ProfessorData) {
    console.log(data);

    const response = await api
      .post<
        {},
        {
          data: ProfessorData;
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
  public async update(data: Partial<ProfessorData>) {
    const response = await api
      .put<
        {},
        {
          data: ProfessorData;
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
          data: ProfessorData[];
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
          data: ProfessorData;
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
