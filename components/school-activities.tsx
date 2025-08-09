'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Clock,
  Calendar,
  Users,
  MessageSquare,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

const recentActivities = [
  {
    id: 1,
    type: 'payment',
    title: 'Payment Received',
    description: 'Emma Davis - Tuition fee payment of $400',
    time: '2 minutes ago',
    icon: CheckCircle,
    color: 'text-green-600',
    avatar: 'ED',
  },
  {
    id: 2,
    type: 'enrollment',
    title: 'New Student Enrolled',
    description: 'Michael Johnson joined Grade 10-B',
    time: '15 minutes ago',
    icon: Users,
    color: 'text-blue-600',
    avatar: 'MJ',
  },
  {
    id: 3,
    type: 'alert',
    title: 'Maintenance Alert',
    description: 'Sports Complex requires immediate attention',
    time: '1 hour ago',
    icon: AlertCircle,
    color: 'text-red-600',
    avatar: null,
  },
  {
    id: 4,
    type: 'message',
    title: 'Parent Message',
    description: 'Sarah Wilson sent a message about exam schedule',
    time: '2 hours ago',
    icon: MessageSquare,
    color: 'text-purple-600',
    avatar: 'SW',
  },
  {
    id: 5,
    type: 'event',
    title: 'Event Scheduled',
    description: 'Parent-Teacher meeting scheduled for next week',
    time: '3 hours ago',
    icon: Calendar,
    color: 'text-orange-600',
    avatar: null,
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Parent-Teacher Conference',
    date: '2024-02-20',
    time: '9:00 AM - 5:00 PM',
    attendees: 150,
    status: 'confirmed',
  },
  {
    id: 2,
    title: 'Science Fair',
    date: '2024-02-25',
    time: '10:00 AM - 3:00 PM',
    attendees: 300,
    status: 'planning',
  },
  {
    id: 3,
    title: 'Sports Day',
    date: '2024-03-05',
    time: '8:00 AM - 4:00 PM',
    attendees: 500,
    status: 'confirmed',
  },
  {
    id: 4,
    title: 'Graduation Ceremony',
    date: '2024-06-15',
    time: '2:00 PM - 6:00 PM',
    attendees: 800,
    status: 'planning',
  },
];

export function SchoolActivities() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Confirmed
          </Badge>
        );
      case 'planning':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Planning
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            Cancelled
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>
            Latest school activities and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50"
              >
                <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">{activity.title}</h4>
                    {activity.avatar && (
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={`/placeholder.svg?height=24&width=24`}
                          alt="User"
                        />
                        <AvatarFallback className="text-xs">
                          {activity.avatar}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>
            Scheduled school events and activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-3 border rounded-lg hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{event.title}</h4>
                  {getStatusBadge(event.status)}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{event.attendees} expected</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
