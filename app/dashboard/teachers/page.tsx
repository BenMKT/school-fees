'use client';

import { UserCheck } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { StaffOverview } from '@/components/staff-overview';

export default function TeachersPage() {
  return (
    <ModulePageShell
      title="Teachers Management"
      description="Secure interface connecting administrators, teachers, parents, and students."
      badge="People"
      icon={UserCheck}
    >
      <StaffOverview />
    </ModulePageShell>
  );
}
