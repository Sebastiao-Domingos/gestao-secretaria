import { isEmptyString } from "@/helpers/functions/isEmptyString";
import { HorarioData } from "@/services/instituicao/horario/Horario";

class HorarioController {
  private static readonly url = "/api/instituicao/horarios";

  /**
   * criar
   */
  public async criar(data: HorarioData) {
    const body = await fetch(HorarioController.url, {
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
  public async actualizar(data: HorarioData) {
    if (isEmptyString(data.id!)) {
      throw new Error("O id e o nome não pode estar vazio");
    }

    const body = await fetch(HorarioController.url, {
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

    const body = await fetch(HorarioController.url, {
      method: "DELETE",
      body: JSON.stringify({ id: atributo_id }),
    });

    if (!body.ok) {
      throw new Error("Erro ao apagar");
    }

    const json = await body.json();

    return json.response;
  }

  public async pegar_dados(atributo_id: string): Promise<HorarioData> {
    if (atributo_id.trim().length === 0) {
      throw new Error("id não pode estar vazio");
    }

    const body = await fetch(`${HorarioController.url}/data?id=${atributo_id}`);
    if (!body.ok) {
      throw new Error("Erro ao apagar");
    }

    const json = await body.json();

    return json.response;
  }
  /**
   * obter
   */
  public async obter(): Promise<HorarioData[]> {
    const body = await fetch(HorarioController.url).then((res) => res.json());

    return body.response;
  }
}

export default HorarioController;
