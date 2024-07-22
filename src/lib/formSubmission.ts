import axios from "axios";
import { z } from "zod";
import { questionSchema } from "./schema/FormSchema";

const handleSubmit = async (values: z.infer<typeof questionSchema>, form: any) => {
  console.log(values);
  try {
    const baseurl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.post(`${baseurl}/question`, values);
    if (response.status === 201) {
      alert("Question created successfully");
      form.reset();
      console.log(response.data);
    }
  } catch (error) {
    console.error("Error creating question:", error);
  }
};

export { handleSubmit };
