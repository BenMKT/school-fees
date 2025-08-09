'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const revenueBreakdown = [
  { category: 'Tuition Fees', amount: 1800000, color: '#8b5cf6' },
  { category: 'Laboratory Fees', amount: 240000, color: '#06b6d4' },
  { category: 'Library Fees', amount: 120000, color: '#10b981' },
  { category: 'Sports Fees', amount: 80000, color: '#f59e0b' },
  { category: 'Transport Fees', amount: 160000, color: '#ef4444' },
];

export function RevenueAnalytics() {
  const totalRevenue = revenueBreakdown.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Breakdown</CardTitle>
        <CardDescription>Revenue distribution by fee category</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            tuition: { label: 'Tuition', color: '#8b5cf6' },
            laboratory: { label: 'Laboratory', color: '#06b6d4' },
            library: { label: 'Library', color: '#10b981' },
            sports: { label: 'Sports', color: '#f59e0b' },
            transport: { label: 'Transport', color: '#ef4444' },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={revenueBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="amount"
              >
                {revenueBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {revenueBreakdown.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full bg-[${item.color}]`}
                />
                <span className="text-sm font-medium">{item.category}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold">
                  ${(item.amount / 1000).toFixed(0)}K
                </span>
                <span className="text-xs text-muted-foreground">
                  ({((item.amount / totalRevenue) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
