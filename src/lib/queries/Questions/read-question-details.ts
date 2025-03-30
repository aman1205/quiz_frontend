"use client";
import { useQuery } from "@tanstack/react-query";
import { apiAuth } from "@/lib/axios";
import {QuestionRoute} from '../../api-routes'

export const useGetQuestionDetails = (id: string) => {
  return useQuery({
    queryKey: ["question-details", id], 
    queryFn: async () => {
      const response = await apiAuth.get(`${QuestionRoute}/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
