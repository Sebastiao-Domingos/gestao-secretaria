import { isEmptyString } from "@/helpers/functions/isEmptyString";
import { ProfessorData } from "@/services/instituicao/professor/Professor";

class ProfessorController {
  private static readonly url = "/api/instituicao/professores";

  /**
   * criar
   */
  public async criar(data: ProfessorData) {
    const body = await fetch(ProfessorController.url, {
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
  public async actualizar(data: ProfessorData) {
    if (isEmptyString(data.id!) || isEmptyString(data.nome)) {
      throw new Error("O id e o nome não pode estar vazio");
    }

    const body = await fetch(ProfessorController.url, {
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

    const body = await fetch(ProfessorController.url, {
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
  public async obter(): Promise<ProfessorData[]> {
    const body = await fetch(ProfessorController.url).then((res) => res.json());

    return body.response;
  }
}

export default ProfessorController;
