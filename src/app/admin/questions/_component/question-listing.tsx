"use client"
import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useGetAllQuestion } from "@/lib/queries/Questions/read-question-list";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import QuestionsTable from "./questions-tables";

const QuestionListingPage = () => {
  const { data, isLoading } = useGetAllQuestion();
  const questionCount = data?.data?.length ?? 0;

  console.log("Data for the questions00 " , data)

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Questions (10)`}
            description="Manage Questions (Server side table functionalities.)"
          />
          <Link
            href={"/admin/questions/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
          <Separator />
          <QuestionsTable data={data?.data || []} totalData={questionCount} />
      </div>
    </PageContainer>
  );
}

export default QuestionListingPage;
