import { MessageCenter } from '@/components/message-center';

export default function ParentMessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Messages & Notices
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          School announcements, SMS alerts, and direct communications.
        </p>
      </div>
      <MessageCenter />
    </div>
  );
}
