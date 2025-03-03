"use client"
import { useParams } from "next/navigation";
import QuestionForm from "../_component/question-form";
import { getQuestionDetails } from "@/lib/queries/Questions/read-question-details";
import { useUpdateQuestion } from "@/lib/mutations/Questions/update-question-mutation";
import toast from "react-hot-toast";
const EditQuestion = (value: any) => {
  const { questionId } = useParams();
  const { data, isLoading } = getQuestionDetails(questionId as string);
  const { mutate } = useUpdateQuestion();

  const handleUpdate = (values: any) => {
    mutate(
      { id: questionId, ...values },
      {
        onSuccess: () => {
          toast.success("User updated successfully");
          console.log("User updated successfully");
        },
        onError: (error) => {
          toast.error("Error updating user");
          console.error("Error updating user:", error);
        },
      }
    );
  };

  return (
    <div className="p-6">
      <QuestionForm
        initialValues={data?.data}
        onSubmit={handleUpdate}
        isLoading={isLoading}
      />
    </div>
  );
};

export default EditQuestion;
