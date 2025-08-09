'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Tooltip,
} from 'recharts';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

const monthlyRevenue = [
  { month: 'Jan', revenue: 2100000, target: 2000000, growth: 5.2 },
  { month: 'Feb', revenue: 2250000, target: 2100000, growth: 7.1 },
  { month: 'Mar', revenue: 2400000, target: 2200000, growth: 9.1 },
  { month: 'Apr', revenue: 2350000, target: 2300000, growth: 2.2 },
  { month: 'May', revenue: 2600000, target: 2400000, growth: 8.3 },
  { month: 'Jun', revenue: 2750000, target: 2500000, growth: 10.0 },
  { month: 'Jul', revenue: 2847392, target: 2600000, growth: 9.5 },
];

const revenueByCategory = [
  {
    category: 'Tuition Fees',
    amount: 1850000,
    percentage: 65.0,
    color: '#8b5cf6',
  },
  {
    category: 'Activity Fees',
    amount: 427000,
    percentage: 15.0,
    color: '#06b6d4',
  },
  {
    category: 'Transport Fees',
    amount: 284000,
    percentage: 10.0,
    color: '#10b981',
  },
  { category: 'Meal Plans', amount: 171000, percentage: 6.0, color: '#f59e0b' },
  { category: 'Other Fees', amount: 114000, percentage: 4.0, color: '#ef4444' },
];

export function RevenueAnalytics() {
  const totalRevenue = monthlyRevenue[monthlyRevenue.length - 1].revenue;
  const previousRevenue = monthlyRevenue[monthlyRevenue.length - 2].revenue;
  const growthRate = (
    ((totalRevenue - previousRevenue) / previousRevenue) *
    100
  ).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Revenue Analytics
              </CardTitle>
              <CardDescription>
                Monthly revenue trends and category breakdown
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="w-3 h-3 mr-1" />+{growthRate}% vs last
                month
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                July 2024
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Revenue Trend Chart */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-gray-700">
              Monthly Revenue Trend
            </h4>
            <ChartContainer
              config={{
                revenue: { label: 'Revenue', color: '#8b5cf6' },
                target: { label: 'Target', color: '#06b6d4' },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenue}>
                  <defs>
                    <linearGradient
                      id="revenueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis
                    tickFormatter={(value) =>
                      `$${(value / 1000000).toFixed(1)}M`
                    }
                  />
                  <Tooltip
                    content={<ChartTooltipContent />}
                    formatter={(value, name) => [
                      `$${(Number(value) / 1000000).toFixed(2)}M`,
                      name === 'revenue' ? 'Revenue' : 'Target',
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fill="url(#revenueGradient)"
                  />
                  <Area
                    type="monotone"
                    dataKey="target"
                    stroke="#06b6d4"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="none"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Revenue by Category */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-gray-700">
              Revenue by Category
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Category Chart */}
              <ChartContainer
                config={{
                  amount: { label: 'Amount', color: '#8b5cf6' },
                }}
                className="h-[200px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueByCategory}>
                    <XAxis dataKey="category" />
                    <YAxis
                      tickFormatter={(value) =>
                        `$${(value / 1000).toFixed(0)}K`
                      }
                    />
                    <Tooltip
                      content={<ChartTooltipContent />}
                      formatter={(value) => [
                        `$${(Number(value) / 1000).toFixed(0)}K`,
                        'Amount',
                      ]}
                    />
                    <Bar
                      dataKey="amount"
                      fill="#8b5cf6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>

              {/* Category Details */}
              <div className="space-y-3">
                {revenueByCategory.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full bg-[${category.color}]`}
                      />
                      <span className="font-medium text-sm">
                        {category.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">
                        ${(category.amount / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {category.percentage}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
