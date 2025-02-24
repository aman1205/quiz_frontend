import { useMutation } from '@tanstack/react-query';
import { apiAuth } from '@/lib/axios';
import { UserCreateRoute } from '@/lib/api-routes';

interface IUser {
  name: string;
  email: string;
  role: 'user' | 'admin';
}
export const usecreateUser = () => {
  const createUser = async (user: IUser) => {
    const response = await apiAuth.post(UserCreateRoute, user);
    return response.data;
  }
  return useMutation({
    mutationKey: ['createUser'],
    mutationFn: (userData: IUser) => createUser(userData),
  });
};
