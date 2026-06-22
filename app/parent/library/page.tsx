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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Library
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
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
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{book.title}</p>
                <p className="text-sm text-muted-foreground">{book.due}</p>
              </div>
              <Badge
                variant="outline"
                className={
                  book.status === 'borrowed'
                    ? 'bg-amber-50 text-amber-700 border-amber-200 w-fit'
                    : book.status === 'reserved'
                      ? 'bg-blue-50 text-blue-700 border-blue-200 w-fit'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200 w-fit'
                }
              >
                {book.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
