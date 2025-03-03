import PageContainer from "@/components/layout/page-container";
import QuestinsList from "./_component/question-listing";

export const metadata = {
  title: "Dashboard: Questions",
};

export default async function Page() {
  return (
    <PageContainer>
      <QuestinsList />
    </PageContainer>
  );
}
