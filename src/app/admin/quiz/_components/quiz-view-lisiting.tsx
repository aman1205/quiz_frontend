import PageContainer from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const QuizListPage = () => {
  return (
    <PageContainer>
      <div className="space-y-4">
        <div>
          <Heading title="Quiz" description="nfgfguifk;gg" />
          <Link
            href={"/admin/quiz/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        //table
      </div>
    </PageContainer>
  );
};
export default QuizListPage;
