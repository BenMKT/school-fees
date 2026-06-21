import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StudentRegistrationForm from '@/components/student-registration-form';

export const metadata: Metadata = {
  title: 'Apply for Admission - E-SMS',
  description:
    'Submit a student admission application with parent, guardian, and emergency contact details.',
};

export default function PublicAdmissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              E-SMS
            </span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Student Admission Application
          </h1>
          <p className="text-muted-foreground">
            Complete the form below to register a student. Your application
            builds a searchable record from day one.
          </p>
        </div>
        <StudentRegistrationForm />
      </main>
    </div>
  );
}
