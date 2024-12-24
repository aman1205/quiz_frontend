import AppSidebar from '@/components/common/AppSidebar';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NuqsAdapter >
      <AppSidebar>{children}</AppSidebar>
      </NuqsAdapter>
    </>
  );
}