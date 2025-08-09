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
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  Tooltip,
} from 'recharts';

interface PaymentTrendChartProps {
  studentId: string;
}

// Mock student payment trend data
const studentsPaymentTrends = {
  STU001: [
    { month: 'Aug', amount: 500, cumulative: 500 },
    { month: 'Sep', amount: 400, cumulative: 900 },
    { month: 'Oct', amount: 400, cumulative: 1300 },
    { month: 'Nov', amount: 400, cumulative: 1700 },
    { month: 'Dec', amount: 400, cumulative: 2100 },
    { month: 'Jan', amount: 400, cumulative: 2500 },
    { month: 'Feb', amount: 0, cumulative: 2500 },
  ],
  STU002: [
    { month: 'Aug', amount: 350, cumulative: 350 },
    { month: 'Sep', amount: 350, cumulative: 700 },
    { month: 'Oct', amount: 350, cumulative: 1050 },
    { month: 'Nov', amount: 350, cumulative: 1400 },
    { month: 'Dec', amount: 0, cumulative: 1400 },
    { month: 'Jan', amount: 0, cumulative: 1400 },
    { month: 'Feb', amount: 0, cumulative: 1400 },
  ],
  STU003: [
    { month: 'Aug', amount: 400, cumulative: 400 },
    { month: 'Sep', amount: 400, cumulative: 800 },
    { month: 'Oct', amount: 400, cumulative: 1200 },
    { month: 'Nov', amount: 400, cumulative: 1600 },
    { month: 'Dec', amount: 0, cumulative: 1600 },
    { month: 'Jan', amount: 0, cumulative: 1600 },
    { month: 'Feb', amount: 0, cumulative: 1600 },
  ],
  STU004: [
    { month: 'Aug', amount: 371, cumulative: 371 },
    { month: 'Sep', amount: 371, cumulative: 742 },
    { month: 'Oct', amount: 371, cumulative: 1113 },
    { month: 'Nov', amount: 371, cumulative: 1484 },
    { month: 'Dec', amount: 371, cumulative: 1855 },
    { month: 'Jan', amount: 371, cumulative: 2226 },
    { month: 'Feb', amount: 0, cumulative: 2226 },
  ],
  STU005: [
    { month: 'Aug', amount: 483, cumulative: 483 },
    { month: 'Sep', amount: 483, cumulative: 966 },
    { month: 'Oct', amount: 484, cumulative: 1450 },
    { month: 'Nov', amount: 483, cumulative: 1933 },
    { month: 'Dec', amount: 0, cumulative: 1933 },
    { month: 'Jan', amount: 0, cumulative: 1933 },
    { month: 'Feb', amount: 0, cumulative: 1933 },
  ],
};

// Function to get payment trend data by student ID
const getPaymentTrendByStudentId = (studentId: string) => {
  return (
    studentsPaymentTrends[studentId as keyof typeof studentsPaymentTrends] || [
      { month: 'Aug', amount: 0, cumulative: 0 },
      { month: 'Sep', amount: 0, cumulative: 0 },
      { month: 'Oct', amount: 0, cumulative: 0 },
      { month: 'Nov', amount: 0, cumulative: 0 },
      { month: 'Dec', amount: 0, cumulative: 0 },
      { month: 'Jan', amount: 0, cumulative: 0 },
      { month: 'Feb', amount: 0, cumulative: 0 },
    ]
  );
};

export function PaymentTrendChart({ studentId }: PaymentTrendChartProps) {
  const chartData = getPaymentTrendByStudentId(studentId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Trends</CardTitle>
        <CardDescription>
          Monthly payment amounts and cumulative total
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            amount: {
              label: 'Monthly Payment',
              color: '#3b82f6',
            },
            cumulative: {
              label: 'Cumulative Total',
              color: '#10b981',
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="colorCumulative"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorAmount)"
              />
              <Area
                type="monotone"
                dataKey="cumulative"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorCumulative)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
