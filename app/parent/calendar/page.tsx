import { SchoolActivities } from '@/components/school-activities';

export default function ParentCalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Calendar
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Upcoming exams, events, and school activities.
        </p>
      </div>
      <SchoolActivities />
    </div>
  );
}
