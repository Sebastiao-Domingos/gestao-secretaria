import { ResponseError } from "@/helpers/error";

import EstudanteService, {
  EstudanteData,
} from "@/services/instituicao/estudante/Estudante";

import { NextRequest, NextResponse } from "next/server";

const service = new EstudanteService();

async function pegar_dado(request: NextRequest) {
  const { id }: { id: string } = await request.json();
  console.log("api : ", id);

  try {
    const resp = await service.find(id);

    return NextResponse.json(resp, { status: resp.status });
  } catch (error) {
    ResponseError(error);
  }
}

export { pegar_dado as GET };
