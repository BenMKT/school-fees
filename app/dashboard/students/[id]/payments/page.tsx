'use client';

import { use } from 'react';
import { StudentPaymentAnalytics } from '@/components/student-payment-analytics';

export default function StudentPaymentsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div className="flex-1">
      <div className="mb-8">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 p-8">
          <div className="absolute inset-0 bg-white/10 mix-blend-soft-light" />
          <div className="relative">
            <h1 className="text-3xl font-bold text-white">
              Student Payments Dashboard
            </h1>
            <p className="mt-2 text-emerald-50">
              Manage and track all payment records, history, and analytics
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/10" />
        </div>
      </div>
      <StudentPaymentAnalytics studentId={id} />
    </div>
  );
}
