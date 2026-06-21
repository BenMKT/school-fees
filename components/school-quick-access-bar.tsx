'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  UserPlus,
  CalendarDays,
  MessageSquare,
  CreditCard,
  ClipboardList,
} from 'lucide-react';

const quickLinks = [
  {
    label: 'Admission',
    href: '/dashboard/admission',
    icon: UserPlus,
  },
  {
    label: 'Timetable',
    href: '/dashboard/timetable',
    icon: CalendarDays,
  },
  {
    label: 'Send Notice',
    href: '/dashboard/messaging',
    icon: MessageSquare,
  },
  {
    label: 'Record Payment',
    href: '/dashboard/fees',
    icon: CreditCard,
  },
  {
    label: 'Exam Results',
    href: '/dashboard/exams',
    icon: ClipboardList,
  },
];

export function SchoolQuickAccessBar() {
  return (
    <div className="flex flex-wrap gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
      <span className="text-sm font-medium text-emerald-800 self-center mr-2">
        Quick actions:
      </span>
      {quickLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant="outline"
            size="sm"
            className="bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-100"
          >
            <link.icon className="w-4 h-4 mr-1.5" />
            {link.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
