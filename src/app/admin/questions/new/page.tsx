import { useCreateQuestion } from '@/lib/mutations/Questions/create-question';
import QuestionForm from '../_component/question-form'
import toast from 'react-hot-toast';
import { z } from 'zod';
import {quizFormSchema} from '../_component/question-form'
const Page = () => {
  const { mutate} = useCreateQuestion();
  const handleSubmit=(values:z.infer<typeof quizFormSchema>)=>{
      mutate(values ,{
        onSuccess:()=>{
          toast.success("Question Created Successfuly")
        },
        onError:(err)=>{
          toast.error(err.message)
        }
      })
  }
  return <QuestionForm onSubmit={handleSubmit} />
};

export default Page;
