// src/app/admin/login/page.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminLogin: React.FC = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
    //     <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
    //     <form>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
    //           Username
    //         </label>
    //         <input
    //           type="text"
    //           id="username"
    //           name="username"
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <button
    //           type="submit"
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //         >
    //           Sign In
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <main className="flex-1 p-4 md:p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in to your account</CardTitle>
          <CardDescription>
            Enter your email and password below to access the admin dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" type="email" />
          </div>
          <div className="grid gap-2">
            <div className="relative">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
              />
              <Button
                className="absolute right-0 top-6 w-8"
                size="icon"
                variant="ghost"
              >
                <EyeIcon className="h-5 w-5" />
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>
            <div className="flex items-center justify-end">
              <Link
                className="text-sm text-primary hover:text-primary/80"
                href="#"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="/admin/register"
                className="text-sm text-primary hover:text-primary/80 text-center"
              >
                Don't have an account? Sign up
              </Link>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default AdminLogin;
