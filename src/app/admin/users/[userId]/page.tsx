"use client";
import { useParams } from "next/navigation";

import { getUserDetails } from "@/lib/queries/User/read-user-details";
import { useUpdateUser } from "@/lib/mutations/User/update-user-mutations";

import EmployeeForm from "../_components/users-form";
import toast from "react-hot-toast";

const EditUserPage = () => {
  const { userId } = useParams();
  const { data, isLoading } = getUserDetails(userId as string);
  const { mutate: updateUser } = useUpdateUser();

  const handleUpdate = (values: any) => {
    updateUser(
      { id: userId, ...values },
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

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <EmployeeForm
        initialValues={data?.data}
        onSubmit={handleUpdate}
        isLoading={isLoading}
      />
    </div>
  );
};

export default EditUserPage;
