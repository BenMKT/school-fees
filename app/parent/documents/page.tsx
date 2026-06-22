import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileText } from 'lucide-react';

const documents = [
  { name: 'Term 2 Report Card', date: 'Jun 1, 2026' },
  { name: 'Fee Receipt - June', date: 'Jun 5, 2026' },
  { name: 'Medical Form', date: 'May 12, 2026' },
];

export default function ParentDocumentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Documents
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Report cards, receipts, and school forms.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Available Documents</CardTitle>
          <CardDescription>Download and view shared files</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.name}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <FileText className="w-5 h-5 text-purple-600 shrink-0" />
              <div className="min-w-0">
                <p className="font-medium truncate">{doc.name}</p>
                <p className="text-sm text-muted-foreground">{doc.date}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
