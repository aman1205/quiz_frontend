import dynamic from "next/dynamic";
import { QuestionQuizType } from "@/lib/Types/QuestionType"; 
import { get } from "http";
import { getQuestions,Question } from "@/lib/getQuestions";

// Dynamically import the client-side component
const QuizForm = dynamic(() => import("@/components/component/Forms/QuizForm"), {
  ssr: false,
});

const Page = async () => {
  // Fetch initial data here (for example, from a database or third-party API)
  const sampleQuestions: Question[] = await getQuestions () 
  

  return <QuizForm sampleQuestions={sampleQuestions} />;
};

export default Page;
