'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  TrendingDown,
  Building,
  Users,
  DollarSign,
  GraduationCap,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

const overviewData = [
  {
    title: 'Total Schools',
    value: '247',
    change: '+12',
    changeType: 'increase',
    description: 'new this quarter',
    icon: Building,
    color: 'text-blue-600',
  },
  {
    title: 'Active Students',
    value: '89,247',
    change: '+8.2%',
    changeType: 'increase',
    description: 'vs last year',
    icon: Users,
    color: 'text-green-600',
  },
  {
    title: 'Total Revenue',
    value: '$24.8M',
    change: '+15.3%',
    changeType: 'increase',
    description: 'this academic year',
    icon: DollarSign,
    color: 'text-emerald-600',
  },
  {
    title: 'Staff Members',
    value: '12,847',
    change: '+5.7%',
    changeType: 'increase',
    description: 'across all schools',
    icon: GraduationCap,
    color: 'text-purple-600',
  },
  {
    title: 'Active Schools',
    value: '234',
    change: '94.7%',
    changeType: 'neutral',
    description: 'operational rate',
    icon: CheckCircle,
    color: 'text-green-600',
  },
  {
    title: 'Issues Reported',
    value: '23',
    change: '-18%',
    changeType: 'decrease',
    description: 'vs last month',
    icon: AlertTriangle,
    color: 'text-red-600',
  },
];

export function SchoolsOverviewCards() {
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
