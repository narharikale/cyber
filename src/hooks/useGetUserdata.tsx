import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@/types/user";

export const getUserData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data as User[];
  } catch (error) {
    throw new Error(error as string);
  }
};

export const useGetUserdata = () => {
  return useQuery({
    queryKey: ["get-users"],
    queryFn: () => getUserData(),
  });
};
