'use client';

import { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { ModulePageShell } from '@/components/module-page-shell';
import { AdmissionQueue, type Applicant } from '@/components/admission-queue';
import StudentRegistrationForm from '@/components/student-registration-form';
import type { AdmissionFormData } from '@/components/student-registration-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AdmissionPageClient() {
  const [applicants, setApplicants] = useState<Applicant[] | undefined>(
    undefined,
  );
  const [activeTab, setActiveTab] = useState('queue');

  const handleNewApplication = (data: AdmissionFormData) => {
    const newApplicant: Applicant = {
      id: `APP${String(Date.now()).slice(-5)}`,
      name: data.fullName,
      grade: data.currentGrade,
      school: data.schoolName,
      parentName: data.parentName1,
      parentPhone: data.parentPhone1,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'pending',
    };
    setApplicants((prev) => [newApplicant, ...(prev ?? [])]);
    setActiveTab('queue');
  };

  return (
    <ModulePageShell
      title="Admission"
      description="Register students with parent, guardian, and emergency contact details. Build your searchable student database from day one."
      badge="People"
      icon={UserPlus}
    >
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList>
          <TabsTrigger value="queue">Applicant Queue</TabsTrigger>
          <TabsTrigger value="register">New Application</TabsTrigger>
        </TabsList>
        <TabsContent value="queue">
          <AdmissionQueue externalApplicants={applicants} />
        </TabsContent>
        <TabsContent value="register">
          <StudentRegistrationForm
            variant="embedded"
            onSubmitSuccess={handleNewApplication}
          />
        </TabsContent>
      </Tabs>
    </ModulePageShell>
  );
}
