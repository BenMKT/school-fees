'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TopNavbar } from '@/components/top-navbar';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Zap,
  Users,
  BookOpen,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Heart,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    school: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        school: '',
        message: '',
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden ">
      {/* Top Navigation */}
      <TopNavbar />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-20"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-pink-200 rounded-full opacity-20"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.5,
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 py-12 relative z-10 pt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
            variants={pulseVariants}
            animate="animate"
          >
            <Sparkles className="w-4 h-4" />
            Let&apos;s Transform Education Together
            <Sparkles className="w-4 h-4" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your school&apos;s fee management? Our team
            of education technology experts is here to help you create a
            seamless, stress-free payment experience for your entire school
            community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Start Your Journey
                    </h2>
                    <p className="text-gray-600">
                      Tell us about your school&apos;s needs
                    </p>
                  </div>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@school.edu"
                          required
                          className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+254 712 345 678"
                          className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Role *
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required
                          aria-label="Select your role"
                          className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-blue-500 transition-colors bg-white"
                        >
                          <option value="">Select your role</option>
                          <option value="principal">Principal/Head</option>
                          <option value="admin">School Administrator</option>
                          <option value="finance">Finance Manager</option>
                          <option value="it">IT Manager</option>
                          <option value="parent">Parent</option>
                          <option value="other">Student</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        School/Institution Name *
                      </label>
                      <Input
                        name="school"
                        value={formData.school}
                        onChange={handleInputChange}
                        placeholder="Kibuli Secondary School"
                        required
                        className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How can we help you? *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your current challenges with fee management, number of students, specific features you're interested in, or any questions you have..."
                        required
                        rows={4}
                        className="border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <motion.div
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'linear',
                              }}
                            />
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            Send Message
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out! Our team will get back to you
                      within 24 hours with a personalized solution for your
                      school.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Heart className="w-4 h-4 text-red-500" />
                      We&apos;re excited to help transform your school&apos;s
                      fee management!
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Features */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Info */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Let&apos;s Talk
                    </h3>
                    <p className="text-gray-600">Multiple ways to reach us</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        +254 712 345 678
                      </p>
                      <p className="text-sm text-gray-600">
                        Mon-Fri, 8AM-6PM EAT
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        hello@schoolfees.com
                      </p>
                      <p className="text-sm text-gray-600">
                        We respond within 2 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Nairobi, Kenya
                      </p>
                      <p className="text-sm text-gray-600">
                        Serving schools nationwide
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        24/7 Support
                      </p>
                      <p className="text-sm text-gray-600">
                        Emergency assistance available
                      </p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 bg-white/20 rounded-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Star className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">Why Schools Love Us</h3>
                    <p className="text-blue-100">
                      Trusted by 500+ institutions
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Users className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">
                      Serving 100,000+ students in Kenya
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <CreditCard className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">
                      Ksh 100M+ in payments processed securely
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <BookOpen className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">
                      99.9% uptime with 24/7 monitoring
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Zap className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">
                      Setup in under 30 minutes
                    </span>
                  </motion.div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-blue-100">4.9/5 rating</span>
                  </div>
                  <p className="text-sm text-blue-100">
                    &quot;SchoolFees App transformed our payment process
                    completely. Parents love the convenience, and we love the
                    automation!&quot;
                  </p>
                  <p className="text-xs text-blue-200 mt-2">
                    - Dr.David Okello, Principal at Kibuli Secondary School
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <motion.div
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl text-center"
              variants={pulseVariants}
              animate="animate"
            >
              <motion.div
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <Zap className="w-6 h-6" />
              </motion.div>
              <h4 className="text-lg font-bold mb-2">
                Lightning Fast Response
              </h4>
              <p className="text-green-100 text-sm">
                We guarantee a response within 2 hours during business hours,
                because your time matters!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your School&apos;s Fee Management?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join hundreds of schools already using SchoolFees App to
              streamline payments, reduce administrative burden, and create
              happier school communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Free Setup
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                30-Day Trial
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                No Long-term Contracts
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                24/7 Support
              </Badge>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
