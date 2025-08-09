'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Download, Filter } from 'lucide-react';

// Mock fee data
const feeStructure = [
  {
    id: 1,
    name: 'Tuition Fee',
    amount: '$500',
    frequency: 'Monthly',
    dueDate: '5th of every month',
  },
  {
    id: 2,
    name: 'Library Fee',
    amount: '$50',
    frequency: 'Quarterly',
    dueDate: '1st of quarter',
  },
  {
    id: 3,
    name: 'Sports Fee',
    amount: '$100',
    frequency: 'Annually',
    dueDate: '1st of academic year',
  },
];

const recentPayments = [
  {
    id: 1,
    student: 'John Doe',
    amount: '$500',
    type: 'Tuition Fee',
    date: '2024-03-15',
    status: 'Paid',
  },
  {
    id: 2,
    student: 'Sarah Smith',
    amount: '$50',
    type: 'Library Fee',
    date: '2024-03-14',
    status: 'Pending',
  },
  {
    id: 3,
    student: 'Michael Johnson',
    amount: '$100',
    type: 'Sports Fee',
    date: '2024-03-13',
    status: 'Paid',
  },
];

export default function FeesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Fees Management</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Fee
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fee Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Fee Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {feeStructure.map((fee) => (
                <div
                  key={fee.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{fee.name}</p>
                    <p className="text-sm text-gray-500">{fee.frequency}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{fee.amount}</p>
                    <p className="text-sm text-gray-500">Due: {fee.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{payment.student}</p>
                    <p className="text-sm text-gray-500">{payment.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{payment.amount}</p>
                    <p className="text-sm text-gray-500">{payment.date}</p>
                  </div>
                  <div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        payment.status === 'Paid'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
