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
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: School, label: 'Schools', href: '/dashboard/schools' },
  { icon: Users, label: 'Students', href: '/dashboard/students' },
  { icon: BookOpen, label: 'Classes', href: '/dashboard/classes' },
  { icon: DollarSign, label: 'Fees', href: '/dashboard/fees' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const isLg = window.matchMedia('(min-width: 1024px)').matches;
    setIsExpanded(isLg);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-[width] duration-300 ${
          isExpanded ? 'w-64' : 'w-16'
        }`}
      >
        <div
          className={`flex items-center relative border-b border-gray-200 ${
            isExpanded ? 'p-4 justify-between' : 'p-2 justify-center'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold text-emerald-600 transition-opacity duration-200 ${
                isExpanded ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              School Fees
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
        <nav className="mt-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={`group relative flex items-center transition-all duration-300 ease-in-out text-gray-700 ${
                  isExpanded ? 'px-4 py-3' : 'px-0 py-3'
                } hover:bg-emerald-50 hover:text-emerald-600 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg ring-1 ring-emerald-400/50'
                    : ''
                } ${isExpanded ? 'justify-start' : 'justify-center'}`}
              >
                {/* Active indicator line */}
                {isActive && (
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-sm" />
                )}

                {/* Icon */}
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

                {/* Label */}
                <span
                  className={`whitespace-nowrap transition-opacity duration-200 ${
                    isExpanded ? 'inline opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  {item.label}
                </span>

                {/* Subtle pulse animation for active items */}
                {isActive && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-lg animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
