import MunicipioController from "@/controllers/localidade/Municipio";
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

export function useGetMunicipios() {
  const controller = new MunicipioController();

  const { data, ...result } = useQuery({
    queryKey: ["municipios"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
