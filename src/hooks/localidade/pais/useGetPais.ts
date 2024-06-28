// import AdminController from "@/controllers/Admin";
// import { SearchAdminParams } from "@/services/users/Admin";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { useState } from "react";

import PaisController from "@/controllers/localidade/Pais";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

// function useGetAdmin(params: Partial<SearchAdminParams>) {
//   const controller = new AdminController();

//   const [query, setQuery] = useState<Partial<SearchAdminParams>>(params);

//   const { data, ...result } = useQuery({
//     queryKey: ["administradores", query],
//     queryFn: () => controller.obter(query),
//     placeholderData: keepPreviousData,
//   });

//   function filtro(query: Partial<SearchAdminParams>) {
//     setQuery((prev) => ({ ...prev, ...query }));
//   }

//   return { result, data, filtro };
// }

// export default useGetAdmin;

export function useGetPais() {
  const controller = new PaisController();

  const { data, ...result } = useQuery({
    queryKey: ["paises"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
