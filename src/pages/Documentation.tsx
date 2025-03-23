import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageTitle } from '@/components/ui/page-title';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Monitor, User, Calendar, FileText, Info, Shield, Settings } from 'lucide-react';

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <PageLayout className="max-w-7xl">
      <PageTitle 
        title="Documentation" 
        subtitle="A comprehensive guide to using the MediSync platform."
      />
      
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-lg mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 py-6 text-lg"
          />
        </div>
      </div>
      
      {/* Documentation Content */}
      <Tabs defaultValue="overview" className="space-y-8">
        <div className="flex justify-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-4xl">
            <TabsTrigger value="overview" className="flex flex-col items-center gap-1 py-2">
              <BookOpen className="h-5 w-5" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex flex-col items-center gap-1 py-2">
              <Monitor className="h-5 w-5" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="patients" className="flex flex-col items-center gap-1 py-2">
              <User className="h-5 w-5" />
              <span>Patients</span>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex flex-col items-center gap-1 py-2">
              <Calendar className="h-5 w-5" />
              <span>Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="prescriptions" className="flex flex-col items-center gap-1 py-2">
              <FileText className="h-5 w-5" />
              <span>Prescriptions</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Overview Content */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to MediSync</CardTitle>
              <CardDescription>
                A comprehensive Electronic Health Record (EHR) solution designed for healthcare professionals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p>
                  MediSync is a modern, intuitive Electronic Health Record (EHR) system designed to streamline 
                  your medical practice operations. Built with healthcare professionals in mind, MediSync provides 
                  a comprehensive suite of tools to manage patients, appointments, prescriptions, and clinical documentation 
                  all in one place.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Monitor className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">Dashboard</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive overview of your practice with key metrics, patient activity, and upcoming appointments.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">Patient Management</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Complete patient records with medical history, demographics, and visit history.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">Appointment Scheduling</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Efficient scheduling system with calendar integration and automatic reminders.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">Prescription Management</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Create, renew, and track patient prescriptions with built-in medication database.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">Security & Compliance</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      HIPAA-compliant platform with robust security features and user access controls.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">Customization</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Adaptable system that can be configured to match your specific practice workflows.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Getting Started</h3>
                <p>
                  To begin using MediSync, explore each section of the platform using the navigation menu on the left side 
                  of the screen. The dashboard provides an immediate overview of your practice, while each module offers 
                  specialized tools for different aspects of healthcare management.
                </p>
                
                <div className="bg-accent p-4 rounded-lg mt-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Need Further Assistance?</h4>
                      <p className="text-sm text-muted-foreground">
                        If you need additional help, our support team is available Monday through Friday, 
                        9:00 AM to 5:00 PM. Contact us at support@medisync.com or call 1-800-MEDISYNC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Dashboard Content */}
        <TabsContent value="dashboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>
                Understanding and using the MediSync dashboard effectively
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p>
                  The Dashboard is your central hub for monitoring practice activity and accessing key information. 
                  It provides a real-time overview of patient visits, appointments, and important metrics to help you 
                  stay informed about your practice's operations.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Dashboard Components</h3>
                
                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="stats">
                    <AccordionTrigger>Statistics Cards</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        The top section of the dashboard displays key statistics in card format:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Total Patients:</strong> Number of registered patients in your practice</li>
                        <li><strong>Appointments:</strong> Total appointments scheduled for the current week</li>
                        <li><strong>Prescriptions:</strong> Number of active prescriptions</li>
                        <li><strong>Average Wait Time:</strong> Current average patient wait time</li>
                      </ul>
                      <p className="mt-3">
                        Each card shows a trend indicator compared to the previous period, helping you identify 
                        changes in practice metrics at a glance.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="charts">
                    <AccordionTrigger>Activity Charts</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        The activity overview section provides visualizations of patient visits and other key metrics:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Patient Visits Chart:</strong> Tracks visit volume over time (day, week, month, year)</li>
                        <li><strong>Patient Demographics:</strong> Displays the age distribution of your patient population</li>
                      </ul>
                      <p className="mt-3">
                        These charts can be filtered by different time periods using the buttons above each chart.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="recent">
                    <AccordionTrigger>Recent Activity</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        The recent activity section shows the latest patient interactions and scheduled appointments:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Recent Patients:</strong> List of recently seen patients with their status and conditions</li>
                        <li><strong>Upcoming Appointments:</strong> Schedule of upcoming appointments for the current day and next day</li>
                      </ul>
                      <p className="mt-3">
                        Click on any patient or appointment to view more details or take action.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="insights">
                    <AccordionTrigger>Health Insights</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        The health insights section provides clinical trends across your patient population:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Vitals Trends:</strong> Aggregated vitals data showing trends over time</li>
                        <li><strong>Common Conditions:</strong> Most frequent diagnoses in your practice</li>
                        <li><strong>Top Medications:</strong> Most commonly prescribed medications</li>
                      </ul>
                      <p className="mt-3">
                        Use these insights to identify patterns and inform clinical decision-making.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Using the Dashboard Effectively</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Customizing Your View</h4>
                    <p className="text-sm">
                      You can customize which metrics appear on your dashboard by clicking the "Customize" button in the top right 
                      corner. This allows you to prioritize the information that's most relevant to your role and responsibilities.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Setting Date Ranges</h4>
                    <p className="text-sm">
                      Most dashboard components allow you to adjust the time period being displayed. Use the date selectors 
                      or preset options (Today, This Week, This Month, etc.) to focus on specific time frames.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Taking Action</h4>
                    <p className="text-sm">
                      The dashboard is interactive - clicking on patients, appointments, or other elements will open detailed 
                      views where you can take immediate action, such as rescheduling an appointment or reviewing a patient record.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center my-8">
                  <Button>
                    <Monitor className="h-4 w-4 mr-2" />
                    View Dashboard Tutorial Video
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Patients Content */}
        <TabsContent value="patients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Management</CardTitle>
              <CardDescription>
                Complete guide to adding, viewing, and managing patient records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p>
                  The Patients module allows you to maintain comprehensive records for all individuals under your care. 
                  From basic demographics to detailed medical histories, this section centralizes all patient information.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Managing Patient Records</h3>
                
                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="add-patient">
                    <AccordionTrigger>Adding a New Patient</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        To add a new patient to the system:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Click the "Add New Patient" button in the top right corner of the Patients page</li>
                        <li>Complete the patient information form, including:</li>
                        <ul className="list-disc pl-6 mt-2 mb-2">
                          <li>Personal information (name, date of birth, contact details)</li>
                          <li>Address and emergency contacts</li>
                          <li>Insurance information</li>
                          <li>Medical conditions and history</li>
                        </ul>
                        <li>Click "Add Patient" to save the record</li>
                      </ol>
                      <p className="mt-3">
                        Required fields are marked with an asterisk (*). You can save a partial record and complete it later 
                        if necessary.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="search-filter">
                    <AccordionTrigger>Searching and Filtering Patients</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        To find specific patients in the system:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Search Bar:</strong> Use the search bar to look up patients by name, email, ID, or medical condition</li>
                        <li><strong>Filters:</strong> Use the filter dropdown to view patients by status (Active/Inactive)</li>
                        <li><strong>View Toggle:</strong> Switch between table and card views using the icons next to the filter</li>
                      </ul>
                      <p className="mt-3">
                        For advanced searches, use the "Advanced Search" option to filter by multiple criteria such as age range, 
                        appointment dates, or specific conditions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="view-edit">
                    <AccordionTrigger>Viewing and Editing Patient Information</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        To access and modify patient records:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Click on a patient name or the "View Details" button to open their profile</li>
                        <li>The patient profile is organized into tabs:</li>
                        <ul className="list-disc pl-6 mt-2 mb-2">
                          <li><strong>Details:</strong> Basic information and demographics</li>
                          <li><strong>Visits:</strong> Appointment history and clinical notes</li>
                          <li><strong>Prescriptions:</strong> Current and past medications</li>
                          <li><strong>Billing:</strong> Insurance and payment information</li>
                        </ul>
                        <li>To edit information, click the "Edit" button in the relevant section</li>
                        <li>Make your changes and click "Save" to update the record</li>
                      </ul>
                      <p className="mt-3">
                        All changes are tracked in the system audit log, recording who made the change and when.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="patient-actions">
                    <AccordionTrigger>Common Patient Actions</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        From a patient record, you can perform several actions:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Schedule Appointment:</strong> Create a new appointment for the patient</li>
                        <li><strong>Create Prescription:</strong> Generate a new medication prescription</li>
                        <li><strong>Add Clinical Note:</strong> Document observations, treatments, or plans</li>
                        <li><strong>Upload Documents:</strong> Attach lab results, imaging reports, or other files</li>
                        <li><strong>Generate Referral:</strong> Create a referral to another provider</li>
                      </ul>
                      <p className="mt-3">
                        These actions can be accessed from the "Actions" menu in the patient profile or via the dropdown menu 
                        in the patient list.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Best Practices for Patient Management</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Maintaining Complete Records</h4>
                    <p className="text-sm">
                      Ensure all patient records are as complete as possible. Pay special attention to allergies, current 
                      medications, and emergency contact information, as these fields are critical for patient safety.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Regular Review and Updates</h4>
                    <p className="text-sm">
                      Verify and update patient information at each visit. Important data points to confirm include 
                      insurance details, contact information, and medication lists.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Using Tags and Notes</h4>
                    <p className="text-sm">
                      Utilize the tagging system to categorize patients by conditions, special needs, or other relevant 
                      factors. Add internal notes for important information that doesn't fit in standard fields.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Appointments Content */}
        <TabsContent value="appointments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Scheduling</CardTitle>
              <CardDescription>
                Learn how to manage patient appointments efficiently
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p>
                  The Appointments module provides a comprehensive scheduling system to manage patient visits. 
                  This system helps optimize your practice's workflow by organizing appointments, managing 
                  provider availability, and reducing scheduling conflicts.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Appointment Management</h3>
                
                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="schedule">
                    <AccordionTrigger>Scheduling an Appointment</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        To schedule a new appointment:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Click the "New Appointment" button in the top right corner of the Appointments page</li>
                        <li>In the scheduling dialog, select or search for a patient</li>
                        <li>Choose the appointment date, time, and duration</li>
                        <li>Select the appointment type (e.g., check-up, follow-up, consultation)</li>
                        <li>Add any relevant notes or special instructions</li>
                        <li>Click "Schedule" to create the appointment</li>
                      </ol>
                      <p className="mt-3">
                        The system will check for any scheduling conflicts before confirming the appointment. If the 
                        selected time is unavailable, alternative time slots will be suggested.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="calendar">
                    <AccordionTrigger>Using the Calendar View</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        The calendar provides several view options:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Day View:</strong> Shows all appointments for a specific day in a timeline format</li>
                        <li><strong>Week View:</strong> Displays appointments across the entire week, with days as columns</li>
                        <li><strong>Month View:</strong> Shows a traditional calendar layout with appointment counts per day</li>
                      </ul>
                      <p className="mt-3">
                        Navigate between dates using the arrows or date picker at the top of the calendar. Appointments 
                        are color-coded by type for easier identification.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="manage">
                    <AccordionTrigger>Managing Existing Appointments</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        For existing appointments, you can:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>View Details:</strong> Click on any appointment to see full information</li>
                        <li><strong>Edit:</strong> Modify date, time, duration, or other details</li>
                        <li><strong>Reschedule:</strong> Move the appointment to a different time slot</li>
                        <li><strong>Cancel:</strong> Remove the appointment from the schedule</li>
                        <li><strong>Check In:</strong> Mark the patient as arrived for their appointment</li>
                      </ul>
                      <p className="mt-3">
                        When rescheduling or canceling an appointment, you have the option to send an automatic 
                        notification to the patient via email or text message.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="recurring">
                    <AccordionTrigger>Setting Up Recurring Appointments</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        For patients who need regular visits, you can set up recurring appointments:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Create a new appointment as usual</li>
                        <li>Enable the "Recurring" option</li>
                        <li>Set the recurrence pattern:</li>
                        <ul className="list-disc pl-6 mt-2 mb-2">
                          <li>Frequency: Weekly, bi-weekly, monthly, etc.</li>
                          <li>Day and time: Same as initial appointment or custom schedule</li>
                          <li>End date or number of occurrences</li>
                        </ul>
                        <li>Click "Schedule" to create all recurring appointments</li>
                      </ol>
                      <p className="mt-3">
                        The system will check for availability across all recurring dates before confirming. Individual 
                        appointments within the series can be modified or canceled without affecting others.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Advanced Scheduling Features</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Provider Availability</h4>
                    <p className="text-sm">
                      Set up provider schedules and availability to ensure appointments are only booked during working hours. 
                      Define regular hours, breaks, vacations, and special exceptions to maintain an accurate calendar.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Waiting List</h4>
                    <p className="text-sm">
                      When preferred appointment times are unavailable, add patients to a waiting list. If a cancellation 
                      occurs, the system can automatically notify waiting list patients of the newly available slot.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Appointment Reminders</h4>
                    <p className="text-sm">
                      The system sends automatic reminders to patients before their scheduled appointments. Default reminders 
                      are sent 24 hours in advance, but this timing can be customized in the settings.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Scheduling Best Practices</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Buffer Time</h4>
                    <p className="text-sm">
                      Include short buffer periods between appointments to account for sessions that run long or 
                      documentation time. This helps prevent cascading delays throughout the day.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Appointment Types</h4>
                    <p className="text-sm">
                      Customize appointment types with appropriate durations for different visit purposes. This ensures 
                      enough time is allocated for each patient's needs without creating unnecessary gaps in the schedule.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Double-Booking Strategy</h4>
                    <p className="text-sm">
                      For practices that utilize double-booking, the system can be configured to allow controlled overlap 
                      based on appointment type, patient status, or provider preference.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Prescriptions Content */}
        <TabsContent value="prescriptions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prescription Management</CardTitle>
              <CardDescription>
                Guide to creating and managing medication prescriptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p>
                  The Prescriptions module allows healthcare providers to create, track, and manage medication 
                  prescriptions for patients. With a comprehensive medication database and customizable templates, 
                  this system streamlines the prescription process while maintaining accuracy and safety.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Creating and Managing Prescriptions</h3>
                
                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="new-prescription">
                    <AccordionTrigger>Creating a New Prescription</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        To create a new prescription:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Click the "New Prescription" button in the top right corner of the Prescriptions page</li>
                        <li>Select the patient for whom you're prescribing</li>
                        <li>Choose the medication from the database (search by generic or brand name)</li>
                        <li>Select the appropriate strength/formulation</li>
                        <li>Specify dosage instructions:</li>
                        <ul className="list-disc pl-6 mt-2 mb-2">
                          <li>Amount per dose (e.g., 1 tablet, 2 capsules, 5ml)</li>
                          <li>Frequency (e.g., once daily, twice daily, every 8 hours)</li>
                          <li>Route of administration (oral, topical, etc.)</li>
                          <li>Special instructions (e.g., take with food, take before bedtime)</li>
                        </ul>
                        <li>Enter the prescription quantity and number of refills</li>
                        <li>Add any additional notes</li>
                        <li>Click "Create Prescription" to generate the prescription</li>
                      </ol>
                      <p className="mt-3">
                        The system performs automatic checks for drug interactions, allergies, and contraindications 
                        based on the patient's medical history and current medications.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="search-prescriptions">
                    <AccordionTrigger>Searching and Filtering Prescriptions</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        To locate specific prescriptions:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Search Bar:</strong> Look up prescriptions by patient name or medication</li>
                        <li><strong>Filters:</strong> Use the tabs to view all prescriptions or filter by status (active/expired)</li>
                        <li><strong>Advanced Filters:</strong> Click the filter icon to access additional filtering options such as:
                          <ul className="list-disc pl-6 mt-2">
                            <li>Date range (prescribed between specific dates)</li>
                            <li>Medication category</li>
                            <li>Prescriber</li>
                            <li>Renewals due soon</li>
                          </ul>
                        </li>
                      </ul>
                      <p className="mt-3">
                        Search results can be sorted by different columns including patient name, medication, or prescription date.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="manage-prescriptions">
                    <AccordionTrigger>Managing Existing Prescriptions</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        For existing prescriptions, you can:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>View Details:</strong> Click on any prescription to see complete information</li>
                        <li><strong>Edit:</strong> Modify dosage, quantity, or instructions for active prescriptions</li>
                        <li><strong>Renew:</strong> Create a new prescription based on an existing one</li>
                        <li><strong>Print:</strong> Generate a paper copy of the prescription</li>
                        <li><strong>Cancel:</strong> Discontinue an active prescription with documentation</li>
                      </ul>
                      <p className="mt-3">
                        All actions are recorded in the prescription history, creating an audit trail of changes 
                        and maintaining a complete medication record for each patient.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="prescription-renewals">
                    <AccordionTrigger>Handling Prescription Renewals</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-3">
                        The system helps manage prescription renewals:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Renewal Alerts:</strong> The dashboard shows prescriptions needing renewal soon</li>
                        <li><strong>Batch Renewals:</strong> Process multiple prescription renewals simultaneously</li>
                        <li><strong>Patient Requests:</strong> Track and respond to patient-initiated renewal requests</li>
                        <li><strong>Modification During Renewal:</strong> Adjust dosages or instructions when renewing</li>
                      </ul>
                      <p className="mt-3">
                        When renewing a prescription, the system pre-fills information from the original prescription 
                        while performing new safety checks with the patient's current information.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Prescription Safety Features</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Drug Interaction Checking</h4>
                    <p className="text-sm">
                      The system automatically checks for potential interactions between the prescribed medication and 
                      the patient's current medications. Warnings are displayed with severity levels and detailed information.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Allergy and Contraindication Alerts</h4>
                    <p className="text-sm">
                      If a patient has a recorded allergy or condition that contraindicates a medication, the system 
                      will display a warning. These alerts can be acknowledged with clinical justification if the prescription 
                      should proceed despite the warning.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Dose Range Checking</h4>
                    <p className="text-sm">
                      The system validates that prescribed dosages fall within recommended ranges based on patient factors 
                      such as age, weight, and kidney function. Alerts are generated for doses outside standard parameters.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Prescription Best Practices</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Clear Instructions</h4>
                    <p className="text-sm">
                      Use the predefined instruction templates to ensure consistency and clarity. Avoid medical abbreviations 
                      that could be misinterpreted. Include specific timing instructions when relevant (e.g., morning, evening).
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Medication Reconciliation</h4>
                    <p className="text-sm">
                      Regularly review the patient's complete medication list, including over-the-counter drugs and supplements. 
                      Use the medication reconciliation tool during appointments to verify what the patient is actually taking.
                    </p>
                  </div>
                  
                  <div className="bg-accent p-4 rounded-lg
