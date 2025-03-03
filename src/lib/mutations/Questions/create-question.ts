"use client";
import { useMutation } from "@tanstack/react-query";

import { apiAuth } from "@/lib/axios";
import { QuestionRoute } from "@/lib/api-routes";

export interface IQuestion {
	text: string;
	options: string[];
	image_url: string;
	correctAnswer: string;
	category: string;
}

export const useCreateQuestion = () => {
	const createQuestion = async (questionData: IQuestion) => {
		return await apiAuth.post(QuestionRoute, {
			questionData
		});
	};

	return useMutation({
		mutationKey: ["createQuestion"],
		mutationFn: (questionData: IQuestion) => createQuestion(questionData),
	});
};
