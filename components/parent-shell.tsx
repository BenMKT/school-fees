'use client';

import React from 'react';
import { ParentSidebar } from '@/components/parent-sidebar';
import { ParentHeader } from '@/components/parent-header';

interface ParentShellContextValue {
  openMobileSidebar: () => void;
  closeMobileSidebar: () => void;
}

const ParentShellContext = React.createContext<ParentShellContextValue | null>(
  null,
);

export function useParentShell() {
  const ctx = React.useContext(ParentShellContext);
  if (!ctx) {
    throw new Error('useParentShell must be used within ParentShell');
  }
  return ctx;
}

export function ParentShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const openMobileSidebar = React.useCallback(() => setMobileOpen(true), []);
  const closeMobileSidebar = React.useCallback(() => setMobileOpen(false), []);

  return (
    <ParentShellContext.Provider
      value={{ openMobileSidebar, closeMobileSidebar }}
    >
      <div className="flex h-screen overflow-hidden">
        <ParentSidebar
          mobileOpen={mobileOpen}
          onMobileClose={closeMobileSidebar}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <ParentHeader />
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </ParentShellContext.Provider>
  );
}
