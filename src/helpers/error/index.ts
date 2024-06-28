import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export function ResponseError(error: any) {
  if (error instanceof AxiosError) {
    if (error.response?.status) {
      return NextResponse.json(
        { error: error.response.data },
        {
          status: error.response.status,
        }
      );
    }
  }

  return NextResponse.json({ error: "Erro desconhecido", status: 500 });
}
