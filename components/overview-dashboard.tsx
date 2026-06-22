'use client';

import { motion } from 'framer-motion';
import { KeyMetricsCards } from './key-metrics-cards';
import { RevenueAnalytics } from './total-revenue-analytics';
import { PaymentStatusOverview } from './payment-status-overview';
import { MonthlyTrends } from './monthly-trends';
import { SchoolPerformanceGrid } from './school-performance-grid';
import { RecentActivity } from './recent-activity';
import { ModuleHealthCards } from './module-health-cards';

export function OverviewDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          E-Schools Management System Overview
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          Real-time insights across admissions, academics, operations, and
          finance for your entire school network
        </motion.p>
      </div>

      {/* Module Health */}
      <ModuleHealthCards />

      {/* Key Metrics Cards */}
      <KeyMetricsCards />

      {/* Main Dashboard Grid */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Revenue Analytics - Takes up 8 columns */}
        <div className="lg:col-span-8">
          <RevenueAnalytics />
        </div>

        {/* Payment Status - Takes up 4 columns */}
        <div className="lg:col-span-4">
          <PaymentStatusOverview />
        </div>
      </div>

      {/* Monthly Trends and School Performance */}
      <div className="grid gap-6 lg:grid-cols-2">
        <MonthlyTrends />
        <SchoolPerformanceGrid />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </motion.div>
  );
}
