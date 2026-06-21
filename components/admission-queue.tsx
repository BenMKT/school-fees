'use client';

import { useState } from 'react';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, CheckCircle, XCircle, Eye } from 'lucide-react';

export interface Applicant {
  id: string;
  name: string;
  grade: string;
  school: string;
  parentName: string;
  parentPhone: string;
  appliedDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

const initialApplicants: Applicant[] = [
  {
    id: 'APP001',
    name: 'James Otieno',
    grade: '9th Grade',
    school: 'Greenwood High School',
    parentName: 'Mary Otieno',
    parentPhone: '+254 712 111 222',
    appliedDate: '2026-06-18',
    status: 'pending',
  },
  {
    id: 'APP002',
    name: 'Grace Wanjiku',
    grade: '6th Grade',
    school: 'Riverside Academy',
    parentName: 'Peter Wanjiku',
    parentPhone: '+254 723 333 444',
    appliedDate: '2026-06-17',
    status: 'pending',
  },
  {
    id: 'APP003',
    name: 'Brian Kamau',
    grade: '11th Grade',
    school: 'Unity International School',
    parentName: 'Jane Kamau',
    parentPhone: '+254 734 555 666',
    appliedDate: '2026-06-15',
    status: 'approved',
  },
  {
    id: 'APP004',
    name: 'Faith Akinyi',
    grade: '8th Grade',
    school: 'Greenwood High School',
    parentName: 'John Akinyi',
    parentPhone: '+254 745 777 888',
    appliedDate: '2026-06-14',
    status: 'rejected',
  },
];

export function AdmissionQueue({
  externalApplicants,
}: {
  externalApplicants?: Applicant[];
}) {
  const [applicants, setApplicants] = useState<Applicant[]>(initialApplicants);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const mergedApplicants = externalApplicants
    ? [
        ...externalApplicants.filter(
          (ext) => !applicants.some((a) => a.id === ext.id),
        ),
        ...applicants,
      ]
    : applicants;

  const filtered = mergedApplicants.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.id.toLowerCase().includes(search.toLowerCase()) ||
      a.parentName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id: string, status: Applicant['status']) => {
    setApplicants((prev) => {
      const base = externalApplicants
        ? [
            ...externalApplicants.filter(
              (ext) => !prev.some((a) => a.id === ext.id),
            ),
            ...prev,
          ]
        : prev;
      return base.map((a) => (a.id === id ? { ...a, status } : a));
    });
  };

  const pendingCount = mergedApplicants.filter(
    (a) => a.status === 'pending',
  ).length;

  const statusBadge = (status: Applicant['status']) => {
    const styles = {
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      approved: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      rejected: 'bg-red-50 text-red-700 border-red-200',
    };
    return (
      <Badge variant="outline" className={styles[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Applicant Queue</CardTitle>
            <CardDescription>
              {pendingCount} pending · Searchable database from day one
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search applicants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Parent</TableHead>
              <TableHead>Applied</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((applicant) => (
              <TableRow key={applicant.id}>
                <TableCell className="font-mono text-sm">
                  {applicant.id}
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{applicant.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {applicant.school}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{applicant.grade}</TableCell>
                <TableCell>
                  <div>
                    <p className="text-sm">{applicant.parentName}</p>
                    <p className="text-xs text-muted-foreground">
                      {applicant.parentPhone}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{applicant.appliedDate}</TableCell>
                <TableCell>{statusBadge(applicant.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="sm" title="View details">
                      <Eye className="w-4 h-4" />
                    </Button>
                    {applicant.status === 'pending' && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-emerald-600 hover:text-emerald-700"
                          onClick={() => updateStatus(applicant.id, 'approved')}
                          title="Approve & enroll"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => updateStatus(applicant.id, 'rejected')}
                          title="Reject"
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </>
                    )}
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
