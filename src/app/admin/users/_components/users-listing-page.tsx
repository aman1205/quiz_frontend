"use client";
import PageContainer from "@/components/common/page-container";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import EmployeeTable from "./users-tables";
import { useGetAllUser } from "@/lib/queries/User/read-all-user-list";

const UsersListPage = () => {
  const { data, isLoading } = useGetAllUser();
  const userCount = data?.data?.length ?? 0;


  return (
    <PageContainer scrollable>

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Users ${userCount}`}
            description="Manage Users (Server side table functionalities.)"
          />
          <Link
            href={"/admin/users/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <EmployeeTable data={data?.data || []} totalData={userCount} />
      </div>
    </PageContainer>
  );
};

export default UsersListPage;
