'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Send, Bell, MessageSquare, Smartphone, Mail } from 'lucide-react';

interface SentNotice {
  id: string;
  subject: string;
  audience: string;
  channel: string;
  sentAt: string;
  status: 'delivered' | 'scheduled' | 'draft';
  recipients: number;
}

const sentNotices: SentNotice[] = [
  {
    id: 'N001',
    subject: 'Mid-term Exam Schedule',
    audience: 'All Parents',
    channel: 'SMS + App',
    sentAt: '2026-06-20 09:00',
    status: 'delivered',
    recipients: 1240,
  },
  {
    id: 'N002',
    subject: 'Fee Payment Reminder - Term 2',
    audience: 'Parents with pending fees',
    channel: 'SMS',
    sentAt: '2026-06-19 14:30',
    status: 'delivered',
    recipients: 186,
  },
  {
    id: 'N003',
    subject: 'Sports Day - June 28',
    audience: 'All Staff & Students',
    channel: 'App Notice',
    sentAt: '2026-06-22 08:00',
    status: 'scheduled',
    recipients: 890,
  },
];

export function BroadcastCenter() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [audience, setAudience] = useState('all-parents');
  const [channel, setChannel] = useState('sms-app');

  const handleSend = () => {
    setSubject('');
    setMessage('');
  };

  const statusBadge = (status: SentNotice['status']) => {
    const styles = {
      delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      scheduled: 'bg-blue-50 text-blue-700 border-blue-200',
      draft: 'bg-gray-50 text-gray-700 border-gray-200',
    };
    return (
      <Badge variant="outline" className={styles[status]}>
        {status}
      </Badge>
    );
  };

  return (
    <Tabs defaultValue="compose" className="space-y-6">
      <TabsList>
        <TabsTrigger value="compose">Compose</TabsTrigger>
        <TabsTrigger value="history">Sent & Scheduled</TabsTrigger>
        <TabsTrigger value="templates">Templates</TabsTrigger>
      </TabsList>

      <TabsContent value="compose">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                New Broadcast
              </CardTitle>
              <CardDescription>
                Send notices, SMS, and alerts institution-wide
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Audience</Label>
                <Select value={audience} onValueChange={setAudience}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-parents">All Parents</SelectItem>
                    <SelectItem value="all-staff">All Staff</SelectItem>
                    <SelectItem value="all-students">All Students</SelectItem>
                    <SelectItem value="grade-8">Grade 8 Parents</SelectItem>
                    <SelectItem value="pending-fees">
                      Parents with Pending Fees
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Delivery Channel</Label>
                <Select value={channel} onValueChange={setChannel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sms-app">SMS + In-App Notice</SelectItem>
                    <SelectItem value="sms">SMS Only</SelectItem>
                    <SelectItem value="app">In-App Notice Only</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Notice subject"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows={5}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  onClick={handleSend}
                  disabled={!subject || !message}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Now
                </Button>
                <Button variant="outline">Schedule</Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Alerts</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">
                {[
                  { icon: Bell, label: 'Emergency Alert' },
                  { icon: Smartphone, label: 'Fee Reminder SMS' },
                  { icon: MessageSquare, label: 'Exam Notice' },
                  { icon: Mail, label: 'Newsletter' },
                ].map((item) => (
                  <Button
                    key={item.label}
                    variant="outline"
                    className="h-auto py-3 flex-col gap-1"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-xs">{item.label}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>
            <Card className="border-dashed">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  Preview: Messages appear in the parent portal Messages section
                  and as SMS where enabled.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="history">
        <Card>
          <CardHeader>
            <CardTitle>Sent & Scheduled Notices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {sentNotices.map((notice) => (
              <div
                key={notice.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{notice.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {notice.audience} · {notice.channel} · {notice.recipients}{' '}
                    recipients
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notice.sentAt}
                  </p>
                </div>
                {statusBadge(notice.status)}
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="templates">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Fee Payment Reminder',
            'Exam Schedule Notice',
            'Parent-Teacher Meeting',
            'School Closure Alert',
            'Library Overdue Notice',
            'Welcome New Students',
          ].map((template) => (
            <Card
              key={template}
              className="cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="pt-6">
                <p className="font-medium text-sm">{template}</p>
                <Button variant="link" className="px-0 h-auto text-emerald-600">
                  Use template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
