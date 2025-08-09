'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  CreditCard,
  TrendingUp,
  Users,
} from 'lucide-react';

const paymentStats = [
  {
    status: 'Completed',
    amount: 2616139,
    count: 8947,
    percentage: 91.9,
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    status: 'Pending',
    amount: 187432,
    count: 542,
    percentage: 6.6,
    icon: Clock,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    status: 'Overdue',
    amount: 43821,
    count: 127,
    percentage: 1.5,
    icon: AlertTriangle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
];

const quickStats = [
  {
    label: 'Total Transactions',
    value: '9,616',
    change: '+12.5%',
    icon: CreditCard,
  },
  {
    label: 'Active Payers',
    value: '8,234',
    change: '+8.2%',
    icon: Users,
  },
  {
    label: 'Success Rate',
    value: '98.7%',
    change: '+0.3%',
    icon: TrendingUp,
  },
];

export function PaymentStatusOverview() {
  const totalAmount = paymentStats.reduce((sum, stat) => sum + stat.amount, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-6"
    >
      {/* Payment Status Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-600" />
            Payment Status
          </CardTitle>
          <CardDescription>
            Current payment distribution and trends
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentStats.map((stat, index) => (
            <motion.div
              key={stat.status}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`p-4 rounded-lg border ${stat.borderColor} ${stat.bgColor}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="font-medium">{stat.status}</span>
                </div>
                <Badge variant="secondary" className="bg-white/50">
                  {stat.percentage}%
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-semibold">
                    ${stat.amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Transactions</span>
                  <span className="font-semibold">
                    {stat.count.toLocaleString()}
                  </span>
                </div>
                <Progress value={stat.percentage} className="h-2" />
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <stat.icon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">{stat.value}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
