'use client';

import { ParentOverviewCards } from '@/components/parent-overview-cards';
import { ChildrenSummary } from '@/components/children-summary';
import { RecentTransactions } from '@/components/recent-transactions';
import { UpcomingPayments } from '@/components/upcoming-payments';
import { MessageCenter } from '@/components/message-center';
import { ParentQuickActions } from '@/components/parent-quick-actions';
import { AcademicPerformance } from '@/components/academic-performance';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ParentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Parent Dashboard
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Welcome to your parent portal. Track fees, exam results, timetables,
          and school notices for your children.
        </p>
      </div>

      {/* Overview Cards */}
      <ParentOverviewCards />

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ChildrenSummary />
          <RecentTransactions />
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Latest Exam Results</h2>
              <Link href="/parent/academics">
                <Button variant="ghost" size="sm">
                  View all
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <AcademicPerformance />
          </div>
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
