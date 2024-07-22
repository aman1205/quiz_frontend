"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const questionSchema = z.object({
  text: z.string(),
  options: z.array(z.string()),
  correctAnswer: z.union([z.string(), z.number()]),
  category: z.string(),
});

const useQuizForm = () => {
  return useForm({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      text: "",
      options: [],
      correctAnswer: "",
      category: "",
    },
  });
};

export { questionSchema, useQuizForm };
