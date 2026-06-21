'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
    },
  },
};

export function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className="w-3 h-3 text-white p-0.5" />
              </motion.div>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                E-SMS
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                Smart Schools Management System
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/parent"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Parent Portal
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Sign In
              </Button>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Register
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="py-6 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-2 px-4">
                  <Link
                    href="/"
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/parent"
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Parent Portal
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                  <Link href="/login" className="block">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register" className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
