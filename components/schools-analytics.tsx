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
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  Tooltip,
} from 'recharts';

const networkGrowthData = [
  { year: '2020', schools: 156, students: 45000, revenue: 18.5 },
  { year: '2021', schools: 178, students: 52000, revenue: 21.2 },
  { year: '2022', schools: 203, students: 61000, revenue: 24.8 },
  { year: '2023', schools: 228, students: 74000, revenue: 28.9 },
  { year: '2024', schools: 247, students: 89247, revenue: 35.2 },
];

const regionDistribution = [
  { region: 'North', schools: 67, students: 23450, color: '#8b5cf6' },
  { region: 'South', schools: 52, students: 18230, color: '#06b6d4' },
  { region: 'East', schools: 48, students: 16890, color: '#10b981' },
  { region: 'West', schools: 43, students: 15120, color: '#f59e0b' },
  { region: 'Central', schools: 37, students: 15557, color: '#ef4444' },
];

const performanceMetrics = [
  { metric: 'Academic Performance', average: 87.2, target: 90 },
  { metric: 'Student Satisfaction', average: 92.1, target: 95 },
  { metric: 'Staff Retention', average: 89.5, target: 85 },
  { metric: 'Financial Health', average: 91.8, target: 90 },
  { metric: 'Infrastructure', average: 85.3, target: 88 },
];

const schoolTypes = [
  { type: 'Public', count: 142, percentage: 57.5, color: '#8b5cf6' },
  { type: 'Private', count: 67, percentage: 27.1, color: '#06b6d4' },
  { type: 'Charter', count: 23, percentage: 9.3, color: '#10b981' },
  { type: 'International', count: 15, percentage: 6.1, color: '#f59e0b' },
];

export function SchoolsAnalytics() {
  return (
    <div className="space-y-6">
      {/* Network Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Network Growth Trends</CardTitle>
          <CardDescription>
            Growth in schools, students, and revenue over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              schools: { label: 'Schools', color: '#8b5cf6' },
              students: { label: 'Students', color: '#06b6d4' },
              revenue: { label: 'Revenue (M)', color: '#10b981' },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={networkGrowthData}>
                <defs>
                  <linearGradient id="colorSchools" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorStudents"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip content={<ChartTooltipContent />} />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="schools"
                  stroke="#8b5cf6"
                  fillOpacity={1}
                  fill="url(#colorSchools)"
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="students"
                  stroke="#06b6d4"
                  fillOpacity={1}
                  fill="url(#colorStudents)"
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Regional Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
            <CardDescription>Schools and students by region</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                schools: { label: 'Schools', color: '#8b5cf6' },
                students: { label: 'Students', color: '#06b6d4' },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionDistribution}>
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="schools" radius={[2, 2, 0, 0]}>
                    {regionDistribution.map((entry, index) => (
                      <Cell key={`cell-schools-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                  <Bar dataKey="students" radius={[2, 2, 0, 0]}>
                    {regionDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-students-${index}`}
                        fill={entry.color}
                        opacity={0.7}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* School Types */}
        <Card>
          <CardHeader>
            <CardTitle>School Types Distribution</CardTitle>
            <CardDescription>Breakdown by school category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                public: { label: 'Public', color: '#8b5cf6' },
                private: { label: 'Private', color: '#06b6d4' },
                charter: { label: 'Charter', color: '#10b981' },
                international: { label: 'International', color: '#f59e0b' },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={schoolTypes}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {schoolTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {schoolTypes.map((type) => (
                <div
                  key={type.type}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: type.color }}
                    />
                    <span className="text-sm font-medium">{type.type}</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {type.count} ({type.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Network Performance Metrics</CardTitle>
          <CardDescription>
            Key performance indicators across all schools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {performanceMetrics.map((metric) => (
              <div key={metric.metric} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{metric.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">
                      {metric.average}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Target: {metric.target}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      metric.average >= metric.target
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                    }`}
                    style={{ width: `${metric.average}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
