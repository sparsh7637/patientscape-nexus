
import { useState } from 'react';
import { format, addDays, startOfWeek, endOfWeek, addWeeks, subWeeks, isToday, isSameDay } from 'date-fns';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageTitle } from '@/components/ui/page-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
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
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MoreHorizontal, 
  Plus, 
  User 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Mock data
const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
];

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

// Sample appointments
const mockAppointments = [
  { 
    id: 1, 
    patientId: 1, 
    patientName: 'James Wilson', 
    date: new Date(), 
    time: '10:00 AM', 
    duration: '30 min', 
    status: 'confirmed',
    type: 'Follow-up',
    note: 'Check blood pressure and current medication effectiveness'
  },
  { 
    id: 2, 
    patientId: 2, 
    patientName: 'Emma Thompson', 
    date: new Date(), 
    time: '11:30 AM', 
    duration: '30 min', 
    status: 'confirmed',
    type: 'Check-up',
    note: 'Annual physical examination'
  },
  { 
    id: 3, 
    patientId: 4, 
    patientName: 'Olivia Martinez', 
    date: addDays(new Date(), 1), 
    time: '9:30 AM', 
    duration: '30 min', 
    status: 'confirmed',
    type: 'Prenatal',
    note: 'Routine pregnancy check-up'
  },
  { 
    id: 4, 
    patientId: 5, 
    patientName: 'David Johnson', 
    date: addDays(new Date(), 1), 
    time: '2:00 PM', 
    duration: '30 min', 
    status: 'confirmed',
    type: 'Consultation',
    note: 'Discuss treatment options for arthritis'
  },
  { 
    id: 5, 
    patientId: 8, 
    patientName: 'Emily Wilson', 
    date: addDays(new Date(), 2), 
    time: '1:00 PM', 
    duration: '30 min', 
    status: 'confirmed',
    type: 'Therapy',
    note: 'Anxiety treatment follow-up'
  },
];

