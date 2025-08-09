'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const overviewData = [
  {
    title: 'Total Outstanding',
    value: '$1,200',
    change: '2 payments due',
    changeType: 'warning',
    description: 'across all children',
    icon: DollarSign,
  },
  {
    title: 'Children Enrolled',
    value: '2',
    change: 'Both active',
    changeType: 'success',
    description: 'Emma & Michael',
    icon: Users,
  },
  {
    title: 'This Month Paid',
    value: '$800',
    change: '+$200',
    changeType: 'success',
    description: 'from last month',
    icon: CheckCircle,
  },
  {
    title: 'Urgent Actions',
    value: '3',
    change: '2 overdue',
    changeType: 'error',
    description: 'require attention',
    icon: AlertTriangle,
  },
];

export function ParentOverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {overviewData.map((item) => (
        <Card key={item.title} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge
                variant={
                  item.changeType === 'success'
                    ? 'default'
                    : item.changeType === 'warning'
                    ? 'secondary'
                    : 'destructive'
                }
                className={`${
                  item.changeType === 'success'
                    ? 'bg-green-100 text-green-700 hover:bg-green-100'
                    : item.changeType === 'warning'
                    ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                    : 'bg-red-100 text-red-700 hover:bg-red-100'
                }`}
              >
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
