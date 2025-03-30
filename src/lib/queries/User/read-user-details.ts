"use client";
import { useQuery } from "@tanstack/react-query";
import { apiAuth } from "@/lib/axios";
import { UserDetailsRoute } from "@/lib/api-routes";

export const useGetUserDetails = (id: string) => {
  return useQuery({
    queryKey: ["user-details", id], 
    queryFn: async () => {
      const response = await apiAuth.get(`${UserDetailsRoute}/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
