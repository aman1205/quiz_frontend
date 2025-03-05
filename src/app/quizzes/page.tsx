import MainHeder from "@/components/component/Quiz/MainHeder";
import { QuizCard } from "@/components/component/Quiz/QuizCard";
import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";

const page = () => {
  const featuredQuizzes = [
    {
      id: 1,
      title: "General Knowledge Challenge",
      description:
        "Test your knowledge across various topics from science to pop culture",
      questions: 20,
      timeInMinutes: 15,
      participants: 2500,
      category: "General",
      difficulty: "Intermediate" as const,
      featured: true,
    },
    {
      id: 2,
      title: "Science Quiz Master",
      description:
        "Explore the wonders of physics, chemistry, and biology in this comprehensive quiz",
      questions: 25,
      timeInMinutes: 20,
      participants: 1800,
      category: "Science",
      difficulty: "Hard" as const,
      featured: true,
    },
    {
      id: 3,
      title: "History Through Ages",
      description:
        "Journey through time and test your knowledge of historical events and figures",
      questions: 18,
      timeInMinutes: 15,
      participants: 1200,
      category: "History",
      difficulty: "Intermediate" as const,
      featured: true,
    },
  ];

  return (
    <>
      <MainHeder />
      <PageContainer>
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to QuizMaster
          </h1>
          <p className="text-xl text-muted-foreground mb-6 text-center">
            Test your knowledge with our interactive quizzes!
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                id={quiz.id}
                title={quiz.title}
                description={quiz.description}
                questions={quiz.questions}
                timeInMinutes={quiz.timeInMinutes}
                participants={quiz.participants}
                category={quiz.category}
                difficulty={quiz.difficulty}
                featured={quiz.featured}
              />
            ))}
          </div>
        </section>
      </PageContainer>
    </>
  );
};

export default page;
