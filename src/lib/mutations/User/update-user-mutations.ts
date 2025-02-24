import { useMutation } from '@tanstack/react-query';
import { apiAuth } from '@/lib/axios';
import { UserUpdateRoute } from '@/lib/api-routes'; // Adjust with your actual API route for updating a user

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export const useUpdateUser = () => {
  const updateUser = async (user: User) => {
    const response = await apiAuth.put(`${UserUpdateRoute}/${user.id}`, user);
    return response.data;
  };

  return useMutation({
    mutationKey: ['updateUser'],
    mutationFn: (userData: User) => updateUser(userData),
  });
};
