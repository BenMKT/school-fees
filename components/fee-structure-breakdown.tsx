'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface FeeStructureBreakdownProps {
  studentId: string;
}

const feeStructure = [
  {
    category: 'Tuition Fees',
    totalAmount: 1800,
    paidAmount: 1200,
    pendingAmount: 600,
    dueDate: '2024-03-15',
    status: 'partial',
    description: 'Core academic fees for Grade 8',
  },
  {
    category: 'Library Fees',
    totalAmount: 200,
    paidAmount: 200,
    pendingAmount: 0,
    dueDate: '2023-12-15',
    status: 'paid',
    description: 'Library access and book rental fees',
  },
  {
    category: 'Laboratory Fees',
    totalAmount: 300,
    paidAmount: 300,
    pendingAmount: 0,
    dueDate: '2023-11-15',
    status: 'paid',
    description: 'Science lab equipment and materials',
  },
  {
    category: 'Sports Fees',
    totalAmount: 100,
    paidAmount: 100,
    pendingAmount: 0,
    dueDate: '2023-10-15',
    status: 'paid',
    description: 'Sports activities and equipment',
  },
  {
    category: 'Transport Fees',
    totalAmount: 400,
    paidAmount: 200,
    pendingAmount: 200,
    dueDate: '2024-02-15',
    status: 'overdue',
    description: 'School bus transportation service',
  },
  {
    category: 'Examination Fees',
    totalAmount: 150,
    paidAmount: 0,
    pendingAmount: 150,
    dueDate: '2024-04-15',
    status: 'pending',
    description: 'Mid-term and final examination fees',
  },
];

export function FeeStructureBreakdown({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  studentId,
}: FeeStructureBreakdownProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Paid
          </Badge>
        );
      case 'partial':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            <Clock className="w-3 h-3 mr-1" />
            Partial
          </Badge>
        );
      case 'overdue':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            <AlertCircle className="w-3 h-3 mr-1" />
            Overdue
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const totalFees = feeStructure.reduce((sum, fee) => sum + fee.totalAmount, 0);
  const totalPaid = feeStructure.reduce((sum, fee) => sum + fee.paidAmount, 0);
  const totalPending = feeStructure.reduce(
    (sum, fee) => sum + fee.pendingAmount,
    0
  );

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle>Fee Structure Summary</CardTitle>
          <CardDescription>
            Complete breakdown of all fees for the current academic year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold">${totalFees}</div>
              <div className="text-sm text-muted-foreground">Total Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                ${totalPaid}
              </div>
              <div className="text-sm text-muted-foreground">Amount Paid</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                ${totalPending}
              </div>
              <div className="text-sm text-muted-foreground">
                Pending Amount
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Payment Progress</span>
              <span>{((totalPaid / totalFees) * 100).toFixed(1)}%</span>
            </div>
            <Progress value={(totalPaid / totalFees) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Detailed Breakdown */}
      <div className="grid gap-4">
        {feeStructure.map((fee, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{fee.category}</h3>
                  <p className="text-sm text-muted-foreground">
                    {fee.description}
                  </p>
                </div>
                {getStatusBadge(fee.status)}
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Total Amount
                  </div>
                  <div className="font-semibold">${fee.totalAmount}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Paid Amount
                  </div>
                  <div className="font-semibold text-green-600">
                    ${fee.paidAmount}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Pending Amount
                  </div>
                  <div className="font-semibold text-orange-600">
                    ${fee.pendingAmount}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Due Date</div>
                  <div className="font-semibold">{fee.dueDate}</div>
                </div>
              </div>

              {fee.pendingAmount > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Payment Progress</span>
                    <span>
                      {((fee.paidAmount / fee.totalAmount) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress
                    value={(fee.paidAmount / fee.totalAmount) * 100}
                    className="h-2"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
