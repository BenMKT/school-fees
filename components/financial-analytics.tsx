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
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 180000, expenses: 120000, profit: 60000 },
  { month: 'Feb', revenue: 195000, expenses: 125000, profit: 70000 },
  { month: 'Mar', revenue: 210000, expenses: 130000, profit: 80000 },
  { month: 'Apr', revenue: 225000, expenses: 135000, profit: 90000 },
  { month: 'May', revenue: 240000, expenses: 140000, profit: 100000 },
  { month: 'Jun', revenue: 255000, expenses: 145000, profit: 110000 },
  { month: 'Jul', revenue: 270000, expenses: 150000, profit: 120000 },
  { month: 'Aug', revenue: 285000, expenses: 155000, profit: 130000 },
  { month: 'Sep', revenue: 300000, expenses: 160000, profit: 140000 },
  { month: 'Oct', revenue: 315000, expenses: 165000, profit: 150000 },
  { month: 'Nov', revenue: 330000, expenses: 170000, profit: 160000 },
  { month: 'Dec', revenue: 345000, expenses: 175000, profit: 170000 },
];

export function FinancialAnalytics() {
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpenses = revenueData.reduce(
    (sum, item) => sum + item.expenses,
    0
  );
  const totalProfit = totalRevenue - totalExpenses;

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Financial Analytics</CardTitle>
            <CardDescription>
              Revenue, expenses, and profit trends over the year
            </CardDescription>
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Total Revenue</div>
              <div className="text-lg font-bold text-green-600">
                ${(totalRevenue / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">
                Total Expenses
              </div>
              <div className="text-lg font-bold text-red-600">
                ${(totalExpenses / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Net Profit</div>
              <div className="text-lg font-bold text-blue-600">
                ${(totalProfit / 1000000).toFixed(1)}M
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: {
              label: 'Revenue',
              color: '#3b82f6',
            },
            expenses: {
              label: 'Expenses',
              color: '#ef4444',
            },
            profit: {
              label: 'Profit',
              color: '#10b981',
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorExpenses)"
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorProfit)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
