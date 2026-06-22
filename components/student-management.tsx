'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Mail,
  Phone,
  Download,
  Upload,
  Users,
  AlertCircle,
  CheckCircle,
  Clock,
  Eye,
  FileText,
  History,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock student data
interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  grade: string;
  section: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  address: string;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  totalFees: number;
  paidAmount: number;
  pendingAmount: number;
  lastPayment: string;
  enrollmentDate: string;
  status: 'active' | 'inactive';
  enrollmentType: 'current' | 'former';
  graduationDate?: string;
  history: { date: string; event: string }[];
  avatar: string;
}

const studentsData: Student[] = [
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
    enrollmentType: 'current',
    history: [
      { date: '2023-08-15', event: 'Enrolled in Grade 8 Section A' },
      { date: '2024-01-10', event: 'Promoted to Grade 8 Section A' },
      { date: '2024-01-15', event: 'Term 1 fees paid in full' },
    ],
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
    enrollmentType: 'current',
    history: [
      { date: '2022-08-15', event: 'Enrolled in Grade 10 Section B' },
      { date: '2023-12-20', event: 'Partial fee payment received' },
    ],
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
    enrollmentType: 'current',
    history: [
      { date: '2021-08-15', event: 'Enrolled in Grade 12 Section A' },
      { date: '2023-11-10', event: 'Fee payment overdue notice sent' },
    ],
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
    enrollmentType: 'current',
    history: [{ date: '2022-08-15', event: 'Enrolled in Grade 9 Section C' }],
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
    enrollmentType: 'current',
    history: [{ date: '2021-08-15', event: 'Enrolled in Grade 11 Section B' }],
    avatar: 'LA',
  },
  {
    id: 'STU006',
    name: 'Tommy Chen',
    email: 'tommy.chen@email.com',
    phone: '+1 (555) 678-9012',
    grade: 'Grade 12',
    section: 'A',
    parentName: 'Wei Chen',
    parentEmail: 'wei.chen@email.com',
    parentPhone: '+1 (555) 678-9013',
    address: '111 Graduate Lane, Springfield, IL 62706',
    paymentStatus: 'paid',
    totalFees: 3200,
    paidAmount: 3200,
    pendingAmount: 0,
    lastPayment: '2024-05-01',
    enrollmentDate: '2020-08-15',
    status: 'inactive',
    enrollmentType: 'former',
    graduationDate: '2024-06-15',
    history: [
      { date: '2020-08-15', event: 'Enrolled in Grade 9 Section A' },
      { date: '2022-06-10', event: 'Promoted to Grade 11' },
      { date: '2024-06-15', event: 'Graduated - Grade 12' },
    ],
    avatar: 'TC',
  },
  {
    id: 'STU007',
    name: 'Aisha Hassan',
    email: 'aisha.hassan@email.com',
    phone: '+1 (555) 789-0123',
    grade: 'Grade 12',
    section: 'B',
    parentName: 'Omar Hassan',
    parentEmail: 'omar.hassan@email.com',
    parentPhone: '+1 (555) 789-0124',
    address: '222 Alumni Road, Springfield, IL 62707',
    paymentStatus: 'paid',
    totalFees: 3100,
    paidAmount: 3100,
    pendingAmount: 0,
    lastPayment: '2023-12-01',
    enrollmentDate: '2019-08-15',
    status: 'inactive',
    enrollmentType: 'former',
    graduationDate: '2023-06-20',
    history: [
      { date: '2019-08-15', event: 'Enrolled in Grade 8 Section B' },
      { date: '2021-06-12', event: 'Academic excellence award' },
      { date: '2023-06-20', event: 'Graduated - Grade 12' },
    ],
    avatar: 'AH',
  },
];

