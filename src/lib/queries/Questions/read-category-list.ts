"use client";
import { useQuery } from "@tanstack/react-query";

import { apiAuth } from "@/lib/axios";
import { QuestionSubCategory } from "@/lib/api-routes";

export const getAllCategory = () => {
	return useQuery({
		queryKey: ["categoryList"],
		queryFn: async () => {
			 return await apiAuth.get(QuestionSubCategory);
		},
		select: (response) => response.data,
	});
};
