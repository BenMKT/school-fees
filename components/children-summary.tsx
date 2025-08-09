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
import { Progress } from '@/components/ui/progress';
import { Eye, CreditCard, MessageSquare } from 'lucide-react';

const childrenData = [
  {
    id: 'STU001',
    name: 'Emma Davis',
    grade: 'Grade 8',
    section: 'A',
    avatar: 'ED',
    totalFees: 3200,
    paidAmount: 2400,
    pendingAmount: 800,
    nextDueDate: '2024-02-15',
    paymentStatus: 'partial',
    lastPayment: '2024-01-15',
  },
  {
    id: 'STU002',
    name: 'Michael Davis',
    grade: 'Grade 10',
    section: 'B',
    avatar: 'MD',
    totalFees: 3500,
    paidAmount: 3500,
    pendingAmount: 0,
    nextDueDate: '2024-03-15',
    paymentStatus: 'paid',
    lastPayment: '2024-01-20',
  },
];

export function ChildrenSummary() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Up to Date
          </Badge>
        );
      case 'partial':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Partial Payment
          </Badge>
        );
      case 'overdue':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            Overdue
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Children</CardTitle>
        <CardDescription>
          Overview of your children&apos;s payment status and school information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {childrenData.map((child) => (
            <div
              key={child.id}
              className="p-4 border rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={child.name}
                    />
                    <AvatarFallback>{child.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{child.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {child.grade} - Section {child.section} • {child.id}
                    </p>
                  </div>
                </div>
                {getStatusBadge(child.paymentStatus)}
              </div>

              <div className="grid gap-4 md:grid-cols-3 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Fees</p>
                  <p className="font-semibold">${child.totalFees}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Amount Paid</p>
                  <p className="font-semibold text-green-600">
                    ${child.paidAmount}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Pending Amount
                  </p>
                  <p className="font-semibold text-orange-600">
                    ${child.pendingAmount}
                  </p>
                </div>
              </div>

              {child.pendingAmount > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Payment Progress</span>
                    <span>
                      {((child.paidAmount / child.totalFees) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress
                    value={(child.paidAmount / child.totalFees) * 100}
                    className="h-2"
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {child.pendingAmount > 0 ? (
                    <>Next due: {child.nextDueDate}</>
                  ) : (
                    <>Last payment: {child.lastPayment}</>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {child.pendingAmount > 0 && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Now
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
