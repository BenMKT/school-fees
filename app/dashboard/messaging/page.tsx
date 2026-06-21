'use client';

import { MessageSquare } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { BroadcastCenter } from '@/components/broadcast-center';

export default function MessagingPage() {
  return (
    <ModulePageShell
      title="Digital Messaging"
      description="Institution-wide communication system for notices, SMS, and alerts."
      badge="Operations"
      icon={MessageSquare}
    >
      <BroadcastCenter />
    </ModulePageShell>
  );
}
