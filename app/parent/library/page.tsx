'use client';

import { ParentSidebar } from '@/components/parent-sidebar';
import { ParentHeader } from '@/components/parent-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const books = [
  { title: 'Introduction to Algebra', due: 'Jun 28, 2026', status: 'borrowed' },
  { title: 'World History Vol. 2', due: 'Returned', status: 'returned' },
  { title: 'Biology Essentials', due: 'Jul 5, 2026', status: 'reserved' },
];

export default function ParentLibraryPage() {
  return (
    <div className="flex h-screen">
      <ParentSidebar />
      <div className="flex-1 flex flex-col">
        <ParentHeader />
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Library</h1>
            <p className="text-muted-foreground">
              Check book availability, renew loans, and manage reservations.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>My Loans & Reservations</CardTitle>
              <CardDescription>Emma Johnson</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{book.title}</p>
                    <p className="text-sm text-muted-foreground">{book.due}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      book.status === 'borrowed'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : book.status === 'reserved'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }
                  >
                    {book.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
