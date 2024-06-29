import { isEmptyString } from "@/helpers/functions/isEmptyString";
import { EstudanteData } from "@/services/instituicao/estudante/Estudante";

class EstudanteController {
  private static readonly url = "/api/instituicao/estudantes";

  /**
   * criar
   */
  public async criar(data: EstudanteData) {
    data.data_nascimento += "T00:00:00.000Z";
    const body = await fetch(EstudanteController.url, {
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
  public async actualizar(data: EstudanteData) {
    if (isEmptyString(data.id!) || isEmptyString(data.nome)) {
      throw new Error("O id e o nome não pode estar vazio");
    }

    const body = await fetch(EstudanteController.url, {
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

    const body = await fetch(EstudanteController.url, {
      method: "DELETE",
      body: JSON.stringify({ id: atributo_id }),
    });

    if (!body.ok) {
      throw new Error("Erro ao apagar");
    }

    const json = await body.json();

    return json.response;
  }

  public async pegar_dados(atributo_id: string) {
    console.log("controller ", atributo_id);
    if (atributo_id.trim().length === 0) {
      throw new Error("id não pode estar vazio");
    }

    const body = await fetch(`${EstudanteController.url}/data`, {
      method: "GET",
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
  public async obter(): Promise<EstudanteData[]> {
    const body = await fetch(EstudanteController.url).then((res) => res.json());

    return body.response;
  }
}

export default EstudanteController;
