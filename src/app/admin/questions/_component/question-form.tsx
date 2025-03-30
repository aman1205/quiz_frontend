"use client";

import FileUploader from "@/components/file-uploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Questions } from "@/constants/data";
import { useGetAllCategory } from "@/lib/queries/Questions/read-category-list";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cloud } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const quizFormSchema = z.object({
  image_url: z.string().min(10, "Image is required"),
  text: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  category: z.string(),
  options: z.tuple([z.string()]).rest(z.string()),
  correctAnswer: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

interface IQuestionFormProps {
  initialValues?: z.infer<typeof quizFormSchema>;
  onSubmit?: (values: z.infer<typeof quizFormSchema>) => void;
  isLoading?: boolean;
}

export default function QuestionForm({
  initialValues,
  onSubmit,
  isLoading,
}: IQuestionFormProps) {
  const { data: CATEGORY_OPTIONS, isLoading: CategoryLoading } =
    useGetAllCategory();
  const form = useForm<z.infer<typeof quizFormSchema>>({
    resolver: zodResolver(quizFormSchema),
    values: initialValues || {
      text: "",
      category: "",
      image_url: "",
      correctAnswer: "",
      options: [""],
    },
  });

  const handleSubmit = onSubmit || ((values) => console.log("Form submitted:", values));

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">
          {initialValues ? "Edit Question" : "Add New Question"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <div className="space-y-6">
                  <FormItem className="w-full">
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <FileUploader
                        onUploadSuccess={(url:string) => field.onChange(url)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Question name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select categories" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CategoryLoading ? (
                          <SelectItem value="loading">Loading...</SelectItem>
                        ) : CATEGORY_OPTIONS?.data ? (
                          CATEGORY_OPTIONS.data.map(
                            (category: any, index: number) => (
                              <SelectItem
                                key={index}
                                value={category.value || "default"}
                              >
                                {category.label}
                              </SelectItem>
                            )
                          )
                        ) : (
                          <SelectItem value="none">
                            No categories available
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="options"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Options</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter option"
                        {...field}
                        onChange={(e) => field.onChange([e.target.value])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="correctAnswer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter question correct answer"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
