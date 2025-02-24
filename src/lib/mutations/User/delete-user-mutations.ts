import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiAuth } from '@/lib/axios';
import { UserRoute } from '@/lib/api-routes';

export const deleteUserById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await apiAuth.delete(`${UserRoute}/${id}`);
      return response.data;
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['userfindall'] });
    },
    onError: (error) => {
      console.error('Error deleting user:', error);
    }
  });
};
