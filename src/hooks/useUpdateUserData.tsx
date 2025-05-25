import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { User } from "@/types/user";

const updateUserData = async (user: User) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${user.id}`,
    user
  );

  return response.data as User;
};

 function useUpdateUserData() {
  const queryClient = useQueryClient();
  
  const allQueryKeys = queryClient
  .getQueryCache()
  .findAll()
  .map((query) => query.queryKey);

  return useMutation({
    mutationFn: (data: User) => updateUserData(data),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData([...allQueryKeys[0]], (oldData: User[]) => {
        const updatedData = [
          updatedUser,
          ...(oldData.filter((user) => user.id !== updatedUser.id)),
        ];
        return updatedData.sort((a, b) => a.id - b.id);
      });
    },
  });
}

export default useUpdateUserData
