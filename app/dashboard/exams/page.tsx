'use client';

import { ClipboardList } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { AcademicPerformance } from '@/components/academic-performance';

export default function ExamsPage() {
  return (
    <ModulePageShell
      title="Examination Management"
      description="Schedule exams, input results, generate instant reports, and visualize performance with graphs."
      badge="Academic"
      icon={ClipboardList}
    >
      <AcademicPerformance />
    </ModulePageShell>
  );
}
