import { useState } from "react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { getQuiz } from "@/lib/queries/Quiz/read-quiz";
import PageLoader from "@/components/PageLoader";
import NoDataScreen from '@/components/common/NoDataScreen';

const Main = () => {
  const { data: session } = useSession();
  const {
    data: quizData,
    isLoading: isQuizLoading,
  } = getQuiz();

  const questions = quizData?.data?.[0]?.questions || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedQuestions, setMarkedQuestions] = useState<Set<number>>(new Set());
  const [skippedQuestions, setSkippedQuestions] = useState<Set<number>>(new Set());
  const [savedQuestions, setSavedQuestions] = useState<Set<number>>(new Set());
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleMarkForReview = () => {
    setMarkedQuestions((prev) => new Set(prev).add(currentQuestionIndex));
  };

  const handleSkip = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setSkippedQuestions((prev) => new Set(prev).add(currentQuestionIndex));
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSaveAndNext = () => {
    setSavedQuestions((prev) => new Set(prev).add(currentQuestionIndex));
    handleNext();
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const handleSubmitQuiz = () => {
    const payload = {
      quizId: quizData?.data?.[0]?.id,
      userId: session?.user?.id ,
      answers: Object.entries(selectedOptions).map(([questionId, selectedAnswer]) => ({
        questionId,
        selectedAnswer,
      })),
    };
    console.log("Payload:", payload);
    setIsModalOpen(false);
  };


  return (
    <div className="p-4 h-full flex flex-col">
      <PageLoader isLoading={isQuizLoading} />
      {
        quizData ? (
          <div className="flex gap-4 h-full flex-grow">
          <div className="w-10/12 shadow-xl flex flex-col bg-[#F3F3F3] rounded-lg">
            <header className="flex justify-between items-center bg-[#EEEEEE] rounded-xl p-4">
              <div>
                <h6 className="text-[#AAAAAA] text-xs">Current Category</h6>
                <h2 className="text-[#002C9C]">{currentQuestion?.category}</h2>
              </div>
              <div>
                <p className="text-[#AAAAAA]">Time left</p>
                <h3 className="text-[#002C9C]">39:30</h3>
              </div>
            </header>
            <div className="mt-4 p-2 flex-grow">
              <div>
                <p>
                  <span>Q{currentQuestionIndex + 1}: </span>
                  {currentQuestion?.text}
                </p>
              </div>
              <div className="mt-4">
                <p>Options</p>
                <div className="mt-2">
                  {currentQuestion?.options?.map((option: string, index: number) => (
                    <div
                      key={index}
                      className={`flex items-center mb-2 w-full py-2 px-4 rounded-xl border-2 cursor-pointer hover:border-blue-500 ${
                        selectedOptions[currentQuestion.id] === option
                          ? "border-1 border-[#AD00FF]"
                          : ""
                      }`}
                      onClick={() => handleOptionChange(option)}
                    >
                      <input
                        type="radio"
                        id={`option-${index}`}
                        name="option"
                        value={option}
                        checked={selectedOptions[currentQuestion.id] === option}
                        onChange={() => handleOptionChange(option)}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`option-${index}`}
                        className="text-md font-semibold font-sans"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end mt-4 p-4">
              <div className="flex gap-16">
                <Button
                  className={`bg-[#AD00FF] text-white py-2 px-4 rounded-lg hover:bg-[#5151E0] ${
                    markedQuestions.has(currentQuestionIndex) ? "opacity-60" : ""
                  }`}
                  onClick={handleMarkForReview}
                  disabled={markedQuestions.has(currentQuestionIndex)}
                >
                  Mark For Review
                </Button>
                <Button
                  className="text-white py-2 px-4"
                  variant={"destructive"}
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              </div>
              <Button
                className="bg-[#0B6DD3] text-white py-2 px-4 rounded-lg hover:bg-[#5151E0]"
                onClick={handleSaveAndNext}
              >
                Save and Next
              </Button>
            </div>
          </div>
          <div className="w-1/5 shadow-xl p-3 flex flex-col bg-[#F3F3F3] rounded-lg">
            <div className="bg-[#EEEEEE] p-1 rounded-sm mt-2">
              <h2>Questions</h2>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              {questions.map((question:any, index:any) => (
                <p
                  key={question.id}
                  className={`w-10 h-10 text-center p-2 cursor-pointer ${
                    index === currentQuestionIndex
                      ? "bg-[#AD00FF] text-white"
                      : "bg-[#EEEEEE]"
                  } ${
                    markedQuestions.has(index) ? "border-2 border-[#AD00FF]" : ""
                  } ${skippedQuestions.has(index) ? "bg-red-500" : ""} ${
                    savedQuestions.has(index) ? "bg-green-400" : ""
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  {index + 1}
                </p>
              ))}
            </div>
            <div className="w-full mt-4 flex-grow flex items-end justify-center">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className=" bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
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
            </div>
          </div>
        </div>
        ) : <NoDataScreen />
      }
    </div>
  );
};

export default Main;
