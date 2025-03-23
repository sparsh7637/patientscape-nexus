import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageTitle } from '@/components/ui/page-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { 
  FilePen, 
  FilePlus, 
  FileText, 
  MoreHorizontal, 
  Printer, 
  Search, 
  User 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Sample data
const patients = [
  { id: 1, name: 'James Wilson' },
  { id: 2, name: 'Emma Thompson' },
  { id: 3, name: 'Michael Davis' },
  { id: 4, name: 'Olivia Martinez' },
  { id: 5, name: 'David Johnson' },
  { id: 6, name: 'Sophia Lee' },
  { id: 7, name: 'William Brown' },
  { id: 8, name: 'Emily Wilson' },
];

const medications = [
  { id: 1, name: 'Lisinopril', strength: ['5mg', '10mg', '20mg', '40mg'] },
  { id: 2, name: 'Metformin', strength: ['500mg', '850mg', '1000mg'] },
  { id: 3, name: 'Atorvastatin', strength: ['10mg', '20mg', '40mg', '80mg'] },
  { id: 4, name: 'Levothyroxine', strength: ['25mcg', '50mcg', '75mcg', '100mcg', '125mcg'] },
  { id: 5, name: 'Amlodipine', strength: ['2.5mg', '5mg', '10mg'] },
  { id: 6, name: 'Omeprazole', strength: ['10mg', '20mg', '40mg'] },
  { id: 7, name: 'Albuterol', strength: ['90mcg', '108mcg', '200mcg'] },
  { id: 8, name: 'Gabapentin', strength: ['100mg', '300mg', '400mg', '600mg', '800mg'] },
  { id: 9, name: 'Hydrochlorothiazide', strength: ['12.5mg', '25mg', '50mg'] },
  { id: 10, name: 'Sertraline', strength: ['25mg', '50mg', '100mg'] },
];

const prescriptions = [
  { 
    id: 1, 
    patientId: 1, 
    patientName: 'James Wilson', 
    medication: 'Lisinopril', 
    strength: '10mg', 
    dosage: '1 tablet',
    frequency: 'Once daily',
    route: 'Oral',
    quantity: '30',
    refills: '3',
    prescribedDate: 'Jun 12, 2023',
    expirationDate: 'Jun 12, 2024',
    status: 'active',
    notes: 'Take in the morning with food.'
  },
  { 
    id: 2, 
    patientId: 1, 
    patientName: 'James Wilson', 
    medication: 'Atorvastatin', 
    strength: '20mg', 
    dosage: '1 tablet',
    frequency: 'Once daily',
    route: 'Oral',
    quantity: '30',
    refills: '3',
    prescribedDate: 'Jun 12, 2023',
    expirationDate: 'Jun 12, 2024',
    status: 'active',
    notes: 'Take in the evening.'
  },
  { 
    id: 3, 
    patientId: 2, 
    patientName: 'Emma Thompson', 
    medication: 'Metformin', 
    strength: '500mg', 
    dosage: '1 tablet',
    frequency: 'Twice daily',
    route: 'Oral',
    quantity: '60',
    refills: '3',
    prescribedDate: 'Jun 8, 2023',
    expirationDate: 'Jun 8, 2024',
    status: 'active',
    notes: 'Take with meals.'
  },
  { 
    id: 4, 
    patientId: 3, 
    patientName: 'Michael Davis', 
    medication: 'Albuterol', 
    strength: '90mcg', 
    dosage: '2 puffs',
    frequency: 'Every 4-6 hours as needed',
    route: 'Inhalation',
    quantity: '1 inhaler',
    refills: '2',
    prescribedDate: 'Feb 22, 2023',
    expirationDate: 'Feb 22, 2024',
    status: 'expired',
    notes: 'For shortness of breath or wheezing.'
  },
  { 
    id: 5, 
    patientId: 5, 
    patientName: 'David Johnson', 
    medication: 'Gabapentin', 
    strength: '300mg', 
    dosage: '1 capsule',
    frequency: 'Three times daily',
    route: 'Oral',
    quantity: '90',
    refills: '2',
    prescribedDate: 'Jun 10, 2023',
    expirationDate: 'Jun 10, 2024',
    status: 'active',
    notes: 'Take with or without food.'
  },
];

