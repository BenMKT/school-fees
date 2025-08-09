'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Eye,
  MoreHorizontal,
  Edit,
  Settings,
  Users,
  DollarSign,
  Building,
  MapPin,
  Phone,
  Mail,
  Grid3X3,
  List,
} from 'lucide-react';
import Link from 'next/link';

// Mock schools data
const schoolsData = [
  {
    id: 'SCH001',
    name: 'Greenwood High School',
    logo: 'GHS',
    location: 'Springfield, IL',
    region: 'central',
    principal: 'Dr. Sarah Mitchell',
    email: 'admin@greenwood.edu',
    phone: '+1 (555) 123-4567',
    students: 1247,
    staff: 89,
    revenue: 2400000,
    status: 'active',
    performance: 87.5,
    lastUpdated: '2024-01-15',
    established: '1985',
    type: 'Public',
    grades: '6-12',
  },
  {
    id: 'SCH002',
    name: 'Riverside Academy',
    logo: 'RA',
    location: 'Chicago, IL',
    region: 'north',
    principal: 'Prof. Michael Chen',
    email: 'admin@riverside.edu',
    phone: '+1 (555) 234-5678',
    students: 890,
    staff: 67,
    revenue: 1800000,
    status: 'active',
    performance: 92.1,
    lastUpdated: '2024-01-14',
    established: '1992',
    type: 'Private',
    grades: 'K-12',
  },
  {
    id: 'SCH003',
    name: 'Unity International School',
    logo: 'UIS',
    location: 'Peoria, IL',
    region: 'central',
    principal: 'Dr. Amara Okafor',
    email: 'admin@unity.edu',
    phone: '+1 (555) 345-6789',
    students: 1456,
    staff: 112,
    revenue: 3200000,
    status: 'active',
    performance: 89.3,
    lastUpdated: '2024-01-16',
    established: '2001',
    type: 'International',
    grades: 'Pre-K-12',
  },
  {
    id: 'SCH004',
    name: 'Oakwood Elementary',
    logo: 'OE',
    location: 'Rockford, IL',
    region: 'north',
    principal: 'Ms. Lisa Anderson',
    email: 'admin@oakwood.edu',
    phone: '+1 (555) 456-7890',
    students: 567,
    staff: 34,
    revenue: 980000,
    status: 'active',
    performance: 85.7,
    lastUpdated: '2024-01-13',
    established: '1978',
    type: 'Public',
    grades: 'K-5',
  },
  {
    id: 'SCH005',
    name: 'Metro Tech Institute',
    logo: 'MTI',
    location: 'Aurora, IL',
    region: 'east',
    principal: 'Dr. James Wilson',
    email: 'admin@metrotech.edu',
    phone: '+1 (555) 567-8901',
    students: 2134,
    staff: 156,
    revenue: 4500000,
    status: 'active',
    performance: 91.8,
    lastUpdated: '2024-01-17',
    established: '2005',
    type: 'Technical',
    grades: '9-12',
  },
  {
    id: 'SCH006',
    name: 'Sunset Valley School',
    logo: 'SVS',
    location: 'Joliet, IL',
    region: 'south',
    principal: 'Mrs. Patricia Davis',
    email: 'admin@sunsetvalley.edu',
    phone: '+1 (555) 678-9012',
    students: 734,
    staff: 52,
    revenue: 1350000,
    status: 'pending',
    performance: 78.4,
    lastUpdated: '2024-01-12',
    established: '1995',
    type: 'Charter',
    grades: '6-8',
  },
];

interface SchoolsListProps {
  searchTerm: string;
  statusFilter: string;
  regionFilter: string;
  viewMode: string;
  onViewModeChange: (mode: string) => void;
}

export function SchoolsList({
  searchTerm,
  statusFilter,
  regionFilter,
  viewMode,
  onViewModeChange,
}: SchoolsListProps) {
  // Filter schools based on search and filters
  const filteredSchools = schoolsData.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.principal.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || school.status === statusFilter;
    const matchesRegion =
      regionFilter === 'all' || school.region === regionFilter;

    return matchesSearch && matchesStatus && matchesRegion;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Active
          </Badge>
        );
      case 'inactive':
        return (
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
            Inactive
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPerformanceBadge = (performance: number) => {
    if (performance >= 90) {
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          Excellent
        </Badge>
      );
    } else if (performance >= 80) {
      return (
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
          Good
        </Badge>
      );
    } else if (performance >= 70) {
      return (
        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          Fair
        </Badge>
      );
    } else {
      return (
        <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
          Needs Improvement
        </Badge>
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* View Mode Toggle */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                Schools Directory ({filteredSchools.length})
              </CardTitle>
              <CardDescription>
                Manage and monitor all schools in the network
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewModeChange('grid')}
              >
                <Grid3X3 className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'table' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewModeChange('table')}
              >
                <List className="w-4 h-4 mr-2" />
                Table
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'grid' ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredSchools.map((school) => (
                <Card
                  key={school.id}
                  className="hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={`/placeholder.svg?height=48&width=48`}
                            alt={school.name}
                          />
                          <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            {school.logo}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {school.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {school.id}
                          </p>
                        </div>
                      </div>
                      {getStatusBadge(school.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{school.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{school.students} students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span>{school.staff} staff</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span>${(school.revenue / 1000000).toFixed(1)}M</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Performance</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-semibold">
                            {school.performance}%
                          </span>
                          {getPerformanceBadge(school.performance)}
                        </div>
                      </div>
                      <Progress value={school.performance} className="h-2" />
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>Principal: {school.principal}</p>
                      <p>
                        Established: {school.established} • {school.type}
                      </p>
                      <p>Grades: {school.grades}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        href={`/dashboard/schools/${school.id}`}
                        className="flex-1"
                      >
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                          <Eye className="w-4 h-4 mr-2" />
                          View Dashboard
                        </Button>
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit School
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Principal
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="mr-2 h-4 w-4" />
                            Call School
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>School</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Principal</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSchools.map((school) => (
                  <TableRow key={school.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={`/placeholder.svg?height=32&width=32`}
                            alt={school.name}
                          />
                          <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                            {school.logo}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{school.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {school.id}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{school.location}</TableCell>
                    <TableCell>{school.principal}</TableCell>
                    <TableCell>{school.students.toLocaleString()}</TableCell>
                    <TableCell>
                      ${(school.revenue / 1000000).toFixed(1)}M
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">
                          {school.performance}%
                        </span>
                        {getPerformanceBadge(school.performance)}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(school.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Link href={`/dashboard/schools/${school.id}`}>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </Link>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Settings className="mr-2 h-4 w-4" />
                              Settings
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
