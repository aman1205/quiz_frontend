"use client";
import React from "react";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  rollNo: z
    .string()
    .regex(/^\d+$/, "Roll number must be a number")
    .min(1, "Roll number is required"),
  studentNo: z
    .string()
    .regex(/^\d+$/, "Student number must be a number")
    .min(1, "Student number is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  role: z.string().min(1, "Role is required"),
  branch: z.string().min(1, "Branch is required"),
  schooling: z.string().min(1, "Schooling is required"),
  section: z.string().min(1, "Section is required"),
});
export default function page() {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      name: "",
      rollNo: "",
      studentNo: "",
      dob: "",
      role: "",
      branch: "",
      schooling: "",
      section: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof userSchema>) => {
    try {
      const baseurl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${baseurl}/users`, values);
      if (response.status === 200) {
        alert("User created successfully");
        form.reset();
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="p-4 md:p-6 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Add New User</CardTitle>
          <CardDescription>
            Fill out the form to create a new user account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="name"
                          placeholder="E.g. John Doe"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded mt-1"
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="E.g. john.doe@gmail.com"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded mt-1"
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
                  name="rollNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roll Number</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Roll No"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                  name="studentNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Numbe</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Student Number"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Enter DOB"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded mt-1"
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
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
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
                            <SelectValue placeholder="Select Branch" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="CSE">CSE</SelectItem>
                          <SelectItem value="CS">CS</SelectItem>
                          <SelectItem value="CSE_AI">CSE_AI</SelectItem>
                          <SelectItem value="CSE_DS">CSE_DS</SelectItem>
                          <SelectItem value="AIML">AIML</SelectItem>
                          <SelectItem value="DS">DS</SelectItem>
                          <SelectItem value="IT">IT</SelectItem>
                          <SelectItem value="CSE_HINDI">CSE_HINDI</SelectItem>
                          <SelectItem value="ECE">ECE</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2 ">
                <FormField
                  control={form.control}
                  name="schooling"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Schooling</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Schooling" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Hosteller">Hosteller</SelectItem>
                          <SelectItem value="DayScholar">DayScholar</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
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
                            <SelectValue placeholder="Select Section" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="I">I</SelectItem>
                          <SelectItem value="II">II</SelectItem>
                          <SelectItem value="III">III</SelectItem>
                          <SelectItem value="VI">VI</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <CardFooter>
                <Button type="submit">Create User</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
