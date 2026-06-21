'use client';

import { Calendar } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { SchedulingCalendar } from '@/components/scheduling-calendar';

export default function SchedulingPage() {
  return (
    <ModulePageShell
      title="Scheduling"
      description="Automate class, exam, and event scheduling. Eliminate manual tracking."
      badge="Operations"
      icon={Calendar}
    >
      <SchedulingCalendar />
    </ModulePageShell>
  );
}
