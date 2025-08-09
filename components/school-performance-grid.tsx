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
import { Building, Users, DollarSign, TrendingUp, Award } from 'lucide-react';

const topSchools = [
  {
    name: 'Kibuli Secondary School',
    students: 1247,
    revenue: 234500,
    collectionRate: 98.5,
    performance: 94.2,
    growth: 12.3,
    status: 'excellent',
  },
  {
    name: 'Wakiso Secondary School',
    students: 892,
    revenue: 178900,
    collectionRate: 97.8,
    performance: 91.7,
    growth: 8.7,
    status: 'excellent',
  },
  {
    name: 'Rwakitura Secondary School',
    students: 756,
    revenue: 156700,
    collectionRate: 96.2,
    performance: 89.4,
    growth: 15.2,
    status: 'good',
  },
  {
    name: 'Juja Academy',
    students: 634,
    revenue: 142300,
    collectionRate: 95.1,
    performance: 87.9,
    growth: 6.8,
    status: 'good',
  },
  {
    name: 'Madianyo Prep School',
    students: 523,
    revenue: 128900,
    collectionRate: 93.7,
    performance: 85.6,
    growth: 4.2,
    status: 'average',
  },
];

const performanceMetrics = [
  {
    label: 'Top Performers',
    value: '89',
    description: 'schools above 90%',
    icon: Award,
    color: 'text-green-600',
  },
  {
    label: 'Avg Collection Rate',
    value: '96.3%',
    description: 'network average',
    icon: TrendingUp,
    color: 'text-blue-600',
  },
  {
    label: 'Growth Leaders',
    value: '156',
    description: 'schools growing >10%',
    icon: Building,
    color: 'text-purple-600',
  },
];

export function SchoolPerformanceGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-purple-600" />
                School Performance
              </CardTitle>
              <CardDescription>
                Top performing schools and network metrics
              </CardDescription>
            </div>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Top 5 Schools
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center p-3 rounded-lg bg-gray-50"
              >
                <div className="flex justify-center mb-2">
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div className="text-xl font-bold">{metric.value}</div>
                <div className="text-sm font-medium text-gray-700">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Top Schools List */}
          <div className="space-y-3">
            {topSchools.map((school, index) => (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {school.name}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {school.students} students
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />$
                        {(school.revenue / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                  <Badge
                    className={`${
                      school.status === 'excellent'
                        ? 'bg-green-100 text-green-700'
                        : school.status === 'good'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {school.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">Collection</span>
                      <span className="font-medium">
                        {school.collectionRate}%
                      </span>
                    </div>
                    <Progress value={school.collectionRate} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">Performance</span>
                      <span className="font-medium">{school.performance}%</span>
                    </div>
                    <Progress value={school.performance} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">Growth</span>
                      <span className="font-medium text-green-600">
                        +{school.growth}%
                      </span>
                    </div>
                    <Progress
                      value={Math.min(school.growth * 5, 100)}
                      className="h-2"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
