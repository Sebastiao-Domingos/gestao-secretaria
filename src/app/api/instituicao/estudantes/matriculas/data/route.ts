import { ResponseError } from "@/helpers/error";

import MatriculaService from "@/services/instituicao/matricula/Matricula";

import { NextRequest, NextResponse } from "next/server";

const service = new MatriculaService();

async function pegar_dado(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  try {
    const resp = await service.find(id!);

    return NextResponse.json(resp, { status: resp.status });
  } catch (error) {
    ResponseError(error);
  }
}

export { pegar_dado as GET };
