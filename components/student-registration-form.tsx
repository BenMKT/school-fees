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
import {
  GraduationCap,
  User,
  Calendar,
  Users,
  School,
  BookOpen,
  Target,
} from 'lucide-react';

export default function StudentRegistrationForm() {
  const [singleParent, setSingleParent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    parentName1: '',
    parentName2: '',
    schoolName: '',
    currentGrade: '',
    careerPath: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!formData.parentName1.trim()) {
      newErrors.parentName1 = 'At least one parent name is required';
    }

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School name is required';
    }

    if (!formData.currentGrade) {
      newErrors.currentGrade = 'Current grade is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      alert('Registration submitted successfully!');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-4 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Student Registration
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              Join our learning community and start your educational journey
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-emerald-600" />
                Full Name
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                className={`h-12 ${
                  errors.fullName ? 'border-red-500' : 'border-gray-200'
                } focus:border-emerald-500`}
              />
              {errors.fullName && (
                <p className="text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label
                htmlFor="dateOfBirth"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-600" />
                Date of Birth
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  handleInputChange('dateOfBirth', e.target.value)
                }
                className={`h-12 ${
                  errors.dateOfBirth ? 'border-red-500' : 'border-gray-200'
                } focus:border-emerald-500`}
              />
              {errors.dateOfBirth && (
                <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
              )}
            </div>

            {/* Parent Information */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600" />
                  Parent/Guardian Information
                </Label>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="singleParent"
                    checked={singleParent}
                    onCheckedChange={(checked) => {
                      setSingleParent(checked as boolean);
                      if (checked) {
                        handleInputChange('parentName2', '');
                      }
                    }}
                  />
                  <Label
                    htmlFor="singleParent"
                    className="text-sm text-gray-600"
                  >
                    Single Parent/Guardian
                  </Label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="parentName1"
                    className="text-sm text-gray-600"
                  >
                    Parent/Guardian 1 Name
                  </Label>
                  <Input
                    id="parentName1"
                    value={formData.parentName1}
                    onChange={(e) =>
                      handleInputChange('parentName1', e.target.value)
                    }
                    placeholder="Enter parent/guardian name"
                    className={`h-12 ${
                      errors.parentName1 ? 'border-red-500' : 'border-gray-200'
                    } focus:border-emerald-500`}
                  />
                  {errors.parentName1 && (
                    <p className="text-sm text-red-500">{errors.parentName1}</p>
                  )}
                </div>

                {!singleParent && (
                  <div className="space-y-2">
                    <Label
                      htmlFor="parentName2"
                      className="text-sm text-gray-600"
                    >
                      Parent/Guardian 2 Name
                    </Label>
                    <Input
                      id="parentName2"
                      value={formData.parentName2}
                      onChange={(e) =>
                        handleInputChange('parentName2', e.target.value)
                      }
                      placeholder="Enter second parent/guardian name"
                      className="h-12 border-gray-200 focus:border-emerald-500"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* School Name */}
            <div className="space-y-2">
              <Label
                htmlFor="schoolName"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <School className="w-4 h-4 text-emerald-600" />
                School Name
              </Label>
              <Input
                id="schoolName"
                value={formData.schoolName}
                onChange={(e) =>
                  handleInputChange('schoolName', e.target.value)
                }
                placeholder="Enter your school name"
                className={`h-12 ${
                  errors.schoolName ? 'border-red-500' : 'border-gray-200'
                } focus:border-emerald-500`}
              />
              {errors.schoolName && (
                <p className="text-sm text-red-500">{errors.schoolName}</p>
              )}
            </div>

            {/* Current Grade */}
            <div className="space-y-2">
              <Label
                htmlFor="currentGrade"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-emerald-600" />
                Current Grade
              </Label>
              <Select
                value={formData.currentGrade}
                onValueChange={(value) =>
                  handleInputChange('currentGrade', value)
                }
              >
                <SelectTrigger
                  className={`h-12 ${
                    errors.currentGrade ? 'border-red-500' : 'border-gray-200'
                  } focus:border-emerald-500`}
                >
                  <SelectValue placeholder="Select your current grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kindergarten">Kindergarten</SelectItem>
                  <SelectItem value="1st">1st Grade</SelectItem>
                  <SelectItem value="2nd">2nd Grade</SelectItem>
                  <SelectItem value="3rd">3rd Grade</SelectItem>
                  <SelectItem value="4th">4th Grade</SelectItem>
                  <SelectItem value="5th">5th Grade</SelectItem>
                  <SelectItem value="6th">6th Grade</SelectItem>
                  <SelectItem value="7th">7th Grade</SelectItem>
                  <SelectItem value="8th">8th Grade</SelectItem>
                  <SelectItem value="9th">9th Grade</SelectItem>
                  <SelectItem value="10th">10th Grade</SelectItem>
                  <SelectItem value="11th">11th Grade</SelectItem>
                  <SelectItem value="12th">12th Grade</SelectItem>
                </SelectContent>
              </Select>
              {errors.currentGrade && (
                <p className="text-sm text-red-500">{errors.currentGrade}</p>
              )}
            </div>

            {/* Career Path (Optional) */}
            <div className="space-y-2">
              <Label
                htmlFor="careerPath"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <Target className="w-4 h-4 text-emerald-600" />
                Career Interest{' '}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </Label>
              <Input
                id="careerPath"
                value={formData.careerPath}
                onChange={(e) =>
                  handleInputChange('careerPath', e.target.value)
                }
                placeholder="What career are you interested in?"
                className="h-12 border-gray-200 focus:border-emerald-500"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Complete Registration
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
