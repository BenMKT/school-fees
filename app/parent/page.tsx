import { ParentSidebar } from '@/components/parent-sidebar';
import { ParentHeader } from '@/components/parent-header';
import { ParentDashboard } from '@/components/parent-dashboard';

export default function ParentPortalPage() {
  return (
    <div className="flex h-screen">
      <ParentSidebar />
      <div className="flex-1 flex flex-col">
        <ParentHeader />
        <div className="flex-1 p-6 overflow-y-auto">
          <ParentDashboard />
        </div>
      </div>
    </div>
  );
}
