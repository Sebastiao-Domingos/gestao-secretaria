import { ResponseError } from "@/helpers/error";
import PaisService, { PaisData } from "@/services/localidade/pais";
import { Axios, AxiosError } from "axios";
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
