'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PaymentOverviewCards } from '@/components/payment-overview-cards';
import { PaymentTrendChart } from '@/components/payment-trend-chart';
import { PaymentBreakdownChart } from '@/components/payment-breakdown-chart';
import { PaymentHistoryTable } from '@/components/payment-history-table';
import { PaymentTimeline } from '@/components/payment-timeline';
import { FeeStructureBreakdown } from '@/components/fee-structure-breakdown';
import { PaymentReminders } from '@/components/payment-reminders';
import { PaymentMethodAnalytics } from '@/components/payment-method-analytics';
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  Calendar,
  CreditCard,
} from 'lucide-react';
import Link from 'next/link';

// Mock student data - this should match the data from student-management.tsx
const studentsData = [
  {
    id: 'STU001',
    name: 'Emma Davis',
    email: 'emma.davis@email.com',
    phone: '+1 (555) 123-4567',
    grade: 'Grade 8',
    section: 'A',
    parentName: 'Robert Davis',
    parentEmail: 'robert.davis@email.com',
    parentPhone: '+1 (555) 123-4568',
    address: '123 Oak Street, Springfield, IL 62701',
    paymentStatus: 'paid',
    totalFees: 2500,
    paidAmount: 2500,
    pendingAmount: 0,
    lastPayment: '2024-01-15',
    enrollmentDate: '2023-08-15',
    status: 'active',
    avatar: 'ED',
  },
  {
    id: 'STU002',
    name: 'Michael Johnson',
    email: 'michael.johnson@email.com',
    phone: '+1 (555) 234-5678',
    grade: 'Grade 10',
    section: 'B',
    parentName: 'Sarah Johnson',
    parentEmail: 'sarah.johnson@email.com',
    parentPhone: '+1 (555) 234-5679',
    address: '456 Pine Avenue, Springfield, IL 62702',
    paymentStatus: 'pending',
    totalFees: 2800,
    paidAmount: 1400,
    pendingAmount: 1400,
    lastPayment: '2023-12-20',
    enrollmentDate: '2022-08-15',
    status: 'active',
    avatar: 'MJ',
  },
  {
    id: 'STU003',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@email.com',
    phone: '+1 (555) 345-6789',
    grade: 'Grade 12',
    section: 'A',
    parentName: 'David Wilson',
    parentEmail: 'david.wilson@email.com',
    parentPhone: '+1 (555) 345-6790',
    address: '789 Maple Drive, Springfield, IL 62703',
    paymentStatus: 'overdue',
    totalFees: 3200,
    paidAmount: 1600,
    pendingAmount: 1600,
    lastPayment: '2023-11-10',
    enrollmentDate: '2021-08-15',
    status: 'active',
    avatar: 'SW',
  },
  {
    id: 'STU004',
    name: 'David Brown',
    email: 'david.brown@email.com',
    phone: '+1 (555) 456-7890',
    grade: 'Grade 9',
    section: 'C',
    parentName: 'Lisa Brown',
    parentEmail: 'lisa.brown@email.com',
    parentPhone: '+1 (555) 456-7891',
    address: '321 Elm Street, Springfield, IL 62704',
    paymentStatus: 'paid',
    totalFees: 2600,
    paidAmount: 2600,
    pendingAmount: 0,
    lastPayment: '2024-01-10',
    enrollmentDate: '2022-08-15',
    status: 'active',
    avatar: 'DB',
  },
  {
    id: 'STU005',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@email.com',
    phone: '+1 (555) 567-8901',
    grade: 'Grade 11',
    section: 'B',
    parentName: 'Mark Anderson',
    parentEmail: 'mark.anderson@email.com',
    parentPhone: '+1 (555) 567-8902',
    address: '654 Cedar Lane, Springfield, IL 62705',
    paymentStatus: 'pending',
    totalFees: 2900,
    paidAmount: 1450,
    pendingAmount: 1450,
    lastPayment: '2023-12-15',
    enrollmentDate: '2021-08-15',
    status: 'inactive',
    avatar: 'LA',
  },
];

// Function to get student data by ID
const getStudentById = (studentId: string) => {
  return studentsData.find((student) => student.id === studentId) || null;
};

interface StudentPaymentAnalyticsProps {
  studentId: string;
}

export function StudentPaymentAnalytics({
  studentId,
}: StudentPaymentAnalyticsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('current-year');
  const [selectedTab, setSelectedTab] = useState('overview');

  // Get the specific student data
  const studentData = getStudentById(studentId);

  // If student not found, show error state
  if (!studentData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Student Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The student with ID {studentId} could not be found.
          </p>
          <Link href="/dashboard/students">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Students
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/students">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Students
            </Button>
          </Link>
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={`/placeholder.svg?height=48&width=48`}
                alt={studentData.name}
              />
              <AvatarFallback>{studentData.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {studentData.name}
              </h1>
              <p className="text-muted-foreground">
                {studentData.grade} - Section {studentData.section} •{' '}
                {studentData.id}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-year">Current Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">
            <Mail className="w-4 h-4 mr-2" />
            Send Statement
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="flex items-center p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Call Parent</p>
                <p className="text-xs text-muted-foreground">
                  {studentData.parentPhone}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="flex items-center p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Email Parent</p>
                <p className="text-xs text-muted-foreground">
                  {studentData.parentEmail}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="flex items-center p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Schedule Meeting</p>
                <p className="text-xs text-muted-foreground">
                  Book appointment
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="flex items-center p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <CreditCard className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Process Payment</p>
                <p className="text-xs text-muted-foreground">Manual entry</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="fees">Fee Structure</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <PaymentOverviewCards studentId={studentId} />
          <div className="grid gap-6 md:grid-cols-2">
            <PaymentTrendChart studentId={studentId} />
            <PaymentBreakdownChart studentId={studentId} />
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <PaymentHistoryTable studentId={studentId} />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <PaymentMethodAnalytics studentId={studentId} />
            <PaymentTrendChart studentId={studentId} />
          </div>
          <PaymentBreakdownChart studentId={studentId} />
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <PaymentTimeline studentId={studentId} />
        </TabsContent>

        <TabsContent value="fees" className="space-y-6">
          <FeeStructureBreakdown studentId={studentId} />
        </TabsContent>

        <TabsContent value="reminders" className="space-y-6">
          <PaymentReminders studentId={studentId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
