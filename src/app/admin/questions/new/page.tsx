import { useCreateQuestion } from '@/lib/mutations/Questions/create-question';
import QuestionForm from '../_component/question-form'
import toast from 'react-hot-toast';
const Page = () => {
  const { mutate} = useCreateQuestion();
  const handleSubmit=(values)=>{
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
