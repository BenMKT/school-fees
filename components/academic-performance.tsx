'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Badge } from '@/components/ui/badge';

const performanceData = [
  { subject: 'Mathematics', average: 85.2, improvement: '+3.2%' },
  { subject: 'English', average: 88.7, improvement: '+1.8%' },
  { subject: 'Science', average: 82.4, improvement: '+4.1%' },
  { subject: 'History', average: 86.9, improvement: '+2.3%' },
  { subject: 'Geography', average: 84.1, improvement: '+1.9%' },
  { subject: 'Art', average: 91.3, improvement: '+0.8%' },
  { subject: 'Physical Ed', average: 89.6, improvement: '+2.1%' },
];

const termProgress = [
  { term: 'Term 1', math: 82, english: 85, science: 79, history: 84 },
  { term: 'Term 2', math: 84, english: 87, science: 81, history: 86 },
  { term: 'Term 3', math: 85, english: 89, science: 82, history: 87 },
  { term: 'Current', math: 85.2, english: 88.7, science: 82.4, history: 86.9 },
];

export function AcademicPerformance() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Subject Performance Overview</CardTitle>
          <CardDescription>
            Average grades and improvement across all subjects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {performanceData.map((subject) => (
              <div
                key={subject.subject}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{subject.subject}</h4>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {subject.improvement}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {subject.average}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Class Average
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Academic Progress Trends</CardTitle>
          <CardDescription>
            Performance trends across terms for core subjects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              math: { label: 'Mathematics', color: '#8b5cf6' },
              english: { label: 'English', color: '#06b6d4' },
              science: { label: 'Science', color: '#10b981' },
              history: { label: 'History', color: '#f59e0b' },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={termProgress}>
                <XAxis dataKey="term" />
                <YAxis domain={[75, 95]} />
                <Tooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="math"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="english"
                  stroke="#06b6d4"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="science"
                  stroke="#10b981"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="history"
                  stroke="#f59e0b"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Students with highest grades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Sarah Johnson', grade: 'Grade 12', average: 96.8 },
                { name: 'Michael Chen', grade: 'Grade 11', average: 95.2 },
                { name: 'Emma Davis', grade: 'Grade 10', average: 94.7 },
                { name: 'David Wilson', grade: 'Grade 12', average: 94.1 },
                { name: 'Lisa Anderson', grade: 'Grade 11', average: 93.9 },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
              ].map((student, index) => (
                <div
                  key={student.name}
                  className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                >
                  <div>
                    <div className="font-medium">{student.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {student.grade}
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                    {student.average}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Rate</CardTitle>
            <CardDescription>Overall school attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                94.7%
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Average Attendance
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                +2.1% vs last term
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Graduation Rate</CardTitle>
            <CardDescription>Students completing programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98.3%</div>
              <div className="text-sm text-muted-foreground mb-4">
                Graduation Rate
              </div>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                +1.2% vs last year
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
