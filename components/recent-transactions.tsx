'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Download, Eye } from 'lucide-react';

const recentTransactions = [
  {
    id: 'TXN001',
    date: '2024-01-20',
    student: 'Michael Davis',
    amount: 500,
    feeType: 'Tuition',
    method: 'Credit Card',
    status: 'completed',
    receipt: 'RCP-001.pdf',
    avatar: 'MD',
  },
  {
    id: 'TXN002',
    date: '2024-01-15',
    student: 'Emma Davis',
    amount: 400,
    feeType: 'Laboratory',
    method: 'Bank Transfer',
    status: 'completed',
    receipt: 'RCP-002.pdf',
    avatar: 'ED',
  },
  {
    id: 'TXN003',
    date: '2024-01-10',
    student: 'Emma Davis',
    amount: 200,
    feeType: 'Library',
    method: 'Mobile Money',
    status: 'completed',
    receipt: 'RCP-003.pdf',
    avatar: 'ED',
  },
  {
    id: 'TXN004',
    date: '2023-12-20',
    student: 'Michael Davis',
    amount: 300,
    feeType: 'Sports',
    method: 'Credit Card',
    status: 'completed',
    receipt: 'RCP-004.pdf',
    avatar: 'MD',
  },
];

export function RecentTransactions() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Completed
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      case 'failed':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            Failed
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest payment transactions</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 rounded-lg border"
            >
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={transaction.student}
                  />
                  <AvatarFallback>{transaction.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{transaction.student}</p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.feeType} • {transaction.method}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">
                    ${transaction.amount}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
                {getStatusBadge(transaction.status)}
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
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
