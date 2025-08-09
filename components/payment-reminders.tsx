'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Calendar, Send, Plus, Clock } from 'lucide-react';

interface PaymentRemindersProps {
  studentId: string;
}

const reminderHistory = [
  {
    id: 1,
    date: '2024-01-10',
    type: 'email',
    recipient: 'robert.davis@email.com',
    subject: 'Payment Reminder - Tuition Fees',
    status: 'sent',
    amount: 400,
  },
  {
    id: 2,
    date: '2024-01-05',
    type: 'sms',
    recipient: '+1 (555) 123-4568',
    subject: 'Payment Due Reminder',
    status: 'delivered',
    amount: 400,
  },
  {
    id: 3,
    date: '2023-12-28',
    type: 'email',
    recipient: 'robert.davis@email.com',
    subject: 'Upcoming Payment Due',
    status: 'opened',
    amount: 400,
  },
];

const upcomingReminders = [
  {
    id: 1,
    dueDate: '2024-02-15',
    amount: 200,
    feeType: 'Transport Fees',
    reminderDate: '2024-02-10',
    status: 'scheduled',
  },
  {
    id: 2,
    dueDate: '2024-03-15',
    amount: 600,
    feeType: 'Tuition Fees',
    reminderDate: '2024-03-10',
    status: 'scheduled',
  },
];

export function PaymentReminders({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  studentId,
}: PaymentRemindersProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'sent':
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Sent
          </Badge>
        );
      case 'delivered':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Delivered
          </Badge>
        );
      case 'opened':
        return (
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
            Opened
          </Badge>
        );
      case 'scheduled':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Scheduled
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'sms':
        return <Phone className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Send Reminder</CardTitle>
          <CardDescription>
            Send payment reminders to parents/guardians
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Mail className="w-4 h-4 mr-2" />
              Send Email Reminder
            </Button>
            <Button variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Send SMS Reminder
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Reminder
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Reminders */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Upcoming Reminders</CardTitle>
              <CardDescription>Scheduled payment reminders</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Reminder
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingReminders.map((reminder) => (
              <div
                key={reminder.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{reminder.feeType}</h4>
                    <p className="text-sm text-muted-foreground">
                      Due: {reminder.dueDate} • Reminder:{' '}
                      {reminder.reminderDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                    ${reminder.amount}
                  </Badge>
                  {getStatusBadge(reminder.status)}
                  <Button variant="ghost" size="sm">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reminder History */}
      <Card>
        <CardHeader>
          <CardTitle>Reminder History</CardTitle>
          <CardDescription>
            Past payment reminders sent to this student&apos;s family
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reminderHistory.map((reminder) => (
              <div
                key={reminder.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {getTypeIcon(reminder.type)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{reminder.subject}</h4>
                    <p className="text-sm text-muted-foreground">
                      To: {reminder.recipient} • {reminder.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                    ${reminder.amount}
                  </Badge>
                  {getStatusBadge(reminder.status)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
