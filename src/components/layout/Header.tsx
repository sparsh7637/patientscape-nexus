
import { useState, useEffect } from 'react';
import { Bell, Search, Calendar, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={cn(
      "sticky top-0 z-30 transition-all duration-200 backdrop-blur-sm",
      isScrolled ? "bg-background/80 shadow-subtle" : "bg-transparent"
    )}>
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left side - Search */}
        <div className="flex items-center w-full max-w-sm lg:max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search patients, appointments..."
              className="pl-9 bg-transparent border-muted"
            />
          </div>
        </div>
        
        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          
          {/* Calendar */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Calendar className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 border-b">
                <h4 className="font-medium">Upcoming Appointments</h4>
              </div>
              <div className="py-2">
                <div className="px-4 py-2 hover:bg-accent transition-colors">
                  <p className="font-medium">Dr. Sarah's Availability</p>
                  <p className="text-sm text-muted-foreground">Today, 2:00 PM - 4:00 PM</p>
                </div>
                <div className="px-4 py-2 hover:bg-accent transition-colors">
                  <p className="font-medium">Patient: John Doe</p>
                  <p className="text-sm text-muted-foreground">Tomorrow, 9:30 AM</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-destructive rounded-full" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 border-b">
                <h4 className="font-medium">Notifications</h4>
              </div>
              <div className="py-2">
                <div className="px-4 py-2 hover:bg-accent transition-colors">
                  <p className="font-medium">New patient registered</p>
                  <p className="text-sm text-muted-foreground">5 minutes ago</p>
                </div>
                <div className="px-4 py-2 hover:bg-accent transition-colors">
                  <p className="font-medium">Prescription renewal request</p>
                  <p className="text-sm text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="p-4 border-t">
                <Button variant="outline" className="w-full">See all notifications</Button>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="p-2 border-b">
                <p className="font-medium">Dr. Sarah Reynolds</p>
                <p className="text-sm text-muted-foreground">Cardiologist</p>
              </div>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Account settings</DropdownMenuItem>
              <DropdownMenuItem>Help center</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
