'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function SchoolFeesLanding() {
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

  const features = [
    {
      icon: CreditCard,
      title: 'Easy Payment Processing',
      description:
        'Accept payments via multiple channels including mobile money, bank transfers, and cards',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description:
        'Automated reminders for due dates, payment confirmations, and important updates',
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description:
        'Track payment trends, generate reports, and gain insights into fee collection',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description:
        'Bank-level security with encrypted transactions and data protection',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description:
        'Optimized for mobile devices with offline capabilities for remote areas',
    },
    {
      icon: Users,
      title: 'Multi-User Access',
      description:
        'Role-based access for administrators, teachers, parents, and students',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mungai',
      role: 'School Administrator',
      school: 'Greenwood High School',
      content:
        'SchoolFees has transformed how we handle fee collection. Payment tracking is now effortless!',
      rating: 5,
    },
    {
      name: 'David Kipkorir',
      role: 'Parent',
      school: 'Riverside Academy',
      content:
        "Finally, a simple way to pay school fees and track my child's payment history. Highly recommended!",
      rating: 5,
    },
    {
      name: 'Dr. Amara Oketch',
      role: 'Principal',
      school: 'Unity International School',
      content:
        'The analytics and reporting features help us make better financial decisions for our school.',
      rating: 5,
    },
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
                SchoolFees App
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/parent"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Parent Portal
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Contact Us
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Register
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle navigation"
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/parent"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Parent Portal
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Contact Us
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
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
                🎓 Trusted by 500+ Schools Nationwide
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Manage Your School Fees
              </span>
              <br />
              <span className="text-gray-900">With Ease</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Streamline fee collection, automate reminders, and provide parents
              with a seamless payment experience. Join thousands of schools
              already using SchoolFees App.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              >
                Watch Demo
              </Button>
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
                <span>Absolutely free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}
                Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to make school fee management
              effortless for administrators, parents, and students.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                500+
              </motion.div>
              <div className="text-purple-100">Schools Trust Us</div>
            </div>
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                50K+
              </motion.div>
              <div className="text-purple-100">Active Students</div>
            </div>
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Ksh 100M+
              </motion.div>
              <div className="text-purple-100">Fees Processed</div>
            </div>
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                99.8%
              </motion.div>
              <div className="text-purple-100">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what educators and parents are saying about SchoolFees.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
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
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-purple-600">
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

      {/* CTA Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
              Ready to Get Started?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Transform Your School&apos;s
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}
                Fee Management
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join hundreds of schools that have already simplified their fee
              collection process. Start your free trial today - no credit card
              required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              >
                Schedule Demo
              </Button>
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
                <span className="text-xl font-bold">SchoolFees App</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making school fee management simple, secure, and efficient for
                everyone.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
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
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{' '}
              <Image
                src="/AfriTekNovaLogo1.png"
                className="w-12 h-12 inline"
                alt="logo"
                width={100}
                height={100}
              />{' '}
              All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
