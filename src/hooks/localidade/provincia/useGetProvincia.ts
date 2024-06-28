import PaisController from "@/controllers/localidade/Pais";
import ProvinciaController from "@/controllers/localidade/Provincia";
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

export function useGetProvincias() {
  const controller = new ProvinciaController();

  const { data, ...result } = useQuery({
    queryKey: ["provincias"],
    queryFn: controller.obter,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    result,
  };
}
