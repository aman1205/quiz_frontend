import { apiAuth } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface Question {
    text: string;
    options: string[];
    correct: string;
    category: string;
    image_url:string;
}

export const useUpdateQuestion = () => {
    const updateQuestion = async (question: Question) => {
        const response = await apiAuth.put(``, question);
        return response.data;
    };

    return useMutation({
        mutationKey: ['updateUser'],
        mutationFn: (questionData: Question) => updateQuestion(questionData),
    });
};