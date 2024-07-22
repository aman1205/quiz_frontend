"use client";
import React, { useEffect, useState } from "react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  Role: "ADMIN" | "USER";
  createdAt: string;
}
type IUser = User[];

const Page: React.FC = () => {
  const [users, setUsers] = useState<IUser>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user data from the server
    const fetchUsers = async () => {
      const baseurl = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await axios.get(`${baseurl}/users/allusers`);
        setUsers(response.data.users);
        // console.log("Users:", response.data.users);
        setLoading(false); // Mark loading as complete
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users. Please try again later."); // Set error message
        setLoading(false); // Mark loading as complete (even on error)
      }
    };

    fetchUsers();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full ">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500  text-2xl w-full">{error}</div>;
  }

  return (
    <div className="border shadow-sm rounded-lg w-full">
      <div className="border shadow-sm rounded-lg m-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{formatDate(user.createdAt)}</TableCell>
                <TableCell>{user.Role}</TableCell>
                <TableCell className="text-right">
                  <Button className="hover:underline ml-1">Edit</Button>
                  <Button
                    variant="destructive"
                    className="hover:underline ml-2"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
