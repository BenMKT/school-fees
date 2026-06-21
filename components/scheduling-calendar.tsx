'use client';

import type React from 'react';
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
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar,
  BookOpen,
  Users,
} from 'lucide-react';

type EventType = 'class' | 'exam' | 'event';

interface ScheduleEvent {
  id: string;
  title: string;
  type: EventType;
  date: string;
  time: string;
  location: string;
}

const EVENTS: ScheduleEvent[] = [
  {
    id: '1',
    title: 'Mathematics - Grade 8A',
    type: 'class',
    date: '2026-06-23',
    time: '08:00',
    location: 'Room 12',
  },
  {
    id: '2',
    title: 'Mid-term Mathematics Exam',
    type: 'exam',
    date: '2026-06-24',
    time: '09:00',
    location: 'Hall A',
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting',
    type: 'event',
    date: '2026-06-25',
    time: '14:00',
    location: 'Main Hall',
  },
  {
    id: '4',
    title: 'Science Lab - Grade 9B',
    type: 'class',
    date: '2026-06-23',
    time: '10:30',
    location: 'Lab 2',
  },
  {
    id: '5',
    title: 'Sports Day',
    type: 'event',
    date: '2026-06-28',
    time: '08:00',
    location: 'Sports Complex',
  },
  {
    id: '6',
    title: 'English Exam - Grade 10',
    type: 'exam',
    date: '2026-06-26',
    time: '09:00',
    location: 'Room 8',
  },
];

const WEEK_DAYS = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27'];

const typeStyles: Record<EventType, string> = {
  class: 'bg-blue-50 border-blue-200 text-blue-800',
  exam: 'bg-red-50 border-red-200 text-red-800',
  event: 'bg-purple-50 border-purple-200 text-purple-800',
};

const typeIcons: Record<
  EventType,
  React.ComponentType<{ className?: string }>
> = {
  class: BookOpen,
  exam: Calendar,
  event: Users,
};

export function SchedulingCalendar() {
  const [view, setView] = useState<'week' | 'list'>('week');
  const [filter, setFilter] = useState('all');

  const filteredEvents = EVENTS.filter(
    (e) => filter === 'all' || e.type === filter,
  );

  const eventsByDay = WEEK_DAYS.map((day, index) => {
    const dateStr = `2026-06-${23 + index}`;
    return {
      day,
      events: filteredEvents.filter((e) => e.date === dateStr),
    };
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="font-semibold">June 23 – 27, 2026</span>
          <Button variant="outline" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="class">Classes</SelectItem>
              <SelectItem value="exam">Exams</SelectItem>
              <SelectItem value="event">Events</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={view}
            onValueChange={(v) => setView(v as 'week' | 'list')}
          >
            <SelectTrigger className="w-28">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="list">List</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(['class', 'exam', 'event'] as EventType[]).map((type) => (
          <Badge key={type} variant="outline" className={typeStyles[type]}>
            {type.charAt(0).toUpperCase() + type.slice(1)}s:{' '}
            {EVENTS.filter((e) => e.type === type).length}
          </Badge>
        ))}
      </div>

      {view === 'week' ? (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {eventsByDay.map(({ day, events }) => (
            <Card key={day} className="min-h-[200px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {events.length === 0 ? (
                  <p className="text-xs text-muted-foreground">No events</p>
                ) : (
                  events.map((event) => {
                    const Icon = typeIcons[event.type];
                    return (
                      <div
                        key={event.id}
                        className={`p-2 rounded-lg border text-xs ${typeStyles[event.type]}`}
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <Icon className="w-3 h-3" />
                          <span className="font-medium truncate">
                            {event.title}
                          </span>
                        </div>
                        <p className="opacity-75">
                          {event.time} · {event.location}
                        </p>
                      </div>
                    );
                  })
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Scheduled Items</CardTitle>
            <CardDescription>
              Classes, exams, and events in one view
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {filteredEvents.map((event) => {
              const Icon = typeIcons[event.type];
              return (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg border ${typeStyles[event.type]}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{event.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {event.date} · {event.time} · {event.location}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className={typeStyles[event.type]}>
                    {event.type}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
