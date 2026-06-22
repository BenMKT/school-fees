'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  CreditCard,
  MessageSquare,
  FileText,
  Bell,
  Settings,
  Calendar,
  HelpCircle,
  GraduationCap,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  X,
  ClipboardList,
  CalendarDays,
  Library,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const menuItems = [
  { title: 'Home', icon: Home, url: '/' },
  { title: 'Dashboard', icon: LayoutDashboard, url: '/parent' },
  {
    title: 'Payments',
    icon: CreditCard,
    url: '/parent/payments',
    badge: '2 Due',
  },
  { title: 'Academics', icon: ClipboardList, url: '/parent/academics' },
  { title: 'Timetable', icon: CalendarDays, url: '/parent/timetable' },
  { title: 'Library', icon: Library, url: '/parent/library' },
  {
    title: 'Messages',
    icon: MessageSquare,
    url: '/parent/messages',
    badge: '3',
  },
  { title: 'Documents', icon: FileText, url: '/parent/documents' },
  { title: 'Calendar', icon: Calendar, url: '/parent/calendar' },
];

const supportItems = [
  {
    title: 'Notifications',
    icon: Bell,
    url: '/parent/notifications',
    badge: '5',
  },
  { title: 'Help & Support', icon: HelpCircle, url: '/parent/support' },
  { title: 'Settings', icon: Settings, url: '/parent/settings' },
];

interface ParentSidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

function NavItems({
  items,
  pathname,
  isExpanded,
  onNavigate,
}: {
  items: typeof menuItems;
  pathname: string;
  isExpanded: boolean;
  onNavigate?: () => void;
}) {
  return (
    <>
      {items.map((item) => {
        const isActive = pathname === item.url;
        return (
          <Link
            key={item.title}
            href={item.url}
            title={item.title}
            onClick={onNavigate}
            className={cn(
              'group relative flex items-center justify-between rounded-md text-sm font-medium transition-all duration-300',
              isExpanded
                ? 'px-3 py-2 justify-start'
                : 'px-0 py-2 justify-center',
              isActive
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg ring-1 ring-pink-400/40'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            )}
          >
            {isActive && (
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-sm" />
            )}
            <div className={cn('flex items-center', isExpanded && 'space-x-3')}>
              <item.icon
                className={cn(
                  'w-4 h-4 shrink-0',
                  isActive
                    ? 'text-white'
                    : 'text-gray-600 group-hover:text-gray-900',
                )}
              />
              <span
                className={cn(
                  'whitespace-nowrap transition-opacity duration-200',
                  isExpanded ? 'inline opacity-100' : 'hidden opacity-0',
                )}
              >
                {item.title}
              </span>
            </div>
            {item.badge && isExpanded && (
              <Badge
                variant="secondary"
                className={cn(
                  'ml-auto',
                  isActive && 'bg-white/20 text-white border-white/30',
                )}
              >
                {item.badge}
              </Badge>
            )}
          </Link>
        );
      })}
    </>
  );
}

function SidebarContent({
  isExpanded,
  showMobileClose,
  onMobileClose,
  onNavigate,
}: {
  isExpanded: boolean;
  showMobileClose?: boolean;
  onMobileClose?: () => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          'border-b border-gray-200 flex items-center relative shrink-0',
          isExpanded ? 'p-4 justify-between' : 'p-2 justify-center',
        )}
      >
        <div className="flex items-center space-x-2 min-w-0">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className={cn(!isExpanded && 'hidden')}>
            <h2 className="text-lg font-semibold">E-SMS</h2>
            <p className="text-sm text-muted-foreground">Parent Portal</p>
          </div>
        </div>
        {showMobileClose ? (
          <button
            type="button"
            aria-label="Close menu"
            onClick={onMobileClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        ) : (
          <button
            type="button"
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            onClick={() => {}}
            className="hidden"
          />
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {isExpanded && (
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Main Menu
            </h3>
          )}
          <nav className="space-y-1">
            <NavItems
              items={menuItems}
              pathname={pathname}
              isExpanded={isExpanded}
              onNavigate={onNavigate}
            />
          </nav>
        </div>
        <div className="p-2 border-t border-gray-200">
          {isExpanded && (
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Support
            </h3>
          )}
          <nav className="space-y-1">
            <NavItems
              items={supportItems}
              pathname={pathname}
              isExpanded={isExpanded}
              onNavigate={onNavigate}
            />
          </nav>
        </div>
      </div>

      <div
        className={cn(
          'p-4 border-t border-gray-200',
          !isExpanded && 'flex justify-center',
        )}
      >
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Parent" />
          <AvatarFallback>RD</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}

export function ParentSidebar({
  mobileOpen = false,
  onMobileClose,
}: ParentSidebarProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsExpanded(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  React.useEffect(() => {
    onMobileClose?.();
  }, [pathname, onMobileClose]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 z-50 flex h-full w-64 flex-col bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <SidebarContent
          isExpanded
          showMobileClose
          onMobileClose={onMobileClose}
          onNavigate={onMobileClose}
        />
      </aside>

      <aside
        className={cn(
          'hidden lg:flex flex-col h-full bg-white border-r border-gray-200 transition-[width] duration-300 shrink-0',
          isExpanded ? 'w-64' : 'w-16',
        )}
      >
        <div
          className={cn(
            'border-b border-gray-200 flex items-center relative shrink-0',
            isExpanded ? 'p-4 justify-between' : 'p-2 justify-center',
          )}
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className={cn(!isExpanded && 'hidden')}>
              <h2 className="text-lg font-semibold">E-SMS</h2>
              <p className="text-sm text-muted-foreground">Parent Portal</p>
            </div>
          </div>
          <button
            type="button"
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            onClick={() => setIsExpanded((v) => !v)}
            className={cn(
              'z-10 inline-flex h-9 w-9 items-center justify-center rounded-full transition shadow-md ring-1',
              isExpanded
                ? 'relative bg-purple-600 text-white ring-pink-400/40 hover:bg-purple-700'
                : 'absolute -right-3 top-2 bg-white text-purple-600 ring-purple-200 hover:bg-purple-50',
            )}
          >
            {isExpanded ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto flex flex-col">
          <div className="p-2 flex-1">
            {isExpanded && (
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Main Menu
              </h3>
            )}
            <nav className="space-y-1">
              <NavItems
                items={menuItems}
                pathname={pathname}
                isExpanded={isExpanded}
              />
            </nav>
          </div>
          <div className="p-2 border-t border-gray-200">
            {isExpanded && (
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Support
              </h3>
            )}
            <nav className="space-y-1">
              <NavItems
                items={supportItems}
                pathname={pathname}
                isExpanded={isExpanded}
              />
            </nav>
          </div>
        </div>
        <div
          className={cn(
            'p-4 border-t border-gray-200',
            !isExpanded && 'flex justify-center',
          )}
        >
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="/placeholder.svg?height=32&width=32"
              alt="Parent"
            />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
        </div>
      </aside>
    </>
  );
}
