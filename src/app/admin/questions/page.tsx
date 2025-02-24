
// // src/app/admin/question/page.tsx

// import { getQuestions, Question } from "@/lib/getQuestions";
// import { Button } from "@/components/ui/button";
// import {
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableBody,
//   Table,
//   TableCell,
// } from "@/components/ui/table";

// const CreateQuestionPage = async () => {
//   const questions: Question[] = await getQuestions();

//   return (
//     <div className="w-full">
//       <div className="border shadow-sm rounded-lg">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Question</TableHead>
//               <TableHead>Options</TableHead>
//               <TableHead>Correct Answer</TableHead>
//               <TableHead>Category</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {questions.map((question) => (
//               <TableRow key={question.id}>
//                 <TableCell>{question.text}</TableCell>
//                 <TableCell>
//                   {question.options.map((option) => option.text).join(", ")}
//                 </TableCell>
//                 <TableCell>{question.correctAnswer}</TableCell>
//                 <TableCell>{question.category}</TableCell>
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

// export default CreateQuestionPage;



import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { SearchParams } from 'nuqs';
import { Suspense } from 'react';
import ProductListingPage from './_component/question-listing';
import QuestionsTableAction from './_component/questions-tables';
import QuestinsList from './_component/question-listing'

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard: Questions',
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  const key = serialize({ ...searchParams });

  return (
    <PageContainer>
      <QuestinsList />
      {/* <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Products"
            description="Manage products (Server side table functionalities.)"
          />
          <Link
            href="/dashboard/product/new"
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <QuestionsTableAction />
        <Suspense
          key={key}
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          <ProductListingPage />
        </Suspense>
      </div> */}
    </PageContainer>
  );
}
