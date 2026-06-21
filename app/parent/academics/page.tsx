'use client';

import { ParentSidebar } from '@/components/parent-sidebar';
import { ParentHeader } from '@/components/parent-header';
import { AcademicPerformance } from '@/components/academic-performance';

export default function ParentAcademicsPage() {
  return (
    <div className="flex h-screen">
      <ParentSidebar />
      <div className="flex-1 flex flex-col">
        <ParentHeader />
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Academics</h1>
            <p className="text-muted-foreground">
              Exam results, performance trends, and subject reports for your
              children.
            </p>
          </div>
          <AcademicPerformance />
        </div>
      </div>
    </div>
  );
}
