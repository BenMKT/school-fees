'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface PaymentTimelineProps {
  studentId: string;
}

// Mock student payment timeline data
const studentsPaymentTimeline = {
  STU001: [
    {
      id: 1,
      date: '2024-01-15',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Credit Card',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 2,
      date: '2023-12-15',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Bank Transfer',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 3,
      date: '2023-11-15',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Credit Card',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 4,
      date: '2023-10-15',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Mobile Money',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 5,
      date: '2023-09-15',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Credit Card',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 6,
      date: '2023-08-15',
      type: 'payment',
      title: 'Registration Payment',
      description: 'Payment of $500 received via Bank Transfer',
      amount: 500,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
  ],
  STU002: [
    {
      id: 1,
      date: '2023-12-20',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $350 received via Credit Card',
      amount: 350,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 2,
      date: '2023-11-20',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $350 received via Bank Transfer',
      amount: 350,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 3,
      date: '2023-10-20',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $350 received via Credit Card',
      amount: 350,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 4,
      date: '2023-09-20',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $350 received via Mobile Money',
      amount: 350,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 5,
      date: '2024-01-10',
      type: 'reminder',
      title: 'Payment Reminder Sent',
      description: 'Email reminder sent to parent for pending tuition fees',
      status: 'sent',
      icon: Clock,
      color: 'text-blue-600',
    },
  ],
  STU003: [
    {
      id: 1,
      date: '2023-11-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Credit Card',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 2,
      date: '2023-10-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Bank Transfer',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 3,
      date: '2023-09-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Credit Card',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 4,
      date: '2023-08-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $400 received via Mobile Money',
      amount: 400,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 5,
      date: '2024-01-10',
      type: 'overdue',
      title: 'Payment Overdue',
      description: 'Tuition payment became overdue',
      status: 'overdue',
      icon: AlertCircle,
      color: 'text-red-600',
    },
  ],
  STU004: [
    {
      id: 1,
      date: '2024-01-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $371 received via Credit Card',
      amount: 371,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 2,
      date: '2023-12-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $371 received via Bank Transfer',
      amount: 371,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 3,
      date: '2023-11-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $371 received via Credit Card',
      amount: 371,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 4,
      date: '2023-10-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $371 received via Mobile Money',
      amount: 371,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 5,
      date: '2023-09-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $371 received via Credit Card',
      amount: 371,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 6,
      date: '2023-08-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $371 received via Bank Transfer',
      amount: 371,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 7,
      date: '2023-07-10',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $371 received via Credit Card',
      amount: 371,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
  ],
  STU005: [
    {
      id: 1,
      date: '2023-12-15',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $483 received via Credit Card',
      amount: 483,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 2,
      date: '2023-11-15',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $483 received via Bank Transfer',
      amount: 483,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 3,
      date: '2023-10-15',
      type: 'payment',
      title: 'Tuition Payment Received',
      description: 'Payment of $484 received via Credit Card',
      amount: 484,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 4,
      date: '2024-01-10',
      type: 'reminder',
      title: 'Payment Reminder Sent',
      description: 'Email reminder sent to parent for pending tuition fees',
      status: 'sent',
      icon: Clock,
      color: 'text-blue-600',
    },
  ],
};

// Function to get payment timeline data by student ID
const getPaymentTimelineByStudentId = (studentId: string) => {
  return (
    studentsPaymentTimeline[
      studentId as keyof typeof studentsPaymentTimeline
    ] || []
  );
};

export function PaymentTimeline({ studentId }: PaymentTimelineProps) {
  const timelineEvents = getPaymentTimelineByStudentId(studentId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Timeline</CardTitle>
        <CardDescription>
          Chronological view of all payment-related activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
          <div className="space-y-6">
            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className="relative flex items-start space-x-4"
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center ${event.color}`}
                >
                  <event.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {event.amount && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          ${event.amount}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
