"use client";
import { useQuery } from "@tanstack/react-query";

import { apiAuth } from "@/lib/axios";

export const getAllCoinsData = () => {
	return useQuery({
		queryKey: ["coinList"],
		queryFn: async () => {
			return await apiAuth.get('questions');
		},
		select: (response) => response.data,
	});
};
