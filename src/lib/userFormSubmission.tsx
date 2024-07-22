import axios from "axios";
import { z } from "zod";
import { userSchema } from "./schema/UserFormSchema";
 const userFormSubmission = async (values:z.infer<typeof userSchema>  , form:any) => {
  try {
    console.log("values", values);
    const baseurl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.post(`${baseurl}/users`, values);
    if (response.status === 200) {
      alert("User created successfully");
      form.reset();
      console.log(response.data);
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export { userFormSubmission };
