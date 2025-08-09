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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Download, Eye, RefreshCw } from 'lucide-react';

interface PaymentHistoryTableProps {
  studentId: string;
}

// Mock student payment history data
const studentsPaymentHistory = {
  STU001: [
    {
      id: 'PAY001',
      date: '2024-01-15',
      amount: 400,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2024-001',
      receipt: 'RCP-001.pdf',
    },
    {
      id: 'PAY002',
      date: '2023-12-15',
      amount: 400,
      feeType: 'Tuition',
      method: 'Bank Transfer',
      status: 'completed',
      transactionId: 'TXN-2023-089',
      receipt: 'RCP-002.pdf',
    },
    {
      id: 'PAY003',
      date: '2023-11-15',
      amount: 400,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-067',
      receipt: 'RCP-003.pdf',
    },
    {
      id: 'PAY004',
      date: '2023-10-15',
      amount: 400,
      feeType: 'Tuition',
      method: 'Mobile Money',
      status: 'completed',
      transactionId: 'TXN-2023-045',
      receipt: 'RCP-004.pdf',
    },
    {
      id: 'PAY005',
      date: '2023-09-15',
      amount: 400,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-023',
      receipt: 'RCP-005.pdf',
    },
    {
      id: 'PAY006',
      date: '2023-08-15',
      amount: 500,
      feeType: 'Registration',
      method: 'Bank Transfer',
      status: 'completed',
      transactionId: 'TXN-2023-001',
      receipt: 'RCP-006.pdf',
    },
  ],
  STU002: [
    {
      id: 'PAY007',
      date: '2023-12-20',
      amount: 350,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-090',
      receipt: 'RCP-007.pdf',
    },
    {
      id: 'PAY008',
      date: '2023-11-20',
      amount: 350,
      feeType: 'Tuition',
      method: 'Bank Transfer',
      status: 'completed',
      transactionId: 'TXN-2023-068',
      receipt: 'RCP-008.pdf',
    },
    {
      id: 'PAY009',
      date: '2023-10-20',
      amount: 350,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-046',
      receipt: 'RCP-009.pdf',
    },
    {
      id: 'PAY010',
      date: '2023-09-20',
      amount: 350,
      feeType: 'Tuition',
      method: 'Mobile Money',
      status: 'completed',
      transactionId: 'TXN-2023-024',
      receipt: 'RCP-010.pdf',
    },
  ],
  STU003: [
    {
      id: 'PAY011',
      date: '2023-11-10',
      amount: 400,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-069',
      receipt: 'RCP-011.pdf',
    },
    {
      id: 'PAY012',
      date: '2023-10-10',
      amount: 400,
      feeType: 'Tuition',
      method: 'Bank Transfer',
      status: 'completed',
      transactionId: 'TXN-2023-047',
      receipt: 'RCP-012.pdf',
    },
    {
      id: 'PAY013',
      date: '2023-09-10',
      amount: 400,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-025',
      receipt: 'RCP-013.pdf',
    },
    {
      id: 'PAY014',
      date: '2023-08-10',
      amount: 400,
      feeType: 'Tuition',
      method: 'Mobile Money',
      status: 'completed',
      transactionId: 'TXN-2023-003',
      receipt: 'RCP-014.pdf',
    },
  ],
  STU004: [
    {
      id: 'PAY015',
      date: '2024-01-10',
      amount: 371,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2024-002',
      receipt: 'RCP-015.pdf',
    },
    {
      id: 'PAY016',
      date: '2023-12-10',
      amount: 371,
      feeType: 'Tuition',
      method: 'Bank Transfer',
      status: 'completed',
      transactionId: 'TXN-2023-091',
      receipt: 'RCP-016.pdf',
    },
    {
      id: 'PAY017',
      date: '2023-11-10',
      amount: 371,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-070',
      receipt: 'RCP-017.pdf',
    },
    {
      id: 'PAY018',
      date: '2023-10-10',
      amount: 371,
      feeType: 'Tuition',
      method: 'Mobile Money',
      status: 'completed',
      transactionId: 'TXN-2023-048',
      receipt: 'RCP-018.pdf',
    },
    {
      id: 'PAY019',
      date: '2023-09-10',
      amount: 371,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-026',
      receipt: 'RCP-019.pdf',
    },
    {
      id: 'PAY020',
      date: '2023-08-10',
      amount: 371,
      feeType: 'Tuition',
      method: 'Bank Transfer',
      status: 'completed',
      transactionId: 'TXN-2023-004',
      receipt: 'RCP-020.pdf',
    },
    {
      id: 'PAY021',
      date: '2023-07-10',
      amount: 371,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-005',
      receipt: 'RCP-021.pdf',
    },
  ],
  STU005: [
    {
      id: 'PAY022',
      date: '2023-12-15',
      amount: 483,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-092',
      receipt: 'RCP-022.pdf',
    },
    {
      id: 'PAY023',
      date: '2023-11-15',
      amount: 483,
      feeType: 'Tuition',
      method: 'Bank Transfer',
      status: 'completed',
      transactionId: 'TXN-2023-071',
      receipt: 'RCP-023.pdf',
    },
    {
      id: 'PAY024',
      date: '2023-10-15',
      amount: 484,
      feeType: 'Tuition',
      method: 'Credit Card',
      status: 'completed',
      transactionId: 'TXN-2023-049',
      receipt: 'RCP-024.pdf',
    },
  ],
};

// Function to get payment history by student ID
const getPaymentHistoryByStudentId = (studentId: string) => {
  return (
    studentsPaymentHistory[studentId as keyof typeof studentsPaymentHistory] ||
    []
  );
};

export function PaymentHistoryTable({ studentId }: PaymentHistoryTableProps) {
  const paymentHistory = getPaymentHistoryByStudentId(studentId);

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

  const getMethodBadge = (method: string) => {
    const colors = {
      'Credit Card': 'bg-blue-100 text-blue-700',
      'Bank Transfer': 'bg-green-100 text-green-700',
      'Mobile Money': 'bg-purple-100 text-purple-700',
      Cash: 'bg-orange-100 text-orange-700',
    };
    return (
      <Badge
        className={`${colors[method as keyof typeof colors]} hover:${
          colors[method as keyof typeof colors]
        }`}
      >
        {method}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>
              Complete record of all payments made by this student
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Fee Type</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentHistory.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.date}</TableCell>
                <TableCell className="font-semibold text-green-600">
                  ${payment.amount}
                </TableCell>
                <TableCell>{payment.feeType}</TableCell>
                <TableCell>{getMethodBadge(payment.method)}</TableCell>
                <TableCell>{getStatusBadge(payment.status)}</TableCell>
                <TableCell className="font-mono text-sm">
                  {payment.transactionId}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
