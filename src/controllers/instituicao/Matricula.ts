import { isEmptyString } from "@/helpers/functions/isEmptyString";
import { MatriculaData } from "@/services/instituicao/matricula/Matricula";

class MatriculaController {
  private static readonly url = "/api/instituicao/estudantes/matriculas";

  /**
   * criar
   */
  public async criar(data: MatriculaData) {
    data.data_matricula += "T00:00:00.000Z";
    const body = await fetch(MatriculaController.url, {
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
  public async actualizar(data: MatriculaData) {
    if (isEmptyString(data.id!)) {
      throw new Error("O id e o nome não pode estar vazio");
    }

    const body = await fetch(MatriculaController.url, {
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

    const body = await fetch(MatriculaController.url, {
      method: "DELETE",
      body: JSON.stringify({ id: atributo_id }),
    });

    if (!body.ok) {
      throw new Error("Erro ao apagar");
    }

    const json = await body.json();

    return json.response;
  }

  public async pegar_dados(atributo_id: string): Promise<MatriculaData> {
    if (atributo_id.trim().length === 0) {
      throw new Error("id não pode estar vazio");
    }

    const body = await fetch(
      `${MatriculaController.url}/data?id=${atributo_id}`
    );
    if (!body.ok) {
      throw new Error("Erro ao apagar");
    }

    const json = await body.json();

    return json.response;
  }
  /**
   * obter
   */
  public async obter(): Promise<MatriculaData[]> {
    const body = await fetch(MatriculaController.url).then((res) => res.json());

    return body.response;
  }
}

export default MatriculaController;
