"use client";
import React, { useEffect, useState } from "react";
import StartQuiz from "@/components/component/Quiz/QuizStar";
import Instruction from "@/components/component/Quiz/Instruction";
import Thanks from "@/components/component/Quiz/Thanks";
import Header from "@/components/component/Quiz/Header";
import Main from "@/components/component/Quiz/Main";
import { useGetQuizById } from "@/lib/queries/Quiz/read-quiz-by-id";
import { useParams } from "next/navigation";
import { Quiz } from "@/lib/Types/interface";

const QuizzesPage: React.FC = () => {
  const { quizId } = useParams();
  const { data, isLoading } = useGetQuizById(quizId as string);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0); // Time left in seconds
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<any[]>([]);

  //Lets handle this Answered Skipped Marked for Review Current Question Not Visited
  const [markedQuestions, setMarkedQuestions] = useState<Set<number>>(
    new Set()
  );
  const [skippedQuestions, setSkippedQuestions] = useState<Set<number>>(
    new Set()
  );
  const [savedQuestions, setSavedQuestions] = useState<Set<number>>(new Set());
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const currentQuestion = questions[questionIndex];

  console.log("Marked Questions: ", markedQuestions);  
  useEffect(() => {
    if (data) {
      setQuiz(data);
      setQuestions(data.questionsList);
      setTimeLeft(data.timeInMinutes * 60); // Convert minutes to seconds
    }
  }, [data]);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop the timer when timeLeft reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [timeLeft]);

  // Format timeLeft into MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (!quiz) {
    return (
      <div className="flex justify-center items-center h-screen">
        No quiz data available.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const handleMarkForReview = () => {
    // Logic to mark the question for review
    console.log("Marked for review");
    setMarkedQuestions((prev) => new Set(prev).add(questionIndex));
  };
  const handleSkip = () => {
    // Logic to skip the question
    console.log("Skipped question");
    setSkippedQuestions((prev) => new Set(prev).add(questionIndex));
    setQuestionIndex((prev) => (prev + 1) % questions.length); // Move to the next question

  };
  const handleSaveAndNext = () => {
    // Logic to save the answer and go to the next question
    console.log("Saved and moved to next question");
    setSavedQuestions((prev) => new Set(prev).add(questionIndex));
    setQuestionIndex((prev) => (prev + 1) % questions.length); // Move to the next question

  };
  const handleSubmitQuiz = () => {
    // Logic to submit the quiz
    console.log("Quiz submitted");
  };
  const handleQuestionClick = (index: number) => {
    setQuestionIndex(index);
  };

  return (
    <div className=" bg-[#E7E7E7] h-screen flex flex-col">
      <Header />
      <div className="">
        {/* <Main /> */}
        {/* <Thanks /> */}
        <section id="quiz-interface" className="bg-gray-50 min-h-screen py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white rounded-lg shadow-sm p-6 order-2 md:order-1">
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-md font-medium">
                    Category: {quiz?.category}
                  </div>
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md font-medium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Time Left: {formatTime(timeLeft)}
                  </div>
                </div>

                {currentQuestion && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      Question {questionIndex + 1}
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                      {currentQuestion.text}
                    </p>

                    {currentQuestion.image_url && (
                      <img
                        src={currentQuestion?.image_url}
                        alt="Question Image"
                        className="mb-4 rounded-md shadow-sm"
                      />
                    )}
                    {
                      <div className="space-y-4">
                        {currentQuestion.options.map(
                          (option: any, index: number) => (
                            <div key={index} className="flex items-start">
                              <input
                                type="radio"
                                id={`option${index}`}
                                name="question"
                                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`option${index}`}
                                className="ml-3 block text-gray-700"
                              >
                                {option}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    }
                  </div>
                )}

                <div className="flex flex-wrap justify-between items-center mt-10">
                  <div className="flex flex-wrap gap-3">
                    <button
                      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center"
                      onClick={handleMarkForReview}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                      Mark for Review
                    </button>

                    <button
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center"
                      onClick={handleSkip}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                      Skip
                    </button>

                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                      onClick={handleSaveAndNext}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Save & Next
                    </button>
                  </div>

                  <button
                    className="px-6 py-2 mt-4 md:mt-0 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                    onClick={handleSubmitQuiz}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Submit Quiz
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 md:w-72 order-1 md:order-2">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Question Navigator
                </h3>

                <div className="mb-3 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Total: {questions.length} Questions
                  </div>
                  <div className="text-sm text-gray-600">Attempted: 4</div>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-6">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      className={`w-full py-2 rounded-md font-medium ${
                        markedQuestions.has(index)
                          ? "bg-purple-100 text-purple-800"
                          : skippedQuestions.has(index)
                          ? "bg-red-100 text-red-800"
                          : index === questionIndex
                          ? "bg-indigo-100 border-2 border-indigo-500 text-indigo-800"
                          : savedQuestions.has(index)
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                      }`}
                      onClick={() => handleQuestionClick(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                  {/* <button className="w-full py-2 bg-green-100 text-green-800 font-medium rounded hover:bg-green-200 transition-colors">
                    1
                  </button>
                  <button className="w-full py-2 bg-green-100 text-green-800 font-medium rounded hover:bg-green-200 transition-colors">
                    2
                  </button>
                  <button className="w-full py-2 bg-purple-100 text-purple-800 font-medium rounded hover:bg-purple-200 transition-colors">
                    3
                  </button>
                  <button className="w-full py-2 bg-green-100 text-green-800 font-medium rounded hover:bg-green-200 transition-colors">
                    4
                  </button>
                  <button className="w-full py-2 bg-indigo-100 text-indigo-800 font-medium rounded border-2 border-indigo-500">
                    5
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    6
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    7
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    8
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    9
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    10
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    11
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    12
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    13
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    14
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    15
                  </button>
                  <button className="w-full py-2 bg-red-100 text-red-800 font-medium rounded hover:bg-red-200 transition-colors">
                    16
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    17
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    18
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    19
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    20
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    21
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    22
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    23
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    24
                  </button>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200 transition-colors">
                    25
                  </button> */}
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Legend:
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">Answered</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-100 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">Skipped</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-100 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">
                      Marked for Review
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-indigo-100 border-2 border-indigo-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">
                      Current Question
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-100 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">Not Visited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuizzesPage;
