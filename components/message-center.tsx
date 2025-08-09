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
import { MessageSquare, Plus, Clock } from 'lucide-react';

const recentMessages = [
  {
    id: 1,
    from: 'School Administrator',
    subject: 'Parent-Teacher Meeting',
    preview: "Scheduled for next week regarding Emma's progress...",
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    from: 'Finance Office',
    subject: 'Payment Confirmation',
    preview: 'Your payment of $500 has been received and processed...',
    time: '1 day ago',
    unread: false,
  },
  {
    id: 3,
    from: 'Grade 8 Teacher',
    subject: 'Assignment Update',
    preview: 'Emma has submitted her science project on time...',
    time: '2 days ago',
    unread: true,
  },
];

export function MessageCenter() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Messages</CardTitle>
            <CardDescription>Recent communications from school</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentMessages.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors ${
                message.unread ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{message.from}</span>
                  {message.unread && (
                    <Badge className="bg-blue-500 text-white text-xs">
                      New
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{message.time}</span>
                </div>
              </div>
              <h4 className="text-sm font-semibold mb-1">{message.subject}</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {message.preview}
              </p>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Messages
        </Button>
      </CardContent>
    </Card>
  );
}
