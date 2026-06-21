'use client';

import { Briefcase } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { HRManagement } from '@/components/hr-management';
import { StaffOverview } from '@/components/staff-overview';

export default function HRPage() {
  return (
    <ModulePageShell
      title="HR Management"
      description="Streamline payroll, benefits, and staff records. Ensure compliance and efficiency."
      badge="Finance"
      icon={Briefcase}
    >
      <HRManagement />
      <StaffOverview />
    </ModulePageShell>
  );
}
