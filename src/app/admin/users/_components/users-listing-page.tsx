import PageContainer from "@/components/common/page-container";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import EmployeeTable from "./users-tables";
import { mockUsers } from "@/constants/data";

const UsersListPage = () => {
  return <PageContainer scrollable>
    <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Users (10)`}
            description="Manage Users (Server side table functionalities.)"
          />
          <Link
            href={'/admin/users/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <EmployeeTable data={mockUsers} totalData={10} />
      </div>
  </PageContainer>;
};

export default UsersListPage;
