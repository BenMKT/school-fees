import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const timetable = [
  { time: '08:00', subject: 'Mathematics', room: 'Room 12' },
  { time: '09:00', subject: 'English', room: 'Room 8' },
  { time: '10:30', subject: 'Science', room: 'Lab 2' },
  { time: '12:00', subject: 'History', room: 'Room 15' },
  { time: '14:00', subject: 'Physical Education', room: 'Sports Hall' },
];

export default function ParentTimetablePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Timetable
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Personalized class schedule synced from the school timetable.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Schedule</CardTitle>
          <CardDescription>Emma Johnson · Grade 8</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {timetable.map((period) => (
            <div
              key={period.time}
              className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg"
            >
              <span className="font-mono text-sm text-muted-foreground">
                {period.time}
              </span>
              <span className="font-medium">{period.subject}</span>
              <span className="text-sm text-muted-foreground">
                {period.room}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
