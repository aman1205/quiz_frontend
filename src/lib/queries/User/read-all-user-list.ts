"use client";
import { useQuery } from "@tanstack/react-query";

import { apiAuth } from "@/lib/axios";
import {UserFindAllRoute } from "@/lib/api-routes";

export const useGetAllUser = () => {
	return useQuery({
		queryKey: ["userfindall"],
		queryFn: async () => {
			return await apiAuth.get(UserFindAllRoute);
		},
		select: (response) => response.data,
	});
};
