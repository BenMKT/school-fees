'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users } from 'lucide-react';

// Mock class data
const classes = [
  {
    id: 1,
    name: 'Science A',
    grade: '10th Grade',
    teacher: 'Dr. Smith',
    students: 25,
    capacity: 30,
  },
  {
    id: 2,
    name: 'Math B',
    grade: '9th Grade',
    teacher: 'Mrs. Johnson',
    students: 28,
    capacity: 30,
  },
  {
    id: 3,
    name: 'History C',
    grade: '11th Grade',
    teacher: 'Mr. Williams',
    students: 22,
    capacity: 30,
  },
];

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Classes</h1>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Class
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <Card key={classItem.id}>
            <CardHeader>
              <CardTitle className="text-xl">{classItem.name}</CardTitle>
              <p className="text-sm text-gray-500">{classItem.grade}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Teacher</span>
                  <span className="text-sm font-medium">
                    {classItem.teacher}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Students</span>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-gray-500" />
                    <span className="text-sm font-medium">
                      {classItem.students}/{classItem.capacity}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full"
                    style={{
                      width: `${
                        (classItem.students / classItem.capacity) * 100
                      }%`,
                    }}
                  />
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
