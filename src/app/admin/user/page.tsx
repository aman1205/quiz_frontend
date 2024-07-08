"use client";
import React, { useEffect, useState } from "react";
import { TableHead, TableRow, TableHeader, TableBody, Table ,TableCell} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}
type IUser = User[];
const Page: React.FC = () => {
  const [users, setUsers] = useState<IUser>([]);

  useEffect(() => {
    // Fetch user data from the server
    const fetchUsers = async () => {
      const baseurl = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await axios.get(`${baseurl}/users/allusers`);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
  };
  // const sampleData = [
  //   { id: 1, name: "John Doe"  , email:'johndoe@gmail.com' ,joined:"2021-10-10"},
  //   { id: 2, name: "Jane Smith" ,joined:"2021-10-10" , email:'janesmith@gmail.com'    },
  //   { id: 3, name: "Bob Johnson" ,  joined:"2021-10-10" ,email:'bob@gmail.com' },
  //   { id: 4, name: "Alice Brown" ,joined:"2021-10-10" , email:'alice@gmail.com'},
  //   { id: 5, name: "Eve White" ,joined:"2021-10-10" , email:'eve@gmail.com' },
  //   { id: 6, name: "Charlie Black" ,joined:"2021-10-10" , email:'charlie@gmail.com'}
  // ];
  return (

    <div className="border shadow-sm rounded-lg w-full">
    <div className="border shadow-sm rounded-lg  m-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
          {
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{formatDate(user.createdAt)}</TableCell>
                <TableCell className="text-right">
                  <Button className="hover:underline ml-1">Edit</Button>
                  <Button variant="destructive" className=" hover:underline ml-2">Delete</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
    </div>
  );
};

export default Page;
