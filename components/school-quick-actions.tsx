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
  UserPlus,
  FileText,
  MessageSquare,
  Calendar,
  Settings,
  BarChart3,
  Bell,
  Download,
  Upload,
  CreditCard,
  Users,
  Building,
} from 'lucide-react';

const quickActions = [
  {
    title: 'Add Student',
    description: 'Enroll new student',
    icon: UserPlus,
    action: 'add-student',
    color:
      'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
  },
  {
    title: 'Generate Report',
    description: 'Create analytics report',
    icon: FileText,
    action: 'generate-report',
    color: 'border-blue-200 text-blue-600 hover:bg-blue-50',
  },
  {
    title: 'Send Announcement',
    description: 'Broadcast to all parents',
    icon: MessageSquare,
    action: 'send-announcement',
    color: 'border-green-200 text-green-600 hover:bg-green-50',
  },
  {
    title: 'Schedule Event',
    description: 'Plan school activity',
    icon: Calendar,
    action: 'schedule-event',
    color: 'border-orange-200 text-orange-600 hover:bg-orange-50',
  },
  {
    title: 'Manage Staff',
    description: 'Staff administration',
    icon: Users,
    action: 'manage-staff',
    color: 'border-purple-200 text-purple-600 hover:bg-purple-50',
  },
  {
    title: 'Facility Check',
    description: 'Inspect facilities',
    icon: Building,
    action: 'facility-check',
    color: 'border-indigo-200 text-indigo-600 hover:bg-indigo-50',
  },
  {
    title: 'Payment Settings',
    description: 'Configure fees',
    icon: CreditCard,
    action: 'payment-settings',
    color: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
  },
  {
    title: 'Analytics',
    description: 'View detailed stats',
    icon: BarChart3,
    action: 'analytics',
    color: 'border-red-200 text-red-600 hover:bg-red-50',
  },
  {
    title: 'Notifications',
    description: 'Manage alerts',
    icon: Bell,
    action: 'notifications',
    color: 'border-yellow-200 text-yellow-600 hover:bg-yellow-50',
  },
  {
    title: 'Export Data',
    description: 'Download reports',
    icon: Download,
    action: 'export-data',
    color: 'border-cyan-200 text-cyan-600 hover:bg-cyan-50',
  },
  {
    title: 'Import Data',
    description: 'Upload student data',
    icon: Upload,
    action: 'import-data',
    color: 'border-pink-200 text-pink-600 hover:bg-pink-50',
  },
  {
    title: 'System Settings',
    description: 'Configure school',
    icon: Settings,
    action: 'system-settings',
    color: 'border-gray-200 text-gray-600 hover:bg-gray-50',
  },
];

export function SchoolQuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Frequently used administrative tools</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.action}
              variant={action.action === 'add-student' ? 'default' : 'outline'}
              className={`h-auto p-4 flex flex-col items-center space-y-2 ${
                action.action === 'add-student'
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
