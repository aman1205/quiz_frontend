// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableBody,
//   Table,
//   TableCell,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { getAllUser } from "@/lib/queries/User/read-all-user-list";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: "ADMIN" | "USER";
//   createdAt: string;
// }
// type IUser = User[];

// const Page: React.FC = () => {

//   const { data, isLoading } = getAllUser();

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "2-digit",
//       year: "2-digit",
//     });
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center w-full ">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   const  row ={
    
//   }
//   return (
//     <div className="border shadow-sm rounded-lg w-full">
//       <div className="border shadow-sm rounded-lg m-2">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Name</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Joined</TableHead>
//               <TableHead>Role</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data?.data.map((user:any) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{formatDate(user.createdAt)}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//                 <TableCell className="text-right">
//                   <Button className="hover:underline ml-1">Edit</Button>
//                   <Button
//                     variant="destructive"
//                     className="hover:underline ml-2"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default Page;





import { searchParamsCache } from '@/lib/searchparams';
import { SearchParams } from 'nuqs';
import React from 'react';
import EmployeeListingPage from './_components/users-listing-page';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Employees'
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  return <EmployeeListingPage />;
}
