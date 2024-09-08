import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { apiAuth } from "@/lib/axios";
import axios from "axios";

const feedbackSchema = z.object({
  rating: z.string().nonempty("Please select a rating"),
  feedback: z
    .string()
    .min(5, "Feedback must be at least 5 characters")
    .max(500, "Feedback is too long"),
});

function FeedbackForm() {
  const { data: session } = useSession();
  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      rating: "",
      feedback: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof feedbackSchema>) => {
    const payload = {
      ...data,
      userId: session?.user?.id,
      name: session?.user?.name,
      email: session?.user?.email,
    };

    try {
      const response = await apiAuth.post("/api/feedback", payload);

      if (response.status === 200) {
        toast.success("Feedback submitted successfully!");
        form.reset();
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage =
          error.response.data?.message || "Failed to submit feedback";
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred while submitting feedback");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Toaster />
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Submit Your Feedback
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating (Out of 10)</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10)].map((_, index) => (
                          <SelectItem
                            key={index + 1}
                            value={(index + 1).toString()}
                          >
                            {index + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your feedback here..."
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Submit Feedback
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default FeedbackForm;
