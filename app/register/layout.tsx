import {
  LayoutDashboard,
  Users,
  BookOpen,
  DollarSign,
  Settings,
  School,
  Home,
} from 'lucide-react';
import Link from 'next/link';

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 lg:translate-x-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-emerald-600">School Fees</h1>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
