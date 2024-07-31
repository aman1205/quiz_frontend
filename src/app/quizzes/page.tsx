"use client";
import React, { useState } from "react";
import StartQuiz from "@/components/component/Quiz/QuizStar";
import Quiz from "@/components/component/Quiz/QuizTest";
import Instruction from "@/components/component/Quiz/Instruction";
import Thanks from "@/components/component/Quiz/Thanks";

const QuizzesPage: React.FC = () => {
  const [phase, setPhase] = useState<
    "start" | "quiz" | "instruction" | "thanks"
  >("start");

  const handleStartQuiz = () => {
    setPhase("instruction");
  };

  const handleQuiz = () => {
    setPhase("quiz");
  };
  const handleCompleteQuiz = () => {
    setPhase("thanks");
  };

  return (
    <div>
      {phase === "start" && <StartQuiz onStart={handleStartQuiz} />}
      {phase === "instruction" && <Instruction onQuiz={handleQuiz} />}
      {phase === "quiz" && <Quiz onComplete={handleCompleteQuiz} />}
      {phase === "thanks" && <Thanks />}
    </div>
  );
};

export default QuizzesPage;
