// import { getAllQuestion } from "@/lib/queries/Questions/read-question-list";
// import QuestionForm from "./question-form";
// import { Question } from "@/types/question"; // Assuming you have types defined

// interface QuestionViewPageProps {
//   questionId: string; // Renamed from productId to match the context
// }

// export default async function QuestionViewPage({
//   questionId,
// }: QuestionViewPageProps) {
//   let question: Question | null = null;
//   const pageTitle =
//     questionId === "new" ? "Create New Question" : "Edit Question";

//   if (questionId !== "new") {
//     try {
//       const { data: questionList, isLoading } =  getAllQuestion();

//       if (isLoading) {
//         return <div>Loading...</div>;
//       }

//       question =
//         questionList?.data?.find((q: Question) => q.id === questionId) ?? null;
//     } catch (error) {
//       console.error("Error fetching question:", error);
//       throw new Error("Failed to fetch question data");
//     }
//   }

//   return <QuestionForm initialData={question} pageTitle={pageTitle} />;
// }
import QuestinForm from "./question-form";
import PageContainer from "@/components/layout/page-container";

export default function EmployeeViewPage() {
  return (
    <PageContainer>
      <QuestinForm />
    </PageContainer>
  );
}
