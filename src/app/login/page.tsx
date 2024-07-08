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
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).min(5).max(255),
  password: z.string().min(8).max(50),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center sm:py-12">
      {/* <h1 className="font-bold  text-2xl ml-4">Invooce</h1> */}
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
        <div className="bg-white  w-full rounded-lg">
          <div className="px-5 py-7">
            <h2 className="font-bold text-2xl text-gray-800  mb-1">Login</h2>
            <p className="font-semibold text-gray-600 mb-3">
              Hi, Welcome back 👋
            </p>
            <Button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg mb-5 hover:bg-blue-300">
              <FcGoogle className="inline-block w-5 h-5 mr-2" /> Login with
              Google
            </Button>
            <div className="relative mb-8">
              <span className="absolute inset-x-0 top-2 text-center text-gray-500 bg-white px-2">
                or Login with Email
              </span>
              <div className="border-t border-gray-300"></div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                            type={showPassword ? "text" : "password"}
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
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-[#4741F6] hover:text-blue-500"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="mt-5">
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="py-2">
            <div className="text-center">
              <span className="text-gray-600">Not registered yet? </span>
              <Link
                href={"/register"}
                className="font-medium text-[#4741F6] hover:text-blue-500"
              >
                Create an account{" "}
                <span>
                  <GoArrowUpRight className="inline-block w-5 h-5 mr-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
