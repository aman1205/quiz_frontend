'use client';
import { useEffect, useState } from "react";
import MainHeder from "@/components/component/Quiz/MainHeder";
import { QuizCard } from "@/components/component/Quiz/QuizCard";
import PageContainer from "@/components/layout/page-container";
import { useGetQuiz } from "@/lib/queries/Quiz/read-quiz";
import { Quiz } from "@/lib/Types/interface";

const Page = () => {
  const { data,isLoading } = useGetQuiz();
  console.log(data);

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
              {!isLoading && data.map((quiz:Quiz) => (
                <QuizCard
                  key={quiz.id}
                  id={quiz.id}
                  title={quiz.title}
                  description={quiz.description}
                  questions={quiz.questionsList?.length}
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

export default Page;
