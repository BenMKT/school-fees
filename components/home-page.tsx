'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  CreditCard,
  Bell,
  Shield,
  Smartphone,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  UserPlus,
  ClipboardList,
  CalendarDays,
  BookOpen,
  MessageSquare,
  Calendar,
  Calculator,
  Briefcase,
  UserCheck,
  Library,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface ModuleItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}

interface ModulePillar {
  title: string;
  color: string;
  modules: ModuleItem[];
}

export default function ESchoolManagerLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const modulePillars: ModulePillar[] = [
    {
      title: 'People & Records',
      color: 'from-purple-500 to-pink-500',
      modules: [
        {
          icon: UserPlus,
          title: 'Admission',
          description:
            'Registration for student, parent/guardian, and emergency contacts',
          href: '/dashboard/admission',
        },
        {
          icon: Users,
          title: 'Student Management',
          description: 'Search, add, and update records with full history',
          href: '/dashboard/students',
        },
        {
          icon: UserCheck,
          title: 'Teachers Management',
          description:
            'Connect administrators, teachers, parents, and students',
          href: '/dashboard/teachers',
        },
      ],
    },
    {
      title: 'Teaching & Learning',
      color: 'from-blue-500 to-cyan-500',
      modules: [
        {
          icon: ClipboardList,
          title: 'Examination Management',
          description:
            'Schedule exams, input results, and visualize performance',
          href: '/dashboard/exams',
        },
        {
          icon: CalendarDays,
          title: 'Timetable Management',
          description:
            'Drag-and-drop timetabling for classes, teachers, and rooms',
          href: '/dashboard/timetable',
        },
        {
          icon: BookOpen,
          title: 'Classes',
          description: 'Organize grades, sections, and class assignments',
          href: '/dashboard/classes',
        },
      ],
    },
    {
      title: 'Operations',
      color: 'from-orange-500 to-amber-500',
      modules: [
        {
          icon: Library,
          title: 'Library Management',
          description: 'Issues, renewals, reservations, and stock status',
          href: '/dashboard/library',
        },
        {
          icon: MessageSquare,
          title: 'Digital Messaging',
          description: 'Notices, SMS, and alerts institution-wide',
          href: '/dashboard/messaging',
        },
        {
          icon: Calendar,
          title: 'Scheduling',
          description: 'Automate class, exam, and event scheduling',
          href: '/dashboard/scheduling',
        },
      ],
    },
    {
      title: 'Finance & Admin',
      color: 'from-emerald-500 to-teal-500',
      modules: [
        {
          icon: CreditCard,
          title: 'Fee Management',
          description:
            'Track tuition, library, computer, and caution fees with ease',
          href: '/dashboard/fees',
          featured: true,
        },
        {
          icon: Calculator,
          title: 'Financial Accounting',
          description: 'Schemes, cashbooks, and audit-ready records',
          href: '/dashboard/accounting',
        },
        {
          icon: Briefcase,
          title: 'HR Management',
          description: 'Payroll, benefits, and staff compliance',
          href: '/dashboard/hr',
        },
      ],
    },
  ];

  const crossCuttingBenefits = [
    {
      icon: CreditCard,
      title: 'Easy Payments',
      description: 'Mobile money, bank transfers, and cards',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated reminders and confirmations',
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Reports and data-driven decisions',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level encryption and protection',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Online access for staff, students, and parents',
    },
    {
      icon: Users,
      title: 'Multi-User Access',
      description: 'Role-based portals for every stakeholder',
    },
  ];

  const whyUsChecklist = [
    'Admission & student records',
    'Exams & timetables',
    'Library & messaging',
    'Fees & accounting',
    'HR & payroll',
    'Scheduling & events',
  ];

  const testimonials = [
    {
      name: 'Sarah Mubiru',
      role: 'School Administrator',
      school: 'Greenwood High School',
      content:
        'E-School Management System replaced six different spreadsheets. Fee collection and admissions now live in one place.',
      rating: 5,
    },
    {
      name: 'David Batuuka',
      role: 'Parent',
      school: 'Riverside Academy',
      content:
        "I pay fees, check exam results, and read school notices—all from my phone. It's exactly what parents need.",
      rating: 5,
    },
    {
      name: 'Prof. Michael Kanyamunyiri',
      role: 'Head of Mathematics',
      school: 'Metro Tech Institute',
      content:
        'The timetable builder and exam reporting save our department hours every week. Drag-and-drop just works.',
      rating: 5,
    },
    {
      name: 'Dr. Amara Kyeyune',
      role: 'Principal',
      school: 'Unity International School',
      content:
        'From admissions to accounting, we finally have audit-ready records across every financial year.',
      rating: 5,
    },
  ];

  const navLinks = [
    { href: '#modules', label: 'Modules' },
    { href: '#why-us', label: 'Why E-SMS' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/parent', label: 'Parent Portal' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                E-SMS
              </span>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/admission">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Apply Now
                </Button>
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle navigation"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="border-purple-200 text-purple-600 hover:bg-purple-50 w-full"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/admission">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                🎓 11+ Modules · Trusted by 15,000+ Schools
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Run Your Entire School
              </span>
              <br />
              <span className="text-gray-900">From One Platform</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Admissions to accounting in one place. Replace paperwork and
              spreadsheets with drag-drop interfaces and online access for
              staff, students, and parents.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#modules">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                >
                  Explore Modules
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>All-in-one platform</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Module Hub */}
      <section id="modules" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
              Module Hub
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything Your School
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}
                Needs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              11+ connected modules organized by how your team actually works—
              from enrolling students to closing the books.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {modulePillars.map((pillar, pillarIndex) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pillarIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${pillar.color}`} />
                  <CardHeader>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pillar.modules.map((mod) => (
                      <Link key={mod.title} href={mod.href}>
                        <div
                          className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md group ${
                            mod.featured
                              ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 hover:border-emerald-300'
                              : 'bg-gray-50 hover:bg-purple-50'
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              mod.featured
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                                : 'bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200'
                            }`}
                          >
                            <mod.icon
                              className={`w-5 h-5 ${
                                mod.featured ? 'text-white' : 'text-purple-600'
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-gray-900">
                                {mod.title}
                              </h3>
                              {mod.featured && (
                                <Badge className="bg-emerald-600 text-white text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">
                              {mod.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-cutting benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Built for Every Role
            </h3>
            <p className="text-gray-600">
              Cross-cutting capabilities that power every module
            </p>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {crossCuttingBenefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Schools Choose */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                <Sparkles className="w-3 h-3 mr-1 inline" />
                Why Schools Choose Educational - School Management System
                (E-SMS)
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All-in-One Platform.
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  User-Friendly Design.
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                11+ modules replace paperwork and spreadsheets. Drag-drop
                interfaces and online access for staff, students, and parents—
                so everyone stays connected.
              </p>
              <ul className="space-y-3">
                {whyUsChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: LayersIcon,
                  title: 'All-in-One',
                  desc: '11+ modules, one login',
                },
                {
                  icon: Smartphone,
                  title: 'Online Access',
                  desc: 'Staff, students, parents',
                },
                {
                  icon: CalendarDays,
                  title: 'Drag & Drop',
                  desc: 'Timetables made easy',
                },
                {
                  icon: Shield,
                  title: 'Audit-Ready',
                  desc: 'Clear financial visibility',
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: '11+', label: 'Integrated Modules' },
              { value: '15,000+', label: 'Schools Trust Us' },
              { value: '5,000,000+', label: 'Active Students' },
              { value: '99.8%', label: 'Uptime' },
            ].map((stat, i) => (
              <div key={stat.label}>
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Loved by Schools
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}
                Nationwide
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-purple-600">
                        {testimonial.school}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
              Ready to Get Started?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Transform Your School&apos;s
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}
                Operations
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of schools running admissions, academics, and
              finance on one platform. Start free—no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/admission">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                >
                  Submit Admission
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">E-SMS</span>
              </div>
              <p className="text-gray-400 mb-4">
                All-in-one school management—from admission to accounting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Modules</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/dashboard/admission"
                    className="hover:text-white transition-colors"
                  >
                    Admission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/exams"
                    className="hover:text-white transition-colors"
                  >
                    Examinations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/fees"
                    className="hover:text-white transition-colors"
                  >
                    Fee Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/library"
                    className="hover:text-white transition-colors"
                  >
                    Library
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Portals</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/dashboard"
                    className="hover:text-white transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parent"
                    className="hover:text-white transition-colors"
                  >
                    Parent Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admission"
                    className="hover:text-white transition-colors"
                  >
                    Apply for Admission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{' '}
              <Link
                href="https://afriteknova.my.canva.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline"
              >
                <Image
                  src="/AfriTekNovaLogo1.png"
                  className="w-12 h-12 inline"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>{' '}
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0l8.57-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    </svg>
  );
}
