"use client";
import React, { useState } from "react";
import StartQuiz from "@/components/component/Quiz/QuizStar";
import Instruction from "@/components/component/Quiz/Instruction";
import Thanks from "@/components/component/Quiz/Thanks";
import Header from "@/components/component/Quiz/Header";
import Main from "@/components/component/Quiz/Main";
import { useSession } from "next-auth/react";

const QuizzesPage: React.FC = () => {
  const { data:session } = useSession();
  console.log( "UseSession",session);
  // const [phase, setPhase] = useState<
  //   "start" | "quiz" | "instruction" | "thanks"
  // >("start");

  // const handleStartQuiz = () => {
  //   setPhase("instruction");
  // };

  // const handleQuiz = () => {
  //   setPhase("quiz");
  // };
  // const handleCompleteQuiz = () => {
  //   setPhase("thanks");
  // };

  return (
    <div className="p-4 bg-[#E7E7E7] h-screen flex flex-col">
    <Header />
    <div className="mt-2 flex-grow flex flex-col">
      <Main />
      {/* <Thanks /> */}
    </div>
  </div>

    // <div>
    //   {phase === "start" && <StartQuiz onStart={handleStartQuiz} />}
    //   {phase === "instruction" && <Instruction onQuiz={handleQuiz} />}
    //   {phase === "quiz" && <Quiz onComplete={handleCompleteQuiz} />}
    //   {phase === "thanks" && <Thanks />}
    // </div>
  );
};

export default QuizzesPage;
