'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';

import { cn } from '@/app/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {}

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  SidebarTriggerProps
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    size="icon"
    className={cn('md:hidden', className)}
    {...props}
  >
    <Menu className="h-4 w-4" />
    <span className="sr-only">Toggle sidebar</span>
  </Button>
));
SidebarTrigger.displayName = 'SidebarTrigger';

export { SidebarTrigger };
