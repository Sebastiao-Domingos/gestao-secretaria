import { ResponseError } from "@/helpers/error";
import MunicipioService, {
  MunicipioData,
} from "@/services/localidade/municipio";
import { NextRequest, NextResponse } from "next/server";

const service = new MunicipioService();

async function cadastrar(request: NextRequest) {
  const data: MunicipioData = await request.json();

  try {
    const resp = await service.create(data);

    return NextResponse.json(resp, { status: resp.status });
  } catch (error) {
    ResponseError(error);
  }
}

async function atualizar(request: NextRequest) {
  const data: MunicipioData = await request.json();

  try {
    const resp = await service.update(data);

    return NextResponse.json(resp, { status: resp.status });
  } catch (error) {
    ResponseError(error);
  }
}

async function listar() {
  try {
    const resp = await service.get();

    return NextResponse.json(resp, { status: resp.status });
  } catch (error) {
    ResponseError(error);
  }
}
async function deletar(request: NextRequest) {
  const data: { id: string } = await request.json();

  try {
    const resp = await service.delete(data.id);

    return NextResponse.json(resp, { status: resp.status });
  } catch (error) {
    ResponseError(error);
  }
}
export {
  cadastrar as POST,
  atualizar as PUT,
  listar as GET,
  deletar as DELETE,
};
