// lib/getQuestions.ts
import axios from "axios";

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswer: string;
  category: string;
}

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const baseurl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get(`${baseurl}/question`);
    return response.data.question;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