export default function Prescriptions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewPrescription, setShowNewPrescription] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedMedication, setSelectedMedication] = useState<string | null>(null);
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null);
  
  // Filter prescriptions based on search term and tab
  const filteredPrescriptions = prescriptions.filter(prescription => 
    (prescription.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.medication.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedTab === 'all' || 
     (selectedTab === 'active' && prescription.status === 'active') ||
     (selectedTab === 'expired' && prescription.status === 'expired'))
  );
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };
  
  const viewPrescription = (prescription: any) => {
    setSelectedPrescription(prescription);
  };
  
  const createPrescription = () => {
    toast({
      title: "Prescription Created",
      description: "New prescription has been successfully created."
    });
    setShowNewPrescription(false);
  };
  
  const handleMedicationChange = (value: string) => {
    setSelectedMedication(value);
    setSelectedStrength(null);
  };
  
  return (
    <PageLayout>
      <PageTitle 
        title="Prescriptions" 
        subtitle="Manage and create prescriptions for patients."
      >
        <Dialog open={showNewPrescription} onOpenChange={setShowNewPrescription}>
          <DialogTrigger asChild>
            <Button>
              <FilePlus className="h-4 w-4 mr-2" />
              New Prescription
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Prescription</DialogTitle>
              <DialogDescription>
                Complete the form below to create a new prescription.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* Patient Selection */}
              <div className="space-y-2">
                <Label htmlFor="patient">Patient</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    {patients.map(patient => (
                      <SelectItem key={patient.id} value={patient.id.toString()}>
                        {patient.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Medication Selection */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="medication">Medication</Label>
                  <Select onValueChange={handleMedicationChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select medication" />
                    </SelectTrigger>
                    <SelectContent>
                      {medications.map(med => (
                        <SelectItem key={med.id} value={med.name}>
                          {med.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="strength">Strength</Label>
                  <Select disabled={!selectedMedication}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedMedication ? "Select strength" : "Select medication first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedMedication && 
                        medications
                          .find(med => med.name === selectedMedication)
                          ?.strength.map((str, index) => (
                            <SelectItem key={index} value={str}>
                              {str}
                            </SelectItem>
                          ))
                      }
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Dosage & Frequency */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input id="dosage" placeholder="e.g., 1 tablet" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once_daily">Once daily</SelectItem>
                      <SelectItem value="twice_daily">Twice daily</SelectItem>
                      <SelectItem value="three_times_daily">Three times daily</SelectItem>
                      <SelectItem value="four_times_daily">Four times daily</SelectItem>
                      <SelectItem value="every_4_hours">Every 4 hours</SelectItem>
                      <SelectItem value="every_6_hours">Every 6 hours</SelectItem>
                      <SelectItem value="every_8_hours">Every 8 hours</SelectItem>
                      <SelectItem value="as_needed">As needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Route & Quantity */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="route">Route</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select route" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oral">Oral</SelectItem>
                      <SelectItem value="topical">Topical</SelectItem>
                      <SelectItem value="subcutaneous">Subcutaneous</SelectItem>
                      <SelectItem value="intramuscular">Intramuscular</SelectItem>
                      <SelectItem value="intravenous">Intravenous</SelectItem>
                      <SelectItem value="inhalation">Inhalation</SelectItem>
                      <SelectItem value="rectal">Rectal</SelectItem>
                      <SelectItem value="vaginal">Vaginal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" placeholder="e.g., 30" />
                </div>
              </div>
              
              {/* Refills & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="refills">Refills</Label>
                  <Input id="refills" placeholder="e.g., 3" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="e.g., 30 days" />
                </div>
              </div>
              
              {/* Instructions */}
              <div className="space-y-2">
                <Label htmlFor="instructions">Special Instructions</Label>
                <Textarea 
                  id="instructions" 
                  placeholder="Enter any special instructions or notes..." 
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowNewPrescription(false)}>Cancel</Button>
              <Button onClick={createPrescription}>Create Prescription</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PageTitle>
      
      {/* Search & Filter */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search prescriptions by patient name or medication..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-9"
          />
        </div>
      </div>
      
      {/* Prescriptions Tabs and List */}
      <Card>
        <CardHeader className="pb-3">
          <Tabs defaultValue="all" onValueChange={handleTabChange}>
            <TabsList className="grid grid-cols-3 w-full sm:w-[400px]">
              <TabsTrigger value="all">All Prescriptions</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage & Frequency</TableHead>
                <TableHead>Prescribed On</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrescriptions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <p className="text-muted-foreground">No prescriptions found.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setShowNewPrescription(true)}
                    >
                      <FilePlus className="h-4 w-4 mr-2" />
                      Create New Prescription
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                filteredPrescriptions.map(prescription => (
                  <TableRow key={prescription.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{prescription.patientName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div>{prescription.medication}</div>
                        <div className="text-sm text-muted-foreground">{prescription.strength}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>{prescription.dosage}</div>
                      <div className="text-sm text-muted-foreground">{prescription.frequency}</div>
                    </TableCell>
                    <TableCell>{prescription.prescribedDate}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={prescription.status === 'active' ? 'default' : 'secondary'}
                        className={prescription.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                      >
                        {prescription.status === 'active' ? 'Active' : 'Expired'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => viewPrescription(prescription)}>
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FilePen className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            Renew
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Printer className="h-4 w-4 mr-2" />
                            Print
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Prescription Details Dialog */}
      <Dialog open={!!selectedPrescription} onOpenChange={() => setSelectedPrescription(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Prescription Details</DialogTitle>
          </DialogHeader>
          
          {selectedPrescription && (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{selectedPrescription.medication} {selectedPrescription.strength}</h3>
                  <p className="text-muted-foreground">Prescription #{selectedPrescription.id}</p>
                </div>
                <Badge 
                  variant={selectedPrescription.status === 'active' ? 'default' : 'secondary'}
                  className={selectedPrescription.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                >
                  {selectedPrescription.status === 'active' ? 'Active' : 'Expired'}
                </Badge>
              </div>
              
              <div className="border-t border-b py-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Patient</p>
                  <p className="font-medium">{selectedPrescription.patientName}</p>
                  <p className="text-sm">Patient ID: {selectedPrescription.patientId}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date Information</p>
                  <p>Prescribed: {selectedPrescription.prescribedDate}</p>
                  <p>Expires: {selectedPrescription.expirationDate}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Medication Details</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Dosage</p>
                    <p>{selectedPrescription.dosage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Frequency</p>
                    <p>{selectedPrescription.frequency}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Route</p>
                    <p>{selectedPrescription.route}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Quantity</p>
                    <p>{selectedPrescription.quantity}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Refills</p>
                    <p>{selectedPrescription.refills}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Special Instructions</p>
                  <p>{selectedPrescription.notes}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Prescription History</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <p>{selectedPrescription.prescribedDate}</p>
                    <p>Prescribed by Dr. Sarah Reynolds</p>
                  </div>
                  {selectedPrescription.status === 'active' && (
                    <div className="flex justify-between text-sm">
                      <p>Jun 15, 2023</p>
                      <p>Filled at MediCare Pharmacy</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setSelectedPrescription(null)}
            >
              Close
            </Button>
            <Button variant="outline">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Renew
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
}
