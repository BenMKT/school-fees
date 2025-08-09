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
import { Progress } from '@/components/ui/progress';
import {
  Building,
  Wrench,
  CheckCircle,
  AlertTriangle,
  Zap,
  Droplets,
  Thermometer,
} from 'lucide-react';

const facilities = [
  {
    name: 'Main Building',
    type: 'Academic',
    status: 'operational',
    capacity: 500,
    currentOccupancy: 420,
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-04-15',
    issues: 0,
  },
  {
    name: 'Science Laboratory',
    type: 'Laboratory',
    status: 'operational',
    capacity: 60,
    currentOccupancy: 45,
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-03-20',
    issues: 1,
  },
  {
    name: 'Sports Complex',
    type: 'Recreation',
    status: 'maintenance',
    capacity: 200,
    currentOccupancy: 0,
    lastMaintenance: '2024-02-01',
    nextMaintenance: '2024-02-15',
    issues: 3,
  },
  {
    name: 'Library',
    type: 'Academic',
    status: 'operational',
    capacity: 150,
    currentOccupancy: 89,
    lastMaintenance: '2024-01-10',
    nextMaintenance: '2024-05-10',
    issues: 0,
  },
  {
    name: 'Cafeteria',
    type: 'Dining',
    status: 'operational',
    capacity: 300,
    currentOccupancy: 245,
    lastMaintenance: '2024-01-25',
    nextMaintenance: '2024-03-25',
    issues: 2,
  },
  {
    name: 'Computer Lab',
    type: 'Technology',
    status: 'operational',
    capacity: 40,
    currentOccupancy: 32,
    lastMaintenance: '2024-02-05',
    nextMaintenance: '2024-04-05',
    issues: 1,
  },
];

const utilities = [
  {
    name: 'Electricity',
    status: 'normal',
    usage: 85,
    cost: '$2,450',
    icon: Zap,
    color: 'text-yellow-600',
  },
  {
    name: 'Water',
    status: 'normal',
    usage: 72,
    cost: '$890',
    icon: Droplets,
    color: 'text-blue-600',
  },
  {
    name: 'Heating',
    status: 'normal',
    usage: 68,
    cost: '$1,200',
    icon: Thermometer,
    color: 'text-red-600',
  },
];

export function FacilityManagement() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Operational
          </Badge>
        );
      case 'maintenance':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            <Wrench className="w-3 h-3 mr-1" />
            Maintenance
          </Badge>
        );
      case 'offline':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Offline
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getUtilityStatus = (usage: number) => {
    if (usage > 90) return 'text-red-600';
    if (usage > 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Facility Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Facilities
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Across campus</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Operational</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">22</div>
            <p className="text-xs text-muted-foreground">91.7% uptime</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Under Maintenance
            </CardTitle>
            <Wrench className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <p className="text-xs text-muted-foreground">Scheduled repairs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">7</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Facilities List */}
      <Card>
        <CardHeader>
          <CardTitle>Facility Status</CardTitle>
          <CardDescription>
            Current status and occupancy of all facilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {facilities.map((facility) => (
              <div
                key={facility.name}
                className="p-4 border rounded-lg hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">{facility.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {facility.type}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {facility.issues > 0 && (
                      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                        {facility.issues} issues
                      </Badge>
                    )}
                    {getStatusBadge(facility.status)}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mb-3">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Occupancy
                    </div>
                    <div className="font-semibold">
                      {facility.currentOccupancy}/{facility.capacity}
                    </div>
                    <Progress
                      value={
                        (facility.currentOccupancy / facility.capacity) * 100
                      }
                      className="h-2 mt-1"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Last Maintenance
                    </div>
                    <div className="font-semibold">
                      {facility.lastMaintenance}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Next Maintenance
                    </div>
                    <div className="font-semibold">
                      {facility.nextMaintenance}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Wrench className="w-4 h-4 mr-2" />
                    Schedule Maintenance
                  </Button>
                  <Button variant="outline" size="sm">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Report Issue
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Utilities */}
      <Card>
        <CardHeader>
          <CardTitle>Utilities Management</CardTitle>
          <CardDescription>Current utility usage and costs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {utilities.map((utility) => (
              <div key={utility.name} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <utility.icon className={`w-5 h-5 ${utility.color}`} />
                    <h4 className="font-semibold">{utility.name}</h4>
                  </div>
                  <Badge variant="outline">{utility.status}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Usage</span>
                    <span className={getUtilityStatus(utility.usage)}>
                      {utility.usage}%
                    </span>
                  </div>
                  <Progress value={utility.usage} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Monthly Cost</span>
                    <span className="font-semibold">{utility.cost}</span>
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
