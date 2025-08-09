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

const enrollmentData = [
  { year: '2020', students: 980, retention: 92.5 },
  { year: '2021', students: 1050, retention: 94.2 },
  { year: '2022', students: 1120, retention: 95.1 },
  { year: '2023', students: 1180, retention: 96.3 },
  { year: '2024', students: 1247, retention: 97.1 },
];

export function EnrollmentTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enrollment Trends</CardTitle>
        <CardDescription>
          Student enrollment and retention rates over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            students: {
              label: 'Students',
              color: 'hsl(var(--chart-1))',
            },
            retention: {
              label: 'Retention Rate',
              color: 'hsl(var(--chart-2))',
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={enrollmentData}>
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip content={<ChartTooltipContent />} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="students"
                stroke="#3b82f6"
                strokeWidth={3}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="retention"
                stroke="#10b981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
