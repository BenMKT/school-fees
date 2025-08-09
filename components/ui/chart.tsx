'use client';

import * as React from 'react';
import { TooltipProps } from 'recharts';

import { cn } from '@/app/lib/utils';

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: Record<string, { label: string; color: string }>;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  ChartContainerProps
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ className, config, children, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-4', className)} {...props}>
    {children}
  </div>
));
ChartContainer.displayName = 'ChartContainer';

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-lg border bg-background p-2 shadow-sm', className)}
    {...props}
  />
));
ChartTooltip.displayName = 'ChartTooltip';

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TooltipProps<any, any>
>(({ active, payload, label }, ref) => {
  if (!active || !payload) return null;

  return (
    <div ref={ref} className="space-y-2">
      <div className="text-sm font-medium">{label}</div>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center space-x-2">
          <div className={cn('h-2 w-2 rounded-full', `bg-[${entry.color}]`)} />
          <span className="text-sm text-muted-foreground">
            {entry.name}: {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
});
ChartTooltipContent.displayName = 'ChartTooltipContent';

export { ChartContainer, ChartTooltip, ChartTooltipContent };
