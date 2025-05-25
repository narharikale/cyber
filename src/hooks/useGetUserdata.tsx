import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { User } from "@/types/user";
import { toast } from "sonner";

interface GetUserDataParams {
  search: string;
  page: number;
  limit: number;
  sort: string;
  order: "asc" | "desc";
}

const getUserData = async (params: GetUserDataParams) => {
  try {
    const queryString = new URLSearchParams();
    
    if (params.search) queryString.append('q', params.search);
    if (params.sort) {
      queryString.append('_sort', params.sort);
      queryString.append('_order', params.order || 'asc');
    }
    if (params.page) queryString.append('_page', params.page.toString());
    if (params.limit) queryString.append('_limit', params.limit.toString());

    const url = `https://jsonplaceholder.typicode.com/users?${queryString.toString()}`;
    const response = await axios.get<User[]>(url);
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw new Error(error as string);
  }
};

function useGetUserdata(params: GetUserDataParams) {

  return useQuery({
    queryKey: ["get-users", params],
    queryFn: () => getUserData(params),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}

export default useGetUserdata