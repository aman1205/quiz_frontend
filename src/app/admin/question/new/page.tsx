"use client"
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const questionSchema = z.object({
  question: z.string(),
  // type: z.enum(["string", "number"]),
  options: z.array(z.string()),
  correctAnswer: z.union([z.string(), z.number()]),
  category: z.string(),
});

export default function Page() {
  const form = useForm({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      question: "",
      // type: "string",
      options: [],
      correctAnswer: "",
      category: "",
    },

  });

  const onSubmit = async (values:z.infer<typeof questionSchema>) => {
    // Convert options and correctAnswer based on the type
    // const { type, options, correctAnswer, ...rest } = values;

    // // Split and convert options based on type
    // const processedOptions = options.split(',').map(option => {
    //   option = option.trim(); // Remove any leading/trailing whitespace
    //   return type === "number" ? parseFloat(option) : option;
    // });

    // // Convert correctAnswer based on type
    // const processedCorrectAnswer = type === "number" ? parseFloat(correctAnswer) : correctAnswer;

    // const finalValues = { ...rest, options: processedOptions, correctAnswer: processedCorrectAnswer };

    console.log(values);

    try {
      const baseurl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${baseurl}/questions`, values);
      if (response.status === 200) {
        alert("Question created successfully");
        form.reset();
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error creating question:", error);
    }
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
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="question"
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
              {/* <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="string">String</SelectItem>
                          <SelectItem value="number">Number</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div> */}
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="options"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Options</FormLabel>
                      <FormControl
                          onChange={(e) => {
                            const value = (e.target as HTMLInputElement).value;
                            // const options = value.split(',').map(option => option.trim());
                            field.onChange([value]);
                          } }
                      >

                      <Textarea
                        placeholder="Enter options separated by commas"
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
                      <Select onValueChange={field.onChange} value={field.value}>
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
              {/* <CardFooter> */}
                <Button type="submit" className="w-2/6 mx-auto">Create Question</Button>
              {/* </CardFooter> */}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
