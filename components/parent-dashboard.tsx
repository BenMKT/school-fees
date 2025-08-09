'use client';

import { ParentOverviewCards } from '@/components/parent-overview-cards';
import { ChildrenSummary } from '@/components/children-summary';
import { RecentTransactions } from '@/components/recent-transactions';
import { UpcomingPayments } from '@/components/upcoming-payments';
import { MessageCenter } from '@/components/message-center';
import { ParentQuickActions } from '@/components/parent-quick-actions';

export function ParentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Parent Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome to your parent portal. Here&apos;s an overview of your
          children&apos;s school fees and activities.
        </p>
      </div>

      {/* Overview Cards */}
      <ParentOverviewCards />

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ChildrenSummary />
          <RecentTransactions />
        </div>
        <div className="space-y-6">
          <UpcomingPayments />
          <MessageCenter />
          <ParentQuickActions />
        </div>
      </div>
    </div>
  );
}
