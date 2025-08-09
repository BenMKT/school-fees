'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Users, UserPlus, Award, Clock, Mail, Phone } from 'lucide-react';

const departmentData = [
  { department: 'Mathematics', teachers: 12, students: 380 },
  { department: 'English', teachers: 10, students: 420 },
  { department: 'Science', teachers: 15, students: 350 },
  { department: 'History', teachers: 8, students: 280 },
  { department: 'Arts', teachers: 6, students: 180 },
  { department: 'Physical Ed', teachers: 5, students: 450 },
  { department: 'Languages', teachers: 7, students: 220 },
];

const topStaff = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Principal',
    department: 'Administration',
    experience: '15 years',
    rating: 4.9,
    avatar: 'SM',
    email: 's.mitchell@school.edu',
    phone: '+1 (555) 123-4567',
  },
  {
    name: 'Prof. Michael Johnson',
    role: 'Head of Mathematics',
    department: 'Mathematics',
    experience: '12 years',
    rating: 4.8,
    avatar: 'MJ',
    email: 'm.johnson@school.edu',
    phone: '+1 (555) 234-5678',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Science Coordinator',
    department: 'Science',
    experience: '10 years',
    rating: 4.9,
    avatar: 'EC',
    email: 'e.chen@school.edu',
    phone: '+1 (555) 345-6789',
  },
  {
    name: 'Ms. Lisa Anderson',
    role: 'English Department Head',
    department: 'English',
    experience: '8 years',
    rating: 4.7,
    avatar: 'LA',
    email: 'l.anderson@school.edu',
    phone: '+1 (555) 456-7890',
  },
];

export function StaffOverview() {
  return (
    <div className="space-y-6">
      {/* Staff Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              +5 new hires this term
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Teaching Staff
            </CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">63</div>
            <p className="text-xs text-muted-foreground">71% of total staff</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Experience
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5</div>
            <p className="text-xs text-muted-foreground">years of experience</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Attendance Rate
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <p className="text-xs text-muted-foreground">+1.2% vs last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Department Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Department Distribution</CardTitle>
          <CardDescription>Teachers and students by department</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              teachers: { label: 'Teachers', color: '#8b5cf6' },
              students: { label: 'Students', color: '#06b6d4' },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="teachers" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
                <Bar dataKey="students" fill="#06b6d4" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Top Staff Members */}
      <Card>
        <CardHeader>
          <CardTitle>Key Staff Members</CardTitle>
          <CardDescription>Department heads and senior staff</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {topStaff.map((staff) => (
              <div
                key={staff.name}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={staff.name}
                    />
                    <AvatarFallback>{staff.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{staff.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {staff.role}
                        </p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                        ⭐ {staff.rating}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                      <div>{staff.department}</div>
                      <div>{staff.experience}</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
