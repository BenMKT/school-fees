'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlertTriangle, GripVertical, Save } from 'lucide-react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const PERIODS = ['08:00', '09:00', '10:30', '12:00', '14:00'];

const SUBJECTS = [
  {
    id: 'math',
    label: 'Mathematics',
    teacher: 'Dr. Smith',
    color: 'bg-blue-100 border-blue-300 text-blue-800',
  },
  {
    id: 'english',
    label: 'English',
    teacher: 'Mrs. Johnson',
    color: 'bg-purple-100 border-purple-300 text-purple-800',
  },
  {
    id: 'science',
    label: 'Science',
    teacher: 'Mr. Williams',
    color: 'bg-green-100 border-green-300 text-green-800',
  },
  {
    id: 'history',
    label: 'History',
    teacher: 'Ms. Davis',
    color: 'bg-orange-100 border-orange-300 text-orange-800',
  },
  {
    id: 'pe',
    label: 'Physical Ed',
    teacher: 'Coach Lee',
    color: 'bg-pink-100 border-pink-300 text-pink-800',
  },
  {
    id: 'art',
    label: 'Art',
    teacher: 'Ms. Chen',
    color: 'bg-teal-100 border-teal-300 text-teal-800',
  },
];

const ROOMS = [
  'Room 12',
  'Room 8',
  'Lab 2',
  'Room 15',
  'Sports Hall',
  'Art Studio',
];

type CellKey = `${string}-${string}`;

interface TimetableCell {
  subjectId: string;
  room: string;
}

export function TimetableBuilder() {
  const [selectedClass, setSelectedClass] = useState('grade-8a');
  const [grid, setGrid] = useState<Record<CellKey, TimetableCell>>({
    'Monday-08:00': { subjectId: 'math', room: 'Room 12' },
    'Tuesday-09:00': { subjectId: 'english', room: 'Room 8' },
    'Wednesday-10:30': { subjectId: 'science', room: 'Lab 2' },
  });
  const [draggedSubject, setDraggedSubject] = useState<string | null>(null);
  const [conflicts, setConflicts] = useState<string[]>([]);

  const getSubject = (id: string) => SUBJECTS.find((s) => s.id === id);

  const handleDrop = (day: string, period: string) => {
    if (!draggedSubject) return;
    const key: CellKey = `${day}-${period}`;
    const subject = getSubject(draggedSubject);
    const roomIndex = SUBJECTS.findIndex((s) => s.id === draggedSubject);

    setGrid((prev) => ({
      ...prev,
      [key]: {
        subjectId: draggedSubject,
        room: ROOMS[roomIndex % ROOMS.length],
      },
    }));

    // Simple conflict: same teacher at same time on different days check
    const newConflicts: string[] = [];
    Object.entries({
      ...grid,
      [key]: { subjectId: draggedSubject, room: '' },
    } as Record<CellKey, TimetableCell>).forEach(([k, cell]) => {
      const [, p] = k.split('-');
      if (p === period && cell.subjectId === draggedSubject && k !== key) {
        newConflicts.push(`${subject?.teacher} double-booked at ${period}`);
      }
    });
    setConflicts(newConflicts);
    setDraggedSubject(null);
  };

  const clearCell = (day: string, period: string) => {
    const key: CellKey = `${day}-${period}`;
    setGrid((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setConflicts([]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="grade-8a">Grade 8 - Section A</SelectItem>
            <SelectItem value="grade-9b">Grade 9 - Section B</SelectItem>
            <SelectItem value="grade-10a">Grade 10 - Section A</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Save className="w-4 h-4 mr-2" />
          Publish Timetable
        </Button>
      </div>

      {conflicts.length > 0 && (
        <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          {conflicts.join(' · ')}
        </div>
      )}

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Subject palette */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base">Subjects</CardTitle>
            <CardDescription>Drag onto the timetable grid</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {SUBJECTS.map((subject) => (
              <div
                key={subject.id}
                draggable
                onDragStart={() => setDraggedSubject(subject.id)}
                onDragEnd={() => setDraggedSubject(null)}
                className={`flex items-center gap-2 p-3 rounded-lg border cursor-grab active:cursor-grabbing ${subject.color}`}
              >
                <GripVertical className="w-4 h-4 opacity-50" />
                <div>
                  <p className="font-medium text-sm">{subject.label}</p>
                  <p className="text-xs opacity-75">{subject.teacher}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Timetable grid */}
        <Card className="lg:col-span-3 overflow-x-auto">
          <CardHeader>
            <CardTitle className="text-base">Weekly Timetable</CardTitle>
            <CardDescription>
              Drop subjects into time slots · Click a cell to clear
            </CardDescription>
          </CardHeader>
          <CardContent>
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr>
                  <th className="p-2 text-left text-xs font-medium text-muted-foreground w-16">
                    Time
                  </th>
                  {DAYS.map((day) => (
                    <th
                      key={day}
                      className="p-2 text-left text-xs font-medium text-muted-foreground"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PERIODS.map((period) => (
                  <tr key={period}>
                    <td className="p-2 text-xs font-mono text-muted-foreground align-top">
                      {period}
                    </td>
                    {DAYS.map((day) => {
                      const key: CellKey = `${day}-${period}`;
                      const cell = grid[key];
                      const subject = cell ? getSubject(cell.subjectId) : null;
                      return (
                        <td key={day} className="p-1 align-top">
                          <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDrop(day, period)}
                            onClick={() => cell && clearCell(day, period)}
                            className={`min-h-[72px] p-2 rounded-lg border-2 border-dashed transition-colors ${
                              cell
                                ? `${subject?.color} border-solid cursor-pointer`
                                : 'border-gray-200 bg-gray-50 hover:border-emerald-300 hover:bg-emerald-50/50'
                            }`}
                            title={
                              cell ? 'Click to clear' : 'Drop subject here'
                            }
                          >
                            {subject && (
                              <>
                                <p className="font-medium text-xs">
                                  {subject.label}
                                </p>
                                <p className="text-xs opacity-75">
                                  {subject.teacher}
                                </p>
                                <p className="text-xs opacity-60 mt-1">
                                  {cell.room}
                                </p>
                              </>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="bg-emerald-50 text-emerald-700 border-emerald-200"
        >
          {Object.keys(grid).length} periods scheduled
        </Badge>
        <Badge variant="outline">
          {SUBJECTS.length -
            new Set(Object.values(grid).map((c) => c.subjectId)).size}{' '}
          subjects unassigned
        </Badge>
      </div>
    </div>
  );
}
