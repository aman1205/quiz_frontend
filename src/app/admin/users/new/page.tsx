"use client";
import { useCreateUser } from "@/lib/mutations/User/create-user-mutations";
import EmployeeForm from "../_components/users-form";
import toast from "react-hot-toast";

const NewUserPage = () => {
  const { mutate: createUserMutation } = useCreateUser();

  const handleSubmit = (values: any) => {
    createUserMutation(values, {
      onSuccess: () => {
        toast.success("User created successfully", { duration: 3000 });
        // router.push('/admin/users');
      },
      onError: (error) => {
        toast.error("Error creating user", { duration: 3000 });
      },
    });
  };

  return (
    <div className="p-6">
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewUserPage;
