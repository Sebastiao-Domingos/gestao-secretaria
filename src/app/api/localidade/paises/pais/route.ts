import { ResponseError } from "@/helpers/error";
import PaisService from "@/services/localidade/pais";
import { NextRequest, NextResponse } from "next/server";

async function pegar_dados(request: NextRequest) {
  const data: { id: string } = await request.json();

  try {
    const service = new PaisService();

    const resp = await service.find(data.id);

    return NextResponse.json(resp, { status: resp.status });
  } catch (error) {
    ResponseError(error);
  }
}
export { pegar_dados as GET };
