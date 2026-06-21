'use client';

import React from 'react';
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
  ClipboardList,
  CalendarDays,
  Library,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const menuItems = [
  {
    title: 'Home',
    icon: Home,
    url: '/',
  },
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    url: '/parent',
  },
  {
    title: 'Payments',
    icon: CreditCard,
    url: '/parent/payments',
    badge: '2 Due',
  },
  {
    title: 'Academics',
    icon: ClipboardList,
    url: '/parent/academics',
  },
  {
    title: 'Timetable',
    icon: CalendarDays,
    url: '/parent/timetable',
  },
  {
    title: 'Library',
    icon: Library,
    url: '/parent/library',
  },
  {
    title: 'Messages',
    icon: MessageSquare,
    url: '/parent/messages',
    badge: '3',
  },
  {
    title: 'Documents',
    icon: FileText,
    url: '/parent/documents',
  },
  {
    title: 'Calendar',
    icon: Calendar,
    url: '/parent/calendar',
  },
];

const supportItems = [
  {
    title: 'Notifications',
    icon: Bell,
    url: '/parent/notifications',
    badge: '5',
  },
  {
    title: 'Help & Support',
    icon: HelpCircle,
    url: '/parent/support',
  },
  {
    title: 'Settings',
    icon: Settings,
    url: '/parent/settings',
  },
];

export function ParentSidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const isLg = window.matchMedia('(min-width: 1024px)').matches;
    setIsExpanded(isLg);
  }, []);

  return (
    <div
      className={`bg-white border-r border-gray-200 flex flex-col h-full transition-[width] duration-300 ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      {/* Header */}
      <div
        className={`border-b border-gray-200 flex items-center relative ${
          isExpanded ? 'p-4 justify-between' : 'p-2 justify-center'
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div
            className={`${
              isExpanded ? 'opacity-100' : 'opacity-0 hidden'
            } transition-opacity duration-200`}
          >
            <h2 className="text-lg font-semibold">E-SMS</h2>
            <p className="text-sm text-muted-foreground">Parent Portal</p>
          </div>
        </div>
        <button
          type="button"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          title={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          onClick={() => setIsExpanded((v) => !v)}
          className={`z-10 ${
            isExpanded
              ? 'relative inline-flex h-9 w-9 items-center justify-center rounded-full transition shadow-md ring-1 bg-purple-600 text-white ring-pink-400/40 hover:bg-purple-700'
              : 'absolute -right-3 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full transition shadow-md ring-1 bg-white text-purple-600 ring-purple-200 hover:bg-purple-50'
          }`}
        >
          {isExpanded ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Menu */}
        <div className="p-2">
          <h3
            className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 transition-opacity duration-200 ${
              isExpanded ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            Main Menu
          </h3>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.url;

              return (
                <a
                  key={item.title}
                  href={item.url}
                  title={item.title}
                  className={`group relative flex items-center justify-between rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
                    isExpanded ? 'px-3 py-2' : 'px-0 py-2'
                  } ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg ring-1 ring-pink-400/40'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } ${isExpanded ? 'justify-start' : 'justify-center'}`}
                >
                  {/* Active indicator line */}
                  {isActive && (
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-sm" />
                  )}

                  <div
                    className={`flex items-center ${
                      isExpanded ? 'space-x-3' : ''
                    }`}
                  >
                    <div
                      className={`transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-110'
                      }`}
                    >
                      <item.icon
                        className={`w-4 h-4 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-600 group-hover:text-gray-900'
                        }`}
                      />
                    </div>
                    <span
                      className={`transition-opacity duration-200 whitespace-nowrap ${
                        isExpanded ? 'inline opacity-100' : 'hidden opacity-0'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {item.badge && (
                    <Badge
                      variant={isActive ? 'secondary' : 'secondary'}
                      className={`ml-auto transition-all duration-300 ${
                        isExpanded ? 'inline-flex' : 'hidden'
                      } ${
                        isActive ? 'bg-white/20 text-white border-white/30' : ''
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}

                  {/* Subtle pulse animation for active items */}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-md animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Support */}
        <div className="p-2 border-t border-gray-200">
          <h3
            className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 transition-opacity duration-200 ${
              isExpanded ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            Support
          </h3>
          <nav className="space-y-1">
            {supportItems.map((item) => {
              const isActive = pathname === item.url;

              return (
                <a
                  key={item.title}
                  href={item.url}
                  title={item.title}
                  className={`group relative flex items-center justify-between rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
                    isExpanded ? 'px-3 py-2' : 'px-0 py-2'
                  } ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg ring-1 ring-pink-400/40'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } ${isExpanded ? 'justify-start' : 'justify-center'}`}
                >
                  {/* Active indicator line */}
                  {isActive && (
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-sm" />
                  )}

                  <div
                    className={`flex items-center ${
                      isExpanded ? 'space-x-3' : ''
                    }`}
                  >
                    <div
                      className={`transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-110'
                      }`}
                    >
                      <item.icon
                        className={`w-4 h-4 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-600 group-hover:text-gray-900'
                        }`}
                      />
                    </div>
                    <span
                      className={`transition-opacity duration-200 whitespace-nowrap ${
                        isExpanded ? 'inline opacity-100' : 'hidden opacity-0'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {item.badge && (
                    <Badge
                      variant={isActive ? 'destructive' : 'destructive'}
                      className={`ml-auto transition-all duration-300 ${
                        isExpanded ? 'inline-flex' : 'hidden'
                      } ${
                        isActive ? 'bg-white/20 text-white border-white/30' : ''
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}

                  {/* Subtle pulse animation for active items */}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-md animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`p-4 border-t border-gray-200 ${
          isExpanded ? '' : 'flex items-center justify-center'
        }`}
      >
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="/placeholder.svg?height=32&width=32"
              alt="Parent"
            />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
