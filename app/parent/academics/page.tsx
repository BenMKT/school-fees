import { AcademicPerformance } from '@/components/academic-performance';

export default function ParentAcademicsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Academics
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Exam results, performance trends, and subject reports for your
          children.
        </p>
      </div>
      <AcademicPerformance />
    </div>
  );
}
