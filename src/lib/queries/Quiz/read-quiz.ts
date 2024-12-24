"use client";
import { useQuery } from "@tanstack/react-query";

import { apiAuth } from "@/lib/axios";
import {QuizRoute } from "@/lib/api-routes";

export const getQuiz = () => {
	return useQuery({
		queryKey: ["quiz"],
		queryFn: async () => {
			return await apiAuth.get(QuizRoute);
		},
		select: (response) => response.data,
	});
};
