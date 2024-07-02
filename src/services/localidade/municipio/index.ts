import { api } from "@/infra/api";
import { ProvinciaData } from "../provincia";

export type MunicipioData = {
  nome: string;
  id?: string;
  id_provincia: string;
  provincia?: ProvinciaData;
};

export default class MunicipioService {
  private readonly BASE_PATH = "/municipios";

  /**
   * create
   */
  public async create(data: MunicipioData) {
    const response = await api
      .post<
        {},
        {
          data: MunicipioData;
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
  public async update(data: Partial<MunicipioData>) {
    const response = await api
      .put<
        {},
        {
          data: MunicipioData;
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
          data: MunicipioData[];
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
          data: MunicipioData;
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
