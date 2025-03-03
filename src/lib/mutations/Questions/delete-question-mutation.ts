import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiAuth } from '@/lib/axios';
import { QuestionRoute } from '@/lib/api-routes';

export const useDeleteQuestionById = () => {

  const DeleteQuestion = async (id: string) => {
    const { data } = await apiAuth.delete(QuestionRoute, {
      params: {
        id
      }
    })
    return data;
  }
  return useMutation(
    {
      mutationKey: [''],
      mutationFn: (id: string) => DeleteQuestion(id)
    }
  )
};
