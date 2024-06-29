"use client";

import { Loader } from "@/components/Loader";
import Link from "next/link";
import Register from "./Register";
import Edit from "./Edit";
import { usePathname } from "next/navigation";
import { useGetProfessores } from "@/hooks/instituicao/professor/useGetProfessores";

export default function Professores() {
  const path = usePathname();
  const { data, result } = useGetProfessores();
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
        {result.isSuccess &&
          data?.map((item) => (
            <div
              key={item.id}
              className="border hover:border-purple-200 hover:bg-purple-50/50 p-3 rounded flex justify-between items-center"
            >
              <div>{item.nome}</div>
              <div className="space-x-4">
                <Link
                  href={`${path}/${item.id}}`}
                  className="mr-4 hover:text-purple-600 underline"
                >
                  Ver mais...
                </Link>

                <Edit item={item} />
                <button className="text-red-300 rounded hover:bg-white p-1">
                  <span className="material-icons">delete</span>
                </button>
              </div>
            </div>
          ))}
        {result.isPending && (
          <>
            <Loader></Loader>
          </>
        )}
        {result.isError && <div>Erro! ao pegar dados</div>}
      </div>
    </div>
  );
}

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
