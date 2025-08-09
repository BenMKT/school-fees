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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { TrendingUp, Calendar } from 'lucide-react';

const monthlyData = [
  {
    month: 'Jan',
    students: 12105,
    schools: 242,
    payments: 8234,
    revenue: 2100,
  },
  {
    month: 'Feb',
    students: 12234,
    schools: 243,
    payments: 8456,
    revenue: 2250,
  },
  {
    month: 'Mar',
    students: 12387,
    schools: 244,
    payments: 8678,
    revenue: 2400,
  },
  {
    month: 'Apr',
    students: 12456,
    schools: 245,
    payments: 8523,
    revenue: 2350,
  },
  {
    month: 'May',
    students: 12623,
    schools: 246,
    payments: 8789,
    revenue: 2600,
  },
  {
    month: 'Jun',
    students: 12734,
    schools: 246,
    payments: 8934,
    revenue: 2750,
  },
  {
    month: 'Jul',
    students: 12847,
    schools: 247,
    payments: 8947,
    revenue: 2847,
  },
];

const trendMetrics = [
  {
    label: 'Student Growth',
    value: '+6.1%',
    description: 'vs last year',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    label: 'School Expansion',
    value: '+2.1%',
    description: 'new schools',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    label: 'Payment Volume',
    value: '+8.7%',
    description: 'transactions',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

export function MonthlyTrends() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Monthly Trends
              </CardTitle>
              <CardDescription>
                Growth patterns across key metrics
              </CardDescription>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Last 7 Months
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Trend Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {trendMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`p-3 rounded-lg ${metric.bgColor} text-center`}
              >
                <div className={`text-lg font-bold ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-gray-700">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trends Chart */}
          <ChartContainer
            config={{
              students: { label: 'Students', color: '#8b5cf6' },
              payments: { label: 'Payments', color: '#06b6d4' },
              schools: { label: 'Schools', color: '#10b981' },
            }}
            className="h-[250px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="payments"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot={{ fill: '#06b6d4', strokeWidth: 2, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="schools"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Legend */}
          <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm">Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-sm">Payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm">Schools</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
