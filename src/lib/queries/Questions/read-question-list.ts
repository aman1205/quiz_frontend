"use client";
import { useQuery } from "@tanstack/react-query";

import { apiAuth } from "@/lib/axios";
import { QuestionRoute } from "@/lib/api-routes";

export const getAllQuestion = () => {
	return useQuery({
		queryKey: ["questionsList"],
		queryFn: async () => {
			return await apiAuth.get(QuestionRoute);
		},
		select: (response) => response.data,
	});
};
