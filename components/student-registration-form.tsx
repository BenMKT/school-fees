'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  User,
  Calendar,
  Users,
  School,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Student', icon: User },
  { id: 2, title: 'Parent/Guardian', icon: Users },
  { id: 3, title: 'Emergency Contact', icon: AlertCircle },
  { id: 4, title: 'Review', icon: CheckCircle },
];

const GRADES = [
  'Kindergarten',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
  '6th Grade',
  '7th Grade',
  '8th Grade',
  '9th Grade',
  '10th Grade',
  '11th Grade',
  '12th Grade',
];

export interface AdmissionFormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  schoolName: string;
  currentGrade: string;
  address: string;
  parentName1: string;
  parentEmail1: string;
  parentPhone1: string;
  parentName2: string;
  parentEmail2: string;
  parentPhone2: string;
  singleParent: boolean;
  emergencyName: string;
  emergencyRelationship: string;
  emergencyPhone: string;
  emergencyEmail: string;
}

const initialFormData: AdmissionFormData = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  schoolName: '',
  currentGrade: '',
  address: '',
  parentName1: '',
  parentEmail1: '',
  parentPhone1: '',
  parentName2: '',
  parentEmail2: '',
  parentPhone2: '',
  singleParent: false,
  emergencyName: '',
  emergencyRelationship: '',
  emergencyPhone: '',
  emergencyEmail: '',
};

interface StudentRegistrationFormProps {
  variant?: 'standalone' | 'embedded';
  onSubmitSuccess?: (data: AdmissionFormData) => void;
}

