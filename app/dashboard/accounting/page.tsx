'use client';

import { Calculator } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { FinancialAnalytics } from '@/components/financial-analytics';
import { RevenueAnalytics } from '@/components/revenue-analytics';

export default function AccountingPage() {
  return (
    <ModulePageShell
      title="Financial Accounting"
      description="Manage multiple schemes and cashbooks across financial years. Audit-ready records with clear visibility."
      badge="Finance"
      icon={Calculator}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FinancialAnalytics />
        <RevenueAnalytics />
      </div>
    </ModulePageShell>
  );
}
