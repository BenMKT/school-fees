'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface PaymentBreakdownChartProps {
  studentId: string;
}

// Mock student payment breakdown data
const studentsPaymentBreakdown = {
  STU001: [
    { name: 'Tuition', value: 2400, color: '#8b5cf6' },
    { name: 'Registration', value: 100, color: '#06b6d4' },
    { name: 'Pending', value: 0, color: '#ef4444' },
  ],
  STU002: [
    { name: 'Tuition', value: 1400, color: '#8b5cf6' },
    { name: 'Pending', value: 1400, color: '#ef4444' },
  ],
  STU003: [
    { name: 'Tuition', value: 1600, color: '#8b5cf6' },
    { name: 'Pending', value: 1600, color: '#ef4444' },
  ],
  STU004: [
    { name: 'Tuition', value: 2226, color: '#8b5cf6' },
    { name: 'Registration', value: 374, color: '#06b6d4' },
    { name: 'Pending', value: 0, color: '#ef4444' },
  ],
  STU005: [
    { name: 'Tuition', value: 1450, color: '#8b5cf6' },
    { name: 'Pending', value: 1450, color: '#ef4444' },
  ],
};

// Function to get payment breakdown data by student ID
const getPaymentBreakdownByStudentId = (studentId: string) => {
  return (
    studentsPaymentBreakdown[
      studentId as keyof typeof studentsPaymentBreakdown
    ] || [{ name: 'No Data', value: 0, color: '#6b7280' }]
  );
};

export function PaymentBreakdownChart({
  studentId,
}: PaymentBreakdownChartProps) {
  const data = getPaymentBreakdownByStudentId(studentId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fee Breakdown</CardTitle>
        <CardDescription>Payment distribution by fee category</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            tuition: { label: 'Tuition', color: '#8b5cf6' },
            library: { label: 'Library', color: '#06b6d4' },
            laboratory: { label: 'Laboratory', color: '#10b981' },
            sports: { label: 'Sports', color: '#f59e0b' },
            pending: { label: 'Pending', color: '#ef4444' },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full bg-[${item.color}]`} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <span className="text-sm font-semibold">${item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
