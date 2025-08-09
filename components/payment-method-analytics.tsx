'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface PaymentMethodAnalyticsProps {
  studentId: string;
}

const paymentMethodData = [
  { method: 'Credit Card', count: 3, amount: 1200, color: '#3b82f6' },
  { method: 'Bank Transfer', count: 2, amount: 950, color: '#10b981' },
  { method: 'Mobile Money', count: 1, amount: 350, color: '#f59e0b' },
  { method: 'Cash', count: 1, amount: 300, color: '#ef4444' },
];

export function PaymentMethodAnalytics({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  studentId,
}: PaymentMethodAnalyticsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>
          Preferred payment methods and usage statistics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            amount: {
              label: 'Amount',
              color: '#3b82f6',
            },
            count: {
              label: 'Count',
              color: '#10b981',
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={paymentMethodData}>
              <XAxis dataKey="method" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {paymentMethodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {paymentMethodData.map((method) => (
            <div
              key={method.method}
              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
            >
              <div>
                <p className="font-medium">{method.method}</p>
                <p className="text-sm text-muted-foreground">
                  {method.count} transactions
                </p>
              </div>
              <p className="font-semibold">${method.amount}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
