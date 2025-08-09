export interface User {
  id: string;
  email: string;
  role: 'student' | 'parent' | 'school_admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Student {
  id: string;
  userId: string;
  fullName: string;
  dateOfBirth: Date;
  schoolId: string;
  currentGrade: string;
  careerPath?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Parent {
  id: string;
  userId: string;
  fullName: string;
  relationshipType: 'mother' | 'father' | 'guardian';
  contactNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface School {
  id: string;
  userId: string;
  name: string;
  address: string;
  contactNumber: string;
  annualBudget: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SchoolPerformance {
  id: string;
  studentId: string;
  schoolId: string;
  academicYear: string;
  term: string;
  performanceData: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Fees {
  id: string;
  schoolId: string;
  studentId: string;
  academicYear: string;
  totalAmount: number;
  amountPaid: number;
  paymentFrequency: 'daily' | 'monthly' | 'termly';
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  feesId: string;
  amount: number;
  paymentDate: Date;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

export interface SchoolBudget {
  id: string;
  schoolId: string;
  academicYear: string;
  budgetData: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface AcademicAdvice {
  id: string;
  studentId: string;
  adviceData: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}
