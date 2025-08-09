import { Metadata } from 'next';
import StudentRegistrationForm from '@/components/student-registration-form';

export const metadata: Metadata = {
  title: 'Student Registration - School Fees Management System',
  description: 'Register as a new student in the School Fees Management System',
};

export default function RegisterPage() {
  return (
    <div>
      <StudentRegistrationForm />
    </div>
  );
}
