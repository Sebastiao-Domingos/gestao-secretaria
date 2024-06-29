import { ResponseError } from "@/helpers/error";

import ProfessorService from "@/services/instituicao/professor/Professor";

import { NextRequest, NextResponse } from "next/server";

const service = new ProfessorService();

async function pegar_dado(request: NextRequest) {
  const { id }: { id: string } = await request.json();
  try {
    const resp = await service.find(id);

    return NextResponse.json(resp, { status: resp.status });
  } catch (error) {
    ResponseError(error);
  }
}

export { pegar_dado as GET };
