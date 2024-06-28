import { isEmptyString } from "@/helpers/functions/isEmptyString";
import { ProvinciaData } from "@/services/localidade/provincia";

class ProvinciaController {
  private static readonly url = "/api/localidade/provincias";
  constructor() {}

  /**
   * criar
   */
  public async criar(data: ProvinciaData) {
    const body = await fetch(ProvinciaController.url, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!body.ok) {
      throw new Error("Erro ao cadastrar");
    }

    const json = await body.json();

    return json.response;
  }
  /**
   * actulizar
   */
  public async actualizar(data: ProvinciaData) {
    if (isEmptyString(data.id!) || isEmptyString(data.nome)) {
      throw new Error("O id e o nome não pode estar vazio");
    }

    const body = await fetch(ProvinciaController.url, {
      method: "PUT",
      headers: {},
      body: JSON.stringify(data),
    });

    if (!body.ok) {
      throw new Error("Erro ao actualizar");
    }

    const json = await body.json();

    return json.response;
  }
  /**
   * apagar
   */
  public async apagar(atributo_id: string) {
    if (atributo_id.trim().length === 0) {
      throw new Error("id não pode estar vazio");
    }

    const body = await fetch(ProvinciaController.url, {
      method: "DELETE",
      body: JSON.stringify({ id: atributo_id }),
    });

    if (!body.ok) {
      throw new Error("Erro ao apagar");
    }

    const json = await body.json();

    return json.response;
  }
  /**
   * obter
   */
  public async obter(): Promise<ProvinciaData[]> {
    const body = await fetch(ProvinciaController.url).then((res) => res.json());

    return body.response;
  }
}

export default ProvinciaController;