'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Building, DollarSign, Eye } from 'lucide-react';

// Mock map data - in a real app, this would integrate with a mapping service
const mapRegions = [
  {
    region: 'North',
    schools: 67,
    students: 23450,
    revenue: 9.8,
    coordinates: { lat: 42.0, lng: -87.9 },
    color: 'bg-purple-500',
  },
  {
    region: 'South',
    schools: 52,
    students: 18230,
    revenue: 7.2,
    coordinates: { lat: 41.5, lng: -87.8 },
    color: 'bg-blue-500',
  },
  {
    region: 'East',
    schools: 48,
    students: 16890,
    revenue: 6.8,
    coordinates: { lat: 41.8, lng: -87.5 },
    color: 'bg-green-500',
  },
  {
    region: 'West',
    schools: 43,
    students: 15120,
    revenue: 6.1,
    coordinates: { lat: 41.9, lng: -88.2 },
    color: 'bg-orange-500',
  },
  {
    region: 'Central',
    schools: 37,
    students: 15557,
    revenue: 5.3,
    coordinates: { lat: 41.7, lng: -87.9 },
    color: 'bg-red-500',
  },
];

const featuredSchools = [
  {
    id: 'SCH001',
    name: 'Greenwood High School',
    location: 'Springfield, IL',
    students: 1247,
    performance: 87.5,
    coordinates: { lat: 39.7817, lng: -89.6501 },
  },
  {
    id: 'SCH002',
    name: 'Riverside Academy',
    location: 'Chicago, IL',
    students: 890,
    performance: 92.1,
    coordinates: { lat: 41.8781, lng: -87.6298 },
  },
  {
    id: 'SCH003',
    name: 'Unity International School',
    location: 'Peoria, IL',
    students: 1456,
    performance: 89.3,
    coordinates: { lat: 40.6936, lng: -89.589 },
  },
];

export function SchoolsMap() {
  return (
    <div className="space-y-6">
      {/* Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Schools Geographic Distribution</CardTitle>
          <CardDescription>
            Interactive map showing school locations and regional statistics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Interactive Map
              </h3>
              <p className="text-gray-500 mb-4">
                This would integrate with Google Maps, Mapbox, or similar
                mapping service
              </p>
              <Button variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Load Map Integration
              </Button>
            </div>

            {/* Mock map markers */}
            <div className="absolute inset-0 pointer-events-none">
              {mapRegions.map((region) => (
                <div
                  key={region.region}
                  className={`absolute w-4 h-4 ${region.color} rounded-full opacity-70 animate-pulse`}
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regional Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {mapRegions.map((region) => (
          <Card
            key={region.region}
            className="hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  {region.region} Region
                </CardTitle>
                <div className={`w-3 h-3 ${region.color} rounded-full`} />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Schools</span>
                </div>
                <span className="font-semibold">{region.schools}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Students</span>
                </div>
                <span className="font-semibold">
                  {region.students.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Revenue</span>
                </div>
                <span className="font-semibold">${region.revenue}M</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Schools */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Schools</CardTitle>
          <CardDescription>
            Highlighted schools with exceptional performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredSchools.map((school) => (
              <div
                key={school.id}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{school.name}</h4>
                  <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                    Featured
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{school.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{school.students} students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Performance:</span>
                    <span className="font-semibold text-green-600">
                      {school.performance}%
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-3">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
