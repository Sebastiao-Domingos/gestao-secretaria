import { isEmptyString } from "@/helpers/functions/isEmptyString";
import { NotaData } from "@/services/instituicao/notas/Notas";

class NotaController {
  private static readonly url = "/api/instituicao/estudantes/notas";

  /**
   * criar
   */
  public async criar(data: NotaData) {
    const body = await fetch(NotaController.url, {
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
  public async actualizar(data: NotaData) {
    if (isEmptyString(data.id!)) {
      throw new Error("O id e o nome não pode estar vazio");
    }

    const body = await fetch(NotaController.url, {
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

    const body = await fetch(NotaController.url, {
      method: "DELETE",
      body: JSON.stringify({ id: atributo_id }),
    });

    if (!body.ok) {
      throw new Error("Erro ao apagar");
    }

    const json = await body.json();

    return json.response;
  }

  public async pegar_dados(atributo_id: string): Promise<NotaData> {
    if (atributo_id.trim().length === 0) {
      throw new Error("id não pode estar vazio");
    }

    const body = await fetch(`${NotaController.url}/data?id=${atributo_id}`);
    if (!body.ok) {
      throw new Error("Erro ao apagar");
    }

    const json = await body.json();

    return json.response;
  }
  /**
   * obter
   */
  public async obter(): Promise<NotaData[]> {
    const body = await fetch(NotaController.url).then((res) => res.json());

    return body.response;
  }
}

export default NotaController;
