'use client';

import { motion } from 'framer-motion';
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
  Activity,
  DollarSign,
  Building,
  CreditCard,
  UserPlus,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

const recentActivities = [
  {
    id: 1,
    type: 'payment',
    title: 'Large payment received',
    description: 'Kibuli Secondary School - $45,230 tuition payment',
    amount: 45230,
    time: '2 minutes ago',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    user: 'System',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 2,
    type: 'enrollment',
    title: 'New student enrollment',
    description: 'Aisha Suleiman enrolled at Wakiso Secondary School',
    time: '15 minutes ago',
    icon: UserPlus,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    user: 'Admin',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 3,
    type: 'payment',
    title: 'Payment completed',
    description: 'Monthly fees processed for Rwakitura Secondary School',
    amount: 23450,
    time: '32 minutes ago',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    user: 'System',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 4,
    type: 'alert',
    title: 'Payment overdue alert',
    description: '3 payments overdue at Juja Academy',
    time: '1 hour ago',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    user: 'System',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 5,
    type: 'school',
    title: 'New school added',
    description: 'Madianyo Prep School joined the network',
    time: '2 hours ago',
    icon: Building,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    user: 'Admin',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: 6,
    type: 'payment',
    title: 'Bulk payment processed',
    description: 'Monthly activity fees - 234 transactions',
    amount: 67890,
    time: '3 hours ago',
    icon: CreditCard,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    user: 'System',
    avatar: '/placeholder.svg?height=32&width=32',
  },
];

const activityStats = [
  { label: "Today's Activities", value: '47', change: '+12' },
  { label: 'This Week', value: '284', change: '+23%' },
  { label: 'Active Users', value: '156', change: '+8' },
];

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest system activities and transactions
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {activityStats.map((stat, index) => (
                <Badge key={stat.label} variant="outline" className="text-xs">
                  {stat.label}: {stat.value}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                  <activity.icon className={`w-4 h-4 ${activity.color}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-5 h-5">
                        <AvatarImage
                          src={activity.avatar || '/placeholder.svg'}
                        />
                        <AvatarFallback className="text-xs">
                          {activity.user.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">
                        {activity.user}
                      </span>
                    </div>
                    {activity.amount && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        +${activity.amount.toLocaleString()}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
