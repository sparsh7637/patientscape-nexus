import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageTitle } from '@/components/ui/page-title';
import { StatCard } from '@/components/ui/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Users, FileText, Clock, ArrowUpRight, Activity, Heart, PieChart } from 'lucide-react';
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart,
  LineChart,
  Line,
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from 'recharts';

// Sample data
const activityData = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 18 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 20 },
  { name: 'Sat', value: 10 },
  { name: 'Sun', value: 5 },
];

const patientVisitsData = [
  { name: 'Jan', value: 240 },
  { name: 'Feb', value: 180 },
  { name: 'Mar', value: 320 },
  { name: 'Apr', value: 280 },
  { name: 'May', value: 250 },
  { name: 'Jun', value: 350 },
  { name: 'Jul', value: 380 },
];

const patientsAgeData = [
  { name: '0-18', value: 15 },
  { name: '19-35', value: 25 },
  { name: '36-50', value: 30 },
  { name: '51-65', value: 20 },
  { name: '65+', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const recentPatients = [
  { id: 1, name: 'James Wilson', status: 'scheduled', time: '10:00 AM', condition: 'Routine checkup' },
  { id: 2, name: 'Emma Thompson', status: 'completed', time: '9:30 AM', condition: 'Hypertension' },
  { id: 3, name: 'Michael Davis', status: 'cancelled', time: '2:15 PM', condition: 'Diabetes follow-up' },
  { id: 4, name: 'Olivia Martinez', status: 'scheduled', time: '11:45 AM', condition: 'Pregnancy check' },
];

const upcomingAppointments = [
  { id: 1, patient: 'David Johnson', time: 'Today, 2:00 PM', type: 'Follow-up' },
  { id: 2, patient: 'Sophia Lee', time: 'Today, 3:30 PM', type: 'New patient' },
  { id: 3, patient: 'William Brown', time: 'Tomorrow, 9:15 AM', type: 'Consultation' },
  { id: 4, patient: 'Emily Wilson', time: 'Tomorrow, 11:00 AM', type: 'Lab results' },
];

export default function Dashboard() {
  const [timespan, setTimespan] = useState('week');
  
  return (
    <PageLayout>
      <PageTitle 
        title="Dashboard" 
        subtitle="Welcome back, Dr. Sarah. Here's what's happening."
      >
        <Button>
          Generate Report
        </Button>
      </PageTitle>
      
      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard 
          title="Total Patients" 
          value="1,248"
          description="This month"
          icon={<Users className="h-4 w-4" />}
          trend={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Appointments" 
          value="42"
          description="This week"
          icon={<Calendar className="h-4 w-4" />}
          trend={{ value: 8, positive: true }}
        />
        <StatCard 
          title="Prescriptions" 
          value="64"
          description="This month"
          icon={<FileText className="h-4 w-4" />}
          trend={{ value: 5, positive: true }}
        />
        <StatCard 
          title="Avg. Wait Time" 
          value="12 min"
          description="Last 7 days"
          icon={<Clock className="h-4 w-4" />}
          trend={{ value: 3, positive: false }}
        />
      </div>
      
      {/* Charts section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {/* Activity Overview */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium">Activity Overview</CardTitle>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className={timespan === 'week' ? 'bg-muted' : ''}
                onClick={() => setTimespan('week')}
              >
                Week
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={timespan === 'month' ? 'bg-muted' : ''}
                onClick={() => setTimespan('month')}
              >
                Month
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={timespan === 'year' ? 'bg-muted' : ''}
                onClick={() => setTimespan('year')}
              >
                Year
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[300px] w-full p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={patientVisitsData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8884d8" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Patient Demographics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-md font-medium">Patient Demographics</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={patientsAgeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {patientsAgeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent activity and Upcoming appointments */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-md font-medium">Recent Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-medium">{patient.name}</span>
                    <span className="text-sm text-muted-foreground">{patient.condition}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm">{patient.time}</span>
                    <span 
                      className={`text-xs ${
                        patient.status === 'completed' 
                          ? 'text-green-500' 
                          : patient.status === 'cancelled'
                          ? 'text-destructive'
                          : 'text-yellow-500'
                      }`}
                    >
                      {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View All Patients <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-md font-medium">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-medium">{appointment.patient}</span>
                    <span className="text-sm text-muted-foreground">{appointment.type}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm">{appointment.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View All Appointments <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Health Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md font-medium">Health Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="vitals">
            <TabsList className="mb-4">
              <TabsTrigger value="vitals">
                <Activity className="h-4 w-4 mr-2" />
                Vitals Trends
              </TabsTrigger>
              <TabsTrigger value="conditions">
                <Heart className="h-4 w-4 mr-2" />
                Common Conditions
              </TabsTrigger>
              <TabsTrigger value="medications">
                <FileText className="h-4 w-4 mr-2" />
                Top Medications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="vitals">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { name: 'Jan', bp: 120, glucose: 90 },
                    { name: 'Feb', bp: 125, glucose: 95 },
                    { name: 'Mar', bp: 118, glucose: 92 },
                    { name: 'Apr', bp: 130, glucose: 100 },
                    { name: 'May', bp: 128, glucose: 98 },
                    { name: 'Jun', bp: 122, glucose: 93 },
                  ]}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="bp" stroke="#8884d8" name="Blood Pressure" />
                    <Line type="monotone" dataKey="glucose" stroke="#82ca9d" name="Blood Glucose" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="conditions">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'Hypertension', value: 45 },
                    { name: 'Diabetes', value: 32 },
                    { name: 'Asthma', value: 28 },
                    { name: 'Arthritis', value: 22 },
                    { name: 'Depression', value: 18 },
                  ]}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="medications">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={[
                    { name: 'Lisinopril', value: 38 },
                    { name: 'Metformin', value: 30 },
                    { name: 'Atorvastatin', value: 25 },
                    { name: 'Levothyroxine', value: 20 },
                    { name: 'Albuterol', value: 15 },
                  ]}>
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
