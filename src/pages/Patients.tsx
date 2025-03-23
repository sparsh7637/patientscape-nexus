
import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageTitle } from '@/components/ui/page-title';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreHorizontal,
  Phone,
  Mail,
  Calendar,
  ChevronDown,
  FilePrescription,
  FileText,
  Activity,
  Heart,
  UserCheck,
  CreditCard
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Sample patient data
const patients = [
  { 
    id: 1, 
    name: 'James Wilson', 
    email: 'james.wilson@example.com', 
    phone: '(555) 123-4567', 
    dob: 'May 15, 1980', 
    status: 'active',
    lastVisit: 'Jun 12, 2023',
    nextVisit: 'Jun 25, 2023',
    condition: 'Hypertension'
  },
  { 
    id: 2, 
    name: 'Emma Thompson', 
    email: 'emma.thompson@example.com', 
    phone: '(555) 234-5678', 
    dob: 'Nov 22, 1975', 
    status: 'active',
    lastVisit: 'Jun 8, 2023',
    nextVisit: 'Jul 3, 2023',
    condition: 'Diabetes'
  },
  { 
    id: 3, 
    name: 'Michael Davis', 
    email: 'michael.davis@example.com', 
    phone: '(555) 345-6789', 
    dob: 'Aug 10, 1990', 
    status: 'inactive',
    lastVisit: 'Feb 22, 2023',
    nextVisit: 'Not scheduled',
    condition: 'Asthma'
  },
  { 
    id: 4, 
    name: 'Olivia Martinez', 
    email: 'olivia.martinez@example.com', 
    phone: '(555) 456-7890', 
    dob: 'Jan 5, 1985', 
    status: 'active',
    lastVisit: 'Jun 15, 2023',
    nextVisit: 'Jun 30, 2023',
    condition: 'Pregnancy'
  },
  { 
    id: 5, 
    name: 'David Johnson', 
    email: 'david.johnson@example.com', 
    phone: '(555) 567-8901', 
    dob: 'Apr 18, 1970', 
    status: 'active',
    lastVisit: 'Jun 10, 2023',
    nextVisit: 'Jul 15, 2023',
    condition: 'Arthritis'
  },
  { 
    id: 6, 
    name: 'Sophia Lee', 
    email: 'sophia.lee@example.com', 
    phone: '(555) 678-9012', 
    dob: 'Dec 3, 1988', 
    status: 'active',
    lastVisit: 'Jun 14, 2023',
    nextVisit: 'Jul 5, 2023',
    condition: 'Migraine'
  },
  { 
    id: 7, 
    name: 'William Brown', 
    email: 'william.brown@example.com', 
    phone: '(555) 789-0123', 
    dob: 'Sep 20, 1965', 
    status: 'inactive',
    lastVisit: 'Mar 5, 2023',
    nextVisit: 'Not scheduled',
    condition: 'Cholesterol'
  },
  { 
    id: 8, 
    name: 'Emily Wilson', 
    email: 'emily.wilson@example.com', 
    phone: '(555) 890-1234', 
    dob: 'Jul 12, 1992', 
    status: 'active',
    lastVisit: 'Jun 2, 2023',
    nextVisit: 'Jul 10, 2023',
    condition: 'Anxiety'
  },
];

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState('table');
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const viewPatient = (patient: any) => {
    setSelectedPatient(patient);
  };
  
  const addNewPatient = () => {
    toast({
      title: "Patient Added",
      description: "New patient has been successfully added."
    });
    setShowAddPatient(false);
  };
  
  return (
    <PageLayout>
      <PageTitle 
        title="Patients" 
        subtitle="Manage patient records and information."
      >
        <Dialog open={showAddPatient} onOpenChange={setShowAddPatient}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Patient
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Patient</DialogTitle>
              <DialogDescription>
                Enter the patient's details to create a new record.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="dob" className="text-sm font-medium">Date of Birth</label>
                  <Input id="dob" type="date" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="gender" className="text-sm font-medium">Gender</label>
                  <Select>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium">Address</label>
                <Input id="address" placeholder="Enter address" />
              </div>
              <div className="space-y-2">
                <label htmlFor="condition" className="text-sm font-medium">Medical Condition</label>
                <Input id="condition" placeholder="Enter primary condition" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddPatient(false)}>Cancel</Button>
              <Button onClick={addNewPatient}>Add Patient</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PageTitle>
      
      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search patients by name, email, or condition..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <span>Filter Status</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Patients</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant={currentView === 'table' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-none"
              onClick={() => setCurrentView('table')}
            >
              <Users className="h-4 w-4" />
            </Button>
            <Button
              variant={currentView === 'cards' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-none"
              onClick={() => setCurrentView('cards')}
            >
              <UserCheck className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Patient List */}
      {currentView === 'table' ? (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact Info</TableHead>
                  <TableHead>Last / Next Visit</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm">
                          <Mail className="mr-2 h-3 w-3 text-muted-foreground" />
                          {patient.email}
                        </div>
                        <div className="flex items-center text-sm mt-1">
                          <Phone className="mr-2 h-3 w-3 text-muted-foreground" />
                          {patient.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <div className="text-sm">Last: {patient.lastVisit}</div>
                        <div className="text-sm mt-1">Next: {patient.nextVisit}</div>
                      </div>
                    </TableCell>
                    <TableCell>{patient.condition}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={patient.status === 'active' ? 'default' : 'secondary'}
                        className={patient.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                      >
                        {patient.status === 'active' ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => viewPatient(patient)}>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Patient</DropdownMenuItem>
                          <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                          <DropdownMenuItem>Create Prescription</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{patient.name}</h3>
                      <p className="text-sm text-muted-foreground">{patient.dob}</p>
                    </div>
                    <Badge 
                      variant={patient.status === 'active' ? 'default' : 'secondary'}
                      className={patient.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                    >
                      {patient.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      {patient.email}
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                      {patient.phone}
                    </div>
                    <div className="flex items-center text-sm">
                      <Activity className="mr-2 h-4 w-4 text-muted-foreground" />
                      Condition: {patient.condition}
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      Next Visit: {patient.nextVisit}
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-border p-4 flex justify-between">
                  <Button variant="ghost" size="sm" onClick={() => viewPatient(patient)}>
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FilePrescription className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {/* Patient Details Dialog */}
      <Dialog open={!!selectedPatient} onOpenChange={() => setSelectedPatient(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Patient Information</DialogTitle>
          </DialogHeader>
          
          {selectedPatient && (
            <Tabs defaultValue="details" className="mt-4">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="details">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Details
                </TabsTrigger>
                <TabsTrigger value="visits">
                  <Calendar className="h-4 w-4 mr-2" />
                  Visits
                </TabsTrigger>
                <TabsTrigger value="prescriptions">
                  <FilePrescription className="h-4 w-4 mr-2" />
                  Prescriptions
                </TabsTrigger>
                <TabsTrigger value="billing">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="details">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{selectedPatient.name}</h3>
                    <Badge 
                      variant={selectedPatient.status === 'active' ? 'default' : 'secondary'}
                      className={selectedPatient.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                    >
                      {selectedPatient.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                      <p>{selectedPatient.dob}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Primary Condition</p>
                      <p>{selectedPatient.condition}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p>{selectedPatient.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Phone</p>
                      <p>{selectedPatient.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Last Visit</p>
                      <p>{selectedPatient.lastVisit}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Next Visit</p>
                      <p>{selectedPatient.nextVisit}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Medical History</h4>
                    <p className="text-sm text-muted-foreground">Long-term treatment for {selectedPatient.condition}. Patient has been managing condition since diagnosis in 2019.</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Notes</h4>
                    <p className="text-sm text-muted-foreground">Patient has shown steady improvement with current treatment plan. Continue monitoring blood pressure and medication efficacy.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="visits">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Recent Visit: {selectedPatient.lastVisit}</h4>
                      <Badge>Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Follow-up appointment for {selectedPatient.condition}. Vitals were within normal range.</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Visit: Mar 15, 2023</h4>
                      <Badge>Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Routine checkup. Prescribed medication refill for 3 months.</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Visit: Jan 10, 2023</h4>
                      <Badge>Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Patient reported symptoms of fatigue. Blood work ordered.</p>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      View All Visit History
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="prescriptions">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Lisinopril 10mg</h4>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <p className="text-sm">Take once daily</p>
                    <p className="text-sm text-muted-foreground">Prescribed: Jun 12, 2023 | Refills: 3</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Atorvastatin 20mg</h4>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <p className="text-sm">Take once daily in the evening</p>
                    <p className="text-sm text-muted-foreground">Prescribed: Jun 12, 2023 | Refills: 3</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Aspirin 81mg</h4>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <p className="text-sm">Take once daily</p>
                    <p className="text-sm text-muted-foreground">Prescribed: Mar 15, 2023 | Refills: 6</p>
                  </div>
                  
                  <div className="pt-2 flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <FilePrescription className="h-4 w-4 mr-2" />
                      New Prescription
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View History
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="billing">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Office Visit - {selectedPatient.lastVisit}</h4>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Insurance coverage</span>
                      <span>$120.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Patient responsibility</span>
                      <span>$25.00</span>
                    </div>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Blood Work - Mar 15, 2023</h4>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Insurance coverage</span>
                      <span>$85.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Patient responsibility</span>
                      <span>$15.00</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      <CreditCard className="h-4 w-4 mr-2" />
                      View Billing History
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setSelectedPatient(null)}
            >
              Close
            </Button>
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
}
