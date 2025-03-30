"use client";
import { useQuery } from "@tanstack/react-query";

import { apiAuth } from "@/lib/axios";
import { QuizRoute } from "@/lib/api-routes";

export const useGetQuizById = (id: string) => {
    return useQuery({
        queryKey: ["quiz", id],
        queryFn: async () => {
            return await apiAuth.get(`${QuizRoute}/${id}`, {
               
            });
        },
        select: (response) => response.data.data,
    });


}