export default function StudentRegistrationForm({
  variant = 'standalone',
  onSubmitSuccess,
}: StudentRegistrationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<AdmissionFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    field: keyof AdmissionFormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = 'Full name is required';
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.schoolName.trim())
        newErrors.schoolName = 'School name is required';
      if (!formData.currentGrade) newErrors.currentGrade = 'Grade is required';
    }

    if (currentStep === 2) {
      if (!formData.parentName1.trim())
        newErrors.parentName1 = 'Parent/guardian name is required';
      if (!formData.parentPhone1.trim())
        newErrors.parentPhone1 = 'Phone number is required';
    }

    if (currentStep === 3) {
      if (!formData.emergencyName.trim())
        newErrors.emergencyName = 'Emergency contact name is required';
      if (!formData.emergencyPhone.trim())
        newErrors.emergencyPhone = 'Emergency phone is required';
      if (!formData.emergencyRelationship.trim())
        newErrors.emergencyRelationship = 'Relationship is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 4));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      onSubmitSuccess?.(formData);
      setSubmitted(true);
    }
  };

  const card = (
    <Card
      className={`w-full shadow-xl border-0 ${
        variant === 'standalone'
          ? 'max-w-2xl bg-white/80 backdrop-blur-sm'
          : 'bg-white'
      }`}
    >
      <CardHeader className="text-center space-y-4 pb-6">
        {variant === 'standalone' && (
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
        )}
        <div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Student Admission Application
          </CardTitle>
          <CardDescription className="text-base text-gray-600 mt-2">
            Step {step} of 4 — {STEPS[step - 1].title}
          </CardDescription>
        </div>

        {/* Step indicator */}
        <div className="flex justify-center gap-2 pt-2">
          {STEPS.map((s) => (
            <div
              key={s.id}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                s.id === step
                  ? 'bg-emerald-600 text-white'
                  : s.id < step
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-gray-100 text-gray-400'
              }`}
            >
              <s.icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{s.title}</span>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold">Application Submitted</h3>
            <p className="text-muted-foreground">
              {formData.fullName}&apos;s application has been received. You will
              be notified once it is reviewed.
            </p>
            <Badge className="bg-emerald-100 text-emerald-700">
              Status: Pending Review
            </Badge>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <Field label="Full Name" icon={User} error={errors.fullName}>
                  <Input
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange('fullName', e.target.value)
                    }
                    placeholder="Student full name"
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                </Field>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    label="Date of Birth"
                    icon={Calendar}
                    error={errors.dateOfBirth}
                  >
                    <Input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange('dateOfBirth', e.target.value)
                      }
                      className={errors.dateOfBirth ? 'border-red-500' : ''}
                    />
                  </Field>
                  <Field label="Gender" icon={User}>
                    <Select
                      value={formData.gender}
                      onValueChange={(v) => handleInputChange('gender', v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field
                  label="School Name"
                  icon={School}
                  error={errors.schoolName}
                >
                  <Input
                    value={formData.schoolName}
                    onChange={(e) =>
                      handleInputChange('schoolName', e.target.value)
                    }
                    placeholder="School applying to"
                    className={errors.schoolName ? 'border-red-500' : ''}
                  />
                </Field>
                <Field
                  label="Grade Applying For"
                  icon={BookOpen}
                  error={errors.currentGrade}
                >
                  <Select
                    value={formData.currentGrade}
                    onValueChange={(v) => handleInputChange('currentGrade', v)}
                  >
                    <SelectTrigger
                      className={errors.currentGrade ? 'border-red-500' : ''}
                    >
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {GRADES.map((g) => (
                        <SelectItem key={g} value={g}>
                          {g}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Home Address" icon={MapPin}>
                  <Input
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange('address', e.target.value)
                    }
                    placeholder="Street, city, postal code"
                  />
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="font-semibold">
                    Parent/Guardian Details
                  </Label>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="singleParent"
                      checked={formData.singleParent}
                      onCheckedChange={(checked) => {
                        handleInputChange('singleParent', checked as boolean);
                        if (checked) {
                          handleInputChange('parentName2', '');
                          handleInputChange('parentEmail2', '');
                          handleInputChange('parentPhone2', '');
                        }
                      }}
                    />
                    <Label
                      htmlFor="singleParent"
                      className="text-sm text-gray-600"
                    >
                      Single parent/guardian
                    </Label>
                  </div>
                </div>
                <Field
                  label="Parent/Guardian 1 Name"
                  icon={Users}
                  error={errors.parentName1}
                >
                  <Input
                    value={formData.parentName1}
                    onChange={(e) =>
                      handleInputChange('parentName1', e.target.value)
                    }
                    placeholder="Full name"
                    className={errors.parentName1 ? 'border-red-500' : ''}
                  />
                </Field>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Email" icon={Mail}>
                    <Input
                      type="email"
                      value={formData.parentEmail1}
                      onChange={(e) =>
                        handleInputChange('parentEmail1', e.target.value)
                      }
                      placeholder="parent@email.com"
                    />
                  </Field>
                  <Field label="Phone" icon={Phone} error={errors.parentPhone1}>
                    <Input
                      value={formData.parentPhone1}
                      onChange={(e) =>
                        handleInputChange('parentPhone1', e.target.value)
                      }
                      placeholder="+254 712 345 678"
                      className={errors.parentPhone1 ? 'border-red-500' : ''}
                    />
                  </Field>
                </div>
                {!formData.singleParent && (
                  <>
                    <Field label="Parent/Guardian 2 Name" icon={Users}>
                      <Input
                        value={formData.parentName2}
                        onChange={(e) =>
                          handleInputChange('parentName2', e.target.value)
                        }
                        placeholder="Second parent/guardian name"
                      />
                    </Field>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field label="Email" icon={Mail}>
                        <Input
                          type="email"
                          value={formData.parentEmail2}
                          onChange={(e) =>
                            handleInputChange('parentEmail2', e.target.value)
                          }
                          placeholder="parent@email.com"
                        />
                      </Field>
                      <Field label="Phone" icon={Phone}>
                        <Input
                          value={formData.parentPhone2}
                          onChange={(e) =>
                            handleInputChange('parentPhone2', e.target.value)
                          }
                          placeholder="+254 712 345 678"
                        />
                      </Field>
                    </div>
                  </>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Provide an emergency contact who can be reached if parents are
                  unavailable.
                </p>
                <Field
                  label="Contact Name"
                  icon={User}
                  error={errors.emergencyName}
                >
                  <Input
                    value={formData.emergencyName}
                    onChange={(e) =>
                      handleInputChange('emergencyName', e.target.value)
                    }
                    placeholder="Full name"
                    className={errors.emergencyName ? 'border-red-500' : ''}
                  />
                </Field>
                <Field
                  label="Relationship"
                  icon={Users}
                  error={errors.emergencyRelationship}
                >
                  <Input
                    value={formData.emergencyRelationship}
                    onChange={(e) =>
                      handleInputChange('emergencyRelationship', e.target.value)
                    }
                    placeholder="e.g. Aunt, Neighbour, Family friend"
                    className={
                      errors.emergencyRelationship ? 'border-red-500' : ''
                    }
                  />
                </Field>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    label="Phone"
                    icon={Phone}
                    error={errors.emergencyPhone}
                  >
                    <Input
                      value={formData.emergencyPhone}
                      onChange={(e) =>
                        handleInputChange('emergencyPhone', e.target.value)
                      }
                      placeholder="+254 712 345 678"
                      className={errors.emergencyPhone ? 'border-red-500' : ''}
                    />
                  </Field>
                  <Field label="Email (optional)" icon={Mail}>
                    <Input
                      type="email"
                      value={formData.emergencyEmail}
                      onChange={(e) =>
                        handleInputChange('emergencyEmail', e.target.value)
                      }
                      placeholder="contact@email.com"
                    />
                  </Field>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 text-sm">
                <ReviewSection title="Student">
                  <ReviewRow label="Name" value={formData.fullName} />
                  <ReviewRow
                    label="Date of Birth"
                    value={formData.dateOfBirth}
                  />
                  <ReviewRow label="School" value={formData.schoolName} />
                  <ReviewRow label="Grade" value={formData.currentGrade} />
                  {formData.address && (
                    <ReviewRow label="Address" value={formData.address} />
                  )}
                </ReviewSection>
                <ReviewSection title="Parent/Guardian">
                  <ReviewRow label="Primary" value={formData.parentName1} />
                  <ReviewRow label="Phone" value={formData.parentPhone1} />
                  {formData.parentEmail1 && (
                    <ReviewRow label="Email" value={formData.parentEmail1} />
                  )}
                  {!formData.singleParent && formData.parentName2 && (
                    <ReviewRow label="Secondary" value={formData.parentName2} />
                  )}
                </ReviewSection>
                <ReviewSection title="Emergency Contact">
                  <ReviewRow label="Name" value={formData.emergencyName} />
                  <ReviewRow
                    label="Relationship"
                    value={formData.emergencyRelationship}
                  />
                  <ReviewRow label="Phone" value={formData.emergencyPhone} />
                </ReviewSection>
              </div>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={handleBack}>
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );

  if (variant === 'embedded') return card;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-4 flex items-center justify-center">
      {card}
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
        <Icon className="w-4 h-4 text-emerald-600" />
        {label}
      </Label>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

function ReviewSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg space-y-2">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      {children}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
