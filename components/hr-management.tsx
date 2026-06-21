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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Users, FileCheck, Calendar, Download } from 'lucide-react';

const payrollRecords = [
  {
    id: 'EMP001',
    name: 'Dr. Sarah Mitchell',
    role: 'Principal',
    department: 'Administration',
    grossPay: 185000,
    netPay: 142000,
    status: 'processed',
  },
  {
    id: 'EMP002',
    name: 'Prof. Michael Johnson',
    role: 'Head of Mathematics',
    department: 'Mathematics',
    grossPay: 120000,
    netPay: 95000,
    status: 'processed',
  },
  {
    id: 'EMP003',
    name: 'Mrs. Emily Chen',
    role: 'English Teacher',
    department: 'English',
    grossPay: 85000,
    netPay: 68000,
    status: 'pending',
  },
  {
    id: 'EMP004',
    name: 'Mr. David Ochieng',
    role: 'Lab Technician',
    department: 'Science',
    grossPay: 65000,
    netPay: 52000,
    status: 'processed',
  },
];

const benefits = [
  {
    staff: 'Dr. Sarah Mitchell',
    leaveBalance: '18 days',
    medical: 'Active',
    pension: 'Tier 1',
  },
  {
    staff: 'Prof. Michael Johnson',
    leaveBalance: '12 days',
    medical: 'Active',
    pension: 'Tier 1',
  },
  {
    staff: 'Mrs. Emily Chen',
    leaveBalance: '15 days',
    medical: 'Active',
    pension: 'Tier 2',
  },
];

const complianceItems = [
  { item: 'NHIF Remittance', due: '2026-06-30', status: 'on-track' },
  { item: 'NSSF Contribution', due: '2026-06-30', status: 'on-track' },
  { item: 'PAYE Filing', due: '2026-07-09', status: 'upcoming' },
  { item: 'Staff Contract Renewals', due: '2026-08-01', status: 'upcoming' },
];

export function HRManagement() {
  return (
    <Tabs defaultValue="payroll" className="space-y-6">
      <TabsList>
        <TabsTrigger value="payroll">Payroll</TabsTrigger>
        <TabsTrigger value="benefits">Benefits & Leave</TabsTrigger>
        <TabsTrigger value="compliance">Compliance</TabsTrigger>
      </TabsList>

      <TabsContent value="payroll" className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Monthly Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Ksh 4.2M</div>
              <p className="text-xs text-muted-foreground">June 2026 cycle</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                Staff on Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">63</div>
              <p className="text-xs text-muted-foreground">Active employees</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Pending Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Payroll Register</CardTitle>
              <CardDescription>
                June 2026 · Generate payslips and reports
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Gross</TableHead>
                  <TableHead>Net Pay</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{record.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {record.role}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>
                      Ksh {record.grossPay.toLocaleString()}
                    </TableCell>
                    <TableCell className="font-medium">
                      Ksh {record.netPay.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          record.status === 'processed'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }
                      >
                        {record.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="benefits">
        <Card>
          <CardHeader>
            <CardTitle>Benefits & Leave Balances</CardTitle>
            <CardDescription>Staff welfare and leave tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Staff Member</TableHead>
                  <TableHead>Leave Balance</TableHead>
                  <TableHead>Medical Cover</TableHead>
                  <TableHead>Pension Scheme</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {benefits.map((b) => (
                  <TableRow key={b.staff}>
                    <TableCell className="font-medium">{b.staff}</TableCell>
                    <TableCell>{b.leaveBalance}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-emerald-50 text-emerald-700 border-emerald-200"
                      >
                        {b.medical}
                      </Badge>
                    </TableCell>
                    <TableCell>{b.pension}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="compliance">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              Compliance Calendar
            </CardTitle>
            <CardDescription>
              Statutory deadlines and audit requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {complianceItems.map((item) => (
              <div
                key={item.item}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{item.item}</p>
                  <p className="text-sm text-muted-foreground">
                    Due: {item.due}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    item.status === 'on-track'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-blue-50 text-blue-700 border-blue-200'
                  }
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
