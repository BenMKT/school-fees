'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CreditCard,
  Download,
  MessageSquare,
  Calendar,
  Settings,
  HelpCircle,
} from 'lucide-react';

const quickActions = [
  {
    title: 'Make Payment',
    description: 'Pay outstanding fees',
    icon: CreditCard,
    action: 'make-payment',
    color:
      'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
  },
  {
    title: 'Download Receipts',
    description: 'Get payment receipts',
    icon: Download,
    action: 'download-receipts',
    color: 'border-blue-200 text-blue-600 hover:bg-blue-50',
  },
  {
    title: 'Send Message',
    description: 'Contact school admin',
    icon: MessageSquare,
    action: 'send-message',
    color: 'border-green-200 text-green-600 hover:bg-green-50',
  },
  {
    title: 'Schedule Meeting',
    description: 'Book appointment',
    icon: Calendar,
    action: 'schedule-meeting',
    color: 'border-orange-200 text-orange-600 hover:bg-orange-50',
  },
  {
    title: 'Update Profile',
    description: 'Manage account info',
    icon: Settings,
    action: 'update-profile',
    color: 'border-gray-200 text-gray-600 hover:bg-gray-50',
  },
  {
    title: 'Get Help',
    description: 'Support & FAQ',
    icon: HelpCircle,
    action: 'get-help',
    color: 'border-purple-200 text-purple-600 hover:bg-purple-50',
  },
];

export function ParentQuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Frequently used features and tools</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.action}
              variant={action.action === 'make-payment' ? 'default' : 'outline'}
              className={`h-auto p-4 flex flex-col items-center space-y-2 ${
                action.action === 'make-payment'
                  ? action.color
                  : `${action.color} border`
              }`}
            >
              <action.icon className="h-5 w-5" />
              <div className="text-center">
                <p className="text-xs font-medium">{action.title}</p>
                <p className="text-xs opacity-75">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
