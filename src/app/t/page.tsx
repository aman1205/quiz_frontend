'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const registrationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  studentNo: z.number().positive("Student number must be positive").min(1 , "Student number must be at least 5 characters"),
  email: z.string().email({ message: "Invalid email address" }).min(5).max(255),
  dob: z.date({ required_error: "A date of birth is required." }),
  mobile: z.string().min(10, "Mobile number must be at least 10 characters"),
  branch: z.string(),
  section: z.string(),
  schoolingType: z.string(),
});

export default function RegistrationForm() {
  const [step, setStep] = useState(0);
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      studentNo: 0,
      email: "",
      dob: new Date(),
      mobile: "",
      branch: "",
      section: "",
      schoolingType: "",
    },
  });
  const fieldNames = [
    ["name", "studentNo"],
    ["email", "dob"],
    ["mobile", "branch"],
    ["section", "schoolingType"]
  ];

  const nextStep = async () => {
    const isValid = await form.trigger(fieldNames[step]);
    if (isValid) {
      setStep(step + 1);
    }
  };
  const prevStep = () => setStep(step - 1);

  const progressValue = (step / 3) * 100; // Adjusted for 4 steps (0 to 3)

  const onSubmit = (values: z.infer<typeof registrationSchema>) => {
    console.log("Registration Data:", values);
    form.reset();
    setStep(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-blue-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
      >
        <Card>
          <CardHeader>
            <CardTitle>Student Registration</CardTitle>
            <CardDescription>Fill out the form to register as a student.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                {step === 0 && (
                  <>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              {...field}
                              placeholder="Enter your name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="studentNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Number</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              placeholder="Enter your student number"
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="button" onClick={nextStep} className="w-full mt-4">
                      Next
                    </Button>
                  </>
                )}
                {step === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              {...field}
                              placeholder="Enter your email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of Birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  // type="button"
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "dd/MMM/yyyy")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                // disabled={(date) =>
                                //   date > new Date() || date < new Date("1900-01-01")
                                // }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-between mt-4">
                      <Button type="button" onClick={prevStep} className="w-1/2 mr-2">
                        Back
                      </Button>
                      <Button type="button" onClick={nextStep} className="w-1/2">
                        Next
                      </Button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              {...field}
                              placeholder="Enter your mobile number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="branch"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Branch</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your branch" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="CSE">Computer Science Engineering</SelectItem>
                              <SelectItem value="ECE">Electronics and Communication Engineering</SelectItem>
                              <SelectItem value="MECH">Mechanical Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-between mt-4">
                      <Button type="button" onClick={prevStep} className="w-1/2 mr-2">
                        Back
                      </Button>
                      <Button type="button" onClick={nextStep} className="w-1/2">
                        Next
                      </Button>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <FormField
                      control={form.control}
                      name="section"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Section</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your section" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="A">A</SelectItem>
                              <SelectItem value="B">B</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="schoolingType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Schooling Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your schooling type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="day_scholar">Day Scholar</SelectItem>
                              <SelectItem value="hosteller">Hosteller</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-between mt-4">
                      <Button type="button" onClick={prevStep} className="w-1/2 mr-2">
                        Back
                      </Button>
                      <Button type="submit" className="w-1/2">
                        Submit
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Progress value={progressValue} className="w-full mt-4" />
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
