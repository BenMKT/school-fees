'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  UserPlus,
  ClipboardList,
  CalendarDays,
  BookOpen,
  MessageSquare,
  DollarSign,
} from 'lucide-react';

const moduleHealth = [
  {
    label: 'Admission Pipeline',
    value: '24 pending',
    status: 'active',
    href: '/dashboard/admission',
    icon: UserPlus,
  },
  {
    label: 'Exam Period',
    value: 'Mid-term active',
    status: 'active',
    href: '/dashboard/exams',
    icon: ClipboardList,
  },
  {
    label: 'Timetable',
    value: '2 conflicts',
    status: 'warning',
    href: '/dashboard/timetable',
    icon: CalendarDays,
  },
  {
    label: 'Library Overdue',
    value: '18 books',
    status: 'warning',
    href: '/dashboard/library',
    icon: BookOpen,
  },
  {
    label: 'Unread Notices',
    value: '7 alerts',
    status: 'active',
    href: '/dashboard/messaging',
    icon: MessageSquare,
  },
  {
    label: 'Fee Collection',
    value: '87.3%',
    status: 'good',
    href: '/dashboard/fees',
    icon: DollarSign,
  },
];

const statusStyles = {
  active: 'bg-blue-50 text-blue-700 border-blue-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  good: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export function ModuleHealthCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {moduleHealth.map((item) => (
        <Link key={item.label} href={item.href}>
          <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <Badge
                  variant="outline"
                  className={
                    statusStyles[item.status as keyof typeof statusStyles]
                  }
                >
                  {item.status === 'good' ? 'On track' : 'Live'}
                </Badge>
              </div>
              <CardTitle className="text-sm font-medium">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg font-semibold text-foreground">
                {item.value}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
