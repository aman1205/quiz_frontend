"use client";
import * as React from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  RowSelectionState,
  flexRender,
} from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { QuestionQuizType } from "@/lib/Types/QuestionType";
import axios from "@/lib/axios";

const quizSchema = z.object({
  title: z.string(),
  questions: z.array(
    z.object({
      id: z.string().uuid(),
      text: z.string(),
      options: z.array(z.string()),
      correct: z.string(),
      category: z.string(),
    })
  ),
});

const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  { accessorKey: "text", header: "Question" },
  {
    accessorKey: "options",
    header: "Options",
    cell: ({ row }) => (
      <ul>
        {row.original.options.map((option: { text: string }) => (
          <li key={option.text}>{option.text}</li>
        ))}
      </ul>
    ),
  },
  { accessorKey: "correctAnswer", header: "Correct Answer" },
  { accessorKey: "category", header: "Category" },
];

export default function QuizForm({ sampleQuestions }: { sampleQuestions: any[] }) {
  const [selectedQuestions, setSelectedQuestions] = React.useState<string[]>([]);
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  React.useEffect(() => {
    // Convert rowSelection to an array of selected question IDs
    const selectedIds = Object.keys(rowSelection).filter(
      (key) => rowSelection[key]
    );
    setSelectedQuestions(selectedIds);
  }, [rowSelection]);

  const form = useForm({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: "",
      questions: [],
    },
  });

  const onSubmit = async (data: any) => {
    const selectedQuestionsData = sampleQuestions.filter((q) =>
      selectedQuestions.includes(q.id)
    );
    const finalData = { ...data, questions: selectedQuestionsData };
    console.log("Final data", finalData);

    // Submit `finalData` to the API
    const response = await axios.post("/quizzes", finalData);
    if (response.status === 200) {
      alert("Quiz created successfully");
      form.reset();
    }
    
    // Handle successful submission
    console.log("Quiz submitted successfully");
  };

  const table = useReactTable({
    data: sampleQuestions,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    getRowId: (row) => row.id, // Ensure the row ID is used correctly
  });

  return (
    <div className="p-4 md:p-6 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Create New Quiz</CardTitle>
          <CardDescription>Fill out the form to create a new quiz.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="quiz-title">Quiz Title</FormLabel>
                      <FormControl>
                        <Input id="quiz-title" placeholder="Enter quiz title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="border shadow-sm rounded-lg">
                <Table>
                  <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        ))}
                      </TableRow>
                    ))}
                  </TableHeader>
                  <TableBody>
                    {table.getRowModel().rows.length ? (
                      table.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={columns.length}
                          className="h-24 text-center"
                        >
                          No results.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <Button type="submit" className="w-2/5 mx-auto">
                Create Quiz
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
