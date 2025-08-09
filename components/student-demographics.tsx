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
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const gradeDistribution = [
  { grade: 'Grade 6', students: 180, color: '#8b5cf6' },
  { grade: 'Grade 7', students: 195, color: '#06b6d4' },
  { grade: 'Grade 8', students: 210, color: '#10b981' },
  { grade: 'Grade 9', students: 185, color: '#f59e0b' },
  { grade: 'Grade 10', students: 175, color: '#ef4444' },
  { grade: 'Grade 11', students: 165, color: '#8b5cf6' },
  { grade: 'Grade 12', students: 137, color: '#06b6d4' },
];

const genderDistribution = [
  { name: 'Female', value: 648, color: '#ec4899' },
  { name: 'Male', value: 599, color: '#3b82f6' },
];

export function StudentDemographics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Grade Distribution</CardTitle>
          <CardDescription>Student enrollment by grade level</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              students: {
                label: 'Students',
                color: 'hsl(var(--chart-1))',
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gradeDistribution}>
                <XAxis dataKey="grade" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="students" radius={[4, 4, 0, 0]}>
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gender Distribution</CardTitle>
          <CardDescription>Student population by gender</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              female: { label: 'Female', color: '#ec4899' },
              male: { label: 'Male', color: '#3b82f6' },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="flex justify-center space-x-6 mt-4">
            {genderDistribution.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full bg-[${item.color}]`} />
                <span className="text-sm font-medium">
                  {item.name}: {item.value} (
                  {((item.value / 1247) * 100).toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