export default function Appointments() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(currentDate, { weekStartsOn: 1 }));
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  
  // Weekly calendar days
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));
  
  // Filter appointments for selected date
  const appointmentsForDate = mockAppointments.filter(appointment => 
    isSameDay(appointment.date, selectedDate)
  );
  
  // Navigation functions
  const previousWeek = () => {
    const newWeek = subWeeks(currentWeek, 1);
    setCurrentWeek(newWeek);
    setSelectedDate(newWeek);
  };
  
  const nextWeek = () => {
    const newWeek = addWeeks(currentWeek, 1);
    setCurrentWeek(newWeek);
    setSelectedDate(newWeek);
  };
  
  const selectDay = (date: Date) => {
    setSelectedDate(date);
  };
  
  // Add new appointment
  const addAppointment = () => {
    toast({
      title: "Appointment Scheduled",
      description: "The appointment has been successfully scheduled."
    });
    setShowAddAppointment(false);
  };
  
  // View appointment details
  const viewAppointment = (appointment: any) => {
    setSelectedAppointment(appointment);
  };
  
  return (
    <PageLayout>
      <PageTitle 
        title="Appointments" 
        subtitle="Manage patient appointments and scheduling."
      >
        <Dialog open={showAddAppointment} onOpenChange={setShowAddAppointment}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
              <DialogDescription>
                Enter the appointment details below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="date" 
                      type="date" 
                      className="pl-10"
                      defaultValue={format(selectedDate, 'yyyy-MM-dd')}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Appointment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checkup">Check-up</SelectItem>
                      <SelectItem value="followup">Follow-up</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="procedure">Procedure</SelectItem>
                      <SelectItem value="therapy">Therapy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Add any notes or special instructions..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddAppointment(false)}>Cancel</Button>
              <Button onClick={addAppointment}>Schedule</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PageTitle>
      
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar Section */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Weekly Navigation */}
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="icon" onClick={previousWeek}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="text-sm font-medium">
                {format(currentWeek, 'MMM d')} - {format(endOfWeek(currentWeek, { weekStartsOn: 1 }), 'MMM d, yyyy')}
              </h3>
              <Button variant="outline" size="icon" onClick={nextWeek}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Weekly Calendar */}
            <div className="grid grid-cols-7 gap-1 mb-6">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
              
              {weekDays.map((date, i) => {
                const hasAppointments = mockAppointments.some(appointment => 
                  isSameDay(appointment.date, date)
                );
                
                return (
                  <Button
                    key={i}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-10 rounded-md",
                      isSameDay(date, selectedDate) && "bg-primary text-primary-foreground",
                      isToday(date) && !isSameDay(date, selectedDate) && "border-primary text-primary border",
                      !isSameDay(date, selectedDate) && !isToday(date) && "hover:bg-accent"
                    )}
                    onClick={() => selectDay(date)}
                  >
                    <span>{format(date, 'd')}</span>
                    {hasAppointments && (
                      <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
                    )}
                  </Button>
                );
              })}
            </div>
            
            {/* Monthly Mini Calendar */}
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                <CalendarIcon className="h-4 w-4 mr-2" />
                View Full Calendar
              </Button>
            </div>
            
            {/* Appointment Legend */}
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-medium">Legend</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Confirmed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm">Pending</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">Cancelled</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Appointment List */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <CardTitle>
              Appointments for {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </CardTitle>
            <div>
              <Button variant="outline" size="sm" className="mr-2">
                Day
              </Button>
              <Button variant="outline" size="sm">
                Week
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointmentsForDate.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No appointments scheduled for this day.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setShowAddAppointment(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Appointment
                  </Button>
                </div>
              ) : (
                <>
                  {/* Time slots with appointments */}
                  {timeSlots.map((time, index) => {
                    const appointmentsAtTime = appointmentsForDate.filter(
                      appointment => appointment.time === time
                    );
                    
                    if (appointmentsAtTime.length === 0) {
                      return (
                        <div key={index} className="flex items-start py-2 border-t border-border first:border-0">
                          <div className="w-24 flex-shrink-0 text-sm text-muted-foreground">
                            {time}
                          </div>
                          <div className="flex-grow">
                            <div 
                              className="h-12 border border-dashed border-border rounded-md flex items-center justify-center hover:bg-accent/50 transition-colors cursor-pointer"
                              onClick={() => setShowAddAppointment(true)}
                            >
                              <span className="text-sm text-muted-foreground">Available</span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    
                    return (
                      <div key={index} className="flex items-start py-2 border-t border-border first:border-0">
                        <div className="w-24 flex-shrink-0 text-sm text-muted-foreground">
                          {time}
                        </div>
                        <div className="flex-grow">
                          {appointmentsAtTime.map(appointment => (
                            <div 
                              key={appointment.id}
                              className="bg-primary/10 rounded-md p-3 mb-2 hover:bg-primary/15 transition-colors cursor-pointer"
                              onClick={() => viewAppointment(appointment)}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center">
                                    <User className="h-4 w-4 text-primary mr-2" />
                                    <span className="font-medium">{appointment.patientName}</span>
                                  </div>
                                  <div className="text-sm mt-1">{appointment.type} • {appointment.duration}</div>
                                </div>
                                <div>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-7 w-7">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>Reschedule</DropdownMenuItem>
                                      <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                              {appointment.note && (
                                <p className="text-xs text-muted-foreground mt-2 line-clamp-1">
                                  {appointment.note}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Appointment Details Dialog */}
      <Dialog open={!!selectedAppointment} onOpenChange={() => setSelectedAppointment(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
          </DialogHeader>
          
          {selectedAppointment && (
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium text-lg">{selectedAppointment.patientName}</h3>
                  <p className="text-muted-foreground">{selectedAppointment.type}</p>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Confirmed
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date</p>
                  <p>{format(selectedAppointment.date, 'MMMM d, yyyy')}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Time</p>
                  <p>{selectedAppointment.time} ({selectedAppointment.duration})</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground">Notes</p>
                <p className="text-sm">{selectedAppointment.note}</p>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Patient Information</h4>
                <p className="text-sm">ID: #{selectedAppointment.patientId}</p>
                <p className="text-sm">Phone: (555) 123-4567</p>
                <p className="text-sm">Last Visit: June 12, 2023</p>
              </div>
            </div>
          )}
          
          <DialogFooter className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setSelectedAppointment(null)}
            >
              Close
            </Button>
            <Button variant="outline">
              Reschedule
            </Button>
            <Button>
              Check In
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
}
