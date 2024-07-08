"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
// import { prompt } from "react-router";
// import { Prompt } from 'react-router';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  category: string; // Add category property to questions
}

const questions: Question[] = [
  {
    id: 1,
    question: "Question 1?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: "Option 1",
    category: "category1",
  },
  {
    id: 2,
    question: "Question 2?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: "Option B",
    category: "category2",
  },{
    id: 3,
    question: "Question 3?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: "Option B",
    category: "category2",
  },
  // Add more questions with categories...
];

const QuizPage: React.FC = () => {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState<number>(51 * 60); // 40 minutes in seconds
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerChange = (selectedOption: string) => {
    setAnswers({ ...answers, [currentQuestion]: selectedOption });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    // Submit quiz logic
    console.log("Quiz submitted:", answers);
    router.push("/quizzes/thanks", { scroll: false });
    document.exitFullscreen();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-center items-center p-6">
      {/* <prompt when={isQuizStarted} message="Are you sure you want to leave the quiz? Your progress will be lost." /> */}

      <div className="w-full max-w-3xl bg-white shadow p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center justify-between w-full">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Question {currentQuestion + 1} of 40 | General Knowledge
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Time Remaining: {formatTime(timeLeft)}
            </div>
          </div>
          {/* <div className="text-4xl font-bold">
            Time Left: {formatTime(timeLeft)}
          </div>
          <div className="text-2xl font-bold">
            Question {currentQuestion + 1} of {questions.length}
          </div> */}
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            {questions[currentQuestion].question}
          </p>
          <div className="mt-2 ">
            {questions[currentQuestion]?.options.map((option, index) => (
              //   <div key={index} className="mb-2">
              //     <label className="flex items-center">
              //       <input
              //         type="radio"
              //         name={`question-${currentQuestion}`}
              //         value={option}
              //         checked={answers[currentQuestion] === option}
              //         onChange={handleAnswerChange}
              //         className="mr-2"
              //       />
              //       {option}
              //     </label>
              //   </div>
              <p
                key={index}
                onClick={() => handleAnswerChange(option)}
                className={`py-2 px-4 mb-2 rounded-xl border-2 text-md  font-semibold font-sans	 ${
                  answers[currentQuestion] === option
                    ? "bg-[#5151E0] text-white "
                    : "bg-white text-gray-800 outline-1 hover:bg-white hover:border-[#5151E0] hover:text-[#5151E0]"
                } `}
              >
                {option}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Back
          </Button>
          {currentQuestion < questions.length - 1 ? (
            <Button
              onClick={handleNext}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Next
            </Button>
          ) : (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                >
                  Submit
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Confirm Submission</DialogTitle>
                <DialogDescription>
                  Are you sure you want to submit the quiz?
                </DialogDescription>
                <DialogFooter>
                  <Button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmitQuiz}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
      {/* <div className="text-gray-600 text-2xl font-semibold">
        Time left: {formatTime(timeLeft)}
      </div> */}
    </div>
  );
};

export default QuizPage;
