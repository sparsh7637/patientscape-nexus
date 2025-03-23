
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  User, 
  Building, 
  Bell, 
  Shield, 
  Palette, 
  Languages, 
  Mail, 
  Users, 
  BadgeCheck, 
  Key, 
  Clock, 
  Lock 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';

export default function Settings() {
  const [savingProfile, setSavingProfile] = useState(false);
  
  const handleSaveProfile = () => {
    setSavingProfile(true);
    
    // Simulate saving
    setTimeout(() => {
      setSavingProfile(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully."
      });
    }, 1500);
  };
  
  return (
    <PageLayout>
      <PageTitle 
        title="Settings" 
        subtitle="Manage your account settings and preferences."
      />
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-2 sm:grid-cols-5 w-full">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="practice" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>Practice</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Appearance</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Profile Settings */}
        <TabsContent value="profile">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and profile information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">Profile Picture</h4>
                      <p className="text-sm text-muted-foreground">
                        This will be displayed on your profile and throughout the application.
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Change Photo
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Sarah" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Reynolds" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="sarah.reynolds@medisync.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input id="title" defaultValue="Cardiologist" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber">License Number</Label>
                      <Input id="licenseNumber" defaultValue="MD123456" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <textarea 
                      id="bio" 
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your professional bio..."
                      defaultValue="Board-certified cardiologist with over 15 years of experience specializing in preventive cardiology and heart disease management."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSaveProfile} disabled={savingProfile}>
                      {savingProfile ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>
                  Customize your account preferences and system settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="english">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="chinese">Chinese (Simplified)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Time Zone</Label>
                    <Select defaultValue="eastern">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eastern">Eastern Time (ET)</SelectItem>
                        <SelectItem value="central">Central Time (CT)</SelectItem>
                        <SelectItem value="mountain">Mountain Time (MT)</SelectItem>
                        <SelectItem value="pacific">Pacific Time (PT)</SelectItem>
                        <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select defaultValue="mdy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <h4 className="text-sm font-medium">Additional Settings</h4>
                    
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="autoDarkMode" className="flex flex-col space-y-1 cursor-pointer">
                        <span>Automatic Dark Mode</span>
                        <span className="text-sm font-normal text-muted-foreground">
                          Automatically switch between light and dark mode based on system settings
                        </span>
                      </Label>
                      <Switch id="autoDarkMode" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="compactView" className="flex flex-col space-y-1 cursor-pointer">
                        <span>Compact View</span>
                        <span className="text-sm font-normal text-muted-foreground">
                          Reduce padding and spacing throughout the interface
                        </span>
                      </Label>
                      <Switch id="compactView" />
                    </div>
                    
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="autoLogout" className="flex flex-col space-y-1 cursor-pointer">
                        <span>Automatic Logout</span>
                        <span className="text-sm font-normal text-muted-foreground">
                          Automatically log out after 30 minutes of inactivity
                        </span>
                      </Label>
                      <Switch id="autoLogout" defaultChecked />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Preferences</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Practice Settings */}
        <TabsContent value="practice">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Practice Information</CardTitle>
                <CardDescription>
                  Update your practice details and business information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="practiceName">Practice Name</Label>
                    <Input id="practiceName" defaultValue="MediSync Cardiology" />
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="practicePhone">Phone Number</Label>
                      <Input id="practicePhone" defaultValue="(555) 987-6543" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practiceEmail">Email</Label>
                      <Input id="practiceEmail" type="email" defaultValue="info@medisynccardiology.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practiceFax">Fax Number</Label>
                      <Input id="practiceFax" defaultValue="(555) 987-6544" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practiceWebsite">Website</Label>
                      <Input id="practiceWebsite" type="url" defaultValue="https://www.medisynccardiology.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="practiceAddress">Address</Label>
                    <Input id="practiceAddress" defaultValue="123 Medical Center Blvd" />
                    <div className="grid gap-4 md:grid-cols-3 mt-2">
                      <Input placeholder="City" defaultValue="Chicago" />
                      <Input placeholder="State" defaultValue="IL" />
                      <Input placeholder="ZIP Code" defaultValue="60601" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="taxId">Tax ID</Label>
                    <Input id="taxId" defaultValue="12-3456789" />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Practice Information</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>
                  Set your practice's regular operating hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="w-32 font-medium">{day}</div>
                        <div className="flex items-center gap-2 flex-1">
                          <Select defaultValue="09:00">
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 12 }, (_, i) => i + 8).map(hour => (
                                <SelectItem key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                                  {hour === 12 ? '12:00 PM' : hour < 12 ? `${hour}:00 AM` : `${hour - 12}:00 PM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <span>to</span>
                          <Select defaultValue="17:00">
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 8 }, (_, i) => i + 12).map(hour => (
                                <SelectItem key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                                  {hour === 12 ? '12:00 PM' : `${hour - 12}:00 PM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    ))}
                    
                    {['Saturday', 'Sunday'].map((day, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="w-32 font-medium">{day}</div>
                        <div className="flex items-center gap-2 flex-1">
                          <div className="text-muted-foreground">Closed</div>
                          <Button variant="outline" size="sm" className="ml-auto">
                            Set Hours
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Business Hours</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Customize how and when you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Email Notifications</h4>
                  
                  <div className="flex items-center justify-between space-x-2 border-b pb-4">
                    <Label htmlFor="emailAppointments" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Appointment Reminders</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Receive email notifications about upcoming appointments
                      </span>
                    </Label>
                    <Switch id="emailAppointments" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2 border-b pb-4">
                    <Label htmlFor="emailPatients" className="flex flex-col space-y-1 cursor-pointer">
                      <span>New Patient Registrations</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Be notified when a new patient is registered in the system
                      </span>
                    </Label>
                    <Switch id="emailPatients" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2 border-b pb-4">
                    <Label htmlFor="emailPrescriptions" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Prescription Renewals</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Receive notifications for prescription renewal requests
                      </span>
                    </Label>
                    <Switch id="emailPrescriptions" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="emailReports" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Weekly Reports</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Receive a weekly summary of practice activity
                      </span>
                    </Label>
                    <Switch id="emailReports" />
                  </div>
                </div>
                
                <div className="space-y-4 pt-6">
                  <h4 className="text-sm font-medium">In-App Notifications</h4>
                  
                  <div className="flex items-center justify-between space-x-2 border-b pb-4">
                    <Label htmlFor="inAppAppointments" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Appointment Alerts</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Display notifications for upcoming and changed appointments
                      </span>
                    </Label>
                    <Switch id="inAppAppointments" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2 border-b pb-4">
                    <Label htmlFor="inAppMessages" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Message Notifications</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Show alerts for new messages and updates
                      </span>
                    </Label>
                    <Switch id="inAppMessages" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="inAppTasks" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Task Reminders</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Receive reminders for pending tasks and follow-ups
                      </span>
                    </Label>
                    <Switch id="inAppTasks" defaultChecked />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Notification Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Security Settings */}
        <TabsContent value="security">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>
                  Manage your password and security settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Change Password</h4>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                    
                    <div className="bg-accent p-3 rounded-md mt-4">
                      <p className="text-xs text-muted-foreground">
                        Password requirements:
                        <ul className="list-disc pl-5 mt-1 space-y-0.5">
                          <li>At least 12 characters long</li>
                          <li>Include at least one uppercase letter</li>
                          <li>Include at least one number</li>
                          <li>Include at least one special character</li>
                        </ul>
                      </p>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button>
                        <Key className="h-4 w-4 mr-2" />
                        Change Password
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t space-y-4">
                    <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p>Authenticator App</p>
                        <p className="text-sm text-muted-foreground">
                          Use an authenticator app to generate one-time codes.
                        </p>
                      </div>
                      <Button variant={true ? "default" : "outline"}>
                        {true ? "Enabled" : "Enable"}
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p>Text Message (SMS)</p>
                        <p className="text-sm text-muted-foreground">
                          Receive verification codes via SMS.
                        </p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t space-y-4">
                    <h4 className="text-sm font-medium">Session Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Manage your active sessions and devices.
                    </p>
                    
                    <div className="border rounded-md divide-y">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground">
                            MacBook Pro • Chicago, IL • Last active now
                          </p>
                        </div>
                        <Badge>Current</Badge>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">iPhone 13</p>
                          <p className="text-sm text-muted-foreground">
                            iOS 16 • Chicago, IL • Last active 2 hours ago
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Lock className="h-4 w-4 mr-2" />
                          Logout
                        </Button>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Office Desktop</p>
                          <p className="text-sm text-muted-foreground">
                            Windows 11 • Chicago, IL • Last active yesterday
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Lock className="h-4 w-4 mr-2" />
                          Logout
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="destructive">
                        <Lock className="h-4 w-4 mr-2" />
                        Logout of All Devices
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Account Activity</CardTitle>
                <CardDescription>
                  Review your recent account activity and login history.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-md divide-y max-h-[300px] overflow-y-auto">
                    {[
                      { action: "Login", device: "MacBook Pro", location: "Chicago, IL", time: "Just now" },
                      { action: "Password Changed", device: "MacBook Pro", location: "Chicago, IL", time: "2 days ago" },
                      { action: "Login", device: "iPhone 13", location: "Chicago, IL", time: "2 days ago" },
                      { action: "Login", device: "Office Desktop", location: "Chicago, IL", time: "3 days ago" },
                      { action: "Profile Updated", device: "Office Desktop", location: "Chicago, IL", time: "1 week ago" },
                      { action: "Login", device: "MacBook Pro", location: "New York, NY", time: "2 weeks ago" },
                    ].map((activity, index) => (
                      <div key={index} className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.device} • {activity.location}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline">
                      <Clock className="h-4 w-4 mr-2" />
                      View Full Activity Log
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Display Settings</CardTitle>
              <CardDescription>
                Customize the appearance and layout of your interface.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Theme</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-md p-4 cursor-pointer bg-background flex flex-col items-center justify-center h-32 relative">
                      <div className="w-full h-3 bg-primary mb-2"></div>
                      <div className="w-full h-20 bg-muted"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-primary/10 rounded-md">
                        <Button variant="outline" size="sm">Light</Button>
                      </div>
                    </div>
                    <div className="border rounded-md p-4 cursor-pointer bg-slate-900 flex flex-col items-center justify-center h-32 relative">
                      <div className="w-full h-3 bg-blue-500 mb-2"></div>
                      <div className="w-full h-20 bg-slate-800"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-blue-500/10 rounded-md">
                        <Button variant="outline" size="sm" className="text-white border-white/20">Dark</Button>
                      </div>
                    </div>
                    <div className="border rounded-md p-4 cursor-pointer bg-background flex flex-col items-center justify-center h-32 relative">
                      <div className="w-full h-3 bg-gray-500 mb-2"></div>
                      <div className="w-full h-20 bg-muted"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-gray-500/10 rounded-md">
                        <Button variant="outline" size="sm">System</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h4 className="text-sm font-medium">Color Scheme</h4>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                    {[
                      { name: "Default", color: "#000000" },
                      { name: "Blue", color: "#0284c7" },
                      { name: "Green", color: "#16a34a" },
                      { name: "Purple", color: "#9333ea" },
                      { name: "Rose", color: "#e11d48" },
                      { name: "Orange", color: "#ea580c" },
                      { name: "Slate", color: "#475569" },
                    ].map((scheme, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col items-center"
                      >
                        <button 
                          className="w-12 h-12 rounded-full mb-2 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          style={{ backgroundColor: scheme.color }}
                          aria-label={`${scheme.name} color scheme`}
                        />
                        <span className="text-xs text-muted-foreground">{scheme.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h4 className="text-sm font-medium">Layout Options</h4>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="sidebarCollapsed" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Collapsed Sidebar</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Default sidebar state (expanded or collapsed)
                      </span>
                    </Label>
                    <Switch id="sidebarCollapsed" />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="denseMode" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Dense Mode</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Reduces spacing and padding throughout the interface
                      </span>
                    </Label>
                    <Switch id="denseMode" />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="animations" className="flex flex-col space-y-1 cursor-pointer">
                      <span>Interface Animations</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        Enable or disable interface transition animations
                      </span>
                    </Label>
                    <Switch id="animations" defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h4 className="text-sm font-medium">Font Size</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">A</span>
                      <span className="text-lg">A</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      defaultValue="3"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Display Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}
