'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { SchoolOverviewCards } from '@/components/school-overview-cards';
import { SchoolQuickAccessBar } from '@/components/school-quick-access-bar';
import { FinancialAnalytics } from '@/components/financial-analytics';
import { StudentDemographics } from '@/components/student-demographics';
import { AcademicPerformance } from '@/components/academic-performance';
import { StaffOverview } from '@/components/staff-overview';
import { FacilityManagement } from '@/components/facility-management';
import { SchoolActivities } from '@/components/school-activities';
import { SchoolQuickActions } from '@/components/school-quick-actions';
import { EnrollmentTrends } from '@/components/enrollment-trends';
import { RevenueAnalytics } from '@/components/revenue-analytics';

interface SchoolsDashboardProps {
  schoolId: string;
}

// Mock school data - in a real app, this would be fetched based on schoolId
const getSchoolData = (id: string) => {
  const schools = {
    SCH001: { name: 'Greenwood High School', location: 'Springfield, IL' },
    SCH002: { name: 'Riverside Academy', location: 'Chicago, IL' },
    SCH003: { name: 'Unity International School', location: 'Peoria, IL' },
    SCH004: { name: 'Oakwood Elementary', location: 'Rockford, IL' },
    SCH005: { name: 'Metro Tech Institute', location: 'Aurora, IL' },
  };
  return (
    schools[id as keyof typeof schools] || {
      name: 'Unknown School',
      location: 'Unknown Location',
    }
  );
};

export function SchoolsDashboard({ schoolId }: SchoolsDashboardProps) {
  const schoolData = getSchoolData(schoolId);

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/schools">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Schools
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {schoolData.name}
            </h1>
            <div className="flex items-center space-x-2">
              <p className="text-muted-foreground">{schoolData.location}</p>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                {schoolId}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <SchoolOverviewCards />

      <SchoolQuickAccessBar />

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financial">Finance</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="staff">Staff & HR</TabsTrigger>
          <TabsTrigger value="facilities">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <FinancialAnalytics />
              <EnrollmentTrends />
            </div>
            <div className="space-y-6">
              <SchoolQuickActions />
              <SchoolActivities />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <RevenueAnalytics />
            <FinancialAnalytics />
          </div>
        </TabsContent>

        <TabsContent value="academic" className="space-y-6">
          <AcademicPerformance />
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <StudentDemographics />
            <EnrollmentTrends />
          </div>
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <StaffOverview />
        </TabsContent>

        <TabsContent value="facilities" className="space-y-6">
          <FacilityManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
