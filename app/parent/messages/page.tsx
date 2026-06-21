'use client';

import { ParentSidebar } from '@/components/parent-sidebar';
import { ParentHeader } from '@/components/parent-header';
import { MessageCenter } from '@/components/message-center';

export default function ParentMessagesPage() {
  return (
    <div className="flex h-screen">
      <ParentSidebar />
      <div className="flex-1 flex flex-col">
        <ParentHeader />
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Messages & Notices
            </h1>
            <p className="text-muted-foreground">
              School announcements, SMS alerts, and direct communications.
            </p>
          </div>
          <MessageCenter />
        </div>
      </div>
    </div>
  );
}
