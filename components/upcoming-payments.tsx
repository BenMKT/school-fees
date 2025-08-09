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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CreditCard, Calendar, AlertTriangle } from 'lucide-react';

const upcomingPayments = [
  {
    id: 1,
    student: 'Emma Davis',
    avatar: 'ED',
    feeType: 'Tuition',
    amount: 400,
    dueDate: '2024-02-15',
    status: 'due',
    daysLeft: 10,
  },
  {
    id: 2,
    student: 'Emma Davis',
    avatar: 'ED',
    feeType: 'Transport',
    amount: 200,
    dueDate: '2024-02-20',
    status: 'overdue',
    daysLeft: -5,
  },
  {
    id: 3,
    student: 'Michael Davis',
    avatar: 'MD',
    feeType: 'Laboratory',
    amount: 300,
    dueDate: '2024-03-15',
    status: 'upcoming',
    daysLeft: 40,
  },
];

export function UpcomingPayments() {
  const getStatusInfo = (status: string, daysLeft: number) => {
    switch (status) {
      case 'overdue':
        return {
          badge: (
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
              Overdue
            </Badge>
          ),
          icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
          text: `${Math.abs(daysLeft)} days overdue`,
        };
      case 'due':
        return {
          badge: (
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
              Due Soon
            </Badge>
          ),
          icon: <Calendar className="w-4 h-4 text-yellow-500" />,
          text: `${daysLeft} days left`,
        };
      case 'upcoming':
        return {
          badge: (
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              Upcoming
            </Badge>
          ),
          icon: <Calendar className="w-4 h-4 text-blue-500" />,
          text: `${daysLeft} days left`,
        };
      default:
        return {
          badge: <Badge variant="secondary">{status}</Badge>,
          icon: <Calendar className="w-4 h-4" />,
          text: `${daysLeft} days left`,
        };
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payments</CardTitle>
        <CardDescription>Payments due for your children</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingPayments.map((payment) => {
            const statusInfo = getStatusInfo(payment.status, payment.daysLeft);
            return (
              <div key={payment.id} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`/placeholder.svg?height=32&width=32`}
                        alt={payment.student}
                      />
                      <AvatarFallback>{payment.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{payment.student}</p>
                      <p className="text-xs text-muted-foreground">
                        {payment.feeType}
                      </p>
                    </div>
                  </div>
                  {statusInfo.badge}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {statusInfo.icon}
                    <span className="text-sm text-muted-foreground">
                      {statusInfo.text}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">${payment.amount}</span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <CreditCard className="w-4 h-4 mr-1" />
                      Pay
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
