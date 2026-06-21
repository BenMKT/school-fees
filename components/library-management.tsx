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
import {
  BookOpen,
  Search,
  RotateCcw,
  BookmarkPlus,
  CheckCircle,
} from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  available: number;
  status: 'available' | 'low-stock' | 'out-of-stock';
}

interface Loan {
  id: string;
  bookTitle: string;
  student: string;
  issuedDate: string;
  dueDate: string;
  status: 'borrowed' | 'overdue' | 'reserved';
}

const books: Book[] = [
  {
    id: 'BK001',
    title: 'Introduction to Algebra',
    author: 'J. Stewart',
    isbn: '978-0321',
    category: 'Mathematics',
    totalCopies: 12,
    available: 8,
    status: 'available',
  },
  {
    id: 'BK002',
    title: 'World History Vol. 2',
    author: 'M. Johnson',
    isbn: '978-0451',
    category: 'History',
    totalCopies: 6,
    available: 1,
    status: 'low-stock',
  },
  {
    id: 'BK003',
    title: 'Biology Essentials',
    author: 'K. Patel',
    isbn: '978-0789',
    category: 'Science',
    totalCopies: 10,
    available: 0,
    status: 'out-of-stock',
  },
  {
    id: 'BK004',
    title: 'English Literature',
    author: 'A. Okonkwo',
    isbn: '978-0123',
    category: 'English',
    totalCopies: 15,
    available: 11,
    status: 'available',
  },
  {
    id: 'BK005',
    title: 'Computer Science Basics',
    author: 'R. Kim',
    isbn: '978-0567',
    category: 'Technology',
    totalCopies: 8,
    available: 5,
    status: 'available',
  },
];

const initialLoans: Loan[] = [
  {
    id: 'LN001',
    bookTitle: 'Introduction to Algebra',
    student: 'Emma Davis',
    issuedDate: '2026-06-01',
    dueDate: '2026-06-28',
    status: 'borrowed',
  },
  {
    id: 'LN002',
    bookTitle: 'World History Vol. 2',
    student: 'Michael Johnson',
    issuedDate: '2026-05-15',
    dueDate: '2026-06-10',
    status: 'overdue',
  },
  {
    id: 'LN003',
    bookTitle: 'Biology Essentials',
    student: 'Sarah Wilson',
    issuedDate: '-',
    dueDate: '2026-07-05',
    status: 'reserved',
  },
];

export function LibraryManagement() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [loans, setLoans] = useState(initialLoans);

  const filteredBooks = books.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.isbn.includes(search);
    const matchesCategory =
      categoryFilter === 'all' || b.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const renewLoan = (id: string) => {
    setLoans((prev) =>
      prev.map((l) =>
        l.id === id
          ? { ...l, dueDate: '2026-07-15', status: 'borrowed' as const }
          : l,
      ),
    );
  };

  const stockBadge = (status: Book['status']) => {
    const styles = {
      available: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'low-stock': 'bg-amber-50 text-amber-700 border-amber-200',
      'out-of-stock': 'bg-red-50 text-red-700 border-red-200',
    };
    const labels = {
      available: 'In Stock',
      'low-stock': 'Low Stock',
      'out-of-stock': 'Out of Stock',
    };
    return (
      <Badge variant="outline" className={styles[status]}>
        {labels[status]}
      </Badge>
    );
  };

  const loanBadge = (status: Loan['status']) => {
    const styles = {
      borrowed: 'bg-blue-50 text-blue-700 border-blue-200',
      overdue: 'bg-red-50 text-red-700 border-red-200',
      reserved: 'bg-purple-50 text-purple-700 border-purple-200',
    };
    return (
      <Badge variant="outline" className={styles[status]}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          {
            label: 'Total Books',
            value: books.reduce((s, b) => s + b.totalCopies, 0),
          },
          {
            label: 'Available',
            value: books.reduce((s, b) => s + b.available, 0),
          },
          {
            label: 'Active Loans',
            value: loans.filter((l) => l.status === 'borrowed').length,
          },
          {
            label: 'Overdue',
            value: loans.filter((l) => l.status === 'overdue').length,
          },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Book Catalog
                </CardTitle>
                <CardDescription>Stock status and availability</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search books..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-8 w-40"
                  />
                </div>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className="w-28">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Mathematics">Math</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm">{book.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {book.author}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      {book.available}/{book.totalCopies}
                    </TableCell>
                    <TableCell>{stockBadge(book.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Circulation Desk</CardTitle>
            <CardDescription>
              Issues, renewals, and reservations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Book / Student</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loans.map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm">{loan.bookTitle}</p>
                        <p className="text-xs text-muted-foreground">
                          {loan.student}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{loan.dueDate}</TableCell>
                    <TableCell>{loanBadge(loan.status)}</TableCell>
                    <TableCell className="text-right">
                      {loan.status === 'borrowed' ||
                      loan.status === 'overdue' ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => renewLoan(loan.id)}
                        >
                          <RotateCcw className="w-4 h-4 mr-1" />
                          Renew
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Issue
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" className="w-full mt-4">
              <BookmarkPlus className="w-4 h-4 mr-2" />
              New Issue / Reservation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
