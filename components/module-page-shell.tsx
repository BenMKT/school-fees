'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';

interface ModulePageShellProps {
  title: string;
  description: string;
  badge?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
}

export function ModulePageShell({
  title,
  description,
  badge,
  icon: Icon,
  children,
}: ModulePageShellProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-emerald-600" />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
              {badge && (
                <Badge
                  variant="outline"
                  className="bg-emerald-50 text-emerald-700 border-emerald-200"
                >
                  {badge}
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

interface ModulePlaceholderProps {
  title: string;
  description: string;
  features: string[];
}

export function ModulePlaceholder({
  title,
  description,
  features,
}: ModulePlaceholderProps) {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
