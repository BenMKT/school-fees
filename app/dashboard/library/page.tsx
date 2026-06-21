'use client';

import { Library } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { LibraryManagement } from '@/components/library-management';

export default function LibraryPage() {
  return (
    <ModulePageShell
      title="Library Management"
      description="Manage book issues, renewals, reservations, and stock status. Teachers and students check availability online."
      badge="Operations"
      icon={Library}
    >
      <LibraryManagement />
    </ModulePageShell>
  );
}
