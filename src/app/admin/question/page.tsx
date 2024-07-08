"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
  TableCell,
} from "@/components/ui/table";
import axios from "axios";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  category: string;
}
type IQuestions = Question[];
const CreateQuestion: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestions>([]);

  useEffect(() => {
    // Fetch user data from the server
    const fetchQuestions = async () => {
      const baseurl = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await axios.get(`${baseurl}/questions`);
        setQuestions(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="w-full">
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Question</TableHead>
              <TableHead>Options</TableHead>
              <TableHead>Correct Answer</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((question) => (
              <TableRow key={question.id}>
                <TableCell>{question.question}</TableCell>
                <TableCell>{question.options.join(", ")}</TableCell>
                <TableCell>{question.correct}</TableCell>
                <TableCell>{question.category}</TableCell>
                <TableCell className="text-right">
                  <Button className="hover:underline ml-1">Edit</Button>
                  <Button
                    variant="destructive"
                    className=" hover:underline ml-2"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CreateQuestion;
