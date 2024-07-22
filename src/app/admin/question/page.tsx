// src/app/admin/question/page.tsx

import { getQuestions, Question } from "@/lib/getQuestions";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
  TableCell,
} from "@/components/ui/table";

const CreateQuestionPage = async () => {
  const questions: Question[] = await getQuestions();

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
                <TableCell>{question.text}</TableCell>
                <TableCell>
                  {question.options.map((option) => option.text).join(", ")}
                </TableCell>
                <TableCell>{question.correctAnswer}</TableCell>
                <TableCell>{question.category}</TableCell>
                <TableCell className="text-right">
                  <Button className="hover:underline ml-1">Edit</Button>
                  <Button
                    variant="destructive"
                    className="hover:underline ml-2"
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

export default CreateQuestionPage;
