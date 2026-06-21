'use client';

import { CalendarDays } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { TimetableBuilder } from '@/components/timetable-builder';

export default function TimetablePage() {
  return (
    <ModulePageShell
      title="Timetable Management"
      description="Drag-and-drop timetabling for classes, teachers, and rooms. Students and staff access personalized timetables online."
      badge="Academic"
      icon={CalendarDays}
    >
      <TimetableBuilder />
    </ModulePageShell>
  );
}
