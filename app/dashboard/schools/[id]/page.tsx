import { SchoolsDashboard } from '@/components/schools-dashboard';

interface SchoolDashboardPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SchoolDashboardPage({
  params,
}: SchoolDashboardPageProps) {
  const { id } = await params;

  return (
    <div className="flex-1 p-6">
      <SchoolsDashboard schoolId={id} />
    </div>
  );
}
