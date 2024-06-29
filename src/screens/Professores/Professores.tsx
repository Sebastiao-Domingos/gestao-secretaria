"use client";

import { Loader } from "@/components/Menu/Loader";
import Register from "./Register";
import { usePathname, useRouter } from "next/navigation";
import { useGetProfessores } from "@/hooks/instituicao/professor/useGetProfessores";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Edit from "./Edit";
import Link from "next/link";

export default function Professores() {
  const navigator = useRouter();
  const { data, result } = useGetProfessores();

  React.useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <h3 className="font-bold uppercase mr-2">Professores</h3>
        </div>
        <div>
          <Register />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        {result.isSuccess && data && (
          <TableContainer component={Paper} className="!shadow-none">
            <Table
              sx={{ minWidth: 650 }}
              size="medium"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow className="bg-purple-200">
                  <TableCell className="!font-bold">Nome</TableCell>
                  <TableCell className="!font-bold">E-mail</TableCell>
                  <TableCell className="!font-bold">Telefone</TableCell>
                  <TableCell className="!font-bold">Nº Bilhete</TableCell>
                  <TableCell className="!font-bold" align="right">
                    Outros...
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.length !== 0 &&
                  data?.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className="even:bg-purple-100/30 hover:bg-purple-100/40"
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="!cursor-pointer"
                      >
                        <Link href={`/professores/${row.id!}`}>{row.nome}</Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`/professores/${row.id!}`}>
                          {row.email}
                        </Link>
                      </TableCell>
                      <TableCell className="!cursor-pointer">
                        <Link href={`/professores/${row.id!}`}>
                          {row.telefone}
                        </Link>
                      </TableCell>
                      <TableCell className="!cursor-pointer">
                        <Link href={`/professores/${row.id!}`}>
                          {row.numero_bi}
                        </Link>
                      </TableCell>
                      <TableCell align="right" className="space-x-4">
                        <Edit item={row} />
                        <button className="text-red-300 rounded hover:bg-white p-1">
                          <span className="material-icons">delete</span>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {result.isPending && (
          <>
            <Loader></Loader>
          </>
        )}
        {result.isSuccess && data?.length === 0 && (
          <p className="w-full text-center text-red-300 font-bold mt-6">
            Sem dados
          </p>
        )}
        {result.isError && <div>Erro! ao pegar dados</div>}
      </div>
    </div>
  );
}
