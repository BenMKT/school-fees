'use client';

import { ParentSidebar } from '@/components/parent-sidebar';
import { ParentHeader } from '@/components/parent-header';
import { PaymentInterface } from '@/components/payment-interface';

export default function ParentPaymentsPage() {
  return (
    <div className="flex h-screen">
      <ParentSidebar />
      <div className="flex-1 flex flex-col">
        <ParentHeader />
        <div className="flex-1 p-6 overflow-y-auto">
          <PaymentInterface />
        </div>
      </div>
    </div>
  );
}
