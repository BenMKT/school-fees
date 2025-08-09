'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  DollarSign,
  Calendar,
  CreditCard,
  AlertTriangle,
} from 'lucide-react';

interface PaymentOverviewCardsProps {
  studentId: string;
}

// Mock student payment data - this should match the data structure from student-management.tsx
const studentsPaymentData = {
  STU001: {
    totalFees: 2500,
    paidAmount: 2500,
    pendingAmount: 0,
    lastPayment: '2024-01-15',
    nextDueDate: '2024-03-15',
    paymentsMade: 6,
    averagePayment: 417,
    onTimePayments: 6,
    latePayments: 0,
  },
  STU002: {
    totalFees: 2800,
    paidAmount: 1400,
    pendingAmount: 1400,
    lastPayment: '2023-12-20',
    nextDueDate: '2024-02-20',
    paymentsMade: 4,
    averagePayment: 350,
    onTimePayments: 3,
    latePayments: 1,
  },
  STU003: {
    totalFees: 3200,
    paidAmount: 1600,
    pendingAmount: 1600,
    lastPayment: '2023-11-10',
    nextDueDate: '2024-01-10',
    paymentsMade: 5,
    averagePayment: 320,
    onTimePayments: 2,
    latePayments: 3,
  },
  STU004: {
    totalFees: 2600,
    paidAmount: 2600,
    pendingAmount: 0,
    lastPayment: '2024-01-10',
    nextDueDate: '2024-03-10',
    paymentsMade: 7,
    averagePayment: 371,
    onTimePayments: 7,
    latePayments: 0,
  },
  STU005: {
    totalFees: 2900,
    paidAmount: 1450,
    pendingAmount: 1450,
    lastPayment: '2023-12-15',
    nextDueDate: '2024-02-15',
    paymentsMade: 3,
    averagePayment: 483,
    onTimePayments: 2,
    latePayments: 1,
  },
};

// Function to get payment data by student ID
const getPaymentDataByStudentId = (studentId: string) => {
  return (
    studentsPaymentData[studentId as keyof typeof studentsPaymentData] || {
      totalFees: 0,
      paidAmount: 0,
      pendingAmount: 0,
      lastPayment: 'N/A',
      nextDueDate: 'N/A',
      paymentsMade: 0,
      averagePayment: 0,
      onTimePayments: 0,
      latePayments: 0,
    }
  );
};

export function PaymentOverviewCards({ studentId }: PaymentOverviewCardsProps) {
  const paymentData = getPaymentDataByStudentId(studentId);

  const paymentPercentage =
    paymentData.totalFees > 0
      ? (paymentData.paidAmount / paymentData.totalFees) * 100
      : 0;
  const onTimePercentage =
    paymentData.paymentsMade > 0
      ? (paymentData.onTimePayments / paymentData.paymentsMade) * 100
      : 0;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Fees</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${paymentData.totalFees}</div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              <TrendingUp className="w-3 h-3 mr-1" />
              {paymentPercentage.toFixed(1)}% paid
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Amount Paid</CardTitle>
          <CreditCard className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            ${paymentData.paidAmount}
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <span>{paymentData.paymentsMade} payments made</span>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
          <AlertTriangle className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-600">
            ${paymentData.pendingAmount}
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <span>Due: {paymentData.nextDueDate}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Payment Rate</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {onTimePercentage.toFixed(0)}%
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Badge
              className={`${
                onTimePercentage >= 80
                  ? 'bg-green-100 text-green-700 hover:bg-green-100'
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-100'
              }`}
            >
              {paymentData.onTimePayments}/{paymentData.paymentsMade} on time
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