export function StudentManagement() {
  const [students] = useState<Student[]>(studentsData);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [enrollmentTab, setEnrollmentTab] = useState('current');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // Filter students based on search and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.parentName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGrade = gradeFilter === 'all' || student.grade === gradeFilter;
    const matchesStatus =
      statusFilter === 'all' || student.status === statusFilter;
    const matchesPayment =
      paymentFilter === 'all' || student.paymentStatus === paymentFilter;

    const matchesEnrollment =
      enrollmentTab === 'all' ||
      (enrollmentTab === 'current' && student.enrollmentType === 'current') ||
      (enrollmentTab === 'former' && student.enrollmentType === 'former');

    return (
      matchesSearch &&
      matchesGrade &&
      matchesStatus &&
      matchesPayment &&
      matchesEnrollment
    );
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedStudents(filteredStudents.map((student) => student.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleSelectStudent = (studentId: string, checked: boolean) => {
    if (checked) {
      setSelectedStudents([...selectedStudents, studentId]);
    } else {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Paid
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Pending
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

  const getStatusBadge = (status: string) => {
    return status === 'active' ? (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        <CheckCircle className="w-3 h-3 mr-1" />
        Active
      </Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
        <Clock className="w-3 h-3 mr-1" />
        Inactive
      </Badge>
    );
  };

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on students:`, selectedStudents);
    // Implement bulk actions here
    setSelectedStudents([]);
  };

  const renderStudentActions = (student: Student) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            setSelectedStudent(student);
            setIsEditDialogOpen(true);
          }}
        >
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          Edit Student
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Mail className="mr-2 h-4 w-4" />
          Send Email
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Phone className="mr-2 h-4 w-4" />
          Call Parent
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/students/${student.id}/payments`}>
            <FileText className="mr-2 h-4 w-4" />
            Payment History
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Student
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Student Management
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Search, add, and update student records. Track current and former
            students with full history.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Student
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogDescription>
                  Enter the student&apos;s information to create a new record.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Student Name</Label>
                    <Input id="name" placeholder="Enter full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="grade">Grade</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grade-6">Grade 6</SelectItem>
                        <SelectItem value="grade-7">Grade 7</SelectItem>
                        <SelectItem value="grade-8">Grade 8</SelectItem>
                        <SelectItem value="grade-9">Grade 9</SelectItem>
                        <SelectItem value="grade-10">Grade 10</SelectItem>
                        <SelectItem value="grade-11">Grade 11</SelectItem>
                        <SelectItem value="grade-12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="section">Section</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select section" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">Section A</SelectItem>
                        <SelectItem value="b">Section B</SelectItem>
                        <SelectItem value="c">Section C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input id="parentName" placeholder="Enter parent's name" />
                  </div>
                  <div>
                    <Label htmlFor="parentEmail">Parent Email</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      placeholder="parent@email.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter full address" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Add Student
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs value={enrollmentTab} onValueChange={setEnrollmentTab}>
        <TabsList className="flex w-full h-auto overflow-x-auto">
          <TabsTrigger value="current" className="shrink-0">
            Current Students (
            {students.filter((s) => s.enrollmentType === 'current').length})
          </TabsTrigger>
          <TabsTrigger value="former" className="shrink-0">
            Former Students (
            {students.filter((s) => s.enrollmentType === 'former').length})
          </TabsTrigger>
          <TabsTrigger value="all" className="shrink-0">
            All Records ({students.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value={enrollmentTab} className="space-y-6 mt-6">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Students
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{students.length}</div>
                <p className="text-xs text-muted-foreground">
                  Active enrollments
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Payments Up to Date
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {students.filter((s) => s.paymentStatus === 'paid').length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Fully paid students
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Payments
                </CardTitle>
                <Clock className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {students.filter((s) => s.paymentStatus === 'pending').length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Partial payments
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                <AlertCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {students.filter((s) => s.paymentStatus === 'overdue').length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Require attention
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card>
            <CardHeader>
              <CardTitle>Search & Filter</CardTitle>
              <CardDescription>
                Find and filter students by various criteria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name, email, ID, or parent name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Select value={gradeFilter} onValueChange={setGradeFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Grades</SelectItem>
                      <SelectItem value="Grade 6">Grade 6</SelectItem>
                      <SelectItem value="Grade 7">Grade 7</SelectItem>
                      <SelectItem value="Grade 8">Grade 8</SelectItem>
                      <SelectItem value="Grade 9">Grade 9</SelectItem>
                      <SelectItem value="Grade 10">Grade 10</SelectItem>
                      <SelectItem value="Grade 11">Grade 11</SelectItem>
                      <SelectItem value="Grade 12">Grade 12</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={paymentFilter}
                    onValueChange={setPaymentFilter}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Payment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Payments</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bulk Actions */}
          {selectedStudents.length > 0 && (
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">
                      {selectedStudents.length} selected
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {selectedStudents.length} student
                      {selectedStudents.length > 1 ? 's' : ''} selected
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBulkAction('send-reminder')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Reminder
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBulkAction('export')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export Selected
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBulkAction('deactivate')}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Change Status
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedStudents([])}
                    >
                      Clear Selection
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Students Table */}
          <Card>
            <CardHeader>
              <CardTitle>Students ({filteredStudents.length})</CardTitle>
              <CardDescription>
                Manage student records and information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="hidden lg:block overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={
                            selectedStudents.length ===
                              filteredStudents.length &&
                            filteredStudents.length > 0
                          }
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Student</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Parent/Guardian</TableHead>
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Fees</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-12">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedStudents.includes(student.id)}
                            onCheckedChange={(checked) =>
                              handleSelectStudent(
                                student.id,
                                checked as boolean,
                              )
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={`/placeholder.svg?height=32&width=32`}
                                alt={student.name}
                              />
                              <AvatarFallback>{student.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{student.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {student.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{student.grade}</div>
                            <div className="text-sm text-muted-foreground">
                              Section {student.section}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              {student.parentName}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {student.parentEmail}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getPaymentStatusBadge(student.paymentStatus)}
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              ${student.paidAmount} / ${student.totalFees}
                            </div>
                            {student.pendingAmount > 0 && (
                              <div className="text-sm text-red-600">
                                ${student.pendingAmount} pending
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(student.status)}</TableCell>
                        <TableCell>{renderStudentActions(student)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="lg:hidden space-y-3">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="rounded-lg border p-4 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <Checkbox
                          checked={selectedStudents.includes(student.id)}
                          onCheckedChange={(checked) =>
                            handleSelectStudent(student.id, checked as boolean)
                          }
                        />
                        <Avatar className="h-10 w-10 shrink-0">
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40`}
                            alt={student.name}
                          />
                          <AvatarFallback>{student.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="font-medium truncate">{student.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {student.id} · {student.grade} Section{' '}
                            {student.section}
                          </p>
                        </div>
                      </div>
                      {renderStudentActions(student)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Parent</p>
                        <p className="font-medium truncate">
                          {student.parentName}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Payment</p>
                        {getPaymentStatusBadge(student.paymentStatus)}
                      </div>
                      <div>
                        <p className="text-muted-foreground">Fees</p>
                        <p className="font-medium">
                          ${student.paidAmount} / ${student.totalFees}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        {getStatusBadge(student.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Student Details Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Student Details</DialogTitle>
            <DialogDescription>
              View and edit student information
            </DialogDescription>
          </DialogHeader>
          {selectedStudent && (
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Student Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Student Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`/placeholder.svg?height=48&width=48`}
                          alt={selectedStudent.name}
                        />
                        <AvatarFallback>
                          {selectedStudent.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">
                          {selectedStudent.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedStudent.id}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Email
                        </Label>
                        <p className="text-sm">{selectedStudent.email}</p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Phone
                        </Label>
                        <p className="text-sm">{selectedStudent.phone}</p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Grade & Section
                        </Label>
                        <p className="text-sm">
                          {selectedStudent.grade} - Section{' '}
                          {selectedStudent.section}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Status
                        </Label>
                        <div className="mt-1">
                          {getStatusBadge(selectedStudent.status)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Parent Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Parent/Guardian</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Name
                        </Label>
                        <p className="text-sm font-medium">
                          {selectedStudent.parentName}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Email
                        </Label>
                        <p className="text-sm">{selectedStudent.parentEmail}</p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Phone
                        </Label>
                        <p className="text-sm">{selectedStudent.parentPhone}</p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Address
                        </Label>
                        <p className="text-sm">{selectedStudent.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Payment Status
                        </Label>
                        <div className="mt-1">
                          {getPaymentStatusBadge(selectedStudent.paymentStatus)}
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Total Fees
                        </Label>
                        <p className="text-sm font-medium">
                          ${selectedStudent.totalFees}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Paid Amount
                        </Label>
                        <p className="text-sm text-green-600">
                          ${selectedStudent.paidAmount}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Pending Amount
                        </Label>
                        <p className="text-sm text-red-600">
                          ${selectedStudent.pendingAmount}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Last Payment
                        </Label>
                        <p className="text-sm">{selectedStudent.lastPayment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enrollment History */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <History className="w-4 h-4" />
                    Enrollment History
                  </CardTitle>
                  <CardDescription>
                    Full record from enrollment
                    {selectedStudent.graduationDate &&
                      ` to graduation (${selectedStudent.graduationDate})`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedStudent.history.map((entry, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{entry.event}</p>
                          <p className="text-xs text-muted-foreground">
                            {entry.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Close
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Edit Student
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
