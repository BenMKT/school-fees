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

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-[width] duration-300 ${
          isExpanded ? 'w-64' : 'w-16'
        } lg:w-64`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1
            className={`text-xl font-bold text-emerald-600 transition-opacity duration-200 ${
              isExpanded ? 'opacity-100' : 'opacity-0 lg:opacity-100'
            }`}
          >
            School Fees
          </h1>
          <button
            type="button"
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            onClick={() => setIsExpanded((v) => !v)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 transition"
          >
            {isExpanded ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
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
                } ${
                  isExpanded
                    ? 'justify-start'
                    : 'justify-center lg:justify-start'
                }`}
              >
                {/* Active indicator line */}
                {isActive && (
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-sm" />
                )}

                {/* Icon */}
                <div
                  className={`transition-transform duration-300 ${
                    isActive ? 'scale-110' : 'group-hover:scale-110'
                  } ${isExpanded ? 'mr-3' : 'mr-0 lg:mr-3'}`}
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
                    isExpanded
                      ? 'inline opacity-100'
                      : 'hidden opacity-0 lg:inline lg:opacity-100'
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
      <main className={`${isExpanded ? 'ml-64' : 'ml-16 lg:ml-64'}`}>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
