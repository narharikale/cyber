import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { User } from "@/types/user";

const updateUserData = async (user: User) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${user.id}`,
    user
  );

  return response.data as User;
};

export const useUpdateUserData = () => {
  return useMutation({
    mutationFn: (data: User) => updateUserData(data),
  });
};
