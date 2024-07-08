"use client";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusIcon } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface Quiz {
  id: number;
  title: string;
  question: Question[];
}
interface Question {
  id: number;
  title: string;
  options: string[];
  correctAnswer: string;
  category: string;
}
type IQuiz = Quiz[];

const CreateQuizPage: React.FC = () => {
  const [quiz, setQuiz] = useState<IQuiz>([
    {
      id: 1,
      title: "Quiz 1",
      question: [
        {
          id: 1,
          title: "Question 1",
          options: ["Option 1", "Option 2", "Option 3"],
          correctAnswer: "Option 1",
          category: "Category 1",
        },
        {
          id: 2,
          title: "Question 2",
          options: ["Option 1", "Option 2", "Option 3"],
          correctAnswer: "Option 2",
          category: "Category 2",
        },
      ],
    },
  ]);

  useEffect(() => {
    // Fetch user data from the server
    const fetchQuiz = async () => {
      const baseurl = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await axios.get(`${baseurl}/quizzes`);
        if (response.status == 200) {
          setQuiz(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchQuiz();
  }, []);

  return (
    <div className="w-full">
      <div className="border shadow-sm rounded-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="font-semibold text-xl">Quiz</h2>
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            href="/admin/quiz/new"
          >
            <PlusIcon className="h-4 w-4" />
            Add New Question
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Question</TableHead>
              <TableHead>Options</TableHead>
              <TableHead>Correct Answer</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          {
            // Display the list of questions here
            quiz.map((quiz) => (
              <TableBody key={quiz.id}>
                <TableRow>
                  <TableCell>{quiz.title}</TableCell>
                  <TableCell>
                    <ul>
                      {quiz.question.map((question) => (
                        <li key={question.id}>{question.title}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      {quiz.question.map((question) => (
                        <li key={question.id}>{question.options.join(", ")}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      {quiz.question.map((question) => (
                        <li key={question.id}>{question.correctAnswer}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      {quiz.question.map((question) => (
                        <li key={question.id}>{question.category}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          }
          <TableBody />
        </Table>
      </div>
    </div>
  );
};

export default CreateQuizPage;
