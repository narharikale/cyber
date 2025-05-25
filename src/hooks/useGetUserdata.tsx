import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@/types/user";
import { toast } from "sonner";

interface QueryParams {
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export const getUserData = async (params?: QueryParams) => {
  try {
    const queryString = new URLSearchParams();
    
    if (params?.search) queryString.append('q', params.search);
    if (params?.sort) {
      queryString.append('_sort', params.sort);
      queryString.append('_order', params.order || 'asc');
    }
    if (params?.page) queryString.append('_page', params.page.toString());
    if (params?.limit) queryString.append('_limit', params.limit.toString());

    const url = `https://jsonplaceholder.typicode.com/users?${queryString.toString()}`;
    const response = await axios.get(url);
    return response.data as User[];
  } catch (error) {
    toast.error("Something went wrong");
    throw new Error(error as string);
  }
};

export const useGetUserdata = (params?: QueryParams) => {
  return useQuery({
    queryKey: ["get-users", params],
    queryFn: () => getUserData(params),
  });
};
