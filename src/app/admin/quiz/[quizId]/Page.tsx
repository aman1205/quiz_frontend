import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { quizId } = useParams();

  return <div>{quizId}</div>;
};

export default Page;
