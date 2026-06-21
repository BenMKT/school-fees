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
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
}: {
  item: NavItem;
  isActive: boolean;
  isExpanded: boolean;
}) {
  return (
    <Link
      href={item.href}
      title={item.label}
      className={`group relative flex items-center transition-all duration-300 ease-in-out text-gray-700 ${
        isExpanded ? 'px-4 py-2.5' : 'px-0 py-2.5'
      } hover:bg-emerald-50 hover:text-emerald-600 ${
        isActive
          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg ring-1 ring-emerald-400/50'
          : ''
      } ${isExpanded ? 'justify-start' : 'justify-center'}`}
    >
      {isActive && (
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-sm" />
      )}
      <div
        className={`transition-transform duration-300 ${
          isActive ? 'scale-110' : 'group-hover:scale-110'
        } ${isExpanded ? 'mr-3' : 'mr-0'}`}
      >
        <item.icon
          className={`w-5 h-5 ${
            isActive
              ? 'text-white'
              : 'text-gray-600 group-hover:text-emerald-600'
          }`}
        />
      </div>
      <span
        className={`whitespace-nowrap text-sm transition-opacity duration-200 ${
          isExpanded ? 'inline opacity-100' : 'hidden opacity-0'
        }`}
      >
        {item.label}
      </span>
      {isActive && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-lg animate-pulse" />
      )}
    </Link>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({
    People: true,
    Academic: true,
    Operations: true,
    'Finance & HR': true,
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const isLg = window.matchMedia('(min-width: 1024px)').matches;
    setIsExpanded(isLg);
  }, []);

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isItemActive = (href: string) => pathname === href;

  const isGroupActive = (items: NavItem[]) =>
    items.some((item) => isItemActive(item.href));

  return (
    <div className="min-h-screen bg-gray-50">
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-[width] duration-300 flex flex-col ${
          isExpanded ? 'w-64' : 'w-16'
        }`}
      >
        <div
          className={`flex items-center relative border-b border-gray-200 shrink-0 ${
            isExpanded ? 'p-4 justify-between' : 'p-2 justify-center'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-lg font-bold text-emerald-600 transition-opacity duration-200 ${
                isExpanded ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              E-SMS
            </span>
          </div>
          <button
            type="button"
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            title={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            onClick={() => setIsExpanded((v) => !v)}
            className={`z-10 ${
              isExpanded
                ? 'relative inline-flex h-9 w-9 items-center justify-center rounded-full transition shadow-md ring-1 bg-emerald-600 text-white ring-emerald-400/50 hover:bg-emerald-700'
                : 'absolute -right-3 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full transition shadow-md ring-1 bg-white text-emerald-600 ring-emerald-200 hover:bg-emerald-50'
            }`}
          >
            {isExpanded ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto mt-2 pb-4">
          {navGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-1">
              {group.label && isExpanded && (
                <button
                  type="button"
                  onClick={() => toggleGroup(group.label!)}
                  className={`w-full flex items-center justify-between px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isGroupActive(group.items)
                      ? 'text-emerald-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      openGroups[group.label] ? 'rotate-0' : '-rotate-90'
                    }`}
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
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main className={`${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
