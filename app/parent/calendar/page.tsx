'use client';

import { ParentSidebar } from '@/components/parent-sidebar';
import { ParentHeader } from '@/components/parent-header';
import { SchoolActivities } from '@/components/school-activities';

export default function ParentCalendarPage() {
  return (
    <div className="flex h-screen">
      <ParentSidebar />
      <div className="flex-1 flex flex-col">
        <ParentHeader />
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
            <p className="text-muted-foreground">
              Upcoming exams, events, and school activities.
            </p>
          </div>
          <SchoolActivities />
        </div>
      </div>
    </div>
  );
}
