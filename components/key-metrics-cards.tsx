'use client';

import { motion, easeOut } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  TrendingDown,
  Building,
  Users,
  DollarSign,
  CreditCard,
  Clock,
  AlertTriangle,
  CheckCircle,
  Calendar,
} from 'lucide-react';

const keyMetrics = [
  {
    title: 'Total Revenue',
    value: '210,847,392',
    change: '+18.2%',
    changeType: 'increase',
    description: 'vs last month',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    trend: 'up',
  },
  {
    title: 'Active Students',
    value: '12,847',
    change: '+342',
    changeType: 'increase',
    description: 'new enrollments',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    trend: 'up',
  },
  {
    title: 'Active Schools',
    value: '247',
    change: '+5',
    changeType: 'increase',
    description: 'this quarter',
    icon: Building,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    trend: 'up',
  },
  {
    title: 'Payments This Month',
    value: '33,234,567',
    change: '+24.5%',
    changeType: 'increase',
    description: 'vs last month',
    icon: CreditCard,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    trend: 'up',
  },
  {
    title: 'Pending Payments',
    value: '58,753,290',
    change: '-12.3%',
    changeType: 'decrease',
    description: 'improvement',
    icon: Clock,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    trend: 'down',
  },
  {
    title: 'Overdue Payments',
    value: '18,058,210',
    change: '-28.7%',
    changeType: 'decrease',
    description: 'vs last month',
    icon: AlertTriangle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    trend: 'down',
  },
  {
    title: 'Collection Rate',
    value: '96.8%',
    change: '+2.1%',
    changeType: 'increase',
    description: 'this month',
    icon: CheckCircle,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    trend: 'up',
  },
  {
    title: 'Avg Payment Time',
    value: '3.2 days',
    change: '-0.8 days',
    changeType: 'decrease',
    description: 'faster processing',
    icon: Calendar,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    trend: 'down',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export function KeyMetricsCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8"
    >
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {keyMetrics.map((metric, index) => (
        <motion.div key={metric.title} variants={cardVariants}>
          <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 border-l-transparent hover:border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <div
                className={`p-2 rounded-lg ${metric.bgColor} group-hover:scale-110 transition-transform duration-300`}
              >
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2 text-gray-900">
                {metric.value}
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <Badge
                  variant={
                    metric.changeType === 'increase' ? 'default' : 'secondary'
                  }
                  className={`${
                    metric.changeType === 'increase'
                      ? 'bg-green-100 text-green-700 hover:bg-green-100'
                      : (metric.trend === 'down' &&
                          metric.title.includes('Overdue')) ||
                        metric.title.includes('Pending') ||
                        metric.title.includes('Avg Payment')
                      ? 'bg-green-100 text-green-700 hover:bg-green-100'
                      : 'bg-red-100 text-red-700 hover:bg-red-100'
                  }`}
                >
                  {metric.changeType === 'increase' ||
                  (metric.trend === 'down' &&
                    (metric.title.includes('Overdue') ||
                      metric.title.includes('Pending') ||
                      metric.title.includes('Avg Payment'))) ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {metric.change}
                </Badge>
                <span className="text-muted-foreground">
                  {metric.description}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
