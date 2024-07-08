'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useState } from "react";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from "react-icons/fc";
import { GoArrowUpRight } from "react-icons/go";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Invalid email address"  }).min(5).max(255),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }).max(50),
});

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
        {/* <h1 className="font-bold text-center text-2xl mb-5">Invooce</h1> */}
        <div className="bg-white w-full rounded-lg ">
          <div className="px-5 py-7">
            <h2 className="font-bold text-xl text-gray-800  mb-1">Create an Account</h2>
            <p className="font-semibold text-gray-600 mb-3">Join us now 🚀</p>
            <Button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg mb-5">
              <FcGoogle className="inline-block w-5 h-5 mr-2" /> Register with Google
            </Button>
            <div className="relative mb-8">
              <span className="absolute inset-x-0 top-2 text-center text-gray-500 bg-white px-2">or Register with Email</span>
              <div className="border-t border-gray-300"></div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="E.g. John Doe"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl className="relative">
                        <div>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your Password"
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-2 top-2 mt-1 p-1 text-gray-600 hover:bg-white rounded"
                        >
                          {showPassword ? <HiEyeOff /> : <HiEye />}
                        </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-5">
                  <Button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Register</Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="py-2">
            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">Login 
              <span>
                
                <GoArrowUpRight className="inline-block w-5 h-5 mr-2"/>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
