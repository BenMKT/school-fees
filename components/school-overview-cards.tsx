'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  GraduationCap,
  Building,
  BookOpen,
  Award,
} from 'lucide-react';

const overviewData = [
  {
    title: 'Total Revenue',
    value: '$2.4M',
    change: '+12.5%',
    changeType: 'increase',
    description: 'vs last year',
    icon: DollarSign,
    color: 'text-green-600',
  },
  {
    title: 'Student Enrollment',
    value: '1,247',
    change: '+8.2%',
    changeType: 'increase',
    description: 'vs last year',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    title: 'Academic Performance',
    value: '87.5%',
    change: '+3.1%',
    changeType: 'increase',
    description: 'average grade',
    icon: Award,
    color: 'text-purple-600',
  },
  {
    title: 'Staff Members',
    value: '89',
    change: '+5',
    changeType: 'increase',
    description: 'new hires',
    icon: GraduationCap,
    color: 'text-orange-600',
  },
  {
    title: 'Facilities',
    value: '24',
    change: '98%',
    changeType: 'neutral',
    description: 'operational',
    icon: Building,
    color: 'text-indigo-600',
  },
  {
    title: 'Course Completion',
    value: '94.2%',
    change: '+2.8%',
    changeType: 'increase',
    description: 'completion rate',
    icon: BookOpen,
    color: 'text-emerald-600',
  },
];

export function SchoolOverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {overviewData.map((item) => (
        <Card
          key={item.title}
          className="hover:shadow-lg transition-all duration-300 group"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <div
              className={`p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-110 transition-transform duration-300`}
            >
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{item.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge
                variant={
                  item.changeType === 'increase'
                    ? 'default'
                    : item.changeType === 'decrease'
                    ? 'destructive'
                    : 'secondary'
                }
                className={`${
                  item.changeType === 'increase'
                    ? 'bg-green-100 text-green-700 hover:bg-green-100'
                    : item.changeType === 'decrease'
                    ? 'bg-red-100 text-red-700 hover:bg-red-100'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.changeType === 'increase' ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : item.changeType === 'decrease' ? (
                  <TrendingDown className="w-3 h-3 mr-1" />
                ) : null}
                {item.change}
              </Badge>
              <span>{item.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
