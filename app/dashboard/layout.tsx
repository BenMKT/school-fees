'use client';

import React from 'react';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  DollarSign,
  Settings,
  School,
  Home,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  UserPlus,
  UserCheck,
  ClipboardList,
  CalendarDays,
  Library,
  MessageSquare,
  Calendar,
  Calculator,
  Briefcase,
  Menu,
  X,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/lib/utils';

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface NavGroup {
  label: string | null;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: null,
    items: [
      { icon: Home, label: 'Home', href: '/' },
      { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
      { icon: School, label: 'Schools', href: '/dashboard/schools' },
    ],
  },
  {
    label: 'People',
    items: [
      { icon: UserPlus, label: 'Admission', href: '/dashboard/admission' },
      { icon: Users, label: 'Students', href: '/dashboard/students' },
      { icon: UserCheck, label: 'Teachers', href: '/dashboard/teachers' },
    ],
  },
  {
    label: 'Academic',
    items: [
      { icon: BookOpen, label: 'Classes', href: '/dashboard/classes' },
      { icon: ClipboardList, label: 'Examinations', href: '/dashboard/exams' },
      { icon: CalendarDays, label: 'Timetable', href: '/dashboard/timetable' },
    ],
  },
  {
    label: 'Operations',
    items: [
      { icon: Library, label: 'Library', href: '/dashboard/library' },
      { icon: Calendar, label: 'Scheduling', href: '/dashboard/scheduling' },
      { icon: MessageSquare, label: 'Messaging', href: '/dashboard/messaging' },
    ],
  },
  {
    label: 'Finance & HR',
    items: [
      { icon: DollarSign, label: 'Fees', href: '/dashboard/fees' },
      { icon: Calculator, label: 'Accounting', href: '/dashboard/accounting' },
      { icon: Briefcase, label: 'HR & Payroll', href: '/dashboard/hr' },
    ],
  },
  {
    label: null,
    items: [{ icon: Settings, label: 'Settings', href: '/dashboard/settings' }],
  },
];

function NavLink({
  item,
  isActive,
  isExpanded,
  onNavigate,
}: {
  item: NavItem;
  isActive: boolean;
  isExpanded: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={item.href}
      title={item.label}
      onClick={onNavigate}
      className={cn(
        'group relative flex items-center transition-all duration-300 ease-in-out text-gray-700',
        isExpanded ? 'px-4 py-2.5 justify-start' : 'px-0 py-2.5 justify-center',
        'hover:bg-emerald-50 hover:text-emerald-600',
        isActive &&
          'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg ring-1 ring-emerald-400/50',
      )}
    >
      {isActive && (
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-sm" />
      )}
      <div
        className={cn(
          'transition-transform duration-300',
          isActive ? 'scale-110' : 'group-hover:scale-110',
          isExpanded ? 'mr-3' : 'mr-0',
        )}
      >
        <item.icon
          className={cn(
            'w-5 h-5',
            isActive
              ? 'text-white'
              : 'text-gray-600 group-hover:text-emerald-600',
          )}
        />
      </div>
      <span
        className={cn(
          'whitespace-nowrap text-sm transition-opacity duration-200',
          isExpanded ? 'inline opacity-100' : 'hidden opacity-0',
        )}
      >
        {item.label}
      </span>
      {isActive && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-lg animate-pulse" />
      )}
    </Link>
  );
}

function SidebarNav({
  isExpanded,
  openGroups,
  toggleGroup,
  onNavigate,
}: {
  isExpanded: boolean;
  openGroups: Record<string, boolean>;
  toggleGroup: (label: string) => void;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isItemActive = (href: string) => pathname === href;
  const isGroupActive = (items: NavItem[]) =>
    items.some((item) => isItemActive(item.href));

  return (
    <nav className="flex-1 overflow-y-auto mt-2 pb-4">
      {navGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-1">
          {group.label && isExpanded && (
            <button
              type="button"
              onClick={() => toggleGroup(group.label!)}
              className={cn(
                'w-full flex items-center justify-between px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors',
                isGroupActive(group.items)
                  ? 'text-emerald-600'
                  : 'text-gray-400 hover:text-gray-600',
              )}
            >
              {group.label}
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform',
                  openGroups[group.label] ? 'rotate-0' : '-rotate-90',
                )}
              />
            </button>
          )}
          {(!group.label || openGroups[group.label] || !isExpanded) && (
            <div>
              {group.items.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  isActive={isItemActive(item.href)}
                  isExpanded={isExpanded}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({
    People: true,
    Academic: true,
    Operations: true,
    'Finance & HR': true,
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsExpanded(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const sidebarHeader = (expanded: boolean, showMobileClose?: boolean) => (
    <div
      className={cn(
        'flex items-center relative border-b border-gray-200 shrink-0',
        expanded ? 'p-4 justify-between' : 'p-2 justify-center',
      )}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <span
          className={cn(
            'text-lg font-bold text-emerald-600 transition-opacity duration-200',
            expanded ? 'opacity-100' : 'opacity-0 hidden',
          )}
        >
          E-SMS
        </span>
      </div>
      {showMobileClose ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <X className="h-5 w-5" />
        </button>
      ) : (
        <button
          type="button"
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
          onClick={() => setIsExpanded((v) => !v)}
          className={cn(
            'z-10 hidden lg:inline-flex h-9 w-9 items-center justify-center rounded-full transition shadow-md ring-1',
            expanded
              ? 'relative bg-emerald-600 text-white ring-emerald-400/50 hover:bg-emerald-700'
              : 'absolute -right-3 top-2 bg-white text-emerald-600 ring-emerald-200 hover:bg-emerald-50',
          )}
        >
          {expanded ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 flex h-full w-64 flex-col bg-white shadow-lg transition-transform duration-300 lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {sidebarHeader(true, true)}
        <SidebarNav
          isExpanded
          openGroups={openGroups}
          toggleGroup={toggleGroup}
          onNavigate={() => setMobileOpen(false)}
        />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 hidden h-full flex-col bg-white shadow-lg transition-[width] duration-300 lg:flex',
          isExpanded ? 'w-64' : 'w-16',
        )}
      >
        {sidebarHeader(isExpanded)}
        <SidebarNav
          isExpanded={isExpanded}
          openGroups={openGroups}
          toggleGroup={toggleGroup}
        />
      </aside>

      <div
        className={cn(
          'flex min-h-screen flex-col transition-[margin] duration-300',
          isExpanded ? 'lg:ml-64' : 'lg:ml-16',
        )}
      >
        {/* Mobile top bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-gray-200 bg-white px-4 lg:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100"
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-md flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-emerald-600 truncate">E-SMS</span>
          </div>
        </header>

        <main className="flex-1">
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
