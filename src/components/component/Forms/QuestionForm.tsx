"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useQuizForm } from "@/lib/schema/FormSchema";
import { handleSubmit } from "@/lib/formSubmission";
import FileUploadForm from "./FileUploadForm";
import ImageUpload from "@/components/common/ImageUpload";
import { useState } from "react";
import { uploadImageToCloudinary } from "@/lib/uploadToCloudinary";

const QuestionForm = () => {
  const form = useQuizForm();
  const [uploading, setUploading] = useState(false);
  const [questionImage, setQuestionImage] = useState<string | null>(null);


  const handleImageUpload = async (file: File) => {
    setUploading(true); 
    try {
      const imageUrl = await uploadImageToCloudinary(file);
      setQuestionImage(imageUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setUploading(false); // Reset loading state
    }
  };

  const onSubmit = async (values: any) => {
    await handleSubmit({ ...values, imageUrl: questionImage }, form);
  };


  return (
    <div className="p-4 md:p-6 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Add New Question</CardTitle>
          <CardDescription>
            Fill out the form to create a new quiz question.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="grid gap-4"
              onSubmit={form.handleSubmit((values) =>
                handleSubmit(values, form)
              )}
            >
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question Title</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="E.g. What is the capital of France?"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="options"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Options</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter options separated by commas"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          onChange={(e) => {
                            const value = e.target.value;
                            const options = value
                              .split(",")
                              .map((option) => option.trim());
                            field.onChange(options);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="correctAnswer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correct Answer</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter correct answer"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="geography">Geography</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="art">Art</SelectItem>
                          <SelectItem value="politics">Politics</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                          <SelectItem value="literature">Literature</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
              <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correct Answer (optional)</FormLabel>
                      <FormControl>
                        <Input
                          id="picture" 
                          type="file" 
                          accept="image/*"
                          {...field}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(file);
                          }}
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 {uploading && <p>Uploading...</p>}
                 {questionImage && <img src={questionImage} alt="Uploaded" className="mt-4" />}
              </div>
           

              <Button type="submit" className="w-2/6 mx-auto" disabled={uploading}>
                Create Question
              </Button>
            </form>
          </Form>
        </CardContent>
        {/* <div className="grid place-content-center gap-2 text-2xl font-medium">
          OR
        </div>

        <CardFooter className="flex flex-col items-center mt-4">
          <FileUploadForm />
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default QuestionForm;
