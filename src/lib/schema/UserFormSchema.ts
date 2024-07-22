import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  rollNo: z.string().regex(/^23\d+$/, "Roll number must be a number").min(1, "Roll number is required"),
  studentNo: z.string().regex(/^\d+$/, "Student number must be a number").min(1, "Student number is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  role: z.string().min(1, "Role is required"),
  branch: z.string().min(1, "Branch is required"),
  schooling: z.string().min(1, "Schooling is required"),
  section: z.string().min(1, "Section is required"),
});

const useUserForm = () => {
  return useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      name: "",
      rollNo: "",
      studentNo: "",
      dob: "",
      role: "",
      branch: "",
      schooling: "",
      section: "",
    },
  });
};

export { userSchema  , useUserForm} ;